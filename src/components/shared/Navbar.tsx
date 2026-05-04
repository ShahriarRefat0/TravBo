'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="fixed top-0 w-full z-50 bg-white dark:bg-[#040404] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 bg-[#FFAF19] rounded-lg flex items-center justify-center font-bold text-[#040404] group-hover:shadow-lg transition-shadow">
                            TB
                        </div>
                        <span className="text-xl font-bold text-[#040404] dark:text-white hidden sm:inline">
                            TravBo
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[#040404] dark:text-white hover:text-[#FFAF19] dark:hover:text-[#FFD700] transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="flex items-center gap-2 px-4 py-2 text-[#040404] dark:text-white hover:text-[#FFAF19] transition-colors"
                        >
                            <LogIn size={18} />
                            <span>Login</span>
                        </Link>
                        <Link
                            href="/register"
                            className="px-6 py-2 bg-[#FFAF19] text-[#040404] rounded-lg font-semibold hover:bg-[#FF9500] transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? (
                            <X size={24} className="text-[#040404] dark:text-white" />
                        ) : (
                            <Menu size={24} className="text-[#040404] dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-700">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-[#040404] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="my-2 border-gray-200 dark:border-gray-700" />
                        <Link
                            href="/login"
                            className="block px-4 py-3 text-[#040404] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="block px-4 py-3 bg-[#FFAF19] text-[#040404] rounded-lg font-semibold hover:bg-[#FF9500] transition-colors text-center"
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