from fastapi import FastAPI
import httpx
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/colours")
async def get_colours():
    async with httpx.AsyncClient() as client:
        response = []
        for i in range(1, 11):
            response.append(await client.get(f"https://pokeapi.co/api/v2/pokemon-color/{i}"))
        
        output = []
        for data in response:
            output.append({"colour": data.json()["name"],"count": len(data.json()["pokemon_species"])})

        return output

@app.get("/api/types")
async def get_types():
    async with httpx.AsyncClient() as client:
        response = []
        for i in range(1, 20):
            response.append(await client.get(f"https://pokeapi.co/api/v2/type/{i}"))
        
        output = []
        for data in response:
            output.append({"type": data.json()["name"],"count": len(data.json()["moves"])})

        return output
    

@app.get("/api/compare")
async def get_compare():
    async with httpx.AsyncClient() as client:
        response = []
        for i in range(1, 3):
            response.append(await client.get(f"https://pokeapi.co/api/v2/pokemon/{i}"))
        
        output = []
        for data in response:
            stats = []
            for stat in data.json()['stats']:
                stats.append(stat['base_stat'])
            output.append({"name": data.json()["name"], "stats": stats})

        print(output)
        return output
    
@app.get("/api/height_weight")
async def get_height_weight():
    async with httpx.AsyncClient() as client:
        response = []
        for i in range(1, 100):
            response.append(await client.get(f"https://pokeapi.co/api/v2/pokemon/{i}"))
            if i % 100 == 0:
                print(i)
        output = []
        for data in response:

            output.append({"name": data.json()["name"], "height": data.json()["height"], "weight": data.json()["weight"]})

        print(output)
        return output