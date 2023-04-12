import { useState } from 'react'
import './estilos/styles.css'

export function Quadrado ({valor, onCliqueQuadrado} ) {

    

    return (
        <button onClick={onCliqueQuadrado} className="quadrado">{valor}</button>
    )
}