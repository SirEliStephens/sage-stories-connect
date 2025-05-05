
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3a4a88ef-7708-4bd2-9911-1587d82c2b8e.png" 
              alt="SAGE+ Logo" 
              className="h-8 mr-2" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`${isActive('/services') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            Contact
          </Link>
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
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-sage-700' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
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
