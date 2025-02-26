import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg'; 
import mission from '../assets/mission.jpg'
import { CiTimer } from "react-icons/ci";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa6";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { Ri24HoursFill, RiCustomerService2Fill } from "react-icons/ri";

export default function About() {

  const Aboutcontent = [
    {
      logo: <CiTimer />,
      heading: "Unmatched Reliability & Uptime",
      content: `We understand that downtime can cost businesses money, reputation, and customers. That’s why our 99.99% uptime guarantee ensures 
      that your websites, applications, and services remain accessible 24/7/365.`
    },
    {
      logo: <AiOutlineCloudServer />,
      heading: "Scalable Hosting Solutions for Every Need",
      content: `Whether you're a startup, an established business, or an enterprise, our hosting solutions are built to scale with your growth. 
      From shared hosting to dedicated servers and cloud solutions, we provide the flexibility to expand as needed.`
    },
    {
      logo: <FaUserLock />,
      heading: "Global Data Security & Redundancy",
      content: `Your data is your most valuable asset, and we prioritize its protection. With geo-redundant data centers worldwide, your data 
      is backed up in multiple locations, ensuring that it remains safe even in the event of unexpected failures.`
    },
    {
      logo: <MdOutlineDatasetLinked />,
      heading: "Next-Generation Technology & Infrastructure",
      content: `We utilize state-of-the-art server technology, high-speed SSD storage, AI-powered optimizations, and real-time threat
       detection to deliver blazing-fast performance while keeping your digital assets secure.`
    },
    {
      logo: <Ri24HoursFill />,
      heading: "24/7 Expert Technical Support",
      content: `Our dedicated support team is available around the clock to assist you with technical issues, optimizations, and guidance.
       We believe in delivering personalized support to ensure a smooth hosting experience for our clients.`
    },
    {
      logo: <RiCustomerService2Fill />,
      heading: "Customer-Centric & Performance-Driven",
      content: "Your success is at the heart of everything we do. We focus on delivering seamless hosting experiences, optimizing performance, and providing cost-effective solutions tailored to your needs."
    },
  ];

  return (
    <section className="relative font-alice">
      {/* Background Section with Overlay */}
      <div 
        className="relative flex flex-col justify-center bg-fixed items-center py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div> 

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-opacity-90 px-5 py-10 rounded-xl shadow-md lg:w-[60%] text-center"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-5 tracking-wide">
            About VOTOHOT – Powering Your Digital Infrastructure
          </h1>
          <p className="text-lg text-white leading-relaxed">
            At <span className="font-semibold">VOTOHOT</span>, we provide 
            <span className=" font-semibold"> cutting-edge server hosting solutions</span> designed 
            to deliver unmatched <strong>performance, security, and scalability</strong>. As a leading 
            <span className=" font-semibold"> server hosting service provider</span>, we empower 
            businesses, developers, and enterprises with <strong>reliable dedicated servers, virtual private servers (VPS), 
            and web hosting solutions</strong> that ensure seamless online operations.
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row py-20 gap-10 lg:mx-20 mx-5 items-center"
      >
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl">Our Mission</h1>
          <p style={{ wordSpacing: "5px" }} className="text-lg ">
            At VOTOHOT, our mission is to redefine server hosting by providing businesses with secure, scalable, and high-performance 
            infrastructure. We are committed to minimizing downtime, optimizing performance, and delivering superior support to help you
            focus on growing your business without technical concerns.
          </p>
          <h1 className="text-3xl">Join VOTOHOT Today</h1>
          <p style={{ wordSpacing: "5px" }} className="text-lg">
            Whether you need a fully managed dedicated server, VPS, or optimized web hosting, VOTOHOT is your trusted partner in hosting 
            solutions. Power your online presence with a hosting provider that prioritizes speed, security, and reliability.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img className="rounded-xl" src={mission} alt="Mission" />
        </div>
      </motion.div>

      {/* Why We Are Here Section */}
      <div className="lg:mx-20 py-10 mx-5">
        <h1 className="text-center py-5 text-3xl">Why We Are Here</h1>
        <p className="text-center text-lg pb-5">
          At VOTOHOT, we are more than just a hosting provider—we are your trusted partner in building and scaling a robust online presence. 
          Let’s grow together! 🚀
        </p>

        {/* Why We Are Here Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Aboutcontent.map((aboutcontent, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              viewport={{ once: true }}
              key={i}
              className="flex flex-col gap-5 border border-[#7049C3] p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-3xl text-[#7049C3] flex justify-center">{aboutcontent.logo}</span>
              <h1 className="text-xl font-semibold">{aboutcontent.heading}</h1>
              <p>{aboutcontent.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
