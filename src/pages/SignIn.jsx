import React from "react";

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* ===================== BLUE CIRCLES BACKGROUND ===================== */}
      <div className="absolute -left-32 -top-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-300 to-blue-500"></div>
      <div className="absolute -left-20 bottom-0 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-300 to-blue-600"></div>

      <div className="absolute right-0 bottom-0 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-300 to-blue-500"></div>

      {/* ===================== SIGN-IN CARD ===================== */}
      <div className="relative bg-white w-[450px] rounded-xl p-10 shadow-xl z-10">

        {/* Close Button */}
        <div className="absolute right-4 top-4 text-xl cursor-pointer font-bold text-gray-700">
          ×
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Sing in</h2>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* Terms checkbox */}
        <label className="flex items-center text-sm text-gray-600 mb-4 cursor-pointer">
          <input type="checkbox" className="mr-2" />
          I understood the <span className="text-blue-600 ml-1">terms & policy.</span>
        </label>

        {/* Create Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold shadow">
          Create Account
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <span className="flex-grow border-t border-gray-300"></span>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <span className="flex-grow border-t border-gray-300"></span>
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </button>

        {/* Login link */}
        <p className="text-sm text-center mt-5">
          Already have an account ?{" "}
          <span className="text-red-500 cursor-pointer font-semibold">Log in</span>
        </p>
      </div>
    </div>
  );
}
