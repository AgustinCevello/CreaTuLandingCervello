import { useContext } from "react";
import { cartContext } from "../../context/CartContext"; 

function CartWidget() {
  const {countCartItems} = useContext(cartContext)
  
  return <span style={{ color: "black",marginRight: '40px' }}>🛒(1) {countCartItems()}</span>
}

export default CartWidget;