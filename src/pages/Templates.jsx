import React, { useState } from "react";
import { Search, Star, ShoppingCart, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

// 🖼️ Images (Make sure these exist in src/assets)
import schule from "../assets/schule.jpg";
import service from "../assets/service.jpg";
import agency from "../assets/agency.jpg";
import jour from "../assets/jour.jpg";
import admin from "../assets/admin.jpg";
import awken from "../assets/awken.jpg";
import figos from "../assets/figos.jpg";
import freeDesign from "../assets/free-design.jpg";
import track from "../assets/track.jpg";
import foody from "../assets/foody.jpg";
import travel from "../assets/travel.jpg";
import paul from "../assets/paul.jpg";
import village from "../assets/village.jpg";
import home from "../assets/home.jpg";
import portfolio from "../assets/portfolio.jpg";
import uncode from "../assets/uncode.jpg";
import pro from "../assets/pro.jpg";

export default function Templates() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleGoToCheckout = () => {
    setShowModal(false);
    navigate("/cart");
  };

  // 🧩 Card Component
  const Card = ({ img, title }) => (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-semibold text-gray-800 text-[15px]">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">by UX-themes</p>

        <div className="flex items-center mt-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < 4 ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
          <span className="text-gray-600 text-xs ml-1">6</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-gray-700">$99</span>
          <button
            onClick={() => handleAddToCart({ img, title, price: 19 })}
            className="bg-blue-600 text-white p-2 rounded-md hover:scale-110 hover:shadow-md transition-all duration-300"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
        <p className="text-gray-400 text-xs mt-1">205 Sales</p>
      </div>
    </div>
  );

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-[#f8f9ff] min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5b21b6]">
              Templates & UI Kits
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
              Browse our collection of premium HTML templates, landing pages, and UI kits.
              Built with modern frameworks and ready to customize for your next project.
            </p>

            {/* Search Box */}
            <div className="flex items-center bg-white border rounded-md shadow-sm overflow-hidden w-full md:w-[380px] mx-auto md:mx-0">
              <span className="px-3 text-gray-500">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search for WordPress, E commerce....."
                className="flex-grow px-2 py-3 text-sm text-gray-700 outline-none"
              />
              <button className="bg-green-600 text-white px-5 py-3 text-sm font-semibold hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6">
            {[schule, service].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-md shadow-md w-[420px]">
                <img
                  src={img}
                  alt={`template-${i}`}
                  className="w-full rounded-md transform hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SAVE ON UI TEMPLATES ---------------- */}
      <section className="bg-[#f8f9ff] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <hr className="border-gray-300 mb-10" />
          <h2 className="text-2xl font-bold text-[#101066] mb-12">
            Save on UI Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card img={agency} title="Flatsome - Multi-Purpose" />
            <Card img={jour} title="Horizon - Modern Landing Page Template" />
            <Card img={admin} title="AdminPro - Dashboard UI Kit" />
          </div>
        </div>
      </section>

      {/* ---------------- WEEKLY BESTSELLERS ---------------- */}
      <section className="bg-[#f8f9ff] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#101066] mb-12">
            Weekly Bestsellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card img={awken} title="Flatsome - Multi-Purpose" />
            <Card img={figos} title="Food Delivery Website" />
            <Card img={freeDesign} title="AdminPro - Dashboard UI Kit" />
            <Card img={track} title="ComponentHub - React UI Kit" />
            <Card img={foody} title="Flatsome - Multi-Purpose" />
            <Card img={travel} title="LaunchKit - SaaS Landing Template" />
          </div>
        </div>
      </section>

      {/* ---------------- TOP SELLERS ---------------- */}
      <section className="bg-[#f8f9ff] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#101066] mb-12">Top Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card img={paul} title="Flatsome - Multi-Purpose" />
            <Card img={village} title="Food Delivery Website" />
            <Card img={home} title="AdminPro - Dashboard UI Kit" />
          </div>
        </div>
      </section>

      {/* ---------------- TOP CLEAN ITEMS ---------------- */}
      <section className="bg-[#f8f9ff] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#101066] mb-12">
            Top Clean Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card img={portfolio} title="Portfolio - Creative Template" />
            <Card img={uncode} title="Uncode - Clean Design Theme" />
            <Card img={pro} title="Pro - Minimal Landing Template" />
          </div>
        </div>
      </section>

      {/* ---------------- CART MODAL ---------------- */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-[400px] text-center animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Check size={28} className="text-green-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Item added to your cart
            </h2>

            <div className="flex flex-col items-center border-t border-b py-4 mb-6">
              <img
                src={selectedItem.img}
                alt="Selected Item"
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <p className="text-gray-800 font-semibold">
                ${selectedItem.price || 19}
              </p>
              <p className="text-gray-600 text-sm">
                License: Regular <br /> Support: 6 month support
              </p>
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Keep Browsing
              </button>
              <button
                onClick={handleGoToCheckout}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      )}


      
{/* ===================== STAY UPDATED SECTION ===================== */}
<section className="bg-[#1e1b4b] text-white py-16 text-center">
  <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
  <p className="text-gray-300 mb-8 px-4">
    Get the latest themes, exclusive deals, and design inspiration delivered to your inbox weekly
  </p>

  <div className="flex justify-center px-4">
    <div className="bg-white rounded-full flex overflow-hidden w-full md:w-[500px] shadow-lg">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow px-5 py-3 outline-none text-sm text-gray-700"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-sm font-semibold transition">
        Subscribe
      </button>
    </div>
  </div>

  <p className="text-xs text-gray-400 mt-6">
    By subscribing, you agree to our Privacy Policy and consent to receive updates
  </p>
</section>



                





                {/* ===================== CUSTOMER TESTIMONIALS SECTION ===================== */}
<section className="bg-[#f7f8ff] py-20 text-center">
  <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow">
    What Our Customers Say
  </button>
  <p className="mt-3 text-gray-700">
    Join thousands of satisfied customers
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
    {[
      {
        name: "Sarah Johnson",
        role: "Web Developer",
        image:
          "https://randomuser.me/api/portraits/women/44.jpg",
        review:
          "The quality of themes on this marketplace is outstanding. I've built over 20 client sites using templates from here and they never disappoint.",
      },
      {
        name: "Michael Chen",
        role: "Agency Owner",
        image:
          "https://randomuser.me/api/portraits/men/32.jpg",
        review:
          "As an agency, we rely on high-quality templates to deliver projects quickly. The variety and quality here are unmatched in the industry.",
      },
      {
        name: "Emily Rodriguez",
        role: "Freelance Designer",
        image:
          "https://randomuser.me/api/portraits/women/68.jpg",
        review:
          "I love how easy it is to customize these themes. The documentation is excellent and the support from authors is fantastic.",
      },
    ].map((customer, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center"
      >
        <img
          src={customer.image}
          alt={customer.name}
          className="w-16 h-16 rounded-full mb-3 object-cover"
        />
        <h3 className="font-semibold text-gray-800">{customer.name}</h3>
        <p className="text-sm text-gray-500">{customer.role}</p>

        {/* Star Ratings */}
        <div className="flex justify-center mt-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.262 5.144a.563.563 0 00.475.345l5.514.401c.497.036.698.65.301.982l-4.203 3.527a.563.563 0 00-.182.557l1.28 5.3c.114.474-.402.85-.823.6l-4.646-2.703a.563.563 0 00-.586 0l-4.646 2.703c-.421.25-.937-.126-.823-.6l1.28-5.3a.563.563 0 00-.182-.557l-4.203-3.527c-.397-.332-.196-.946.301-.982l5.514-.401a.563.563 0 00.475-.345l2.262-5.144z"
              />
            </svg>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-3">{customer.review}</p>
      </div>
    ))}
  </div>
</section>


          

{/* ===================== FOOTER SECTION ===================== */}
<footer className="bg-[#3b1f86] text-white py-12">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

    {/* Brand Section */}
    <div>
      <h2 className="text-2xl italic font-bold mb-4">ThemeMarket</h2>
      <ul className="space-y-2 text-sm text-gray-200">
        <li><a href="#" className="hover:text-white transition">All Items</a></li>
        <li><a href="#" className="hover:text-white transition">WordPress Themes</a></li>
        <li><a href="#" className="hover:text-white transition">HTML Templates</a></li>
        <li><a href="#" className="hover:text-white transition">UI Templates</a></li>
        <li><a href="#" className="hover:text-white transition">Plugins</a></li>
      </ul>
    </div>

    {/* Company Section */}
    <div>
      <h3 className="font-semibold mb-3 text-gray-100">Company</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="#" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
        <li><a href="#" className="hover:text-white transition">Press</a></li>
        <li><a href="#" className="hover:text-white transition">Blog</a></li>
      </ul>
    </div>

    {/* Support Section */}
    <div>
      <h3 className="font-semibold mb-3 text-gray-100">Support</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
        <li><a href="#" className="hover:text-white transition">Documentation</a></li>
        <li><a href="#" className="hover:text-white transition">Forums</a></li>
        <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
      </ul>
    </div>

    {/* Legal Section */}
    <div>
      <h3 className="font-semibold mb-3 text-gray-100">Legal</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white transition">License Agreement</a></li>
      </ul>
    </div>

    {/* Social Icons Section */}
    <div className="flex flex-col justify-end items-center lg:items-end mt-6 lg:mt-0">
      <div className="flex space-x-4">
        <a href="#" className="bg-white hover:bg-gray-200 p-2 rounded-md transition">
          <i className="fab fa-facebook-f text-[#3b1f86] text-lg"></i>
        </a>
        <a href="#" className="bg-white hover:bg-gray-200 p-2 rounded-md transition">
          <i className="fab fa-instagram text-[#3b1f86] text-lg"></i>
        </a>
        <a href="#" className="bg-white hover:bg-gray-200 p-2 rounded-md transition">
          <i className="fab fa-twitter text-[#3b1f86] text-lg"></i>
        </a>
        <a href="#" className="bg-white hover:bg-gray-200 p-2 rounded-md transition">
          <i className="fab fa-linkedin-in text-[#3b1f86] text-lg"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Divider Line */}
  <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
    © 2025 <span className="font-semibold text-white">ThemeMarket.</span> All rights reserved.
  </div>
</footer>
 </>
  );
}
