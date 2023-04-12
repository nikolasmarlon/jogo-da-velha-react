import { useState } from 'react'
import './estilos/styles.css'

export function Quadrado ( ) {

    const [valor, setValor] = useState(null)

    function handleClique() {
        setValor('X')
    }

    return (
        <button onClick={handleClique} className="quadrado">{valor}</button>
    )
}