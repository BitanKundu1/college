import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className='w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50'>
      <div className='text-2xl text-indigo-700 font-bold'>
        <Link to="/" onClick={closeNavbar}>TINT</Link>
      </div>
      {!isOpen && (
        <div className='md:hidden'>
          <button className='text-4xl' onClick={toggleNavbar}>&#8801;</button>
        </div>
      )}
      <ul className={`md:flex font-semibold ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 md:space-x-8`}>
        <li>
          <NavLink
            to="/Home"
            className='block py-2 pr-4 pl-3 duration-200 text-gray-300 hover:text-orange-700'
            onClick={closeNavbar}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/program"
            className='block py-2 pr-4 pl-3 duration-200 text-gray-300 hover:text-orange-700'
            onClick={closeNavbar}
          >
            Program
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clubs"
            className='block py-2 pr-4 pl-3 duration-200 text-gray-300 hover:text-orange-700'
            onClick={closeNavbar}
          >
            Clubs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className='block py-2 pr-4 pl-3 duration-200 text-gray-300 hover:text-orange-700'
            onClick={closeNavbar}
          >
            ContactUs
          </NavLink>
        </li>
        <li>
          <Link to="/" className='block py-2 pr-4 pl-3 duration-200 text-gray-300 hover:text-orange-700' onClick={closeNavbar}>
            Login/Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
