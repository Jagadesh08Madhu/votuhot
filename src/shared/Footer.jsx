import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const Hosting = [
    "Fully Managed Dedicated Server",
    "Fully Managed Virtual Private Server",
    "Self Managed Dedicated Server",
    "Professional Balanced Web Hosting",
    "Performance Web Hosting",
    "Web Hosting for Small Businesses or Starter",
    "Self Managed Virtual Private Server"
  ];

  const navigate = useNavigate();

  const Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Hosting products", link: "/products" },
    { name: "Data Center", link: "/data-center" }
  ];

  return (
    <section className='bg-[#7049C3] text-white font-alice lg:px-20 pb-10 pt-20 px-5 '>
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* VOTOHOT Brand Info */}
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-semibold lg:text-4xl tracking-wider'>VOTOHOT</h1>
          <p className='text-lg'>
            VOTOHOT – Powering Your Online Presence with Secure, Scalable, and High-Performance Hosting Solutions.
          </p>
          <h1 className='text-lg font-semibold'>Join VOTOHOT Cosmopolitan</h1>
          <div className='flex gap-2'>
            <input
              placeholder='Enter your email'
              className='px-4 py-2 bg-transparent border border-white outline-none rounded-lg text-white'
              type="email"
            />
            <button className='bg-white rounded-lg text-[#7049C3] px-5 py-1 font-semibold hover:bg-gray-200 transition'>
              Subscribe
            </button>
          </div>
        </div>

        {/* Hosting Products */}
        <div>
          <h1 className='mb-5 text-3xl font-semibold'>Our Products</h1>
          <ul className='flex flex-col text-lg gap-3'>
            {Hosting.map((hosting, i) => (
              <motion.li 
                key={i} 
                className='hover:text-gray-200 transition cursor-pointer'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {hosting}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className='mb-5 text-3xl font-semibold'>Quick Links</h1>
          <ul className='flex flex-col gap-3 text-lg'>
            {Links.map((link, i) => (
              <motion.li 
                key={i} 
                className='cursor-pointer hover:text-gray-200 transition'
                onClick={() => navigate(link.link)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div 
        className='mt-10 border-t border-gray-400 pt-5 text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className='text-lg'>© 2025 VOTOHOT Company. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
