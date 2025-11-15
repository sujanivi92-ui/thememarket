import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/payment"); // Navigate to Payment.jsx page
  };

  return (
    <main className="bg-[#f9f9f9] min-h-screen py-10 px-6">
      {/* 🟣 Page Title */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-3">
          Secure Checkout
        </h1>
      </div>

      {/* 🟢 Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE - FORM */}
        <form
          onSubmit={handleContinue}
          className="flex-1 bg-white shadow-md rounded-xl p-8"
        >
          {/* CONTACT DETAILS */}
          <section className="mb-10">
            <h2 className="font-semibold text-gray-700 mb-4">
              Contact Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Phone Number</label>
              <div className="flex">
                <select className="border rounded-l-md p-2 bg-gray-50 text-gray-700">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  required
                  className="flex-1 border rounded-r-md p-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </section>

          {/* SHIPPING DETAILS */}
          <section>
            <h2 className="font-semibold text-gray-700 mb-4">
              Shipping Details
            </h2>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Flat/House No.</label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Address</label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">State</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-600">Postal Code</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  Famous Landmark
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" id="sameAddress" />
              <label
                htmlFor="sameAddress"
                className="text-sm text-gray-600 cursor-pointer"
              >
                My shipping and Billing address are the same
              </label>
            </div>
          </section>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-2 rounded-md font-semibold shadow hover:bg-green-600 transition"
            >
              Continue
            </button>
          </div>
        </form>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl p-8 h-fit">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Order Summary
          </h3>
          <ul className="text-sm text-gray-600 mb-4 space-y-2">
            <li className="flex justify-between">
              <span>Wordpress Theme</span>
              <span>$99.00</span>
            </li>
            <li className="flex justify-between">
              <span>Restaurant Template</span>
              <span>$12.00</span>
            </li>
            <li className="flex justify-between">
              <span>Avada - Website Builder</span>
              <span>$12.00</span>
            </li>
            <li className="flex justify-between">
              <span>CreativeStudio - Agency</span>
              <span>$15.00</span>
            </li>
          </ul>

          <div className="text-sm text-gray-600 mb-2 flex justify-between">
            <span className="text-green-600 font-semibold">Total discount</span>
            <span>$6.00</span>
          </div>
          <div className="text-sm text-gray-600 mb-2 flex justify-between">
            <span>Handling Fee</span>
            <span>$0.00</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>US$ 191.00</span>
          </div>

          <div className="flex justify-center items-center mt-4 text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zM2.458 12C3.732 7.943 7.482 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.024 7-9.542 7s-8.268-2.943-9.542-7z"
              />
            </svg>
            Secure Checkout
          </div>
        </div>
      </div>
    </main>
  );
}
