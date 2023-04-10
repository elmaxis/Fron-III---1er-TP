import React, { useState }  from 'react'
import Card from './Card'
import "../styles/StyleForm.css"


const Form = () => {
    const [nombre, setNombre] = useState("");
    const [accion, setAccion] = useState("");
    const [validar, setValidar] = useState(false);
    const [cartel, setCartel] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nombre);
        console.log(accion);

        let validarTresCaracteres = false;
        let validarSeisCaracteres = false;

        if (nombre.trim().length >= 3) {
            console.log("Es Igual y Mayor a 3 Caracteres");
            validarTresCaracteres = true;
        }
        else{
            console.log("Es Menor a 3 Caracteres");
            validarTresCaracteres = false;
        }

        if (accion.length >= 6) {
            console.log("Es Igual y Mayor a 6 Caracteres");
            validarSeisCaracteres = true;
        }
        else{
            console.log("Es Menor a 6 Caracteres");
            validarSeisCaracteres = false;
        }

        if (validarTresCaracteres === true && validarSeisCaracteres === true) {
            setValidar(false); 
            setCartel (true);          
        }else{
            setValidar(true);
            setCartel (false);
        }
    };
    

    return (
        <main className='container'>

        <div className='imagen'>
        <img src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2021/02/601ac29454621_450.jpg"/>
        </div>

        <form id='formulario' onSubmit={handleSubmit}>
            <input 
                id='ingresa'
                type={"text"} 
                placeholder={`Ingresa tu Nombre: `} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}>
            </input>

            <input 
                id='ingresa'
                type={"text"} 
                placeholder={`Ingresa tu Acción Favorita: `} 
                value={accion} 
                onChange={(e) => setAccion(e.target.value)}>
            </input>

            <div>
            <button form='formulario' btn="submit">Enviar</button>
            </div>
        
        </form>

        { validar && (<p className='mensaje'>Por favor chequea que la información sea correcta</p>) }
        { cartel && (<Card name={nombre} elegida={accion} />) }
        </main>

    )
}

export default Form
