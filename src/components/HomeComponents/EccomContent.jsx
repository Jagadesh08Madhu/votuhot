import React from 'react'
import eccom from '../../assets/Eccom.webp'
import { SiExpressvpn } from "react-icons/si";
import { RiSeoLine , RiMoneyDollarCircleLine ,RiSecurePaymentFill  } from "react-icons/ri";
import { PiFileCodeDuotone } from "react-icons/pi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import {motion} from 'framer-motion'





export default function EccomContent() {

    const Eccom = [
        {
            logo: <SiExpressvpn/> ,
            heading: "Pre-Built Templates",
            content: "Our Pre-Built Templates and Hosting solutions are ready for your E-Commerce or Service-related Business. Launch quickly and Save Time to simplify your setup process."
        },
        {
            logo:<RiSeoLine/>,
            heading:"Enhance SEO Control",
            content:"Elevate your website's SEO with our dedicated blog panel. Easily optimize content, keywords and meta tags to increase your Online Visibility and drive more Organic Traffic."
        },
        {
            logo:<PiFileCodeDuotone/>,
            heading:"Dedicated Blog Panel",
            content:"Manage your blog effortlessly with a Dedicated Panel. Create, edit and schedule posts to Boost your Online Presence and engage your Targeted Audience."
        },
        {
            logo:<LuBriefcaseBusiness/>,
            heading:"Market & Business Analysis",
            content:"Detailed market insights that provide a clear understanding of Business Trends, Customer Behaviors and Opportunities to make informed decisions."
        },
        {
            logo: <RiSecurePaymentFill/>,
            heading:"Choose Your Payment Gateway",
            content:"Seamlessly integrate global payment gateways like PayPal, Stripe, or your preferred banking solutions. Empower your business with the flexibility to choose payment methods tailored to your customers' needs worldwide."
        },
        {
            logo: <RiMoneyDollarCircleLine/>,
            heading:"Cost-Effective Solutions",
            content:"Affordable, scalable solutions designed to grow with your business without high upfront costs."
        },
    ]
  return (
    <section className='lg:py-28 py-10 mx-5 lg:mx-20 '>
      <div className='flex flex-col items-center lg:flex-row gap-10'>
        <div className='lg:w-1/2'><img src={eccom} alt="" /></div>

        <div className='lg:w-1/2 flex flex-col gap-5 lg:p-10'>
            <h1 className='text-3xl lg:text-4xl'>BFINIT Ecommerce Custom-Built Websites included with selected hosting packs</h1>
            <p className='text-base'>
                Building your business with <span className='font-bold text-[#7049C3]'>BFINIT Ecommerce Custom-Built Websites</span> means getting a 
                tailor-made solution that perfectly aligns with your brand and business goals. Our ecommerce platforms are designed to provide 
                seamless user experiences, high-speed performance, and <span className='font-bold text-[#7049C3]'>secure transactions</span>, ensuring that your online store operates efficiently.
            </p>

            <p className='text-base mt-4'>
                <span className='font-bold text-[#7049C3]'>BFINIT</span> prioritize mobile responsiveness, SEO optimization, and user-friendly interfaces to 
                maximize customer engagement and conversions. From intuitive product catalogs to secure payment gateways and real-time order tracking, 
                we delivery a complete ecommerce ecosystem that empowers your business to thrive online.
            </p>

        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10'>
        {Eccom.map((eccom , i)=>(
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            key={i} className='p-10 flex flex-col gap-5 rounded-lg border border-black'>
                <div className='flex border-l-4 text-[#7049C3] border-[#7049C3] items-center justify-center gap-5'>
                    <span className='text-3xl ml-8'>{eccom.logo}</span>
                    <h1 className='text-xl'>{eccom.heading}</h1>
                </div>
                <p className='text-base'>{eccom.content }</p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}
