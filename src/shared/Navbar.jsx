import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openSubmenu, setOpenSubmenu] = useState(null); // State for tracking open submenu

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://hpanel.bfinit.com/api/product/categories");
        const result = await res.json();

        if (result.success && Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.error("Unexpected API response format:", result);
          setCategories([]);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const isActive = (path) => location.pathname === path;
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Hosting Products", path: "/products", hasSubmenu: true, submenuType: "categories" },
    { name: "Policy", hasSubmenu: true, submenuType: "policy", submenu: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cookie Policy", path: "/cookie-policy" }
    ] }
  ];

  return (
    <nav style={{ zIndex: "1000" }} className="font-alice bg-white sticky top-0 shadow-md shadow-gray-400 z-50">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-around items-center py-7">
        <h1
          onClick={() => navigate("/")}
          style={{ letterSpacing: "15px" }}
          className="text-xl text-gray-800 cursor-pointer select-none font-semibold"
        >
          VOT<span className="text-[#7049C3]">U</span>HOT
        </h1>
        <ul className="flex items-center md:gap-5 lg:gap-10 text-sm" style={{ letterSpacing: "3px" }}>
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => link.hasSubmenu && setOpenSubmenu(link.name)}
              onMouseLeave={() => link.hasSubmenu && setOpenSubmenu(null)}
              className={`relative cursor-pointer transition-all duration-300 ease-in-out group ${
                isActive(link.path)
                  ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              <span onClick={() => !link.hasSubmenu && navigate(link.path)}>
                {link.name}
              </span>

              {link.hasSubmenu && (
                <IoIosArrowDown className="inline ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
              )}

              {/* Submenu for Hosting Products and Policy */}
              {link.hasSubmenu && openSubmenu === link.name && (
                <ul className="absolute left-0 top-2 bg-white shadow-lg border rounded-md w-[250px] mt-2 z-50">
                  {link.submenuType === "categories" ? (
                    categories.length > 0 ? (
                      categories.map((category) => (
                        <li
                          key={category.id}
                          onClick={() => navigate(`/products/${category.id}`)}
                          className="px-4 py-2 hover:bg-gray-200 text-gray-800 cursor-pointer"
                        >
                          {category.name}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">Loading...</li>
                    )
                  ) : (
                    link.submenu.map((sub) => (
                      <li
                        key={sub.path}
                        onClick={() => navigate(sub.path)}
                        className="px-4 py-2 hover:bg-gray-200 text-gray-800 cursor-pointer"
                      >
                        {sub.name}
                      </li>
                    ))
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#7049c3] px-6 py-2 text-sm rounded-md text-white hover:bg-[#5d3cae] transition-all"
          style={{ letterSpacing: "6px" }}
        >
          Contact
        </button>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex justify-between items-center px-5 py-5">
        <h1
          onClick={() => navigate("/")}
          style={{ letterSpacing: "10px" }}
          className="text-xl text-gray-800 select-none cursor-pointer font-semibold"
        >
          VOT<span className="text-[#7049c3]">U</span>HOT
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-50 transition-transform duration-300 ${isOpen ? "rotate-180 scale-125" : "rotate-0"}`}
        >
          {isOpen ? <X color="black" size={28} /> : <Menu color="black" size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 text-sm text-center" style={{ letterSpacing: "3px" }}>
          {navLinks.map((link) => (
            <li
            onClick={() => {
              if (link.hasSubmenu) {
                setIsOpen(true);
              } else {
                setIsOpen(!isOpen);
              }
            }}
              key={link.name}
              className={`cursor-pointer transition-all duration-300 ease-in-out text-gray-800 hover:text-black ${
                isActive(link.path)
                  ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {link.hasSubmenu ? (
                <>
                  <span onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}>
                    {link.name}
                    <IoIosArrowDown className={`inline ml-2 transition-transform duration-300 ease-in-out ${openSubmenu === link.name ? "rotate-180" : "rotate-0"}`} />
                  </span>
                  {openSubmenu === link.name && (
                    <ul className="mt-2 bg-gray-100 shadow-md rounded-md z-50">
                      {link.submenuType === "categories" ? (
                        categories.map((category) => (
                          <li
                            key={category.id}
                            onClick={() => {
                              navigate(`/products/${category.id}`);
                            }}
                            className="px-4 py-2 hover:bg-gray-200 text-gray-800 cursor-pointer"
                          >
                            {category.name}
                          </li>
                        ))
                      ) : (
                        link.submenu.map((sub) => (
                          <li key={sub.path} onClick={() => navigate(sub.path)} className="px-4 py-2 hover:bg-gray-200 text-gray-800 cursor-pointer">
                            {sub.name}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </>
              ) : (
                <span onClick={() => navigate(link.path)}>{link.name}</span>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {navigate("/contact") ; setIsOpen(!isOpen)}}
          className="bg-[#7049c3] px-6 py-2 mt-5 text-sm rounded-md text-white hover:bg-[#5d3cae] transition-all"
          style={{ letterSpacing: "6px" }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
