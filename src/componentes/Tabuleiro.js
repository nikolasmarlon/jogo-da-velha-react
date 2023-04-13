import { useState } from 'react'
import { Quadrado } from './Quadrado'
import './estilos/styles.css'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'

export function Tabuleiro () {

    const [xEoProximo, setXeOProximo] = useState(true)

    // Variável de estado onde temos uma matriz de 9 nulos que correspondem aos 9 quadrados do tabuleiro
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))

    function handleClick(i){

        // verificar se o quadrado já está preenchido e retorna vazio 
        if(quadrados[i] || verificarVencedor(quadrados)){
            return
        }

        const proximoQuadrado = quadrados.slice()

        if(xEoProximo) {
            proximoQuadrado[i] = "X"
        } else {
            proximoQuadrado[i] = "O"
        }
              
        setQuadrados(proximoQuadrado)
        setXeOProximo(!xEoProximo)
    }


    function verificarVencedor(quadrados) {
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0 ; i < linhas.length; i++){
            const [a, b, c] = linhas[i]
            if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
                return quadrados[a]
            }
        }
        return null
    }

    // verifica qual é o próximo jogador e exibe mensagem caso algum tennha ganhado a partida
    const ganhador = verificarVencedor(quadrados)
    let status
    if(ganhador) {
        status = "Ganhou: " + ganhador       
    } else {
        status = "Próximo jogador: " + (xEoProximo ? "X" : "O")
    }
    

    return (
        <>
            <div className='status'>
                <h2>{status}</h2>
            </div>
            <main>
                <div>
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
                </div>
            </main>
            
            
        </>
    )
}

// Adicionando viagem no tempo