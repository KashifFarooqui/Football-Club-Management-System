import {Cart} from "../models/cart.models.js";

const AddItem = async(req, res) => {
    try {
        const { productId, name, price, quantity, image, category} = req.body;
        console.log('Received Request', req.body);

        if (!productId || !name || !price || !quantity || !category) {
            return res.status(400).json({
                message: 'Invalid data received',
                success: false
            });
        }
        const existingItem = await Cart.findOne({ productId, category });

        if(existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
            res.status(200).
            json({
                message: 'Item Qauntity Uodated',
                item:existingItem
            });
        } else {
            const newItem = new Cart({ productId, name, price, quantity, image, category});
            await newItem.save();
            res.status(200).
            json({
                message:'Item Added To Cart',
                item:newItem
            })
        }
    }
    catch(error) {
        res.status(500).
        json({
            message:'error adding item to cart',
            success:false,
            error
        })
    }
}

const GetItem = async (req, res) => {
    try{
        const cartItems = await Cart.find()
        res.status(200).json(cartItems)
    }
    catch(error) {
        res.status(500).json({
            message:'Error Getting Item',
            success:false,
            error
        })
    }
}

const UpdateItem = async (req, res)=> {
    const { quantity } = req.body;
    try {
        const cartItem = await Cart.findById(req.params.id)
        if (cartItem) {
            cartItem.quantity = quantity
            await cartItem.save();
            res.status(200).json({
                message:'item Updated',
                item:cartItem
            })
        } else {
            res.status(404).json({
                message:'Item Not Found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message:'erro updating item',
            sucess:false,
            error
        })
    }
};

const RemoveItem = async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (cartItem) {
            res.status(200).json({
                message: 'Item Removed',
            });
        } else {
            res.status(404).json({
                message: 'Item Not Found to Remove',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error Deleting Item',
            success: false,
            error,
        });
    }
};


export {
    AddItem,
    GetItem,
    UpdateItem,
    RemoveItem
};