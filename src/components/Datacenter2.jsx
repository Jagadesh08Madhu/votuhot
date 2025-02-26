import React from 'react';
import { motion } from 'framer-motion';
import { GiCheckMark } from "react-icons/gi";
import datacenter1 from '../assets/datacenter1.jpg';
import datacenter2 from '../assets/datacenter2.jpg';
import datacenter3 from '../assets/datacenter3.jpg';

export default function Datacenter2() {
    const Hosting = [
        {
            image: datacenter1,
            subheading: "Secure Backup, Forever",
            heading: "Database Geo-Location Redundancy Management",
            content: `Backup redundancy management is a vital tool to keep your data safe. Bfinit offers a unique backup system, 
            ensuring that your data is stored in multiple locations. If an issue arises, the backup is ready to be deployed, 
            minimizing downtime and ensuring business continuity.`,
            points: [
                "Automated daily backups",
                "Multiple secure data centers",
                "Instant recovery options",
                "End-to-end encryption for security"
            ]
        },
        {
            image: datacenter2,
            subheading: "Secure, Reliable & Powerful",
            heading: "Secure & Reliable Data Center Infrastructure",
            content: `Never lose your data again! Choose between geo-located or classic backups based on your needs. 
            With Bfinit’s geo-redundancy option, your data is securely stored across multiple global locations, ensuring 
            easy restoration at any time with a single click.`,
            points: [
                "Geo-Distributed Data Centers – Located in USA & Europe",
                "24/7 Network Monitoring – Real-time threat detection"
            ]
        },
        {
            image: datacenter3,
            subheading: "Scale Faster, Smarter",
            heading: "Data Centers Equipped with the Latest Server Technology",
            content: `Our data centers are powered by the latest server technology, delivering high-speed performance, 
            reliability, and security. Advanced hardware, real-time monitoring, and multi-layered security protocols 
            ensure that your critical data assets remain protected and always accessible.`,
            points: [
                "Multiple secured data centers",
                "Maximized geo-location backup redundancy"
            ]
        }
    ];

    return (
        <section className="mx-5 lg:mx-20 py-10">
            {Hosting.map((hosting, i) => (
                <motion.div 
                    key={i} 
                    className={`flex flex-col lg:flex-row items-center gap-10 py-10 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    {/* Image Section with Slide-in Animation */}
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <img className="w-full rounded-xl shadow-lg" src={hosting.image} alt={hosting.heading} />
                    </motion.div>

                    {/* Content Section with Scale-up Animation */}
                    <motion.div 
                        className="lg:w-1/2 flex flex-col gap-5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-lg bg-[#c2adf0] w-fit px-4 py-1 rounded-lg text-[#7049C3] font-semibold">
                            {hosting.subheading}
                        </h2>
                        <h1 className="text-2xl lg:text-3xl text-[#7049C3] font-bold">
                            {hosting.heading}
                        </h1>
                        <p className="text-gray-700 text-base lg:text-lg">
                            {hosting.content}
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            {hosting.points.map((point, index) => (
                                <motion.div 
                                    className='flex items-center gap-3' 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <span className='text-[#7049C3]'><GiCheckMark/></span>
                                    <li className="text-base list-none lg:text-lg">{point}</li>
                                </motion.div>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            ))}
        </section>
    );
}
