import React, { memo } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = memo(() => {
    return (
        <section id="contact" className="py-20 bg-surface transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-ink">
                    Get In Touch<span className="text-accent">.</span>
                </h2>
                <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
                    Interested in collaboration or have questions? Feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <a
                        href="mailto:davidhristov10@gmail.com"
                        className="flex flex-col items-center p-8 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-ink">Email</h3>
                        <p className="text-muted text-center text-sm">davidhristov10@gmail.com</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/david-hristov-0985a4176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-8 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-ink">LinkedIn</h3>
                        <p className="text-muted text-center text-sm">Connect with me</p>
                    </a>

                    <a
                        href="https://github.com/davidhristov59"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-8 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-ink">GitHub</h3>
                        <p className="text-muted text-center text-sm">Check out my code</p>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default ContactSection;
