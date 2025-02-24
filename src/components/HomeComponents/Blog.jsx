import React, { useState } from 'react';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';

export default function Blog() {
    const Blogs = [
        {
            image: blog1,
            heading: "The Ultimate Guide to Choosing the Right Server Hosting Product",
            content: `In today’s digital landscape, having a reliable and efficient server hosting solution is essential for businesses, 
            developers, and website owners. With numerous options available, choosing the right hosting product can be overwhelming. 
            This guide will help you understand different types of server hosting products and how to select the best one for your needs.Shared 
            hosting is an entry-level hosting solution where multiple websites share resources on a single server. It is an affordable choice for 
            small businesses, bloggers, and beginners. However, since resources are shared, performance may be affected if other sites on the
             server experience high traffic.VPS (Virtual Private Server) hosting provides a dedicated portion of a server with allocated resources,
              offering more control and flexibility than shared hosting. It is ideal for growing websites that need better performance and 
              customization options without the cost of a dedicated server.Dedicated hosting provides an entire server for a single client,
               offering maximum performance, security, and control. This option is best suited for large-scale websites, enterprises, and 
               applications that require high-speed processing, robust security, and scalability.Cloud hosting is another powerful option
                that uses multiple virtual servers to host a website. It offers high reliability, as resources can be scaled dynamically based on
                 demand. Businesses with fluctuating traffic levels often prefer cloud hosting due to its flexibility and cost-efficiency.Choosing 
                 the right hosting solution depends on factors such as budget, performance requirements, security concerns, and future scalability.
                  Understanding the differences between these hosting types can help businesses and individuals make informed decisions to ensure
                   their websites run smoothly and efficiently.`
        },
        {
            image: blog2,
            heading: "How Server Hosting Impacts Website Performance",
            content:  `Website performance is a crucial factor that affects user experience, search engine rankings, and overall business 
            success. A poorly performing website can lead to high bounce rates, reduced customer engagement, and lost revenue. The choice of
             server hosting plays a significant role in ensuring optimal website performance. One of the primary aspects of hosting that impacts 
             performance is server speed. A slow server can cause delays in loading times, frustrating users and reducing their likelihood of 
             staying on the site. Hosting solutions like dedicated servers and cloud hosting offer faster speeds due to dedicated resources and
              optimized infrastructure. Additionally, the amount of bandwidth provided by a hosting plan determines how much data can be 
              transferred between the website and visitors. If a site experiences high traffic without sufficient bandwidth, it may suffer from 
              slow loading speeds or even downtime. Implementing a Content Delivery Network (CDN) can help distribute website content across
               multiple servers globally, reducing latency and improving access speeds. Scalability is another critical factor, as growing 
               websites require hosting solutions that can handle increased traffic without performance degradation. Shared hosting may struggle
                under heavy loads, while VPS, dedicated, and cloud hosting solutions provide better scalability. Furthermore, the physical 
                location of the hosting server also impacts performance. Servers located far from the primary user base may increase latency, 
                causing delays in content delivery. Choosing a data center closer to the target audience or using distributed server networks 
                can significantly enhance website speed. Lastly, security measures such as DDoS protection, SSL encryption, and regular updates
                 also contribute to performance, ensuring a website remains reliable and efficient. By selecting the right hosting solution with 
                 optimized resources, businesses can enhance website performance, improve user experience, and drive better engagement.`
        },
        {
            image: blog3,
            heading: "Security Considerations in Server Hosting",
            content:`Security is a top priority when selecting a server hosting product, as cyber threats such as hacking, data breaches, 
            and malware attacks continue to rise. A secure hosting environment is essential to protect sensitive data, maintain website integrity, 
            and prevent unauthorized access.One of the most critical aspects of security is data protection. Hosting providers should implement
             robust security measures such as encryption, regular data backups, and secure data storage solutions to prevent data loss or
              unauthorized access. Additionally, SSL certificates play a vital role in encrypting data transmissions between users and the server,
               ensuring confidentiality and authenticity.Another key security consideration is server protection against external threats. 
               Firewalls, intrusion detection systems (IDS), and Distributed Denial-of-Service (DDoS) protection are crucial in safeguarding hosting
                environments from malicious attacks. Dedicated and managed hosting solutions often provide these advanced security features to
                 minimize vulnerabilities.Access control is also a fundamental aspect of hosting security. Shared hosting environments, while 
                 cost-effective, present security risks since multiple users share the same server resources. This increases the chances of data 
                 breaches and unauthorized access. In contrast, VPS and dedicated hosting solutions offer enhanced access controls, including root
                  access restrictions and multi-factor authentication, ensuring that only authorized personnel can modify or access critical server
                   configurations.Regular security updates and patch management are also crucial in preventing exploits and vulnerabilities. Hosting
                    providers should maintain up-to-date security protocols, monitor potential threats, and apply security patches promptly to 
                    reduce risks.Choosing a secure hosting solution is essential for protecting websites and sensitive data from cyber threats.
                     By opting for a hosting provider that prioritizes security through encryption, firewalls, access control, and proactive 
                     monitoring, businesses and individuals can significantly reduce the risk of security breaches and maintain a safe online 
                     presence.`
        }
    ];

    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">Recent Blogs</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {Blogs.map((blog, i) => (
                    <BlogCard key={i} blog={blog} onReadMore={() => setSelectedBlog(blog)} />
                ))}
            </div>
            {selectedBlog && <Overlay blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
        </section>
    );
}

const BlogCard = ({ blog, onReadMore }) => {
    const contentWords = blog.content.split(" ");
    const shortContent = contentWords.slice(0, 50).join(" ") + "...";

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white">
            <img src={blog.image} alt={blog.heading} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl text-center font-bold mt-4">{blog.heading}</h2>
            <p className="mt-2">{shortContent}</p>
            <button 
                onClick={onReadMore} 
                className="mt-2 text-blue-500 font-semibold underline"
            >
                Read More
            </button>
        </div>
    );
};

const Overlay = ({ blog, onClose }) => {
    return (
        <div 
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose} // Clicking the background closes the overlay
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // Stops clicks inside modal from closing it
            >
                <h2 className="text-xl font-bold">{blog.heading}</h2>
                <img src={blog.image} alt={blog.heading} className="w-full h-48 object-cover rounded-md mt-2" />
                <p className="mt-4">{blog.content}</p>
                <button 
                    onClick={onClose} 
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

