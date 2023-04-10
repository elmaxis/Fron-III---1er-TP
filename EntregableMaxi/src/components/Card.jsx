import React from 'react'
import '../styles/StyleCard.css'

const Card = (props) => {
    return (
    
    <main className="card">    
        <h1> Hola {props.name}! </h1>
        <span> La Acción que vos elegiste es: </span>
        <p className='accion'> {props.elegida} </p>        
        </main>
    )
}

export default Card
