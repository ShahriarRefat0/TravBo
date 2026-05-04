'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, MapPin, Globe, Send, AtSign, Share2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        explore: [
            { label: 'About Us', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Hotel Sitemap', href: '#' },
            { label: 'Medical Tourism', href: '#' },
        ],
        services: [
            { label: 'Flight', href: '#' },
            { label: 'Hotel', href: '#' },
            { label: 'Holiday', href: '#' },
            { label: 'Visa', href: '#' },
        ],
        usefulLinks: [
            { label: 'Travel Guide', href: '#' },
            { label: 'Travel Advisory', href: '#' },
            { label: 'Visa Guide', href: '#' },
            { label: 'Visa Application', href: '#' },
            { label: 'Travel Insurance', href: '#' },
        ],
        promotions: [
            { label: 'News', href: '#' },
            { label: 'Promotions', href: '#' },
            { label: 'VAS', href: '#' },
            { label: 'Special Offers', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Globe, href: '#', label: 'Facebook' },
        { icon: Send, href: '#', label: 'Twitter' },
        { icon: AtSign, href: '#', label: 'Instagram' },
        { icon: Share2, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-800 mt-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Top Section - Logo & Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 bg-[#FFAF19] rounded-lg flex items-center justify-center font-bold text-[#040404]">
                                TB
                            </div>
                            <span className="text-xl font-bold text-[#040404] dark:text-white">
                                TravBo
                            </span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Your AI-powered travel planning & booking companion
                        </p>
                        <div className="space-y-2 mb-6">
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                License: TBD-2024-001
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                Registered & Certified
                            </p>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#FFAF19] hover:text-white transition-all"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explore Section */}
                    <div>
                        <h3 className="text-lg font-bold text-[#040404] dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#FFAF19] rounded"></span>
                            Explore
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.explore.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-[#FFAF19] dark:hover:text-[#FFD700] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-lg font-bold text-[#040404] dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#FFAF19] rounded"></span>
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-[#FFAF19] dark:hover:text-[#FFD700] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div>
                        <h3 className="text-lg font-bold text-[#040404] dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#FFAF19] rounded"></span>
                            Useful Links
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.usefulLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-[#FFAF19] dark:hover:text-[#FFD700] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Promotions Section */}
                    <div>
                        <h3 className="text-lg font-bold text-[#040404] dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#FFAF19] rounded"></span>
                            Promotions
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.promotions.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-[#FFAF19] dark:hover:text-[#FFD700] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-800 my-8" />

                {/* Contact & Office Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-bold text-[#040404] dark:text-white mb-4">
                            Contact Us
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail size={18} className="text-[#FFAF19] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                                    <a
                                        href="mailto:contact@travbo.com"
                                        className="text-[#FFAF19] hover:text-[#FF9500] font-semibold transition-colors"
                                    >
                                        contact@travbo.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-[#FFAF19] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Hotline</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-[#FFAF19] hover:text-[#FF9500] font-semibold transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MessageCircle size={18} className="text-[#FFAF19] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</p>
                                    <a
                                        href="https://wa.me/1234567890"
                                        className="text-[#FFAF19] hover:text-[#FF9500] font-semibold transition-colors"
                                    >
                                        Message us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Office */}
                    <div>
                        <h4 className="text-lg font-bold text-[#040404] dark:text-white mb-4">
                            Main Office
                        </h4>
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin size={18} className="text-[#FFAF19] mt-1 flex-shrink-0" />
                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <p className="font-semibold text-[#040404] dark:text-white">TravBo Headquarters</p>
                                <p>123 Travel Street,</p>
                                <p>Suite 100, City, Country</p>
                                <p>Postal Code 12345</p>
                            </div>
                        </div>
                        <button className="text-[#FFAF19] hover:text-[#FF9500] font-semibold text-sm transition-colors flex items-center gap-2">
                            <MapPin size={16} />
                            View Map
                        </button>
                    </div>

                    {/* Support Office */}
                    <div>
                        <h4 className="text-lg font-bold text-[#040404] dark:text-white mb-4">
                            Support Center
                        </h4>
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin size={18} className="text-[#FFAF19] mt-1 flex-shrink-0" />
                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <p className="font-semibold text-[#040404] dark:text-white">TravBo Support</p>
                                <p>456 Support Ave,</p>
                                <p>Suite 200, City, Country</p>
                                <p>Postal Code 54321</p>
                            </div>
                        </div>
                        <button className="text-[#FFAF19] hover:text-[#FF9500] font-semibold text-sm transition-colors flex items-center gap-2">
                            <MapPin size={16} />
                            View Map
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-800 my-8" />

                {/* Certifications & Payment Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Certifications */}
                    <div>
                        <h4 className="text-sm font-bold text-[#040404] dark:text-white mb-4 uppercase tracking-wide">
                            Certifications & Accreditations
                        </h4>
                        <div className="flex flex-wrap gap-4">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-600 dark:text-gray-400 text-center px-2">ISO 9001</span>
                            </div>
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-600 dark:text-gray-400 text-center px-2">Verified</span>
                            </div>
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-600 dark:text-gray-400 text-center px-2">Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h4 className="text-sm font-bold text-[#040404] dark:text-white mb-4 uppercase tracking-wide">
                            We Accept
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {['Visa', 'Mastercard', 'PayPal', 'Google Pay', 'Apple Pay'].map((method) => (
                                <div
                                    key={method}
                                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold text-gray-600 dark:text-gray-400"
                                >
                                    {method}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 dark:border-gray-800 my-8" />

                {/* Bottom Links & Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <Link href="#" className="hover:text-[#FFAF19] transition-colors">
                            Support Center
                        </Link>
                        <Link href="#" className="hover:text-[#FFAF19] transition-colors">
                            Payment Security
                        </Link>
                        <Link href="#" className="hover:text-[#FFAF19] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-[#FFAF19] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                    <div className="text-center sm:text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Copyright © {currentYear}{' '}
                            <Link href="/" className="text-[#FFAF19] hover:text-[#FF9500] font-semibold transition-colors">
                                TravBo
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;