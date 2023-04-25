import { useState, useEffect } from "react"


const Pokemon = ({url}) => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="col-3 m-2">
            {
                pokemon &&
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }
        </div>
    )
}

export default Pokemon