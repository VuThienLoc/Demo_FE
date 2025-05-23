import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center bg-blue-50 bg-[url('./assets/logo.svg')] bg-cover bg-center pb-4 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Empowering Gender Education
      </h1>
      <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl">
        Providing essential knowledge and skills for healthy, safe, and
        respectful development. Join us in creating a more inclusive future.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/learn-more"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Hero;
