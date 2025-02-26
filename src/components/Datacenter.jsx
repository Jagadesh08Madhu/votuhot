import React from 'react'
import datacenter from '../assets/datacenter.webp'
import Datacenter2 from './Datacenter2'
import { motion } from 'framer-motion'

export default function Datacenter() {
    const Hosting = ["Fully Managed Dedicated Server" , "Fully Managed Virtual Private Server" , "Self Managed Dedicated Server",
        "Professional Balanced Web Hosting" ,"Performance Web Hosting" , "Web Hosting for Small Businesses or Starter",
        "Self Managed Virtual Private Server"
    ]
  return (
    <section className='font-alice mx-5 lg:mx-20 py-10'>
      <div>
        <h1 className='text-center text-3xl lg:text-5xl mb-7'><span style={{letterSpacing:"5px"}} className='text-[#5D3CAE]'>VOTOHOT</span> - Secure, Scalable and Redundant</h1>
        <p className='text-center text-base lg:text-xl'>Safeguard Your Servers or Hosting Space Across Multiple Locations for Unmatched Protection.</p>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 py-5'>
            <div className='flex flex-col gap-5 lg:w-1/2 order-2 lg:order-1'>
                <h1 className='text-3xl lg:text-4xl'>Our Data Center's Mission</h1>
                <p className='text-base lg:text-lg'>VOTOHOT - Next-Gen Data Center Solutions for Speed, Reliability & Security, Backed by Multi-Site Infrastructure and 
                    Secure Data Redundancy for Unmatched Protection.</p>
                <p className='text-base lg:text-lg'>Our state-of-the-art facilities ensure top-tier security, constant uptime, and resilience against unforeseen circumstances, 
                    making us a trusted partner in safeguarding your critical data assets.</p>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
                <img className='lg:w-3/4' src={datacenter} alt="" />
            </div>
        </div>

        <div>
            <h1 className='text-center text-3xl lg:text-4xl py-10 '>Our Data Center Features</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 cursor-pointer lg:grid-cols-3 gap-10'>
                {Hosting.map((hosting, i) => (
                    <motion.div 
                    initial={{opacity:0 , y:20}}
                    whileInView={{opacity: 1 , y:0}}
                    transition={{duration:0.2*i , delay:0.1}}
                    viewport={{once:true}}
                    key={i} 
                    className='group relative py-14 bg-gray-200 shadow-md rounded-2xl shadow-gray-400 flex justify-center items-center overflow-hidden'
                    >
                    <h1 className='z-50 group-hover:text-white relative text-black text-center text-lg'>{hosting}</h1>

                    {/* Background animation */}
                    <div className="absolute w-0 h-0 bg-[#7049C3] bottom-0 right-0 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full origin-bottom-right"></div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
      <Datacenter2/>
    </section>
  )
}
