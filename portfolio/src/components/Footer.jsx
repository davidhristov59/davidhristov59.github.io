import React, { memo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = memo(() => {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        David<span className="text-blue-600">.</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/davidhristov59" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/david-hristov-0985a4176/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:davidhristov10@gmail.com" className="hover:text-blue-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
