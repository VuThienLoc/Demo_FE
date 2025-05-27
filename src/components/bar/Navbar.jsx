import React from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Typography, Menu } from "antd";
import logo from "@/assets/react.svg";

// Main navigation links
const { Title } = Typography;

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Consultant", href: "/consultant" },
  { name: "Blog", href: "/blog" },
];

// Language options
const languages = [
  { key: "en", label: "English" },
  { key: "vi", label: "Tiếng Việt" },
];

// Build dropdown menu for mobile
const mobileMenuItems = [
  ...navigation.map((item) =>
    item.dropdown
      ? {
          key: item.name,
          label: (
            <Dropdown
              menu={{
                items: item.dropdown.map((sub) => ({
                  key: sub.name,
                  label: <Link to={sub.href}>{sub.name}</Link>,
                })),
              }}
              trigger={["click"]}
            >
              <span>
                {item.name} <DownOutlined style={{ fontSize: 12 }} />
              </span>
            </Dropdown>
          ),
        }
      : {
          key: item.name,
          label: <Link to={item.href}>{item.name}</Link>,
        }
  ),
  { type: "divider" },
  {
    key: "login",
    label: <Link to="/login">Login</Link>,
  },
  {
    key: "register",
    label: (
      <Link to="/register" className="text-blue-600 font-semibold">
        Register
      </Link>
    ),
  },
  { type: "divider" },
  {
    key: "language",
    label: (
      <Dropdown
        menu={{
          items: languages.map((lang) => ({
            key: lang.key,
            label: lang.label,
          })),
        }}
        trigger={["click"]}
      >
        <span>
          <GlobalOutlined /> Language <DownOutlined style={{ fontSize: 12 }} />
        </span>
      </Dropdown>
    ),
  },
];

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-blue-600 px-2 text-2xl font-extrabold tracking-tight leading-none select-none">
              GenderCare
            </span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <Dropdown
                key={item.name}
                menu={{
                  items: item.dropdown.map((sub) => ({
                    key: sub.name,
                    label: <Link to={sub.href}>{sub.name}</Link>,
                  })),
                }}
                trigger={["hover"]}
              >
                <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-2 rounded-full transition cursor-pointer flex items-center">
                  {item.name} <DownOutlined className="ml-1 text-xs" />
                </span>
              </Dropdown>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-2 rounded-full transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        {/* Desktop CTA & Language */}
        <div className="hidden md:flex items-center space-x-4">
          <Dropdown
            menu={{
              items: languages.map((lang) => ({
                key: lang.key,
                label: lang.label,
              })),
            }}
            trigger={["click"]}
          >
            <button className="flex items-center px-3 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition">
              <GlobalOutlined className="mr-1" />
              Language
              <DownOutlined className="ml-1 text-xs" />
            </button>
          </Dropdown>
          <Link
            to="/login"
            className="px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <Dropdown
            menu={{ items: mobileMenuItems }}
            trigger={["click"]}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <MenuOutlined className="text-2xl text-gray-700 cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
