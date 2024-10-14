import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  productId: { 
    type: Number, 
    required: true 
    },
  name: { 
    type: String, 
    required: true },
  price: { 
    type: String, 
    required: true },
  quantity: { 
    type: Number, 
    required: true, 
    min: 1 },
    image: { 
      type: String, 
      required: false }, 
  category: { 
    type: String,
    required: true }
});
export const Cart = mongoose.model('Cart', CartSchema);
