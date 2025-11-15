// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Success() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [showTick, setShowTick] = useState(false);

//   useEffect(() => {
//     // Step 1: show loading ring for 2 seconds
//     const timer1 = setTimeout(() => {
//       setLoading(false);
//       setShowTick(true);
//     }, 2000);

//     return () => clearTimeout(timer1);
//   }, []);

//   return (
//     <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
//       {/* LOADING STATE */}
//       {loading && (
//         <div className="flex flex-col items-center">
//           <div className="w-20 h-20 border-8 border-green-500 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-gray-600 mt-4 font-medium">Processing Payment...</p>
//         </div>
//       )}

//       {/* SUCCESS STATE */}
//       {!loading && showTick && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-4">
//           {/* Animated Tick */}
//           <div className="relative flex justify-center mb-6">
//             <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 52 52"
//                 className="w-16 h-16 text-white"
//               >
//                 <circle
//                   cx="26"
//                   cy="26"
//                   r="25"
//                   fill="none"
//                   stroke="white"
//                   strokeWidth="0"
//                 />
//                 <path
//                   fill="none"
//                   stroke="white"
//                   strokeWidth="5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14 27l7 7 16-16"
//                   className="animate-[draw_1s_ease-in-out_forwards]"
//                 />
//                 <style>
//                   {`
//                     @keyframes draw {
//                       0% {
//                         stroke-dasharray: 0 60;
//                       }
//                       100% {
//                         stroke-dasharray: 60 0;
//                       }
//                     }
//                   `}
//                 </style>
//               </svg>
//             </div>
//           </div>

//           {/* Payment Success Message */}
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Payment Successful
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Successfully Paid <span className="font-semibold">US$ 191.00</span>
//           </p>

//           {/* Payment Details */}
//           <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left text-gray-700 text-sm mb-8 shadow-inner">
//             <p className="flex justify-between mb-2">
//               <strong className="text-gray-500">Transaction ID:</strong>
//               <span className="font-semibold text-gray-800">356144228732</span>
//             </p>
//             <p className="flex justify-between mb-2">
//               <strong className="text-gray-500">Date:</strong>
//               <span className="font-semibold text-gray-800">21 May 2025</span>
//             </p>
//             <p className="flex justify-between mb-2">
//               <strong className="text-gray-500">Type of Transaction:</strong>
//               <span className="font-semibold text-gray-800">Credit Card</span>
//             </p>
//             <p className="flex justify-between mb-2">
//               <strong className="text-gray-500">Amount:</strong>
//               <span className="font-semibold text-gray-800">US$ 191.00</span>
//             </p>
//             <p className="flex justify-between mb-2">
//               <strong className="text-gray-500">Tax%:</strong>
//               <span className="font-semibold text-gray-800">$90</span>
//             </p>
//             <p className="flex justify-between">
//               <strong className="text-gray-500">Status:</strong>
//               <span className="text-green-600 font-semibold">Success</span>
//             </p>
//           </div>

//           {/* Back to Home */}
//           <button
//             onClick={() => navigate("/")}
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow font-semibold"
//           >
//             Back to Home
//           </button>
//         </div>
//       )}
//     </main>
//   );
// }





























import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTick(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
      {loading && (
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 border-8 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 font-medium">
            Processing Payment...
          </p>
        </div>
      )}

      {!loading && showTick && (
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md animate-fadeIn">
          {/* Confetti Burst Animation */}
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-28 h-28 rounded-full flex items-center justify-center">
              <div className="confetti"></div>
            </div>

            {/* Tick Animation */}
            <div className="relative z-10 w-28 h-28 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                className="w-16 h-16 text-white"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 27l7 7 16-16"
                  className="animate-[draw_1s_ease-in-out_forwards]"
                />
                <style>
                  {`
                    @keyframes draw {
                      0% { stroke-dasharray: 0 60; }
                      100% { stroke-dasharray: 60 0; }
                    }
                  `}
                </style>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful
          </h1>
          <p className="text-gray-600 mb-6">
            Successfully Paid <span className="font-semibold">US$ 191.00</span>
          </p>

          {/* Payment Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left text-gray-700 text-sm mb-8 shadow-inner">
            <p className="flex justify-between mb-2">
              <strong className="text-gray-500">Transaction ID:</strong>
              <span className="font-semibold text-gray-800">356144228732</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-500">Date:</strong>
              <span className="font-semibold text-gray-800">21 May 2025</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-500">Type of Transaction:</strong>
              <span className="font-semibold text-gray-800">Credit Card</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-500">Amount:</strong>
              <span className="font-semibold text-gray-800">US$ 191.00</span>
            </p>
            <p className="flex justify-between mb-2">
              <strong className="text-gray-500">Tax%:</strong>
              <span className="font-semibold text-gray-800">$90</span>
            </p>
            <p className="flex justify-between">
              <strong className="text-gray-500">Status:</strong>
              <span className="text-green-600 font-semibold">Success</span>
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow font-semibold"
          >
            Back to Home
          </button>
        </div>
      )}

      {/* Custom CSS Confetti Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .confetti::before,
        .confetti::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          top: 0;
          left: 0;
          background: radial-gradient(circle, 
            #ff477e 10%, transparent 10.5%),
            radial-gradient(circle, 
            #ffd300 10%, transparent 10.5%),
            radial-gradient(circle, 
            #00c2ff 10%, transparent 10.5%),
            radial-gradient(circle, 
            #7cff7c 10%, transparent 10.5%);
          background-size: 30% 30%;
          animation: spinConfetti 3s linear infinite;
        }

        @keyframes spinConfetti {
          0% { transform: rotate(0deg) scale(1); opacity: 1; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.8; }
          100% { transform: rotate(360deg) scale(1); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
