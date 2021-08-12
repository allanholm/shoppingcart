import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {

    const [amountInBasket, setAmountInBasket] = useState([]);

    return ( 
        <CartContextProvider value={{amountInBasket, setAmountInBasket}}>
            {props.children}
        </CartContextProvider>
    );
}

export default CartContextProvider;