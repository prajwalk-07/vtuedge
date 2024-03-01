// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 md:px-8">
        <ul className="flex flex-col md:flex-row justify-between items-center">
          <li><a href="https://t.me/vtuedgecom" className="hover:text-gray-300">Join Our Telegram Group</a></li>
          <li><a href="contact.html" className="hover:text-gray-300">Contact Us</a></li>
          <li><a href="privacy.html" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="terms.html" className="hover:text-gray-300">Terms and Conditions</a></li>
          <li className="text-white-400">Made with 🤍</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
