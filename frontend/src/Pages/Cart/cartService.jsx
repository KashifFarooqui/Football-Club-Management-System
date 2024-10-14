import axios from "axios";


const API_URI = 'http://localhost:8000/api/shop/cart';

export const addItem = async (product) => {
    try {
        const response = await axios.post(`${API_URI}/add`, {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            image: product.image,  
            category: product.category
        });
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

export const updateItem = async (cartItemId, quantity)=> {
    try {
        
        const response = await axios.put(`${API_URI}/put/${cartItemId}`,{
            quantity:quantity
        });
       
        return response.data
    } catch (error) {
        console.error('error upadating item',error);
        throw error       
    }
}

export const deleteItem = async (cartItemId) =>{
    try {
        const response = await axios.delete(`${API_URI}/remove/${cartItemId}`);
        return response.data
    } catch (error) {
        console.error('errorremoving item',error);
        throw error;
    }
}