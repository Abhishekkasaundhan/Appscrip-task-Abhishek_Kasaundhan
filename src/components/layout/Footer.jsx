import React from 'react';
import Newsletter from '../common/Newsletter';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Newsletter />
          <div className="contact-info">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            {/* Contact details */}
          </div>
          <div className="currency-selector">
            <h3 className="text-lg font-semibold mb-4">Currency</h3>
            {/* Currency selector */}
          </div>
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li><a href="/about">About Us</a></li>
                <li><a href="/stories">Stories</a></li>
                <li><a href="/artisans">Artisans</a></li>
                <li><a href="/boutiques">Boutiques</a></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/shipping">Shipping</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            
            {/* Payment Options */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Payment Methods</h4>
              <div className="grid grid-cols-3 gap-4">
                {/* Payment gateway icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;