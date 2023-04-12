import './estilos/styles.css'

export function Quadrado ( { valor }) {

    function handleClique() {
        console.log('Clicado')
    }

    return (
        <button onClick={handleClique} className="quadrado">{valor}</button>
    )
}