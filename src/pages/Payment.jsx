import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Calendar,
  Lock,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import rupay from "../assets/rupay.png";
import gpay from "../assets/gpay.png";
import paypal from "../assets/paypal.png";
import phonepe from "../assets/phonepe.png";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/success"); // navigate to Payment Success page
  };

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Select Payment Method
        </h1>
        <hr className="border-gray-200 mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE - PAYMENT FORM */}
          <form
            onSubmit={handlePayment}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {/* CREDIT CARD OPTION */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="mt-1"
              />
              <div>
                <p className="font-semibold text-gray-800">Credit/Debit Cards</p>
                <p className="text-sm text-gray-500">
                  Pay with your Credit / Debit Card
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <img src={visa} alt="Visa" className="w-8" />
                <img src={master} alt="MasterCard" className="w-8" />
                <img src={rupay} alt="Rupay" className="w-8" />
              </div>
            </label>

            {paymentMethod === "card" && (
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                  />
                  <CreditCard
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full border rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                    <Calendar
                      size={18}
                      className="absolute left-3 top-3 text-gray-400"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full border rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                    <Lock
                      size={18}
                      className="absolute left-3 top-3 text-gray-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* BANK TRANSFER */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="mt-1"
              />
              <div>
                <p className="font-semibold text-gray-800">Direct Bank Transfer</p>
                <p className="text-sm text-gray-500">
                  Make payment directly through bank account.
                </p>
              </div>
            </label>

            {/* OTHER PAYMENT METHODS */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "other"}
                onChange={() => setPaymentMethod("other")}
                className="mt-1"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  Other Payment Methods
                </p>
                <p className="text-sm text-gray-500">
                  Make payment through Gpay, Paypal, PhonePe etc.
                </p>
              </div>
              <div className="flex gap-2">
                <img src={gpay} alt="GPay" className="w-6" />
                <img src={paypal} alt="Paypal" className="w-6" />
                <img src={phonepe} alt="PhonePe" className="w-6" />
              </div>
            </label>

            {/* BUTTONS */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="bg-white border px-5 py-2 rounded-md shadow hover:bg-gray-100 flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </button>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow font-semibold"
              >
                Pay Securely
              </button>
            </div>
          </form>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Order Summary <span className="text-sm text-gray-400">(4 items)</span>
            </h3>

            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Wordpress Theme</span> <span>$99.00</span>
              </div>
              <div className="flex justify-between">
                <span>Restaurant Template</span> <span>$12.00</span>
              </div>
              <div className="flex justify-between">
                <span>Avada - Website Builder</span> <span>$12.00</span>
              </div>
              <div className="flex justify-between">
                <span>CreativeStudio - Agency</span> <span>$15.00</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-green-600 font-semibold">
                <span>Total Discount</span> <span>$6.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Handling Fee</span> <span>$0.00</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span> <span>US$ 191.00</span>
              </div>
            </div>

            <div className="text-center mt-4 text-gray-500 text-sm">
              <Lock size={14} className="inline mr-1" />
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
