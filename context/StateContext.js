import React, { createContext,useContext,useState,useEffect } from "react";
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children})=> {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [totalQuantities, setTotalQuantities] = useState(0);

    const [qty, setQty] = useState(1) 
    
    let foundBooks;
    let index;
    const onAdd  = ( book, quantity) => {
        const checkBookInCart = cartItems.find((item) => item._id === book._id);
        setTotalPrice((prev) => prev + book.price * quantity);
        setTotalQuantities((prev) => prev + quantity);
        if(checkBookInCart){
            const updateCartItems = cartItems.map((cartBook) => {
                if(cartBook._id === book._id) return {
                    ...cartBook,
                    quantity: cartBook.quantity + quantity
                }
            })
            setCartItems(updateCartItems);
            
        }else{
            book.quantity = quantity
            setCartItems([...cartItems, {...book}]);
        }
        toast.success(`${qty} ${book.name} added to the cart.`)
    }

    const toggleCartItemQuanity = (id,value) =>{
        foundBooks = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((book) => book._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)
        if(value === 'inc'){
            
            setCartItems([...newCartItems,{...foundBooks,quantity: foundBooks.quantity + 1}]);
            setTotalPrice((prev) => prev + foundBooks.price)
            setTotalQuantities(prev => prev + 1)

        }else if(value === 'dev'){
            if(foundBooks.quantity > 1){
                setCartItems([...newCartItems,{...foundBooks,quantity: foundBooks.quantity - 1}]);
                setTotalPrice((prev) => prev - foundBooks.price)
                setTotalQuantities(prev => prev - 1)

            }
        }
    }

    const onRemove = (book) => {
        foundBooks = cartItems.find((item) => item._id === book._id)
        const newCartItems = cartItems.filter((item) => item._id !== book._id)

        setTotalPrice((prev) => prev - foundBooks.price * foundBooks.quantity);
        setTotalQuantities(prev => prev - foundBooks.quantity);
        setCartItems(newCartItems);
    }
    const incQty = () => {
        setQty((prev) => prev + 1)
    }

    const decQty = () => {
        setQty((prev) => {
            if(prev - 1< 1) return 1;
            return prev -1;
        })
    }
    return (
        <Context.Provider 
        value = {{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuanity,
            onRemove
        }}
        >
            {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);