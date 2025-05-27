import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import cancel from '../assets/cancel.json'; 
import { useNavigate } from 'react-router-dom';

export default function CancelPage() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: cancel, // Animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // Set timeout to redirect after 20 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to homepage
    }, 20000); // 20 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="flex flex-col font- items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg p-10 rounded-xl text-center max-w-md w-full">
        {/* Lottie animation */}
        <Lottie options={defaultOptions} height={400} width={400} />
        
        <h1 className="text-2xl font-semibold text-red-600 mt-4">Payment Failed</h1>
        <p className="text-gray-700 mt-2">
          Unfortunately, your payment could not be processed. You will be redirected to the homepage in 20 seconds.
        </p>
        
        {/* Redirect button in case the user wants to go back immediately */}
        <button 
          onClick={() => navigate('/')} 
          className="mt-6 bg-[#00051F] text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition"
        >
          Go Back to Homepage Now
        </button>
      </div>
    </section>
  );
}
