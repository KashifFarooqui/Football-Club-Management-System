import React, { useContext } from "react";
import axios from 'axios'
import "./checkoutbutton.css"
import { loadStripe } from '@stripe/stripe-js';
import CartContext from "../context/cartContext.jsx";

const stripePromise = loadStripe('pk_test_51Q9a3iE2qG7yOfrH58ilAbZ5pwoJlWYKNQyVhKI91caqMdklLvjxJw8VBsNKakDlILQPpjDoQmPw3S34qYOHcg4v002LgxPEEr');

export const CheckoutButton =()=> {
    const { cart }= useContext(CartContext)

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
    }
    
    const checkoutData = {
        amount:getTotalPrice()
    }
    const handleCheckout = async () => {
        console.log(checkoutData);
        try {

            const response = await axios.post("http://localhost:8000/api/shop/cart/create-checkout-session",{
                amount:checkoutData.amount
            });

            const { sessionId } = response.data

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: sessionId,
            });

            if(error){
                console.error('Error redirecting to Stripe Checkout:',error)
            }
        } catch (error) {
            console.error('error creating session:',error)
        }
    };

    return(
        <button
        className="checkout-button"
        onClick={handleCheckout}>
        Checkout
      </button>
    );
};
export const BuyNowButton =()=> {
    
    const handleCheckout = async () => {
        try {

            const response = await axios.post("http://localhost:8000/api/shop/cart/create-checkout-session",{
                amount:90
            });

            const { sessionId } = response.data

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: sessionId,
            });

            if(error){
                console.error('Error redirecting to Stripe Checkout:',error)
            }
        } catch (error) {
            console.error('error creating session:',error)
        }
    };

    return(
        <button
        className="buy-now"
        onClick={handleCheckout}>
        Buy Now
      </button>
    );
};

export const Checkoutbutton =({totalAmount})=> {
    
    const handleCheckout = async () => {
        //const totalAmount =500
        try {

            const response = await axios.post("http://localhost:8000/api/schedule/ticket-checkout-session",{
               amount: totalAmount
            });

            const { sessionId } = response.data

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: sessionId,
            });

            if(error){
                console.error('Error redirecting to Stripe Checkout:',error)
            }
        } catch (error) {
            console.error('error creating session:',error)
        }
    };

    return(
        <button
        className="checkout-Button"
        onClick={handleCheckout}>
        Confirm
      </button>
    );
};

