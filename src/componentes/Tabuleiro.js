import { useState } from 'react'
import { Quadrado } from './Quadrado'
import './estilos/styles.css'

export function Tabuleiro () {

    // Variável de estado onde temos uma matriz de 9 nulos que correspondem aos 9 quadrados do tabuleiro
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))

    function handleClick(i){
        const proximoQuadrado = quadrados.slice()
        proximoQuadrado[i] = 'X'
        setQuadrados(proximoQuadrado)
    }

    return (
        <>
            <div className='linha-do-tabuleiro'>
                <Quadrado valor={quadrados[0]} onCliqueQuadrado={()=> handleClick(0)} />
                <Quadrado valor={quadrados[1]} onCliqueQuadrado={()=> handleClick(1)} />
                <Quadrado valor={quadrados[2]} onCliqueQuadrado={()=> handleClick(2)} />
            </div>
            <div className='linha-do-tabuleiro'>
                <Quadrado valor={quadrados[3]} onCliqueQuadrado={()=> handleClick(3)} />
                <Quadrado valor={quadrados[4]} onCliqueQuadrado={()=> handleClick(4)} />
                <Quadrado valor={quadrados[5]} onCliqueQuadrado={()=> handleClick(5)} />
            </div>
            <div className='linha-do-tabuleiro'>
                <Quadrado valor={quadrados[6]} onCliqueQuadrado={()=> handleClick(6)} />
                <Quadrado valor={quadrados[7]} onCliqueQuadrado={()=> handleClick(7)} />
                <Quadrado valor={quadrados[8]} onCliqueQuadrado={()=> handleClick(8)} />
            </div>
            
            
        </>
    )
}