import React, { useState } from 'react';
import './navbar.css';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';

const MenuOptions = ({ open, setOpen }) => {
  return (
    <>
      <ul className={`menu_options ${open && 'slide-top'}`}>
        <li className="menu_item">
          <a href="#home" className="link">Home</a>
        </li>
        <li className="menu_item">
          <a href="#cakes-and-pies" className="link">Cakes and Pies</a>
        </li>
        <li className="menu_item">
          <a href="#history" className="link">About</a>
        </li>
        <li className="menu_item">
          <a href="#contact" className="link">Contact us</a>
        </li>
        <button 
          type="button" 
          className="close_menu_options_btn" 
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose size="20px" />
        </button>
      </ul>
    </>
  )
}

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={`nav ${open ? 'nav_fixed_menu_open slide-top' : 'nav_fixed_zero slide-down'}`}>
        <div className="nav_left">
          <div className="hamburger active" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size="20px" />
              : <HiMenuAlt2 size="20px" />}
            <span>Menu</span>
          </div>
          <div className="call">
            <MdPhoneIphone size="20px" />
            <span><a className="white_link" href="tel: +23470373738">Call</a></span>
          </div>
          <div className="hamburger">
            <SiGooglemaps size="20px" />
            <span>Map</span>
          </div>
        </div>
        <div className="nav_right">
          <span className="contact_right">
            <a href="#contact" className="white_link">Contact us</a>
          </span>
        </div>
      </nav>
      {open && <MenuOptions open={open} setOpen={setOpen} />}
    </>
  )
}

export default NavBar;