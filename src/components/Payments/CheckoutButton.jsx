import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PsPmr2LczxmU8jkHWl6Hnb785Af8H6ddAUgkwJ1asrkvcOUQt1TzcMgeRhtzQPLedd8aotxLPqMxCdYcEZ2Qr8e00OX53xKcB');

const CheckoutButton = ({ host, selectedVariant, selectedMonths, category, disabled }) => {
  const handleCheckout = async () => {
    if (disabled) return;

    try {
      const response = await fetch('https://payment.unayhr.com/api/votuhot/payment/create-subscription-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName: host.name,
          ram: selectedVariant.ram,
          storage: selectedVariant.storage,
          price: (selectedVariant.price * selectedMonths).toFixed(2),
          selectedMonths,
          category,
        }),
      });

      if (!response.ok) throw new Error('Failed to create checkout session');

      const { id: sessionId } = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) console.error('Stripe redirect error:', error);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled}
      className={`w-full px-6 bg-[#00051F] text-white py-2 rounded-lg ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      Subscribe Now
    </button>
  );
};

export default CheckoutButton;
