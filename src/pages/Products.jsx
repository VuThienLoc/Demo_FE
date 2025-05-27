import React, { useState, useEffect } from "react";
import { Pagination, Select, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";

const { Title, Paragraph } = Typography;

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
        console.log(data.products);
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
    <div className="bg-gray-50 min-h-screen py-6">
      {/* Header Section */}
      <Card
        style={{ maxWidth: screen, margin: "0 auto 48px", textAlign: "center" }}
        variant={false}
      >
        <Title level={1} style={{ color: "#1677ff" }}>
          Explore Our Products
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 18 }}>
          Discover a curated selection of products designed to support your
          health and wellness journey. From supplements to specialized tools,
          find everything you need to live your best life.
        </Paragraph>
      </Card>

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
                <ProductCard key={product.id} products={product} />
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
