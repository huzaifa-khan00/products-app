import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({children}){
    let [cartItems, setCartItems] = useState([]);

    return(
        <CartContext.Provider value={{cartItems, setCartItems}}>
        {children}
        </CartContext.Provider>
    )
}