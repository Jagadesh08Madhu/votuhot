import React, { useEffect, useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { motion } from "framer-motion";
import intel from "../assets/intel.svg";
import Loader from "../components/Loader";
import Loader1 from "../components/Loader1";
import { useParams, useNavigate } from "react-router-dom";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [hosting, setHosting] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingHosting, setLoadingHosting] = useState(false);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    fetch("https://hpanel.bfinit.com/api/product/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoryList = data?.data || [];
        setCategories(categoryList);
        setLoadingCategories(false);

        const defaultCategory = categoryId || (categoryList.length > 0 ? categoryList[0].id : "");
        setSelectedCategory(defaultCategory);
        if (defaultCategory) fetchHosting(defaultCategory);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });
  }, [categoryId]);

  // Fetch hosting plans
  const fetchHosting = (category) => {
    setLoadingHosting(true);
    fetch(`https://hpanel.bfinit.com/api/votuhot.com/white/label/packages/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setHosting(data?.data || []);
        setLoadingHosting(false);
      })
      .catch((error) => {
        console.error("Error fetching hosting data:", error);
        setLoadingHosting(false);
      });
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    navigate(`/products/${newCategory}`);
    fetchHosting(newCategory);
  };

  return (
    <section className="py-20 w-full font-alice">
      <h1 style={{ letterSpacing: "5px" }} className="text-center text-2xl lg:text-4xl font-semibold text-[#7049c3]">
        Hosting Products
      </h1>
      <h1 className="ml-2 mb-2 text-xl">Select Category:</h1>
      {loadingCategories ? (
        <Loader1 />
      ) : (
        <motion.select
          className="p-2 ml-2 outline-none border border-black"
          value={selectedCategory}
          onChange={handleCategoryChange}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </motion.select>
      )}

      <div className="w-full">
        <div className="mt-5 p-10">
          {loadingHosting ? (
            <div className="flex justify-center items-center h-[50vh]">
              <Loader />
            </div>
          ) : hosting.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {hosting.filter((host) => host.status === 1).map((host, index) => (
                <HostingCard key={index} host={host} />
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-600"><Loader/></p>
          )}
        </div>
      </div>
    </section>
  );
}

// Hosting Card Component
const HostingCard = ({ host }) => {
  const [selectedRam, setSelectedRam] = useState(host.storage_variants[0]?.ram || "");
  const [selectedStorage, setSelectedStorage] = useState(host.storage_variants[0]?.storage || "");
const navigate = useNavigate()

  

  const selectedVariant = host.storage_variants.find(
    (variant) => variant.ram === selectedRam && variant.storage === selectedStorage
  );
  const handleOrderNow = () =>{
    navigate('/checkout' ,{state : {host , selectedVariant}})
  }

  return (
    <motion.div
      className="flex flex-col border-t-4 border-[#7049c3] gap-3 border px-6 shadow-lg rounded-2xl py-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-[#5D3CAE] text-lg lg:text-xl font-semibold">{host.name?.toUpperCase()}</h1>
      <div className="flex gap-2 items-center">
        <img className="w-20" src={intel} alt="Intel" />
        <div>
          <h1>{host.processor}</h1>
          <h1 className="border-t border-gray-400 font-semibold">{host.core}</h1>
        </div>
      </div>
      <div>
        {Array.isArray(host.description) && (
          <ul>
            {host.description.map((desc, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl text-[#5d3cae]">
                  <GrFormCheckmark />
                </span>
                <li>{desc}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <h1>IPS: {host.ips}</h1>
      <h1>
        Data Center:{" "}
        <strong>
          {Array.isArray(host.data_center) ? host.data_center.join(" | ").toUpperCase() : host.data_center?.toUpperCase()}
        </strong>
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#7049C3]">RAM:</h1>
          <select
            className="border outline-none focus:border-[#7049c3] transition-all ease-in-out duration-200 rounded-lg p-2"
            value={selectedRam}
            onChange={(e) => setSelectedRam(e.target.value)}
          >
            {Array.from(new Set(host.storage_variants.map((storage) => storage.ram))).map((ram, index) => (
              <option key={`ram-${index}`} value={ram}>
                {ram}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#7049C3]">Storage:</h1>
          <select
            className="border outline-none focus:border-[#7049c3] transition-all ease-in-out duration-200 rounded-lg p-2"
            value={selectedStorage}
            onChange={(e) => setSelectedStorage(e.target.value)}
          >
            {Array.from(new Set(host.storage_variants.map((storage) => storage.storage))).map((storage, index) => (
              <option key={`storage-${index}`} value={storage}>
                {storage}
              </option>
            ))}
          </select>
        </div>
        <h1 className="text-lg font-bold">
          Price: <span className="text-[#7049C3]">${selectedVariant ? selectedVariant.price : "N/A"}</span>
        </h1>
        <button onClick={handleOrderNow} className="bg-[#7049c3] text-white py-2 mt-2 rounded-lg">Order Now</button>
      </div>
    </motion.div>
  );
};
