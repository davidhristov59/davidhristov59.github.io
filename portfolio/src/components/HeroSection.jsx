import React, { useState, useEffect, memo } from 'react';
import { Mail, ChevronUp } from 'lucide-react';

const HeroSection = memo(() => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Hi, I'm David.";

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <section id="top" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 opacity-10 dark:opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-32 left-32 w-20 h-20 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 right-20 w-28 h-28 bg-violet-400 rounded-full animate-pulse"></div>
            </div>

            <div className="text-center z-10 px-4">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-tight">
                        {displayText}<span className="animate-pulse">|</span>
                    </h1>
                    <div className="h-2 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full animate-pulse"></div>
                </div>

                <p className="text-xl md:text-2xl mb-6 font-medium text-slate-700 dark:text-slate-200">
                    Connecting high-performance systems with intelligent, data-driven applications.
                </p>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-4 mb-12 max-w-3xl mx-auto">
                    Passionate about <span className="text-blue-600 dark:text-blue-400 font-semibold">building scalable systems</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">crafting robust solutions</span>, and driving innovation in software engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
                    >
                        <span className="mr-2">View My Work</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <a
                        href="#contact"
                        className="group inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                    >
                        <span className="mr-2">Get In Touch</span>
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="mt-16 animate-bounce">
                    <a href="#experience" className="inline-block text-slate-400 hover:text-blue-600 transition-all duration-300">
                        <div className="flex flex-col items-center">
                            <span className="text-sm mb-2 opacity-75">Scroll to explore</span>
                            <ChevronUp className="w-6 h-6 rotate-180" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default HeroSection;
