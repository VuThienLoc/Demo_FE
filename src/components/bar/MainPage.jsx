import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";

function main() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">For Students</h2>
          <p className="text-gray-600 mb-6">
            Age-appropriate sex education materials helping students understand
            their bodies and develop life skills.
          </p>
          <Link
            to="/students"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">For Teachers</h2>
          <p className="text-gray-600 mb-6">
            Professional teaching tools and materials to effectively communicate
            sex education knowledge.
          </p>
          <Link
            to="/teachers"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">For Parents</h2>
          <p className="text-gray-600 mb-6">
            Guidance and advice to help parents discuss sex education topics
            with their children.
          </p>
          <Link
            to="/parents"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Learn More →
          </Link>
        </div>
      </div>

      <Price />
    </div>
  );
}

export default main;
