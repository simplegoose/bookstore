import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const links = [
    {
      path: '/books',
      text: 'BOOKS',
    },
    {
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar">
      <ul className="links">
        {
          links.map((link) => (
            <li key={link.text} className={location.pathname === link.path ? 'active' : ''}><NavLink to={link.path}>{link.text}</NavLink></li>
          ))
        }
      </ul>
    </nav>
  );
}
