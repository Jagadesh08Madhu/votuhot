import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrFormCheckmark } from "react-icons/gr";
import CheckoutButton from "../components/Payments/CheckoutButton";

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { host, selectedVariant, categoryName, selectedMonths } = location.state || {};

  // Redirect if no data found (optional)
  useEffect(() => {
    if (!host || !selectedVariant) {
      navigate("/products"); // Or wherever appropriate
    }
  }, [host, selectedVariant, navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+\d{1,4}\d{7,14}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone format. Include country code (e.g., +91)";
    }
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Save checkout details to localStorage or send to your backend
    localStorage.setItem(
      "checkoutDetails",
      JSON.stringify({ formData, host, selectedVariant, categoryName, selectedMonths })
    );

    // TODO: Add payment processing or next step here
  };

  return (
    <section className="py-10 lg:mx-20 mx-5 font-alice">
      <div className="flex gap-10 flex-col lg:flex-row">
        {/* Checkout Form */}
        <div className="lg:w-1/2 shadow-lg p-5 border-t-4 rounded-md border-[#7043c3]">
          <h1 className="text-xl text-[#7043c3] lg:text-3xl mb-5">
            Personal Information
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`border transition-all ease-in-out duration-200 focus:border-[#7043c3] outline-none px-5 rounded-xl py-2 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`border transition-all ease-in-out duration-200 focus:border-[#7043c3] outline-none px-5 rounded-xl py-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number with country code (e.g., +91)"
                value={formData.phone}
                onChange={handleChange}
                className={`border transition-all ease-in-out duration-200 focus:border-[#7043c3] outline-none px-5 rounded-xl py-2 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your complete address"
                value={formData.address}
                onChange={handleChange}
                className={`border transition-all ease-in-out duration-200 focus:border-[#7043c3] outline-none px-5 rounded-xl py-2 resize-none ${
                  errors.address ? "border-red-500" : ""
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Checkout Button */}
            <CheckoutButton
              host={host}
              selectedVariant={selectedVariant}
              selectedMonths={selectedMonths}
              category={categoryName}
              disabled={isButtonDisabled}
            />
          </form>
        </div>

        {/* Order Details */}
        <div className="lg:w-1/2 shadow-lg px-5 lg:px-10 py-5 border-t-4 rounded-md border-[#7043c3]">
          <h1 className="text-xl text-[#7043c3] lg:text-3xl mb-5">Order Details</h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Server Location</h2>
            <div className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              <p>
                {Array.isArray(host?.data_center)
                  ? host.data_center.join(" | ").toUpperCase()
                  : host?.data_center?.toUpperCase() || "N/A"}
              </p>
            </div>

            <div>
              <h1 className="text-pink-400">{categoryName?.toUpperCase() || "N/A"}</h1>
            </div>

            <h2
              style={{ letterSpacing: "3px" }}
              className="font-semibold text-[#7043c3]"
            >
              {host?.name?.toUpperCase() || "N/A"}
            </h2>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Configuration</h2>
              <ul className="flex flex-col gap-2">
                {[host?.processor, host?.core, selectedVariant?.ram, selectedVariant?.storage].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <GrFormCheckmark className="text-xl text-[#7043c3]" />
                      {item || "N/A"}
                    </li>
                  )
                )}
              </ul>
              <h2>
                Price:{" "}
                <span className="text-[#7043c3] ml-1">
                  ${selectedVariant?.price ? (selectedVariant.price * selectedMonths).toFixed(2) : "N/A"}
                  <span>  for {selectedMonths} Months</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
