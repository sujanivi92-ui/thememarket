import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  ShoppingBag,
  Camera,
  Briefcase,
  BookOpen,
  Smartphone,
  Megaphone,
  Wifi,
  Star,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";

// Images
import village from "../assets/village.jpg";
import dish from "../assets/dish.jpg";
import wings from "../assets/wings.jpg";
import track from "../assets/track.jpg";
import agency from "../assets/agency.jpg";
import fitme from "../assets/fitme.jpg";
import freeDesign from "../assets/free-design.jpg";
import homeImg from "../assets/home.jpg";
import website from "../assets/website.jpg";
import portfolio from "../assets/portfolio.jpg";
import awken from "../assets/awken.jpg";
import shoe from "../assets/shoe.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import figos from "../assets/figos.jpg";
import foody from "../assets/foody.jpg";
import tour from "../assets/tour.jpg";
import creating from "../assets/creating.jpg";
import paul from "../assets/paul.jpg";
import bangak from "../assets/bangak.jpg";
import oyster from "../assets/oyster.jpg";
import service from "../assets/service.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [tab, setTab] = useState("week");

  const weekThemes = [
    { id: 1, title: "Flatsome – Multi-Purpose", author: "UX-themes", price: "$12", image: figos },
    { id: 2, title: "Avada – Website Builder For", author: "UX-themes", price: "$19", image: freeDesign },
    { id: 3, title: "Food Delivery Website", author: "UX-themes", price: "$25", image: foody },
  ];

  const monthThemes = [
    { id: 4, title: "Food Delivery Website", author: "UX-themes", price: "$12", image: village },
    { id: 5, title: "Uncode – Creative Multiuse", author: "UX-themes", price: "$12", image: website },
    { id: 6, title: "E – Commerce Website", author: "UX-themes", price: "$12", image: homeImg },
  ];

  const activeThemes = tab === "week" ? weekThemes : monthThemes;

  const themes = [
    { id: 1, title: "Flatsome - Multi-Purpose", author: "UX-themes", price: "$99", image: agency },
    { id: 2, title: "Restaurant Website", author: "UX-themes", price: "$12", image: fitme },
    { id: 3, title: "Avada - Website Builder", author: "ThemeFusion", price: "$19", image: freeDesign },
    { id: 4, title: "Salient - Ecommerce", author: "UX-themes", price: "$12", image: homeImg },
    { id: 5, title: "Uncode - Portfolio", author: "UX-themes", price: "$12", image: website },
    { id: 6, title: "Porto - HTML Code", author: "P-THEMES", price: "$12", image: portfolio },
  ];

  const newArrivals = [
    { id: 7, title: "Zenix - Dashboard", author: "DexignZone", price: "$99", image: tour },
    { id: 8, title: "ShopMaster - eCommerce", author: "ThemePure", price: "$36", image: creating },
    { id: 9, title: "Blogify - Minimal Blog", author: "ThemeFusion", price: "$25", image: paul },
    { id: 10, title: "LaunchPad - SaaS", author: "UX-themes", price: "$22", image: bangak },
    { id: 11, title: "AppFlow - App Showcase", author: "DigitalHub", price: "$52", image: oyster },
    { id: 12, title: "CreativeStudio - Agency", author: "P-THEMES", price: "$15", image: service },
  ];

  const handleAddToCart = (theme) => {
    setSelectedItem(theme);
  };

  return (
    <section className="bg-[#f7f8ff]">
      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full shadow text-sm font-semibold"
          >
            50,000+ Premium Templates Available
          </motion.div>

          <h1 className="text-5xl font-extrabold leading-tight">
            Build Stunning <br />
            <span className="text-purple-700">Websites Faster</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Access thousands of professionally designed WordPress themes and templates.
          </p>

          {/* SEARCH BAR */}
          <div className="flex bg-white rounded-full shadow overflow-hidden w-full md:w-[420px] mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search for WordPress, E-commerce..."
              className="flex-grow px-4 py-3 outline-none text-sm"
            />
            <button className="bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-700">
              Search
            </button>
          </div>
        </div>

        {/* ================= HERO IMAGES ================= */}
        <div className="flex-1 relative">
          <motion.img
            src={dish}
            className="rounded-xl shadow-lg absolute top-0 left-[10%] w-[270px] md:w-[300px] z-30 border border-white"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: [0, -12, 0], opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img
            src={wings}
            className="rounded-xl shadow-xl w-[350px] md:w-[400px] z-40 relative border border-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: [0, -18, 0], opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.img
            src={track}
            className="rounded-xl shadow-lg absolute -bottom-12 right-[12%] w-[270px] md:w-[300px] z-20 border border-white"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      </div>

      {/* ================= THEME CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="bg-white rounded-xl shadow p-4 border hover:shadow-xl hover:border-purple-400 transition"
          >
            <img src={theme.image} className="rounded-lg mb-3 h-48 w-full object-cover" />
            <h3 className="font-semibold text-center">{theme.title}</h3>
            <p className="text-gray-600 text-sm text-center">by {theme.author}</p>
            <p className="text-center font-bold mt-2">{theme.price}</p>

            <div className="flex justify-center text-yellow-400 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "#facc15" : "none"} stroke="#facc15" />
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => handleAddToCart(theme)}
                className="bg-purple-600 text-white px-5 py-2 rounded-md flex items-center gap-2"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>

              <button
                onClick={() => navigate("/themes")}
                className="bg-blue-600 text-white px-5 py-2 rounded-md"
              >
                Live Preview
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CART MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-[90%] md:w-[400px] text-center">
            <CheckCircle className="text-green-600 w-10 h-10 mx-auto" />

            <h2 className="text-xl font-bold mt-2">Item added to your cart</h2>

            <img
              src={selectedItem.image}
              className="w-20 h-20 object-cover rounded-md mx-auto mt-4"
            />

            <p className="font-semibold mt-2">{selectedItem.title}</p>
            <p>{selectedItem.price}</p>

            <div className="flex justify-center gap-3 mt-5">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Keep Browsing
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TRENDING COLLECTIONS ================= */}
      <div className="bg-[#f7f8ff] py-20 mt-20">
        <div className="text-center mb-10">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full shadow">
            Trending Collections
          </button>
          <p className="mt-3 text-gray-600">Curated collections from our experts</p>
        </div>
        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[awken, shoe, portfolioImg].map((img, i) => {
            const items = ["24 Items", "32 Items", "18 Items"][i];
            const titles = [
              "Modern Business Templates",
              "E-Commerce Solutions",
              "Creative Portfolio Designs",
            ];
            const desc = [
              "Professional templates for corporate websites",
              "Everything you need for online stores",
              "Showcase your work in style",
            ];

            return (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt={titles[i]}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute bottom-[-100%] group-hover:bottom-0 left-0 w-full bg-white px-5 py-4 transition-all duration-500 shadow-md">
                  <h3 className="font-semibold text-green-600">{titles[i]}</h3>
                  <p className="text-gray-600 text-sm mt-1">{desc[i]}</p>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
                    {items}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================== TRUSTED BY MILLIONS ==================== */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Trusted by Millions Worldwide</h2>
        <p className="text-gray-300 mt-2">Join the world’s largest digital marketplace</p>

        <div className="flex flex-wrap justify-center gap-12 mt-10">
          {[
            { label: "Community Members", value: "12M+" },
            { label: "Digital Products", value: "50K+" },
            { label: "Total Downloads", value: "500M+" },
            { label: "Elite Authors", value: "15K+" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BEST SELLERS ================= */}
      <div className="bg-[#f7f8ff] py-20 text-center">
        <h2 className="text-2xl font-bold text-purple-700">Best Sellers</h2>
        <p className="text-gray-600">Top selling items this period</p>

        <div className="flex justify-center mt-6">
          <div className="bg-gray-200 rounded-full flex shadow-inner">
            <button
              onClick={() => setTab("week")}
              className={`px-6 py-2 rounded-full ${
                tab === "week" ? "bg-green-500 text-white" : "text-gray-600"
              }`}
            >
              This Week
            </button>

            <button
              onClick={() => setTab("month")}
              className={`px-6 py-2 rounded-full ${
                tab === "month" ? "bg-green-500 text-white" : "text-gray-600"
              }`}
            >
              This Month
            </button>
          </div>
        </div>

        {/* Best Sellers Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
          {activeThemes.map((theme) => (
            <div
              key={theme.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-500 overflow-hidden"
            >
              <img
                src={theme.image}
                className="w-full h-48 object-cover group-hover:scale-110 transition-all"
              />

              <div className="p-4">
                <h3 className="font-semibold text-center">{theme.title}</h3>
                <p className="text-gray-600 text-sm text-center">by {theme.author}</p>
                <p className="text-center font-bold mt-1">{theme.price}</p>

                {/* Ratings */}
                <div className="flex justify-center text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "#facc15" : "none"} stroke="#facc15" />
                  ))}
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button
                    onClick={() => setSelectedItem(theme)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>

                  <button
                    onClick={() => navigate("/themes")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= NEW ARRIVALS ================== */}
      <div className="bg-[#f7f8ff] py-20 text-center">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full">New Arrivals</button>
        <p className="text-gray-700 mt-3">Fresh templates added this week</p>

        <div className="flex justify-end max-w-6xl mx-auto px-6 mt-4">
          <button
            onClick={() => navigate("/themes")}
            className="text-green-600 hover:underline font-semibold"
          >
            View All →
          </button>
        </div>

        {/* New Arrivals Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-6">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow border hover:shadow-xl hover:border-purple-500 transition overflow-hidden"
            >
              <img src={item.image} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="font-semibold text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.author}</p>
                <p className="font-bold text-center mt-2">{item.price}</p>

                <div className="flex justify-center text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "#facc15" : "none"} stroke="#facc15" />
                  ))}
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>

                  <button
                    onClick={() => navigate("/themes")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="bg-[#f7f8ff] py-20 text-center">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full">
          Why Choose Our Marketplace
        </button>
        <p className="text-gray-700 mt-3">Everything you need to build amazing websites</p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
          {[
            { icon: "✅", title: "Quality Guaranteed", desc: "Every template is reviewed manually" },
            { icon: "📥", title: "Instant Downloads", desc: "Access your files immediately" },
            { icon: "🎧", title: "24/7 Support", desc: "We are here to help anytime" },
            { icon: "🔁", title: "Regular Updates", desc: "Authors frequently update files" },
            { icon: "🏆", title: "Elite Authors", desc: "Top creators from around the world" },
            { icon: "💲", title: "Great Value", desc: "Affordable pricing & sales" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl bg-green-100 text-green-600 p-3 rounded-full w-fit mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SUBSCRIBE ===================== */}
      <section className="bg-[#1e1b4b] text-white py-16 text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="text-gray-300 mt-2">
          Get the latest themes, deals & design inspiration weekly
        </p>

        <div className="flex justify-center mt-8 px-4">
          <div className="bg-white rounded-full flex overflow-hidden w-full md:w-[500px] shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 text-gray-700 outline-none"
            />
            <button className="bg-green-500 px-6 py-3 text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          By subscribing, you agree to our Privacy Policy
        </p>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#3b1f86] text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold italic">ThemeMarket</h2>
            <ul className="mt-4 space-y-2 text-gray-200 text-sm">
              <li>All Items</li>
              <li>WordPress Themes</li>
              <li>HTML Templates</li>
              <li>UI Templates</li>
              <li>Plugins</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Forums</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>License Agreement</li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex space-x-4 items-center lg:justify-end">
            {["facebook", "instagram", "twitter", "linkedin"].map((icon, i) => (
              <div key={i} className="bg-white p-2 rounded-md">
                <i className={`fab fa-${icon} text-[#3b1f86] text-lg`}></i>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm text-gray-300">
          © 2025 <span className="text-white font-semibold">ThemeMarket</span>. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
