import React, { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineSegment, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='px-4 md:px-20 py-6 navbar-container'>
      <div className='navbar-logo'>
        <Link to="/">Sajeeb</Link>
      </div>

      {/* Desktop Links */}
      <div className='navbar-links hidden md:flex flex-row gap-6' >
        <Link to='/' className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
        <Link to='/projects' className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="is-mobile md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <MdClose color='white' size={32} />
        ) : (
          <MdOutlineSegment color='white' size={32} />
        )}
      </div>

      {/* Mobile Links (Sidebar Dropdown) */}
      <div className={`flex flex-col items-start mobile-links md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Cross Icon to Close Sidebar */}
        <div className="flex flex-row justify-between close-icon" onClick={closeMobileMenu}>
          <span>sajeeb</span>
          <MdClose color='white' size={24} />
        </div>

        {/* Sidebar Links */}
        <Link to='/' className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMobileMenu}>Home</Link>
        <Link to='/projects' className={location.pathname === '/projects' ? 'active-link' : ''} onClick={closeMobileMenu}>Projects</Link>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;