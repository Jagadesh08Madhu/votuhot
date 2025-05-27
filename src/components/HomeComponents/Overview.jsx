import React from 'react';
import { motion } from 'framer-motion';
import overview from '../../assets/overview.jpg';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function Overview() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const accordionData = [
        {
            id: 1,
            question: "High-Performance Hosting Solutions",
            answer: `Experience seamless and scalable computing power with our secure and reliable hosting solutions. 
            Whether you're running a personal website, an e-commerce store, or enterprise-level applications, our infrastructure is 
            designed to deliver speed, security, and efficiency.`,
        },
        {
            id: 2,
            question: "Unmatched Security & Reliability",
            answer: `Our hosting solutions provide unmatched security and reliability. With a 99.9% uptime guarantee, your website remains online 
            with minimal interruptions. Advanced DDoS protection ensures your data is safeguarded against malicious attacks, while automatic and 
            scheduled backups maintain data integrity.`,
        },
        {
            id: 3,
            question: "Scalable & Flexible Infrastructure",
            answer: `Our scalable and flexible infrastructure includes cloud, VPS, and dedicated server options, allowing you to choose the best
            hosting solution for your needs. Instantly scale your resources as your business grows and benefit from global data centers that
            provide fast and secure access from anywhere in the world.`,
        },
        {
            id: 4,
            question: "Powerful & Easy-to-Use Features",
            answer: `Experience powerful and easy-to-use features, including one-click app installations for WordPress, e-commerce platforms, 
            and more. Customize your server configurations to suit your requirements, and rely on our 24/7 expert support team, always available
            to assist you.`,
        },
    ];

    return (
        <motion.section 
            className='py-10 lg:mx-20 mx-5 overflow-hidden'
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }} // Triggers animation when 30% of the section is visible
        >
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                {/* left section */}
                <motion.div 
                    className='lg:w-1/2'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img className='rounded-2xl w-full' src={overview} alt="Overview" />
                </motion.div>

                {/* right section */}
                <motion.div 
                    className='lg:w-1/2'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 style={{lineHeight:'50px'}} className='text-3xl lg:text-4xl text-[#2F1C6A] font-bold mb-6'>
                        Secure and Reliable Computing Power for Your Hosting Needs
                    </h1>
                    <div  className='flex flex-col lg:gap-3'>
                        {accordionData.map(({ id, question, answer }) => (
                            <Accordion key={id} open={open === id} icon={<Icon id={id} open={open} />}>
                                <AccordionHeader className='text-lg font-semibold' onClick={() => handleOpen(id)}>
                                    {question}
                                </AccordionHeader>
                                <AccordionBody className='text-gray-600 text-base'>
                                    {answer}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
