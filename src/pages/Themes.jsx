import React, { useState } from "react";
import { Grid, List, Star, ShoppingCart, ExternalLink } from "lucide-react";

// Import all images
import awken from "../assets/awken.jpg";
import bangak from "../assets/bangak.jpg";
import creating from "../assets/creating.jpg";
import dish from "../assets/dish.jpg";
import fashion from "../assets/fashion.jpg";
import figos from "../assets/figos.jpg";
import hero from "../assets/hero.jpg";
import paul from "../assets/paul.jpg";
import schule from "../assets/schule.jpg";
import shoe from "../assets/shoe.jpg";
import tour from "../assets/tour.jpg";
import track from "../assets/track.jpg";
import service from "../assets/service.jpg";
import portfolio from "../assets/portfolio.jpg";
import home from "../assets/home.jpg";
import foody from "../assets/foody.jpg";
import fitme from "../assets/fitme.jpg";
import admin from "../assets/admin.jpg";

export default function Themes() {
  const [sort, setSort] = useState("Best Sellers");
  const [view, setView] = useState("grid");
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (name) => {
    setActiveFilter(activeFilter === name ? null : name);
  };

  const filters = [
    {
      name: "Category",
      options: ["Business", "Portfolio", "Blog", "E-Commerce", "Landing Page"],
    },
    {
      name: "Price",
      options: ["₹500 - ₹1000", "₹1500 - ₹1800", "₹2000 - ₹2250", "₹2250 - ₹3225"],
    },
    {
      name: "Rating",
      options: ["5 Stars", "4+ Stars", "3+ Stars"],
    },
    {
      name: "Features",
      options: ["Responsive Design", "One Page", "Dark Mode", "Page Builder", "WooCommerce"],
    },
    {
      name: "Compatibility",
      options: ["WordPress 6.0+", "WordPress 5.8+", "Gutenberg", "Classic Editor"],
    },
  ];

  const themes = [
    awken, bangak, creating, dish, fashion, figos, hero, paul, schule, shoe,
    tour, track, service, portfolio, home, foody, fitme, admin,
  ];

  return (
    <>
      {/* 🟣 HERO SECTION */}
      <section className="bg-[#f7f8ff] py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#6a21b6]">WordPress Themes</h2>
            <p className="text-gray-700 leading-relaxed">
              Discover premium WordPress themes crafted by top designers and developers.
              Each theme is carefully reviewed for quality, performance, and design excellence.
            </p>

            {/* Search Box */}
            <div className="flex items-center justify-center md:justify-start bg-white rounded-full shadow-md overflow-hidden w-full md:w-[400px]">
              <input
                type="text"
                placeholder="Search for WordPress, E-commerce...."
                className="flex-grow px-4 py-3 outline-none text-sm text-gray-700"
              />
              <button className="bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={figos}
              alt="WordPress theme preview"
              className="w-[500px] rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* 🟢 FILTERS + THEMES SECTION */}
      <section className="bg-[#f9f9ff] py-16 px-6">
        {/* Top Section with Sort + Toggle */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="text-gray-700 font-semibold">
            website templates compatible with
          </p>
          <p className="text-gray-700 font-semibold mb-6">
            WooCommerce sorted by best sellers.
          </p>

          {/* Sorting + View Toggle Row */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-4 py-2 rounded-md shadow-sm"
            >
              <option>Best Sellers</option>
              <option>Most Popular</option>
              <option>Newest First</option>
              <option>Price, Low to high</option>
              <option>Price, high to low</option>
            </select>

            {/* Toggle Buttons */}
            <div className="bg-gray-200 rounded-full flex items-center shadow-inner">
              <button
                onClick={() => setView("grid")}
                className={`px-3 py-2 rounded-full transition ${
                  view === "grid" ? "bg-green-500 text-white" : "text-gray-700"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-3 py-2 rounded-full transition ${
                  view === "list" ? "bg-green-500 text-white" : "text-gray-700"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filters + Themes Grid */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Sidebar Filters */}
          <div className="w-full md:w-1/4 md:sticky md:top-20 h-fit self-start">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            {filters.map((filter) => (
              <div key={filter.name} className="mb-4">
                <button
                  onClick={() => toggleFilter(filter.name)}
                  className="w-full bg-[#101066] text-white font-semibold flex justify-between items-center px-3 py-2 rounded-md"
                >
                  {filter.name}
                  <span>{activeFilter === filter.name ? "▲" : "▼"}</span>
                </button>

                {activeFilter === filter.name && (
                  <div className="bg-white border rounded-md mt-2 p-3 shadow-md">
                    {filter.options.map((opt, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 text-gray-700 mb-2"
                      >
                        <input
                          type="radio"
                          name={filter.name}
                          className="accent-green-500"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Grid/List Section */}
          <div
            className="w-full md:w-3/4 overflow-y-auto pr-2 scroll-smooth"
            style={{
              maxHeight: "80vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`::-webkit-scrollbar { display: none; }`}</style>

            <div
              className={`grid ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 gap-6" // only 2 per row
                  : "grid-cols-1 gap-4"
              }`}
            >
              {themes.map((image, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    view === "list" ? "flex items-center gap-4 p-2" : "p-3"
                  }`}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Theme ${index + 1}`}
                      className={`${
                        view === "list"
                          ? "w-48 h-32 object-cover"
                          : "w-full h-48 object-cover"
                      } transform hover:scale-105 transition duration-500`}
                    />
                  </div>

                  <div className={`${view === "list" ? "flex-1" : "mt-3"}`}>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                      Theme {index + 1} - Multipurpose Template
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">by UX-Themes</p>

                    <div className="flex items-center mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < 4 ? "#facc15" : "none"}
                          stroke="#facc15"
                        />
                      ))}
                      <span className="text-gray-600 text-xs ml-1">(4.6)</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold text-gray-700">$12</span>
                      <span className="text-gray-400 text-xs">205 Sales</span>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button className="flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-2 rounded-md hover:bg-blue-700 transition">
                        <ShoppingCart size={12} /> Add to Cart
                      </button>
                      <button className="flex items-center gap-2 bg-green-600 text-white text-xs px-3 py-2 rounded-md hover:bg-green-700 transition">
                        <ExternalLink size={12} /> Live Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>













        
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

      </section>
    </>
  );
}
