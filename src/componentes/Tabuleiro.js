import { Quadrado } from './Quadrado'
import './estilos/styles.css'

export function Tabuleiro () {
    return (
        <>
            <div className='linha-do-tabuleiro'>
                <Quadrado valor={1} />
                <Quadrado valor={2} />
                <Quadrado />
            </div>
            <div className='linha-do-tabuleiro'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className='linha-do-tabuleiro'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            
            
        </>
    )
}