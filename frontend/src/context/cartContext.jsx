import React, {createContext, useState, useEffect} from 'react';
import { addItem, getItem, updateItem, deleteItem } from '../Pages/Cart/cartService';

const CartContext = createContext();

export const CartProvider =({children}) => {
    const [cart, setCart] = useState([])

    useEffect(()=> {
        const fetchCart = async ()=> {
            try{
                const items = await getItem()
                setCart(items)
            }
            catch(error) {
                    console.error('failed fetching items',error)
            }
        };
        fetchCart();
    },[])

    const addToCart = async (item) => {
        try {
            const newItem = await addItem(item); // Assume this returns the new item object
            setCart((prevCart) => [...prevCart, newItem]); // Correct way to update state
        } catch (error) {
            console.error('failed to add item', error);
        }
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => {
            const quantity = Number(item.quantity);
            return total + (isNaN(quantity) ? 0 : quantity);
        }, 0);
    };

    const updateToCart = async(id, quantity) => {
        try {
            const updateNewItem = await updateItem(id, quantity);
            const updatedCart = cart.map((item) =>
            item._id === updateNewItem._id ? updateNewItem : item);
            setCart(updatedCart);
        } catch (error) {
            console.error('failed to update item', error);
        }
    }

    const removeFromCart = async (id) =>{
        try {
            await deleteItem(id);
            setCart(cart.filter((item) => item._id !== id));
        } catch (error) {
            console.error('failed deleteing item', error)
        }
    }

    return(
        <CartContext.Provider value={{cart, addToCart, updateToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;


