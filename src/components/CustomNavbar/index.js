import { Navbar } from "flowbite-react";
import logo from '../../resources/images/logo.png'
import './index.css'

export function CustomNavbar() {
  return (
    <Navbar fluid rounded className='bg-[#1F2937] text-white'>
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">VizGenius</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#" active className="nav-link">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="nav-link">
          Team
        </Navbar.Link>
        <Navbar.Link href="#" className="nav-link">References</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
