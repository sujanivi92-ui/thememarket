import React from "react";
import {
  Search,
  Users,
  Download,
  Tag,
  Globe,
  Target,
  Eye,
  Star,
} from "lucide-react";
import creative from "../assets/creative.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";

export default function About() {
  return (
    <main className="bg-[#f8f9ff]">
      {/* 🟣 HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={creative}
          alt="Creative hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md leading-tight">
            Empowering Creators Worldwide
          </h1>

          <div className="mt-8 w-full md:w-[640px]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden"
            >
              <button type="button" className="px-4 text-gray-400">
                <Search size={18} />
              </button>

              <input
                type="search"
                placeholder="Search for WordPress, E-commerce..."
                className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 font-semibold rounded-r-full hover:bg-green-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🟢 ICON / MISSION SECTION */}
      <section className="py-20 bg-[#f8f9ff] text-center px-6">
        <div className="max-w-6xl mx-auto">
          <hr className="border-gray-300 mb-10" />
          <h2 className="text-2xl font-bold text-[#101066] mb-12">
            Save on UI Templates
          </h2>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Users className="text-green-600" size={26} />,
                label: "50K+",
                text: "Active Users",
              },
              {
                icon: <Download className="text-green-600" size={26} />,
                label: "2.5M+",
                text: "Downloads",
              },
              {
                icon: <Tag className="text-green-600" size={26} />,
                label: "15K+",
                text: "Products",
              },
              {
                icon: <Globe className="text-green-600" size={26} />,
                label: "150+",
                text: "Countries",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {item.icon}
                  <h3 className="text-[#101066] font-extrabold text-lg">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission / Vision / Impact */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Target className="text-[#101066]" size={28} />,
                title: "Our Mission",
                desc: "To democratize web design by providing high-quality, affordable templates and themes that empower creators to build stunning websites without barriers.",
              },
              {
                icon: <Eye className="text-[#101066]" size={28} />,
                title: "Our Vision",
                desc: "To be the world’s most trusted marketplace for web templates and themes, known for quality, innovation, and exceptional customer experience.",
              },
              {
                icon: <Star className="text-[#101066]" size={28} />,
                title: "Our Impact",
                desc: "We’ve helped over 50,000 creators launch their websites, saving millions in development costs and countless hours of work.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
              >
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  {card.icon}
                  <h3 className="font-semibold text-[#101066]">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <h3 className="text-xl font-bold text-[#101066] mb-2">
            Our Core Values
          </h3>
          <p className="text-gray-600 mb-10">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="text-[#101066]" size={28} />,
                title: "Customer First",
                desc: "Everything we do starts with our customers. We listen, adapt, and continuously improve to deliver the best experience.",
              },
              {
                icon: <Eye className="text-[#101066]" size={28} />,
                title: "Quality Excellence",
                desc: "We maintain the highest standards for every theme and template. Each product is carefully reviewed and tested.",
              },
              {
                icon: <Star className="text-[#101066]" size={28} />,
                title: "Innovation",
                desc: "We stay ahead of design trends and technology to provide cutting-edge solutions for modern web development.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
              >
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  {value.icon}
                  <h3 className="font-semibold text-[#101066]">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 MEET OUR TEAM SECTION */}
      <section className="py-20 bg-[#f8f9ff] text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#101066] mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12">
            The passionate people behind the platform
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                img: team1,
                name: "Sarah Johnson",
                role: "CEO & Founder",
              },
              {
                img: team2,
                name: "Michael Chen",
                role: "CTO",
              },
              {
                img: team3,
                name: "Emily Rodriguez",
                role: "Head of Design",
              },
              {
                img: team4,
                name: "David Park",
                role: "VP of Product",
              },
              {
                img: team5,
                name: "James Wilson",
                role: "Head of Customer Success",
              },
              {
                img: team6,
                name: "Lisa Anderson",
                role: "Head of Marketing",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="bg-[#0d2c5b] text-white py-4">
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 🟢 CALL TO ACTION SECTION */}
<section className="py-20 bg-[#f8f9ff] px-6">
  <div className="max-w-5xl mx-auto bg-[#1e1b4b] text-center rounded-2xl shadow-lg py-14 px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
      Ready to Start Creating?
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-[17px] leading-relaxed">
      Join thousands of designers and developers who trust our platform to
      build amazing websites. Get started today.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <button
        onClick={() => (window.location.href = "/templates")}
        className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Browse Templates
      </button>

      <button
        onClick={() => (window.location.href = "/contact")}
        className="bg-white text-[#1e1b4b] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
      >
        Contact
      </button>
    </div>
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



      
    </main>
  );
}
