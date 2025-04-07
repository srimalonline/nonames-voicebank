'use client';
import React, { useState } from 'react';
import './Navigation.css';
import Link from 'next/link';
import Image from 'next/image'; 

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className='flex flex-row justify-between container m-auto mt-5'>
           {/* Logo */}
           <Link href="/" className='flex m-5'>
                    <Image
                        src="/logo.svg" // Path to your logo in the public directory
                        alt="Logo"
                        width={100} // Set the width of the logo
                        height={100} // Set the height of the logo
                        priority // Ensures the logo is loaded immediately
                    />
            </Link>
            <ul className='navbar font-[800] flex-row justify-between'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/voice">Voice</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
            <button
                className="md:hidden p-2 bg-white text-blue-500 rounded" 
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
        </nav>
    );
};

export default Navigation;