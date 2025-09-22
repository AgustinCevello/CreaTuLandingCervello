import { useState } from "react";

function ButtonAddToCart(){
    const [statusInCart, setStatusInCart] = useState("No agregaste nada al carrito😥");

    function handleClick(){
        console.log("Agregaste algo al carrito!");
        setStatusInCart("Agregaste algo al carrito!🥰"); 
    }

    return(
        <div>
            <button onClick={handleClick}>+Agregar al carrito+</button>
            <div>
                <small style={{ color: 'black' }}>{statusInCart}</small>
            </div>
        </div>
    );
}

export default ButtonAddToCart;
