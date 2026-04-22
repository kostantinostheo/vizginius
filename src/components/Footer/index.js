import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0d1117] border-t border-white/10 text-white">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p className="font-semibold text-sm text-gray-200">VizGenius</p>
                    <p className="text-xs text-gray-500 mt-1">
                        &copy; 2024 Data Visualization (M126). All rights reserved.
                    </p>
                </div>
                <nav className="flex gap-6 text-sm text-gray-400">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/team" className="hover:text-white transition-colors">Team</Link>
                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    <Link to="/video" className="hover:text-white transition-colors">Video</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
