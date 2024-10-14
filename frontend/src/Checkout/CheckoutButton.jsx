import React from "react";
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Q9a3iE2qG7yOfrH58ilAbZ5pwoJlWYKNQyVhKI91caqMdklLvjxJw8VBsNKakDlILQPpjDoQmPw3S34qYOHcg4v002LgxPEEr');

const CheckoutButton =()=> {
    const handleCheckout = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/shop/cart/create-checkout-session",{
                amount:50
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
        style={{
          backgroundColor: '#4CAF50', 
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          cursor:  'pointer',
          borderRadius: '5px',
        }}
        onClick={handleCheckout}>
        Checkout
      </button>
    );
};

export default CheckoutButton