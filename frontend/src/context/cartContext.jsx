import React, {createContext, useState, useEffect} from 'react';
import { addItem, getItem, updateItem, deleteItem, clearItem } from '../Pages/Cart/cartService';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const items = await getItem();
                setCart(items);
            } catch (error) {
                console.error('Failed fetching items', error);
            }
        };
        fetchCart();
    }, [forceUpdate]);

    const addToCart = async (item) => {
        try {
            const newItem = await addItem(item);
            setCart((prevCart) => [...prevCart, newItem]);
        } catch (error) {
            console.error('Failed to add item', error);
        }
    };


    const updateToCart = async (id, quantity, size) => {
        
    
        try {
            const updateNewItem = await updateItem(id, quantity, size);
        
            setCart((prevCart) => {
                const updatedCart =   prevCart.map((item) =>
                    item._id === updateNewItem._id ? { ...item, quantity: updateNewItem.quantity, size: updateNewItem.size } : item
                );
                return [...updatedCart]
            });
            setForceUpdate((prev) => !prev);
        } catch (error) {
            console.error('Failed to update item', error);
        }
    };

    const removeFromCart = async (id) => {
        try {
            await deleteItem(id);
            setCart((prevCart) => prevCart.filter((item) => item._id !== id));  // Use the callback form
        } catch (error) {
            console.error('Failed to delete item', error);
        }
    };

    const clearCart = async ()=>{
        try {
           
            await clearItem()
            setCart([])
        } catch (error) {
            console.error('failed to clear items')
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, updateToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
