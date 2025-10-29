import { useContext } from "react";
import { cartContext } from "../../context/CartContext"; 

function CartWidget() {
  const { countCartItems } = useContext(cartContext)
  
  return (
    <span style={{ color: "black",marginRight: '40px' }}>
      <img 
        src="/imgs/carrito.png" 
        alt="Carrito de Compras" 
        style={{ width: '17px', height: '17px' }}
      />
      {countCartItems()}
    </span>
  );
}

export default CartWidget;