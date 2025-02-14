import React from 'react'
import hero from '../assets/hero.png'

export default function Home() {
  return (
    <section className='font-alice'>
        <div className='flex flex-col py-5 lg:flex-row md:px-10 bg-gray-800'>
          {/* Left section */}
          <div className='lg:w-1/2 flex flex-col px-2 gap-5 justify-center order-2 lg:order-1 items-center text-white'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl'>Blazing-Fast <span className='text-[#7049c3]'>Hosting</span>, Engineered for Excellence</h1>
            <p className='text-lg tracking-widest'>Experience unmatched speed and reliability with our next-generation hosting solutions. Designed for peak performance, 
              our hosting ensures lightning-fast load times, rock-solid security, and seamless scalability. Whether you're running a business 
              website or a high-traffic application, we provide the power and flexibility you need to succeed.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-5 lg:gap-10">
                <button style={{ letterSpacing: "5px" }} className="bg-[#7049c3] px-6 rounded-lg text-base py-2">
                  Shop Now
                </button>
                <button style={{ letterSpacing: "5px" }} className="bg-[#7049c3] px-6 rounded-lg text-base py-2">
                  Contact
                </button>
              </div>
          </div>
          {/* Right Section */}
          <div className='lg:w-1/2 order-1 lg:order-2'>
            <img className='p-1' src={hero} alt="" />
          </div>
        </div>
    </section>
  )
}
