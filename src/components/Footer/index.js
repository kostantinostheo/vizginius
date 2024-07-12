import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 flex justify-between items-center px-6">
            <div className="text-sm">
                &copy; {new Date().getFullYear()} Data Visualization (Μ126) and VizGenius. All rights reserved.
            </div>
            <div className="flex space-x-4">
                <Link exact to="/" className="nav-link hover:underline">
                    Home
                </Link>
                <Link to="/team" className="nav-link hover:underline">
                    Team
                </Link>
                <Link to="/about" className="nav-link hover:underline">
                    About
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
