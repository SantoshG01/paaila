import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white px-6 py-10 md:px-20">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <h2 className="text-4xl font-bold italic mb-2">paaila</h2>
        <p className="text-sm text-gray-300 max-w-xs">
          Your go-to destination in Pokhara for the latest in fashion, tech, 
          and lifestyle trends. Quality products, unbeatable prices.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/products" className="hover:text-white">Products</a></li>
          <li><a href="/about" className="hover:text-white">About Us</a></li>
          <li><a href="/contact" className="hover:text-white">Contact</a></li>
          <li><a href="/faq" className="hover:text-white">FAQs</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Contact</h3>
        <p className="text-sm text-gray-300">
          Email: <a href="mailto:paaila@nepal.com" className="hover:text-white">paaila@nepal.com</a>
        </p>
        <p className="text-sm text-gray-300">
          Phone: <a href="tel:+9779856060606" className="hover:text-white">+977 9856060606</a>
        </p>
        <p className="text-sm text-gray-300">
          Address: Birauta-17, Pokhara
        </p>
      </div>

      {/* Socials */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex space-x-4 text-xl text-gray-300">
          <a href="https://www.facebook.com/santosh.sharma.222" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2]"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/santosh-sharma-27b18b285/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]"><FaLinkedin /></a>
          <a href="https://www.instagram.com/_santoshsh_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
        </div>
      </div>
      
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 text-center pt-5 mt-10">
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} paaila Nepal, Inc.
      </p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
