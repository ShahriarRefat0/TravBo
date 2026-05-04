'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Explore', href: '/explore' },
        { label: 'AI Planner', href: '/ai-planner' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 bg-[#FFAF19] rounded-lg flex items-center justify-center font-bold text-[#1f2937] group-hover:shadow-lg transition-shadow">
                            TB
                        </div>
                        <span className={`text-xl font-bold hidden sm:inline ${isScrolled ? 'text-[#1f2937]' : 'text-white'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                            TravBo
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors font-medium tracking-wide hover:text-[#FFAF19] ${isScrolled ? 'text-[#1f2937]' : 'text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className={`flex items-center gap-2 px-4 py-2 hover:text-[#FFAF19] transition-colors font-medium ${isScrolled ? 'text-[#1f2937]' : 'text-white'}`}
                        >
                            <LogIn size={18} />
                            <span>Login</span>
                        </Link>
                        <Link
                            href="/register"
                            className="px-6 py-2 bg-[#FFAF19] text-[#1f2937] rounded-lg font-bold hover:bg-[#FF9500] transition-all duration-300 hover:shadow-lg tracking-wide"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? (
                            <X size={24} className={isScrolled ? 'text-[#1f2937]' : 'text-white'} />
                        ) : (
                            <Menu size={24} className={isScrolled ? 'text-[#1f2937]' : 'text-white'} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={`md:hidden border-t transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white border-gray-200'
                        : 'bg-white/95 border-gray-200'
                }`}>
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-[#1f2937] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="my-2 border-gray-200" />
                        <Link
                            href="/login"
                            className="block px-4 py-3 text-[#1f2937] hover:bg-gray-100 rounded-lg transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="block px-4 py-3 bg-[#FFAF19] text-[#1f2937] rounded-lg font-semibold hover:bg-[#FF9500] transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;