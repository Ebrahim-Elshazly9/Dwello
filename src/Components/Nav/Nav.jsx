import React, { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

const DwelloNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex w-full items-center justify-between bg-[#FDF8F5] px-6 py-4 md:px-16">
      {/* Brand Logo */}
    <img src="/src/assets/logo.svg" alt="logo" />

      {/* Desktop Navigation Links */}
      <ul className="hidden items-center gap-10 font-semibold text-[#201510] md:flex">
        <li>
          <a href="#home" className="transition-opacity hover:opacity-70">
            Home
          </a>
        </li>
        <li>
          <a href="#service" className="transition-opacity hover:opacity-70">
            Service
          </a>
        </li>
        <li>
          <a href="#agents" className="transition-opacity hover:opacity-70">
            Agents
          </a>
        </li>
        <li>
          <a href="#contact" className="transition-opacity hover:opacity-70">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <button
          className="text-[#201510] transition-opacity hover:opacity-70"
          aria-label="Search"
        >
          <Search size={22} strokeWidth={2.2} />
        </button>

        {/* User Profile Icon */}
        <button
          className="text-[#201510] transition-opacity hover:opacity-70"
          aria-label="Account"
        >
          <User size={22} strokeWidth={2.2} />
        </button>

        {/* Sign Up Button */}
        <button className="hidden rounded-lg bg-[#201510] px-6 py-2.5 font-medium text-white transition-all hover:bg-[#33231b] md:block">
          Sign up
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#201510] md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-t border-stone-200 bg-[#FDF8F5] px-6 py-6 shadow-md md:hidden">
          <a
            href="#home"
            className="font-semibold text-[#201510]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#service"
            className="font-semibold text-[#201510]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service
          </a>
          <a
            href="#agents"
            className="font-semibold text-[#201510]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agents
          </a>
          <a
            href="#contact"
            className="font-semibold text-[#201510]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button className="mt-2 w-full rounded-lg bg-[#201510] py-2.5 font-medium text-white">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default DwelloNavbar;
