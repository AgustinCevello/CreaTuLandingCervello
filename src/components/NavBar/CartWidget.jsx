import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 

function CartWidget() {
  const { countCartItems } = useContext(CartContext)
  
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