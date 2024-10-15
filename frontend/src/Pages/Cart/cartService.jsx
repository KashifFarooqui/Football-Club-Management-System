import axios from "axios";


const API_URI = 'http://localhost:8000/api/shop/cart';

export const addItem = async (product) => {
    const data1= {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,  
        category: product.category,
        size:product.size
    }

    try {
        const response = await axios.post(`${API_URI}/add`,data1)
        return response.data.item; 
    } catch (error) {
        console.error('error adding item to cart', error);
        throw error;
    }
};


export const getItem = async ()=> {
    try{
        const resposne = await axios.get(`${API_URI}/get`);
        return resposne.data
    }
    catch(error){
        console.error('error getting item', error)
        throw error;
    }
}

export const updateItem = async (cartItemId, quantity, size) => {
    try {
        if (!cartItemId || !quantity) {
            throw new Error('CartItemId and quantity are required');
        }
        console.log('Updating item with:', { cartItemId, quantity, size });

        const response = await axios.put(`${API_URI}/put/${cartItemId}`, {
            quantity: quantity,
            size: size,  
        });

        console.log('Response from server:', response.data);

        return response.data; 
    } catch (error) {
        if (error.response) {
            console.error('Server responded with error:', error.response.data);
        } else if (error.request) {
            console.error('No response from server:', error.request);
        } else {
            console.error('Error during request setup:', error.message);
        }
        throw error; 
    }
};


export const deleteItem = async (cartItemId) =>{
    try {
        const response = await axios.delete(`${API_URI}/remove/${cartItemId}`);
        return response.data
    } catch (error) {
        console.error('errorremoving item',error);
        throw error;
    }
}

export const clearItem = async ()=>{
    try{
        const response = await axios.delete(`${API_URI}/clear`)
        if(response.data.success) {
            SetCart([])
        } else {
            console.error('failed to clear cart on server', response.data.message);
        }
    } catch(error) {
        console.error('failed to clear cart',error)
    }
}