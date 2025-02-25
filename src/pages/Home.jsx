import React from 'react'
import hero from '../assets/hero.webp'
import Overview from '../components/HomeComponents/Overview'
import { useNavigate } from 'react-router-dom'
import Features from '../components/HomeComponents/Features';
import Blog from '../components/HomeComponents/Blog';
import EccomContent from '../components/HomeComponents/EccomContent';
import Mission from '../components/HomeComponents/Mission';
import  AnimatedTestimonialsDemo  from './AnimatedTestimonialsDemo';

export default function Home() {

  const navigate = useNavigate();
  return (
    <section style={{zIndex:2}} className='font-alice'>
        <div className='flex flex-col py-5 lg:flex-row md:px-10 '>
          {/* Left section */}
          <div className='lg:w-1/2 animate-fadeInUp flex flex-col px-2 gap-5 justify-center order-2 lg:order-1 items-center md:items-start text-gray-800'>
            <h1 className='text-4xl text-[#2F1C6A] md:text-4xl lg:text-6xl'>Blazing-Fast <span className='text-[#673DE6]'>Hosting</span>, Engineered for Excellence</h1>
            <p className='text-base tracking-widest'>Experience unmatched speed and reliability with our next-generation hosting solutions. Designed for peak performance, 
              our hosting ensures lightning-fast load times, rock-solid security, and seamless scalability. Whether you're running a business 
              website or a high-traffic application, we provide the power and flexibility you need to succeed.</p>
              <div className="grid grid-cols-2 pt-10 gap-5 lg:gap-10">
                <button
                onClick={()=>navigate("/products")}
                style={{ letterSpacing: "5px" }} className="bg-[#2F1C6A] text-white px-6 rounded-lg text-sm py-3">
                  Shop Now
                </button>
                <button 
                onClick={()=>navigate("/contact")}
                style={{ letterSpacing: "5px" }} className="bg-[#E2DBFC] text-[#2F1C6A] px-6 rounded-lg text-sm py-3  ">
                  Contact
                </button>
              </div>
          </div>
          {/* Right Section */}
          <div className='lg:w-1/2 order-1 lg:order-2'>
            <img className='p-1' src={hero} alt="" />
          </div>
        </div>

        {/* Overview */}
        <Overview/>
        <Features/>
        <EccomContent/>
        <Mission/>
        <AnimatedTestimonialsDemo/>
        <Blog/>
    </section>
  )
}
