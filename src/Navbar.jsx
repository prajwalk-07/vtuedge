// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo text-2xl font-bold">
          Your Logo
        </div>
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
        {isMobile ? (
          // Render mobile menu
          <ul className="lg:hidden">
            <li className="mb-4">Home</li>
            <li>About</li>
            {/* Add more menu items as needed */}
          </ul>
        ) : (
          // Render desktop menu
          <ul className="hidden lg:flex">
            <li className="mr-6">Home</li>
            <li>About</li>
            {/* Add more menu items as needed */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
