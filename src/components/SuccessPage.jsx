import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import successAnimation from '../assets/success.json';
import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const data = localStorage.getItem('checkoutDetails');
    if (!data) {
      navigate('/', { replace: true });
      return;
    }
    try {
      const parsedUser = JSON.parse(data);
      console.log("Parsed User:", parsedUser);

      const formData = parsedUser?.formData;
      const host = parsedUser?.host;
      const selectedVariant = parsedUser?.selectedVariant;
      const selectedMonths = parsedUser?.selectedMonths
      const categoryName = parsedUser?.categoryName

      if (!formData || !host || !selectedVariant) {
        console.error('Missing fields in checkoutDetails');
        navigate('/', { replace: true });
        return;
      }

      setUserData(parsedUser);

      const message = `
        New Order Confirmation

        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}

        Category Name:${categoryName}
        Selected Plan: ${host.name}
        Storage: ${selectedVariant.storage}
        RAM: ${selectedVariant.ram}
        Price: $${selectedVariant.price}
        Selected Months:${selectedMonths} Months
      `;

      const web3Form = new FormData();
      web3Form.append('access_key', '458851b3-14e0-492f-96f3-d525277b9c9f');
      web3Form.append('from_name', 'Votuhot');
      web3Form.append('subject', `Subscription Confirmation - ${host.name}`);
      web3Form.append('email', formData.email);
      web3Form.append('message', message);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3Form,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            console.log('Web3Forms submission successful');
          } else {
            console.error('Web3Forms submission failed', result);
          }
        })
        .catch((err) => console.error('Fetch error:', err));

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            localStorage.removeItem('checkoutDetails');
            navigate('/', { replace: true });
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    } catch (err) {
      console.error('Failed to parse checkoutDetails:', err);
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!userData) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-700">Loading your order confirmation...</p>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg p-10 rounded-xl text-center max-w-md w-full">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h1 className="text-2xl font-semibold text-green-600 mt-4">Order Placed Successfully!</h1>
        <p className="text-gray-700 mt-2">
          Thank you,{' '}
          <span className="font-medium">{userData.formData.fullName}</span>! A confirmation email has
          been sent to{' '}
          <span className="font-medium">{userData.formData.email}</span>.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          You will be redirected to the homepage in {timer} seconds.
        </p>
        <button
          onClick={() => {
            localStorage.removeItem('checkoutDetails');
            navigate('/', { replace: true });
          }}
          className="mt-6 bg-[#00051F] text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition"
        >
          Go to Homepage Now
        </button>
      </div>
    </section>
  );
}
