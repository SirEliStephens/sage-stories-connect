
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, LogIn, UserPlus, ChevronDown } from "lucide-react";
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
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50 w-full">
      <div className="container-custom flex justify-between items-center" style={{ width: "140%" }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3a4a88ef-7708-4bd2-9911-1587d82c2b8e.png" 
              alt="SAGE+ Logo" 
              className="h-16 mr-2" 
            />
            <div className="flex items-center">
              <span className="text-2xl font-serif font-semibold text-sage-700">SAGE</span>
              <span className="text-2xl font-bold text-ocean-600">+</span>
            </div>
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
            to="/become-provider" 
            className={`${isActive('/become-provider') ? 'text-sage-700 font-medium' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            Become a Provider
          </Link>
          <Link 
            to="/connect" 
            className={`${isActive('/connect') ? 'text-sage-700 font-medium' : 'text-gray-600'} hover:text-sage-700 transition`}
          >
            Find a Provider
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

        <div className="hidden md:flex flex-col items-end">
          <div className="text-sage-700 font-semibold text-lg mb-2">Find Support Here</div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-sage-500 text-sage-700 hover:bg-sage-50 flex items-center gap-2"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn className="h-4 w-4" /> Log In
            </Button>
            <Button 
              className="bg-sage-600 hover:bg-sage-700 text-white flex items-center gap-2"
              onClick={() => window.location.href = '/signup'}
            >
              <UserPlus className="h-4 w-4" /> Sign Up
            </Button>
          </div>
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
              to="/become-provider" 
              className={`${isActive('/become-provider') ? 'text-sage-700 font-medium' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Provider
            </Link>
            <Link 
              to="/connect" 
              className={`${isActive('/connect') ? 'text-sage-700 font-medium' : 'text-gray-600'} hover:text-sage-700 transition px-2 py-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Provider
            </Link>
            <div className="px-2 py-1">
              <span className="text-gray-600 text-sm font-medium">Find what you are looking for:</span>
              <div className="mt-2 space-y-2">
                <Link 
                  to="/talk-support" 
                  className="block text-gray-600 hover:text-sage-700 transition px-2 py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Talk Support
                </Link>
                <Link 
                  to="/care-takers" 
                  className="block text-gray-600 hover:text-sage-700 transition px-2 py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Care Takers
                </Link>
                <Link 
                  to="/tutors" 
                  className="block text-gray-600 hover:text-sage-700 transition px-2 py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tutors
                </Link>
                <Link 
                  to="/other-services" 
                  className="block text-gray-600 hover:text-sage-700 transition px-2 py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Other Services
                </Link>
              </div>
            </div>
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
              <Button 
                variant="outline" 
                className="border-sage-500 text-sage-700 hover:bg-sage-50 w-full flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/login'}
              >
                <LogIn className="h-4 w-4" /> Log In
              </Button>
              <Button 
                className="bg-sage-600 hover:bg-sage-700 text-white w-full flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/signup'}
              >
                <UserPlus className="h-4 w-4" /> Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Support Categories Bar */}
      <div className="hidden md:block bg-sage-50 border-b border-sage-200 py-2">
        <div className="container-custom flex justify-center space-x-8">
          <Link 
            to="/talk-support" 
            className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition"
          >
            Mental Support
          </Link>
          <Link 
            to="/care-takers" 
            className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition"
          >
            Elderly
          </Link>
          <Link 
            to="/story-telling" 
            className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition"
          >
            Story Telling
          </Link>
          <Link 
            to="/tutors" 
            className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition"
          >
            Tutors
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition flex items-center gap-1">
                Child care/babysitting services
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-white z-50 shadow-lg border border-sage-200">
              <DropdownMenuItem asChild>
                <Link to="/childcare" className="w-full cursor-pointer px-4 py-2 hover:bg-sage-50 font-medium border-b border-sage-100">
                  General Childcare Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/childcare/rbt" className="w-full cursor-pointer px-4 py-2 hover:bg-sage-50">
                  RBT certified providers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/childcare/students" className="w-full cursor-pointer px-4 py-2 hover:bg-sage-50">
                  University students
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/babysitters" className="w-full cursor-pointer px-4 py-2 hover:bg-sage-50">
                  Babysitting services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link 
            to="/other-services" 
            className="text-sage-700 hover:text-sage-900 font-medium px-4 py-2 rounded-md hover:bg-sage-100 transition"
          >
            Other
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
