import { Navbar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import logo from '../../resources/images/logo-pie.png'
import './index.css'

export function CustomNavbar() {
  return (
    <Navbar fluid rounded className='bg-[#1F2937] text-white'>
      <Navbar.Brand>
        <NavLink exact to="/" className="flex">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">VizGenius</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/team" activeClassName="active">
          Team
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/video" activeClassName="active">
          Demo Video
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
