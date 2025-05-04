
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-serif font-semibold text-sage-700">SAGE</span>
            <span className="text-xl font-bold text-ocean-600">+</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-sage-700 transition">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-sage-700 transition">Services</Link>
          <Link to="/about" className="text-gray-600 hover:text-sage-700 transition">About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-sage-700 transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-sage-500 text-sage-700 hover:bg-sage-50">
            Log In
          </Button>
          <Button className="bg-sage-600 hover:bg-sage-700 text-white">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 border-b border-gray-100 shadow-md z-50">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-sage-700 transition px-2 py-1">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-sage-700 transition px-2 py-1">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-sage-700 transition px-2 py-1">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-sage-700 transition px-2 py-1">Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-sage-500 text-sage-700 hover:bg-sage-50 w-full">
                Log In
              </Button>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
