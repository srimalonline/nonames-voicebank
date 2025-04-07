'use client';
import React, { useState, useEffect } from 'react';
import './Navigation.css';
import Link from 'next/link';
import Image from 'next/image';
import {gsap} from "gsap";
import { useRouter, usePathname } from 'next/navigation';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const tl = gsap.timeline()
        .from("ul li",{opacity:0, y:-50, stagger:0.1},"2")

    }, []);
    return (
        <nav className='flex flex-row justify-between container m-auto '>
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
                {['/', '/about-us', '/voice', '/contact-us'].map((path, index) => (
                    <li key={index}>
                        <Link 
                            href={path} 
                            className={pathname === path ? 'active-link' : ''}
                        >
                            {path === '/' ? 'HOME' : path.replace('/', '').replace('-', ' ').toUpperCase()}
                        </Link>
                    </li>
                ))}
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