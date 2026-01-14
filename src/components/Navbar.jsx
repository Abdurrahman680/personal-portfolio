import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo"
                >
                    <span className="logo-accent">Port</span>folio.
                </motion.div>

                {/* Desktop Menu */}
                <div className="nav-links">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <div className="nav-socials">
                        <a href="https://github.com/Abdurrahman680" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/muhammad-abdurrahman-9471b1252" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/abdurrahman_developer?igsh=bWYxMWVlZWcycmNw" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu glass"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    // Small delay to allow browser to process link before unmounting
                                    setTimeout(() => setIsOpen(false), 100);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
