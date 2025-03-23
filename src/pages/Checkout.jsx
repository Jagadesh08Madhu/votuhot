import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GrFormCheckmark } from 'react-icons/gr';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { host, selectedVariant } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Navigate to payment or perform further actions
    navigate('/payment', { state: { formData, host, selectedVariant } });
  };

  return (
    <section className='py-10 lg:mx-20 mx-5 font-alice'>
      <div className='flex gap-10 flex-col lg:flex-row'>
        {/* Checkout Form */}
        <div className='lg:w-1/2 shadow-lg p-5 border-t-4 rounded-md border-[#7043c3]'>
          <h1 className='text-xl text-[#7043c3] lg:text-3xl mb-5'>Personal Information</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {['fullName', 'email', 'password', 'confirmPassword'].map((field) => (
              <div key={field} className='flex flex-col gap-2'>
                <label htmlFor={field} className='capitalize'>{field.replace('Name', ' Name')}</label>
                <input
                  id={field}
                  name={field}
                  type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
                  placeholder={`Enter your ${field.replace('Name', ' name')}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`border transition-all ease-in-out duration-200 focus:border-[#7043c3] outline-none px-5 rounded-xl py-2 ${errors[field] ? 'border-red-500' : ''}`}
                />
                {errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p>}
              </div>
            ))}

            <button
              type='submit'
              disabled={isButtonDisabled}
              className='bg-[#7043c3] rounded-xl py-2 text-white disabled:bg-gray-400'
            >
              Proceed to Pay
            </button>
          </form>
        </div>

        {/* Order Details */}
        <div className='lg:w-1/2 shadow-lg px-5 lg:px-10 py-5 border-t-4 rounded-md border-[#7043c3]'>
          <h1 className='text-xl text-[#7043c3] lg:text-3xl mb-5'>Order Details</h1>
          <div className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold'>Server Location</h2>
            <div className='flex items-center gap-2'>
              <input type='radio' checked readOnly />
              <p>{host?.data_center ? host.data_center.join(' | ').toUpperCase() : 'N/A'}</p>
            </div>

            <h2 style={{ letterSpacing: '3px' }} className='font-semibold text-[#7043c3]'>{host?.name?.toUpperCase()}</h2>
            <div className='flex flex-col gap-3'>
              <h2 className='text-lg font-semibold'>Configuration</h2>
              <ul className='flex flex-col gap-2'>
                {[host?.processor, host?.core, selectedVariant?.ram, selectedVariant?.storage].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <GrFormCheckmark className='text-xl text-[#7043c3]' />
                    {item}
                  </li>
                ))}
              </ul>
              <h2>Price: <span className='text-[#7043c3] ml-1'>${selectedVariant?.price || 'N/A'}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
