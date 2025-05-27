import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import BlogSection from "./BlogSection";

function main() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <BlogSection />
      <Price />
    </div>
  );
}

export default main;
