import React, { useState, memo } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

const Navbar = memo(({ isDarkMode, toggleTheme, activeSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="#top" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        David<span className="text-blue-600">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ href, text }) => (
                            <a
                                key={text}
                                href={href}
                                className={`transition-colors font-medium ${
                                    activeSection === href.slice(1)
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            >
                                {text}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-transparent border-none hover:bg-transparent"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-slate-700 dark:text-slate-200 p-2 bg-transparent border-none hover:bg-transparent"
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
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/david-hristov-0985a4176"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:davidhristov10@gmail.com"
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col space-y-4 mt-4">
                            {navLinks.map(({ href, text }) => (
                                <a
                                    key={text}
                                    href={href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`transition-colors font-medium ${
                                        activeSection === href.slice(1)
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-slate-700 dark:text-slate-200'
                                    }`}
                                >
                                    {text}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="text-left text-slate-700 dark:text-slate-200 font-medium bg-transparent border-none p-0 hover:bg-transparent"
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
