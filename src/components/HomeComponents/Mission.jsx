import React from "react";
import { motion } from "framer-motion";
import votohot from "../../assets/votohot.webp";
import { BsFillGeoFill ,BsDatabaseFillGear  } from "react-icons/bs";
import { MdManageAccounts ,MdOutlineBackup  } from "react-icons/md";



export default function Mission() {
  const missions = [
    {
      logo: <BsFillGeoFill/>,
      heading:"Geo - Location Redundancy Management",
      content:"Data distributed across multiple secure locations for failover protection, ensuring high availability and resilience against unexpected failures.",
    },
    {
      logo: <BsDatabaseFillGear />,
      heading:"GDPR - Compliant Database Management",
      content:"Secure data storage, encryption, and processing aligned with EU privacy laws, ensuring compliance and robust data protection.",
    },
    {
      logo: <MdManageAccounts/>,
      heading:"CDN Integration & Management",
      content:"Optimized performance and security with BFINIT or external CDN providers, reducing latency and enhancing global content delivery.",
    },
    {
      logo: <MdOutlineBackup />,
      heading:"Geo - Location Backup Solutions",
      content:"Automated encrypted backups across secure regions, ensuring data integrity, minimizing loss risks and supporting disaster recovery.",
    },
  ]
  return (
    <section>
      <div className="mx-5 py-10 lg:mx-20">
        {/* Heading Animation */}
        <motion.h1
          className="text-center text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once:true , amount: 0.5}}
        >
          <span className="text-[#7049C3]">VOTOHOT</span> - Secure, Scalable and Redundant
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          className="text-center text-base mt-5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{once:true , amount: 0.5}}
        >
          Safeguard Your Servers or Hosting Space Across Multiple Locations for Unmatched Protection.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Section */}
          <motion.div
            className="flex flex-col gap-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{once:true , amount: 0.5}}
          >
            <h1 className="text-3xl lg:text-4xl">Data Center's Mission</h1>
            <p className="text-lg">
              VOTOHOT - Next-Gen Data Center Solutions for Speed, Reliability & Security, Backed by Multi-Site Infrastructure and Secure
              Data Redundancy for Unmatched Protection.
            </p>
            <p className="text-lg">
              Our state-of-the-art facilities ensure top-tier security, constant uptime and resilience against unforeseen circumstances,
              making us a trusted partner in safeguarding your critical data assets.
            </p>

            {/* Button Animation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ letterSpacing: "7px" }}
              className="bg-[#7049C3] w-fit px-10 py-2 text-white rounded-md"
            >
              Know More
            </motion.button>
          </motion.div>

          {/* Image Animation */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{once:true , amount: 0.5}}
          >
            <img className="rounded-3xl" src={votohot} alt="Votohot Data Center" />
          </motion.div>
        </div>
      </div>

      {/* GDPR Compliant */}

      <div className="w-full py-7">
        <h1 className="text-center py-2 text-3xl lg:text-4xl"><span className="text-[#7049C3]">GDPR Compliant</span> - Hosting & Data Protection</h1>
        <p className='text-xl lg:text-2xl my-5 text-center'  >Secure, Redundant and Compliant with Global Standards</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20">
          {missions.map((missioncontent , i )=>(
            <motion.div
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.6 , delay:i*0.1}}
            viewport={{once:true, amount:0.5}}
            key={i} className="flex flex-col gap-5 rounded-3xl items-center p-8 border border-black">
              <span className="text-center text-4xl text-[#7049C3]">{missioncontent.logo}</span>
              <h1 className="text-lg">{missioncontent.heading}</h1>
              <p className="text-sm">{missioncontent.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
