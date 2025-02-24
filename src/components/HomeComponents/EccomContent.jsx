import React from 'react'
import eccom from '../../assets/Eccom.webp'

export default function EccomContent() {
  return (
    <section className='py-10 mx-5 lg:mx-20 '>
      <div className='flex flex-col items-center lg:flex-row gap-10'>
        <div className='lg:w-1/2'><img src={eccom} alt="" /></div>

        <div className='lg:w-1/2 flex flex-col gap-5 lg:p-10'>
            <h1 className='text-4xl lg:text-5xl'>BFINIT Ecommerce Custom-Built Websites</h1>
            <p className='text-xl'>
                Building your business with <span className='font-bold text-[#7049C3]'>BFINIT Ecommerce Custom-Built Websites</span> means getting a 
                tailor-made solution that perfectly aligns with your brand and business goals. Our ecommerce platforms are designed to provide 
                seamless user experiences, high-speed performance, and <span className='font-bold text-[#7049C3]'>secure transactions</span>, ensuring that your online store operates efficiently.
            </p>

            <p className='text-xl mt-4'>
                At <span className='font-bold text-[#7049C3]'>BFINIT</span>, we prioritize mobile responsiveness, SEO optimization, and user-friendly interfaces to 
                maximize customer engagement and conversions. From intuitive product catalogs to secure payment gateways and real-time order tracking, 
                we deliver a complete ecommerce ecosystem that empowers your business to thrive online.
            </p>

        </div>
      </div>
    </section>
  )
}
