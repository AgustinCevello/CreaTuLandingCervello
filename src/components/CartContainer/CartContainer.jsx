import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom" 

function CartContainer(){
    const {cartItems, removeItem, countTotalPrice, clearCart, removeUnitFromItem} = useContext(cartContext)
    
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

            <Link to="/checkout">
                <button>Proceder a pagar</button>
            </Link>
        </section>
    )
}

export default CartContainer