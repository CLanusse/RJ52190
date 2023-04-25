import { useEffect } from "react"
import { useState } from "react"



const PokeApi = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    console.log(id)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-3">Siguiente</button>

        </div>
    )
}

export default PokeApi

//     protocolo |     dominio      | endpoints
// url:   https://www.coderhouse.com/alumnos
// verb: GET | POST | PATCH | DELETE

// GET: https://www.coderouse.com/alumnos
// comision: number => id de curso, limit: number => limite de resultados

// query params
// url = https://www.coderouse.com/alumnos?comision=45866&limit=10

// URL params
// GET: https://www.coderhouse.com/alumnos/{id}
// url = https://www.coderhouse.com/alumnos/14200

// POST: https://www.coderhouse.com/alumnos
// obj = {id, nombre, edad, curso} => body

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'AppToken': 'asñlfkj12k-124-lkjf-asf12'
//     },
//     body: {
//         // info a enviar en JSON
//     }
// })

