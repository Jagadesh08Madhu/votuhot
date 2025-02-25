import React from 'react'
import votohot from '../../assets/votohot.webp'


export default function Mission() {
  return (
    <section>
       <div className='mx-5 py-10 lg:mx-20'>
        <h1 className='text-center text-3xl lg:text-4xl'>VOTOHOT - Secure, Scalable and Redundant</h1>
        <p className='text-center text-base mt-5 mb-10'>Safeguard Your Servers or Hosting Space Across Multiple Locations for Unmatched Protection.</p>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
            <div className='flex flex-col gap-5 order-2 lg:order-1'>
                <h1 className='text-3xl lg:text-4xl'>Data Center's Mission</h1>
                <p className='text-lg'>VOTOHOT - Next-Gen Data Center Solutions for Speed, Reliability & Security, Backed by Multi-Site Infrastructure and Secure 
                    Data Redundancy for Unmatched Protection.</p>
                <p className='text-lg'>Our state-of-the-art facilities ensure top-tier security, constant uptime and resilience against unforeseen circumstances, 
                    making us a trusted partner in safeguarding your critical data assets.</p>

                <button style={{letterSpacing:"7px"}} className='bg-[#7049C3] w-fit px-10 py-2 text-white'>Know More</button>
            </div>
            <div className='order-1 lg:order-2 '><img className='rounded-3xl ' src={votohot} alt="" /></div>
        </div>
       </div>
    </section>
  )
}
