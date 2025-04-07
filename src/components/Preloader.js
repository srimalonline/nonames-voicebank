'use client';
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Adjust the timeout duration as needed

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            gsap.fromTo(
                ".preloader-logo",
                { opacity: 0, scale: 0.5 }, // Initial state
                { opacity: 1, scale: 1, duration: 1 } // Animation target
            );
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#213e60] z-50">
            <img
                src="/logo.svg"
                alt="Logo"
                className="preloader-logo"
                style={{ opacity: 0, transform: "scale(0.5)" }} // Initial state
            />
        </div>
    );
}