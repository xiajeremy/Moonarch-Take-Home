import { useEffect, useState } from 'react';

function APITable() {
    const [tableData, setTableData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch name counts from the FastAPI endpoint
        fetch('http://localhost:8000/api/all_pokemon')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setTableData(data);
            setLoading(false)
          })
          .catch((err) => console.error('Error fetching data: ', err));
      }, []);

      const sortBy = (name) => {
        setLoading(true)
        fetch(`http://localhost:8000/api/all_pokemon?sort=${name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setTableData(data);
            setLoading(false)
          })
          .catch((err) => console.error('Error fetching data: ', err));
        
      };

    
    
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th onClick={() => sortBy("name")}>Name</th>
                    <th onClick={() => sortBy("height")}>Height</th>
                    <th onClick={() => sortBy("weight")}>Weight</th>
                    <th onClick={() => sortBy("hp")}>HP</th>
                    <th onClick={() => sortBy("attack")}>Attack</th>
                    <th onClick={() => sortBy("defence")}>Defence</th>
                    <th onClick={() => sortBy("special_attack")}>Special Attack</th>
                    <th onClick={() => sortBy("special_defence")}>Special Defence</th>
                    <th onClick={() => sortBy("Speed")}>Speed</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((pokemon, index) => (
                <tr key={index}>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.height}</td>
                    <td>{pokemon.weight}</td>
                    <td>{pokemon.hp}</td>
                    <td>{pokemon.attack}</td>
                    <td>{pokemon.defence}</td>
                    <td>{pokemon.special_attack}</td>
                    <td>{pokemon.special_defence}</td>
                    <td>{pokemon.speed}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default APITable