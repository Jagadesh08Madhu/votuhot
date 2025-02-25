import React from 'react';
import { LuScaling, LuMonitorSmartphone } from "react-icons/lu";
import { MdOutlineSpeed, MdSystemUpdateAlt } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Features() {
  const FeaturesContent = [
    {
      icon: <LuScaling className='text-5xl text-[#7049C3]' />,
      heading: "Flexible Resource Scaling",
      content: `Easily adjust server capacity to handle sudden traffic increases or planned growth using Dynamic Resource Allocation. 
      This ensures your website or application remains fast and responsive at all times.`
    },
    {
      icon: <MdOutlineSpeed className='text-5xl text-[#7049C3]' />,
      heading: "Optimized Speed and Efficiency",
      content: `Boost network and storage performance with High-Speed SSDs and advanced caching techniques. 
      This results in quicker load times and smoother user experiences.`
    },
    {
      icon: <RiSecurePaymentLine className='text-5xl text-[#7049C3]' />,
      heading: "Rapid Data Protection and Recovery",
      content: `Secure your data with Automated Backup Systems and fast disaster recovery options, ensuring minimal 
      downtime and reliable continuity.`
    },
    {
      icon: <MdSystemUpdateAlt className='text-5xl text-[#7049C3]' />,
      heading: "Versatile Operating System Choices",
      content: `Customize your server environment by choosing from a wide range of Operating Systems, 
      including various Linux distributions and Windows versions, to meet your specific needs.`
    },
    {
      icon: <LuMonitorSmartphone className='text-5xl text-[#7049C3]' />,
      heading: "Comprehensive Monitoring and Automation",
      content: `Keep an eye on server health with Real-Time Monitoring and automate routine management tasks, 
      reducing manual intervention and enhancing efficiency.`
    },
    {
      icon: <GrOptimize className='text-5xl text-[#7049C3]' />,
      heading: "High-Performance Computing and Machine Learning",
      content: `Leverage powerful servers optimized for Intensive Computing Tasks to run complex applications and advanced 
      Machine Learning models with high efficiency.`
    }
  ];

  return (
    <motion.section 
      className='lg:mx-20 py-10 mx-5'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className='text-[#673DE6] text-3xl lg:text-4xl'>Features</h1>
        <h1 className='text-2xl lg:text-3xl my-5'>Reliable and Scalable Server Hosting Solutions</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {FeaturesContent.map((featurecontent, i) => (
            <motion.div 
              key={i}
              className='flex flex-col gap-5 border shadow-2xl border-black p-10 hover:bg-gray-700
             hover:text-white transition-all ease-in-out duration-500 rounded-2xl'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className='flex justify-center'>{featurecontent.icon}</span>
              <h1 className='text-center text-lg'>{featurecontent.heading}</h1>
              <p className='text-sm text-center'>{featurecontent.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
