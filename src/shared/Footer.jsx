import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const Hosting = ["Fully Managed Dedicated Server" , "Fully Managed Virtual Private Server" , "Self Managed Dedicated Server",
    "Professional Balanced Web Hosting" ,"Performance Web Hosting" , "Web Hosting for Small Businesses or Starter",
    "Self Managed Virtual Private Server"
]

const navigate = useNavigate();

  const Links = [
    {
      name : "Home",
      link:"/"
    },
    {
      name : "About us",
      link:"/about"
    },
    {
      name : "Hosting products",
      link:"/products"
    },
    {
      name : "Data Center",
      link:"/data-center"
    },
  ]
  return (
    <section className='bg-[#7049C3] text-white font-alice lg:px-20 py-28 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className='flex flex-col gap-5 text-white'>
            <h1 style={{letterSpacing:"8px"}} className='text-3xl font-semibold lg:text-4xl'>VOTOHOT</h1>
            <p className='text-lg'>VOTOHOT – Powering Your Online Presence with Secure, Scalable, and High-Performance Hosting Solutions.</p>
            <h1 className='text-lg'>Join Votohot Cosmopolitan</h1>
            <div className='flex gap-2'>
              <input placeholder='Enter your email' className='px-4 py-2 bg-transparent border border-white outline-none rounded-lg' type="email" />
              <button className='bg-white rounded-lg text-[#7049C3] px-5 py-1'>Subscribe</button>
            </div>
          </div>

          <div>
            <h1 className='mb-5 text-3xl'>Our Products</h1>
            <ul className='flex flex-col text-lg gap-3'>
              {Hosting.map((hosting, i) => (
                <li key={i}>{hosting}</li>
              ))}
            </ul>
          </div>


              <div>
                <h1 className='mb-5 text-3xl'>Quick Links</h1>
                <ul className='flex flex-col gap-3 text-lg'>
                  {Links.map((link , i)=>(
                    <li key={i} className=' cursor-pointer' onClick={()=>navigate(link.link)}>{link.name}</li>
                  ))}
                </ul>
              </div>
        </div>

        <div className='border-t mt-5'>
          <p className='text-center  mt-5 text-lg'>2025 VOTOHOT Company All rights Reserved</p>
        </div>
    </section>
  )
}
