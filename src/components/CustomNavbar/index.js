import { Navbar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import logo from '../../resources/images/logo-pie.png'
import './index.css'

const navLinkClass = ({ isActive }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link';

export function CustomNavbar() {
  return (
    <Navbar fluid rounded className='bg-[#1F2937] text-white sticky top-0 z-50 shadow-[0_2px_16px_rgba(0,0,0,0.5)]'>
      <Navbar.Brand>
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="VizGenius Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">VizGenius</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to="/" className={navLinkClass} end>Home</NavLink>
        <NavLink to="/team" className={navLinkClass}>Team</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/video" className={navLinkClass}>Demo Video</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
