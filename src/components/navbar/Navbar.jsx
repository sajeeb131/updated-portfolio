import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineSegment, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='px-4 md:px-20 py-6 navbar-container'>
      <div className='navbar-logo'>
        <a href="">Sajeeb</a>
      </div>

      {/* Desktop Links */}
      <div className='navbar-links hidden md:flex flex-row gap-6' >
        <a href='#'>Home</a>
        <a href='#'>Projects</a>
        <a href='#'>Skills</a>
        <a href='#'>Sajeeb Great</a>
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
        <a href='#' onClick={closeMobileMenu}>Home</a>
        <a href='#' onClick={closeMobileMenu}>Projects</a>
        <a href='#' onClick={closeMobileMenu}>Skills</a>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;