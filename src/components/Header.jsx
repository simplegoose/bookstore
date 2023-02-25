import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-nav">
        <div className="logo"><h1>Bookstore CMS</h1></div>
        <Navbar />
      </div>
      <div className="user">
        <AiOutlineUser />
      </div>
    </header>
  );
}
