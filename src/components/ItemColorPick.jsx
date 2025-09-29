import { useState } from "react";
import { useEffect } from 'react';
function ItemColorPick(){
    
    const [color, setColor] = useState("#6342a8ff");
    
    console.log("Renderizando componente <ItemColorPick>");
    // eslint-disable-next-line no-undef
    useEffect(() => {
        console.warn("tarea compleja/conexiones a servicios/fetch de apis")
        //const botonPrueba = document.getElementById("boton-prueba");
        //console.log(botonPrueba)
    }, [] )


    return(
        <div>
            <div>
                <button onClick={() => setColor("#3619dfff")}>Azul</button>
                <button onClick={() => setColor("#e21d1dff")}>Rojo</button>
                <button onClick={() => setColor("#3cd10fff")}>Verde</button> 
                <button onClick={() => setColor("#000000ff")}>Negro</button>
            </div>
            <p>Color seleccionado:</p>
                <span style={{ backgroundColor: color, height:"10px", width:"10px", display: "inline-block"}}></span>
        </div>
    );
}

export default ItemColorPick;
