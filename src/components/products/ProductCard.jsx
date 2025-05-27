import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard({ products }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${products.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={products.thumbnail}
            alt={products.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {products.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {products.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">
              ${products.price.toFixed(2)}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {products.category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
