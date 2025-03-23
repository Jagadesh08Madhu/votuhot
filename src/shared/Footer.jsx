import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Hosting products", link: "/products" },
    { name: "Data Center", link: "/data-center" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Cookie Policy", link: "/cookie-policy" },
  ];

  useEffect(() => {
    fetch("https://hpanel.bfinit.com/api/product/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data?.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#7049C3] text-white font-alice lg:px-20 pb-10 pt-20 px-5">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* VOTOHOT Brand Info */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold lg:text-4xl tracking-wider">VOTUHOT</h1>
          <p className="text-lg">
            VOTUHOT – Powering Your Online Presence with Secure, Scalable, and High-Performance Hosting Solutions.
          </p>
          <h1 className="text-lg font-semibold">Join VOTUHOT</h1>
          <div className="flex gap-2">
            <input
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent border border-white outline-none rounded-lg text-white"
              type="email"
            />
            <button className="bg-white rounded-lg text-[#7049C3] px-5 py-1 font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Hosting Products - Dynamically Loaded */}
        <div>
          <h1 className="mb-5 text-2xl font-semibold">Our Products</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="flex flex-col text-base gap-3">
              {categories.map((category, i) => (
                  <motion.li
                    key={category.id}
                    className="hover:text-gray-200 transition cursor-pointer"
                    onClick={() => navigate(`/products/${category.id}`)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category.name}
                  </motion.li>
                ))}

            </ul>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="mb-5 text-2xl font-semibold">Quick Links</h1>
          <ul className="flex flex-col gap-3 text-base">
            {Links.map((link, i) => (
              <motion.li
                key={i}
                className="cursor-pointer hover:text-gray-200 transition"
                onClick={() => navigate(link.link)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="mt-10 border-t border-gray-400 pt-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className="text-lg">© 2025 VOTUHOT Company. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
