import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sstlogo from '../images/sstlogo.jpg';

function NavbarMain() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMarketingDropdownOpen, setIsMarketingDropdownOpen] = useState(false);
  const [isNewServicesDropdownOpen, setIsNewServicesDropdownOpen] = useState(false);

  const navbarRef = useRef(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    if (isMarketingDropdownOpen) {
      setIsMarketingDropdownOpen(false);
    }
    if (isNewServicesDropdownOpen) {
      setIsNewServicesDropdownOpen(false);
    }
  };

  const toggleMarketingDropdown = () => {
    setIsMarketingDropdownOpen(!isMarketingDropdownOpen);
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
    if (isNewServicesDropdownOpen) {
      setIsNewServicesDropdownOpen(false);
    }
  };

  const toggleNewServicesDropdown = () => {
    setIsNewServicesDropdownOpen(!isNewServicesDropdownOpen);
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
    if (isMarketingDropdownOpen) {
      setIsMarketingDropdownOpen(false);
    }
  };
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsServicesDropdownOpen(false);
      setIsMarketingDropdownOpen(false);
      setIsNewServicesDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <nav className="bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
              <Link to="/" aria-label="Home">     <img src={sstlogo} className="h-8 w-auto" alt="Your Company" /></Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="relative rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link to="/aboutus" className="relative rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  {/* Development Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleServicesDropdown}
                      className="relative flex items-center rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group"
                    >
                      Development
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <Link to="/web-development-designing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Web Development</Link>
                          <Link to="/software-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Software Development</Link>
                          <Link to="/e-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> E-Commerce App</Link>
                          <Link to="/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Mobile App Development</Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Marketing Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleMarketingDropdown}
                      className="relative flex items-center rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group"
                    >
                      Marketing
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${isMarketingDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isMarketingDropdownOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <Link to="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Digital Marketing</Link>
                          <Link to="/voice-calls" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Voice Calls</Link>
                          <Link to="/whatsapp-messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">WhatsApp Messages</Link>
                          <Link to="/whatsapp-apis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">WhatsApp Apis</Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleNewServicesDropdown}
                      className="relative flex items-center rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group"
                    >
                      Services
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${isNewServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isNewServicesDropdownOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to="/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Maintenance Services</Link>
                        <Link to="/logo-designing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logo Designing</Link>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Contact Tab */}
                  <Link to="/career" className="relative rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group">
                    Career
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link to="/contact-us" className="relative rounded-md px-3 py-2 text-sm font-medium text-black hover:text-blue-500 group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-4 p-4">
            <Link to="/" className="block text-base font-medium text-gray-900 hover:text-blue-500">Home</Link>
            <Link to="/aboutus" className="block text-base font-medium text-gray-900 hover:text-blue-500">About Us</Link>
            {/* Development Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="block text-base font-medium text-gray-900 hover:text-blue-500"
              >
                Development
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link to="/web-development-designing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web development</Link>
                  <Link to="/software-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Software Development</Link>
                  <Link to="/e-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">E-Commerce App</Link>
                  <Link to="/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile App Development</Link>
                </div>
              )}
            </div>
            {/* Marketing Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMarketingDropdown}
                className="block text-base font-medium text-gray-900 hover:text-blue-500"
              >
                Marketing
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${isMarketingDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                </svg>
              </button>
              {isMarketingDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link to="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital Marketing</Link>
                  <Link to="/voice-calls" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Voice Calls</Link>
                  <Link to="/whatsapp-messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">WhatsApp Messages</Link>
                  <Link to="/whatsapp-apis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">WhatsApp Apis</Link>
                </div>
              )}
            </div>
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleNewServicesDropdown}
                className="block text-base font-medium text-gray-900 hover:text-blue-500"
              >
                Services
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${isNewServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                </svg>
              </button>
              {isNewServicesDropdownOpen && (
                <div className="mt-2 space-y-1">
                <Link to="/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Maintenance</Link>
                  <Link to="/logo-designing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logo Designing</Link>
                </div>
              )}
            </div>
            <Link to="/career" className="block text-base font-medium text-gray-900 hover:text-blue-500">Career</Link>
            <Link to="/contact-us" className="block text-base font-medium text-gray-900 hover:text-blue-500">Contact</Link>
           

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarMain;
