import React, { useState, useEffect } from "react";
import { Pagination, Select } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [category, setCategory] = useState("all");
  const pageSize = 12;

  // Fetch products from your API
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        (currentPage - 1) * pageSize
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [currentPage, category]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const categories = [
    { value: "all", label: "All Products" },
    { value: "women", label: "Women's Health" },
    { value: "men", label: "Men's Health" },
    { value: "food", label: "Food Sensitivity" },
    { value: "supplements", label: "Supplements" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of health testing kits designed to help you
            take control of your health journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtering */}
        <div className="mb-8">
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={(value) => setCategory(value)}
            options={categories}
            className="w-full sm:w-64"
          />
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-600">Loading products...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <Pagination
                current={currentPage}
                total={totalProducts}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
