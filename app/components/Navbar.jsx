"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">MyHost</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/domains" className="hover:text-blue-600">Domains</a></li>
        <li><a href="/hosting" className="hover:text-blue-600">Hosting</a></li>
        <li><a href="/support" className="hover:text-blue-600">Support</a></li>
        <li><a href="/cart" className="hover:text-blue-600">Cart</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="w-full md:hidden mt-4 bg-white shadow-md rounded-lg border border-gray-100">
          <ul className="flex flex-col gap-3 py-4 px-6 text-gray-700 font-medium">
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/domains" onClick={() => setMenuOpen(false)}>Domains</a></li>
            <li><a href="/hosting" onClick={() => setMenuOpen(false)}>Hosting</a></li>
            <li><a href="/support" onClick={() => setMenuOpen(false)}>Support</a></li>
            <li><a href="/cart" onClick={() => setMenuOpen(false)}>Cart</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
