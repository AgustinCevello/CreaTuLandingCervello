import { createContext, useState } from "react";

const CartContext = createContext("default value"); 

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    function addItem(newItem){
        const quantityCount = 1;
        const newCart = structuredClone(cartItems)
        const isInCart = cartItems.some(item => item.id === newItem.id)
        
        if(isInCart){
            const index = cartItems.findIndex(item => item.id === newItem.id)
            newCart[index].quantity += quantityCount
            alert("Sumaste otra unidad al carrito")
        }
        else{
            newItem.quantity = quantityCount
            newCart.push(newItem)
            alert("Agregaste algo al carrito!");
        }
        setCartItems(newCart)
    }

    function countCartItems() {
        let count = 0;
        cartItems.forEach(item => count += item.quantity) 
        return count;
    }

    function countTotalPrice() {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    function removeUnitFromItem(idToRemove) {
        const newCart = structuredClone(cartItems);
        const itemIndex = newCart.findIndex(item => item.id === idToRemove);

        if (itemIndex !== -1) {
            if (newCart[itemIndex].quantity > 1) {
                newCart[itemIndex].quantity -= 1;
                setCartItems(newCart);
            } else {
                removeItem(idToRemove);
            }
        }
    }

    function clearCart() {
        setCartItems([]);
    }

    function removeItem(idToRemove){
        const newCart = cartItems.filter(itemInCart => itemInCart.id !== idToRemove)
        setCartItems(newCart)
    }

    return(
        <CartContext.Provider value={{
            cartItems, 
            addItem, 
            countCartItems, 
            removeItem, 
            countTotalPrice, 
            removeUnitFromItem, 
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }