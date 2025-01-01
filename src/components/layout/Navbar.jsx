import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../common/SocialIcons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </Link>
          
          <div className="text-xl font-semibold">
            Store Name
          </div>
          
          <div className="flex items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;