import React, { useState, memo } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

const Navbar = memo(({ isDarkMode, toggleTheme, activeSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-bg shadow-md z-50 transition-colors duration-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="#top" className="text-2xl md:text-3xl font-bold text-ink hover:text-accent transition-colors">
                        David<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ href, text }) => (
                            <a
                                key={text}
                                href={href}
                                className={`transition-colors font-medium ${
                                    activeSection === href.slice(1)
                                        ? 'text-accent'
                                        : 'text-muted hover:text-accent'
                                }`}
                            >
                                {text}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="text-muted hover:text-accent transition-colors p-2 bg-transparent border-none hover:bg-transparent"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-muted p-2 bg-transparent border-none hover:bg-transparent"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Social Links */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com/davidhristov59"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/david-hristov-0985a4176"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:davidhristov10@gmail.com"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-line">
                        <div className="flex flex-col space-y-4 mt-4">
                            {navLinks.map(({ href, text }) => (
                                <a
                                    key={text}
                                    href={href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`transition-colors font-medium ${
                                        activeSection === href.slice(1)
                                            ? 'text-accent'
                                            : 'text-muted'
                                    }`}
                                >
                                    {text}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="text-left text-muted font-medium bg-transparent border-none p-0 hover:bg-transparent"
                            >
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
});

export default Navbar;
