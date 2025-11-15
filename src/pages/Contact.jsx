


import React, { useState } from "react";
import { Search, ChevronDown, CheckCircle } from "lucide-react";
import creative from "../assets/creative.jpg";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const faqs = [
    {
      question: "What are your support hours?",
      answer:
        "Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EST. We also monitor emails on weekends and will respond as soon as possible.",
    },
    {
      question: "How quickly will I get a response?",
      answer:
        "We usually respond within 24 hours on business days, and often much sooner.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Currently, we provide support via email and live chat to ensure accurate tracking and fast replies.",
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer:
        "Yes! You can contact our team to arrange a live demo or one-on-one consultation based on your project needs.",
    },
    {
      question: "Where is your company located?",
      answer:
        "We’re a remote-first team with offices in multiple countries, ensuring global support availability.",
    },
  ];

  return (
    <main className="bg-[#f8f9ff]">
      {/* 🟣 HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={creative}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white">
          <h1 className="text-4xl font-extrabold mb-6">
            We’d Love to Hear From You
          </h1>

          <div className="w-full md:w-[640px]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-full shadow-lg border overflow-hidden"
            >
              <button type="button" className="px-4 text-gray-400">
                <Search size={18} />
              </button>
              <input
                type="text"
                placeholder="Search for WordPress, E-commerce..."
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
              <button className="bg-green-600 text-white px-6 py-3 font-semibold rounded-r-full hover:bg-green-700 transition">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🟢 SEND MESSAGE FORM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-10">
          <h2 className="text-center text-2xl font-bold text-[#0d1a4d] mb-2">
            Send Us a Message
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Fill out the form below and we’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-blue-200 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-blue-200 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                className="w-full mt-2 p-3 bg-blue-200 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                rows="5"
                className="w-full mt-2 p-3 bg-blue-200 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 🟣 FAQ SECTION */}
      <section className="py-20 px-6 bg-[#f8f9ff]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0d1a4d] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-10">
            Quick answers to common questions
          </p>

          {/* Accordion Section */}
          <div className="space-y-3 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border-none">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center text-white font-medium py-4 px-5 rounded-md transition duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-purple-900 to-indigo-700"
                      : "bg-gradient-to-r from-purple-800 to-indigo-700"
                  }`}
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                {openIndex === index && (
                  <div className="bg-gradient-to-r from-purple-900 to-indigo-700 text-white p-5 rounded-b-md">
                    <p className="text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help Center Button */}
          <button className="mt-6 bg-white text-[#0d1a4d] font-semibold text-sm px-4 py-2 rounded-md shadow hover:bg-gray-100">
            Visit Help Center
          </button>
        </div>

        {/* 🟢 We’re Here to Help Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#2a1a7a] text-white text-center rounded-2xl shadow-lg p-10">
          <CheckCircle size={40} className="mx-auto text-green-400 mb-4" />
          <h3 className="text-2xl font-extrabold mb-4">We’re Here to Help</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our dedicated support team is committed to providing you with the
            best experience. Whether you need technical assistance, have sales
            questions, or just want to say hello, we're always happy to hear
            from you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-medium">
            <p className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-400" /> 24-hour
              response time
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-400" /> Expert support
              team
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-400" /> Multiple
              contact options
            </p>
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
