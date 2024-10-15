import stripe from '../../config/stripe.js'; // Ensure this path points to your config file

const createCheckoutSession = async (req, res) => {
  const { amount } = req.body;
  console.log("Amount paid",amount);
  

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Real Madrid Shop',  // This can be dynamic depending on your logic
            },
            unit_amount: amount * 100, // Convert to cents for EUR
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:5173/sucess",
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.status(200).json({ 
      mesage:`Payment Successfull of ${amount} ! THANKYOU`,
      sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
};
const ticketCheckoutSession = async (req, res) => {
  const { amount } = req.body;
  console.log('ticket total',amount);
  

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Real Madrid Tickets', 
            },
            unit_amount: amount * 100, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:5173/sucess",
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.status(200).json({
       mesage:`Payment Successfull of ${amount} ! THANKYOU`,
       sessionId: session.id});
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
};

export {
    createCheckoutSession,
    ticketCheckoutSession
}
