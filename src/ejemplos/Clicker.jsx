import { useState } from "react"


export const Clicker = () => {
    console.log("Clicker actualizado")
    const [counter, setCounter] = useState(10)
    const [saludo, setSaludo] = useState("Hola")

    const sumar = () => {
        setCounter( counter + 1 )
    }

    const agregarSaludo = () => {
        setSaludo(saludo + " hola")
    }

    return (
        <div>
            <button onClick={sumar}>Click me</button>
            <p>Contador: {counter}</p>

            <div onClick={agregarSaludo}>
                {saludo}
            </div>
        </div>
    )
}