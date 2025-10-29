import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom" 
import { createOrder } from "../../data/firebase"
import FormCheckout from "./FormCheckout"

function CartContainer(){
    const [orderCreatedId, setOrderCreated] = useState(false);
    const {cartItems, removeItem, countTotalPrice, clearCart, removeUnitFromItem} = useContext(CartContext)
    
    async function handleCheckout(){ 
        const buyer = {name:"lucy", email:"lu@gmail.com", phone:"123456789"}
        const total = countTotalPrice()
    
        const newOrderConfirmed = await createOrder({cartItems, total, buyer, date: new Date()})
        alert(`Compra realizada con éxito tu id es: ${newOrderConfirmed}`)
        console.log(newOrderConfirmed)
        setOrderCreated(newOrderConfirmed)
        clearCart()
    }

    if(orderCreatedId){
        return(
            <div>
                <h2>Gracias por tu compra!</h2>
                <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
                <Link to="/">
                    <button>Volver al inicio</button>
                </Link>
            </div>
        )
    }

    if (cartItems.length === 0){
        return <h2>El carrito está vacío</h2>
    }
    
    return(
        <section>
            <div>
                <h1>Carrito de compras</h1>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {
                        cartItems.map(itemInCart=>
                        <div key={itemInCart.id}>
                            <h4>{itemInCart.title}</h4>
                            <p>Precio unitario: ${itemInCart.price}</p>
                            <img width="80" src={itemInCart.img} alt={itemInCart.title}></img>
                            <p>Cantidad: {itemInCart.quantity}</p>
                            <strong>
                                <p>Precio total: <b>${itemInCart.price * itemInCart.quantity}</b></p>
                            </strong>
                            
                            {itemInCart.quantity > 0 && 
                                <button onClick={() => removeUnitFromItem(itemInCart.id)}>
                                    Restar 1 unidad ➖
                                </button>
                            }
                            
                            <button onClick={() => removeItem(itemInCart.id)}>Eliminar producto completo 🗑</button>
                        </div>)
                    }
                </div>
                <hr/>
                <h4>Total a pagar: ${countTotalPrice()}</h4>
            </div>

            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={handleCheckout}>Confirmar compra</button>
            
            <FormCheckout handleCheckout={handleCheckout}/>

        </section>
    )
}

export default CartContainer