// import React from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import creative from "../assets/creative.jpg";
// import agency from "../assets/agency.jpg";
// import home from "../assets/home.jpg";
// import grovest from "../assets/grovest.jpg";

// export default function Contact() {
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   const cartItems = [
//     {
//       id: 1,
//       image: agency,
//       title: "Wordpress Theme",
//       license: "Regular License",
//       price: 99,
//     },
//     {
//       id: 2,
//       image: creative,
//       title: "Restaurant Template",
//       license: "Regular License",
//       price: 12,
//     },
//     {
//       id: 3,
//       image: home,
//       title: "Avada - Website Builder",
//       license: "Regular License",
//       price: 12,
//     },
//     {
//       id: 4,
//       image: grovest,
//       title: "CreativeStudio - Agency",
//       license: "Regular License",
//       price: 15,
//     },
//   ];

//   return (
//     <main className="bg-[#f8f9ff]">
//       {/* 🟣 HERO SECTION */}
//       <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
//         <img
//           src={creative}
//           alt="Contact Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

//         <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white">
//           <h1 className="text-4xl font-extrabold mb-6">
//             We’d Love to Hear From You
//           </h1>

//           <div className="w-full md:w-[640px]">
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="flex items-center bg-white rounded-full shadow-lg border overflow-hidden"
//             >
//               <button type="button" className="px-4 text-gray-400">
//                 <Search size={18} />
//               </button>
//               <input
//                 type="text"
//                 placeholder="Search for WordPress, E-commerce..."
//                 className="flex-1 px-4 py-3 text-gray-700 outline-none"
//               />
//               <button className="bg-green-600 text-white px-6 py-3 font-semibold rounded-r-full hover:bg-green-700 transition">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* 🛒 SHOPPING CART SECTION */}
//       <section className="px-6 py-16 bg-[#f8f9ff]">
//         <h2 className="text-3xl font-bold text-center text-[#1a1a3d] mb-8">
//           Shopping Cart
//         </h2>

//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
//           {/* LEFT SIDE - CART ITEMS */}
//           <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center mb-6">
//               <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
//                 Continue Shopping
//               </button>
//               <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
//                 Empty Cart
//               </button>
//             </div>

//             {/* Cart Items */}
//             <div className="divide-y">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col md:flex-row items-center justify-between py-4"
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-28 h-20 object-cover rounded-md shadow-sm"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-gray-800">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         License:{" "}
//                         <span className="underline">{item.license}</span>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 mt-4 md:mt-0">
//                     <div className="flex items-center border rounded-md">
//                       <button className="px-3 py-1 text-gray-600">−</button>
//                       <span className="px-3 py-1 border-x">1</span>
//                       <button className="px-3 py-1 text-gray-600">+</button>
//                     </div>
//                     <p className="font-semibold text-gray-800">${item.price}</p>
//                     <button className="text-gray-400 hover:text-red-500 text-lg">
//                       ✕
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-4 border rounded-md text-sm text-gray-600 p-3 bg-gray-50">
//               Extend support to 12 months. +$6.38{" "}
//               <span className="text-gray-400">Save $8.50.</span>{" "}
//               <a href="#" className="text-blue-600 hover:underline">
//                 Learn more
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SIDE - CART SUMMARY */}
//           <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
//               Your Cart Total
//             </h3>

//             <div className="text-center mb-4">
//               <p className="text-2xl font-bold text-gray-800">US$ 424</p>
//               <p className="text-green-600 font-semibold mt-1">
//                 Total Saving $19
//               </p>
//             </div>

//             <button
//               onClick={handleCheckout}
//               className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md shadow-md transition"
//             >
//               Secure Checkout
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-3">
//               Price displayed excludes any applicable{" "}
//               <span className="underline">taxes and handling fee</span>.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import creative from "../assets/creative.jpg";
import agency from "../assets/agency.jpg";
import home from "../assets/home.jpg";
import grovest from "../assets/grovest.jpg";

export default function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // 🟢 Initial Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: agency,
      title: "Wordpress Theme",
      license: "Regular License",
      price: 99,
      quantity: 1,
    },
    {
      id: 2,
      image: creative,
      title: "Restaurant Template",
      license: "Regular License",
      price: 12,
      quantity: 1,
    },
    {
      id: 3,
      image: home,
      title: "Avada - Website Builder",
      license: "Regular License",
      price: 12,
      quantity: 1,
    },
    {
      id: 4,
      image: grovest,
      title: "CreativeStudio - Agency",
      license: "Regular License",
      price: 15,
      quantity: 1,
    },
  ]);

  // 🟣 Increment Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 🔵 Decrement Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 🔴 Remove Item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 🟢 Calculate Total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="bg-[#f8f9ff]">
      {/* 🟣 HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={creative}
          alt="Cart Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white">
          <h1 className="text-4xl font-extrabold mb-6">Shopping Cart</h1>

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

      {/* 🛒 SHOPPING CART SECTION */}
      <section className="px-6 py-16 bg-[#f8f9ff]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE - CART ITEMS */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
                Continue Shopping
              </button>
              <button
                onClick={() => setCartItems([])}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Empty Cart
              </button>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-20 object-cover rounded-md shadow-sm"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        License:{" "}
                        <span className="underline">{item.license}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 text-gray-600"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 text-gray-600"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 text-lg"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border rounded-md text-sm text-gray-600 p-3 bg-gray-50">
              Extend support to 12 months. +$6.38{" "}
              <span className="text-gray-400">Save $8.50.</span>{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Learn more
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - CART SUMMARY */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Your Cart Total
            </h3>

            <div className="text-center mb-4">
              <p className="text-2xl font-bold text-gray-800">
                US$ {total.toFixed(2)}
              </p>
              <p className="text-green-600 font-semibold mt-1">
                Total Saving $19
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              Secure Checkout
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              Price displayed excludes any applicable{" "}
              <span className="underline">taxes and handling fee</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
