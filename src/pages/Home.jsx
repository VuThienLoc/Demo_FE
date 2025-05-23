import { Link } from "react-router-dom";
import React from "react";
import { Divider } from "antd";
import Navbar from "../components/bar/Navbar";
import Footer from "../components/bar/Footer";
import Hero from "../components/bar/hero";
import Main from "../components/bar/MainPage";
import Slide from "../components/bar/Slide";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Divider />
      <Slide />
      <Main />
    </div>
  );
};

export default Home;
