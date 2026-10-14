import React, { useState, useEffect, memo, useRef } from 'react';
import { Mail, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ROLES = [
    'Backend Engineering',
    'Distributed Systems',
    'Machine Learning',
    'Knowledge Graphs',
    'Cloud-Native Development',
];

const HeroSection = memo(() => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);
    const [roleText, setRoleText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);
    const fullText = "David Hristov";

    // Name typewriter
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    // Role rotator
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout;

        if (!isDeleting && roleText.length < currentRole.length) {
            timeout = setTimeout(() => {
                setRoleText(currentRole.slice(0, roleText.length + 1));
            }, 60);
        } else if (!isDeleting && roleText.length === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && roleText.length > 0) {
            timeout = setTimeout(() => {
                setRoleText(currentRole.slice(0, roleText.length - 1));
            }, 35);
        } else if (isDeleting && roleText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [roleText, isDeleting, roleIndex]);

    // Subtle mouse parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePos({
                    x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
                    y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="top"
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden transition-all duration-500"
            style={{
                background: 'var(--hero-bg)',
            }}
        >
            {/* CSS custom properties for theming */}
            <style>{`
                :root {
                    --hero-bg: linear-gradient(160deg, #f8fafc 0%, #e0f2fe 40%, #f0f9ff 70%, #faf5ff 100%);
                }
                .dark {
                    --hero-bg: linear-gradient(160deg, #0a2e2f 0%, #094243 40%, #0c3536 70%, #0a2e2f 100%);
                }
                #top {
                    background: linear-gradient(160deg, #f8fafc 0%, #e0f2fe 40%, #f0f9ff 70%, #faf5ff 100%);
                }
                .dark #top {
                    background: linear-gradient(160deg, #0a2e2f 0%, #094243 40%, #0c3536 70%, #0a2e2f 100%);
                }

                .hero-grid {
                    background-image:
                        linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .dark .hero-grid {
                    background-image:
                        linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
                }

                .hero-glow {
                    background: radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%),
                        rgba(56, 189, 248, 0.06), transparent 60%);
                }
                .dark .hero-glow {
                    background: radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%),
                        rgba(45, 212, 191, 0.07), transparent 60%);
                }

                .code-block {
                    background: rgba(15, 23, 42, 0.03);
                    border: 1px solid rgba(148, 163, 184, 0.15);
                    backdrop-filter: blur(12px);
                }
                .dark .code-block {
                    background: rgba(15, 23, 42, 0.4);
                    border: 1px solid rgba(148, 163, 184, 0.1);
                }

                .hero-name-gradient {
                    background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0891b2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .dark .hero-name-gradient {
                    background: linear-gradient(135deg, #e2e8f0 0%, #38bdf8 50%, #2dd4bf 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .accent-line {
                    background: linear-gradient(90deg, #3b82f6, #06b6d4, #2dd4bf);
                    background-size: 200% 100%;
                    animation: gradient-shift 4s ease-in-out infinite;
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .floating-badge {
                    animation: float-badge 6s ease-in-out infinite;
                }
                .floating-badge:nth-child(2) { animation-delay: -2s; }
                .floating-badge:nth-child(3) { animation-delay: -4s; }
                @keyframes float-badge {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }

                .cursor-blink {
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                .hero-cta-primary {
                    background: linear-gradient(135deg, #1e40af 0%, #0891b2 100%);
                    position: relative;
                    overflow: hidden;
                }
                .hero-cta-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #0891b2 0%, #1e40af 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .hero-cta-primary:hover::before {
                    opacity: 1;
                }

                .dark .hero-cta-primary {
                    background: linear-gradient(135deg, #2dd4bf 0%, #38bdf8 100%);
                }
                .dark .hero-cta-primary::before {
                    background: linear-gradient(135deg, #38bdf8 0%, #2dd4bf 100%);
                }
                .dark .hero-cta-primary {
                    color: #0f172a;
                }
            `}</style>

            {/* Grid pattern background */}
            <div className="hero-grid absolute inset-0" />

            {/* Mouse-following glow */}
            <div
                className="hero-glow absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
                style={{
                    '--glow-x': `${50 + mousePos.x * 2}%`,
                    '--glow-y': `${50 + mousePos.y * 2}%`,
                }}
            />

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03]">
                <svg viewBox="0 0 200 200" fill="none">
                    <circle cx="0" cy="0" r="180" stroke="currentColor" strokeWidth="0.5" className="text-blue-600 dark:text-teal-400" />
                    <circle cx="0" cy="0" r="120" stroke="currentColor" strokeWidth="0.5" className="text-blue-600 dark:text-teal-400" />
                    <circle cx="0" cy="0" r="60" stroke="currentColor" strokeWidth="0.5" className="text-blue-600 dark:text-teal-400" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen py-24">

                    {/* Left Column — Main Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Name */}
                        <div>
                            <p className="text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">
                                Software Engineer
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                <span className="hero-name-gradient">{displayText}</span>
                                <span className="cursor-blink text-blue-600 dark:text-teal-400 font-light">|</span>
                            </h1>
                            <div className="accent-line h-1 w-24 rounded-full mt-5" />
                        </div>

                        {/* Role rotator */}
                        <div className="flex items-center gap-3">
                            <Terminal className="w-5 h-5 text-slate-400 dark:text-teal-500 flex-shrink-0" />
                            <p className="text-lg md:text-xl font-mono text-slate-600 dark:text-slate-300">
                                Focused on{' '}
                                <span className="text-blue-600 dark:text-teal-400 font-semibold">
                                    {roleText}
                                    <span className="cursor-blink">_</span>
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                            Building performant, data-driven applications at the intersection of 
                            <span className="font-semibold text-slate-800 dark:text-slate-100"> distributed systems</span>, 
                            <span className="font-semibold text-slate-800 dark:text-slate-100"> AI/ML</span>, and 
                            <span className="font-semibold text-slate-800 dark:text-slate-100"> modern cloud infrastructure</span>.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="#projects"
                                className="hero-cta-primary group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-teal-500/20 font-semibold text-base"
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    View My Work
                                    <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-teal-400 hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 transform hover:scale-[1.03] font-semibold text-base bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm"
                            >
                                <Mail className="w-4.5 h-4.5" />
                                Get In Touch
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-5 pt-2">
                            <a
                                href="https://github.com/davidhristov59"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors duration-200"
                                aria-label="GitHub"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/david-hristov-0985a4176"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="mailto:davidhristov10@gmail.com"
                                className="text-slate-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-200"
                                aria-label="Email"
                            >
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column — Code/Terminal Card */}
                    <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                        <div
                            className="w-full max-w-md"
                            style={{
                                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        >
                            <div className="code-block rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/5 dark:shadow-black/30">
                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/60 dark:bg-slate-800/60 border-b border-slate-200/40 dark:border-slate-700/40">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    <span className="ml-3 text-xs font-mono text-slate-400 dark:text-slate-500">
                                        ~/david/about.js
                                    </span>
                                </div>

                                {/* Code content */}
                                <div className="p-5 font-mono text-sm leading-7 text-slate-600 dark:text-slate-300">
                                    <div>
                                        <span className="text-blue-700 dark:text-sky-400">const</span>{' '}
                                        <span className="text-blue-600 dark:text-sky-400">developer</span>{' '}
                                        <span className="text-slate-400">=</span>{' '}
                                        <span className="text-slate-500 dark:text-slate-400">{'{'}</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-emerald-600 dark:text-emerald-400">name</span>
                                        <span className="text-slate-400">:</span>{' '}
                                        <span className="text-amber-600 dark:text-amber-400">'David Hristov'</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-emerald-600 dark:text-emerald-400">role</span>
                                        <span className="text-slate-400">:</span>{' '}
                                        <span className="text-amber-600 dark:text-amber-400">'Software Engineer'</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-emerald-600 dark:text-emerald-400">focus</span>
                                        <span className="text-slate-400">:</span>{' '}
                                        <span className="text-slate-500 dark:text-slate-400">[</span>
                                    </div>
                                    <div className="pl-10">
                                        <span className="text-amber-600 dark:text-amber-400">'Distributed Systems'</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-10">
                                        <span className="text-amber-600 dark:text-amber-400">'Machine Learning'</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-10">
                                        <span className="text-amber-600 dark:text-amber-400">'Cloud-Native'</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-slate-500 dark:text-slate-400">]</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-emerald-600 dark:text-emerald-400">passion</span>
                                        <span className="text-slate-400">:</span>{' '}
                                        <span className="text-amber-600 dark:text-amber-400">'Building things<br/><span className="pl-10">that matter'</span></span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 dark:text-slate-400">{'}'}</span>
                                        <span className="text-slate-400">;</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating tech badges */}
                            <div className="flex flex-wrap gap-2 mt-6 justify-center">
                                {['Java', 'Python', 'Spring Boot', 'React', 'K8s', 'PyTorch'].map((tech, i) => (
                                    <span
                                        key={tech}
                                        className="floating-badge px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 text-slate-600 dark:text-slate-300 backdrop-blur-sm shadow-sm"
                                        style={{ animationDelay: `${-i * 0.8}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a href="#experience" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300">
                    <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        Explore
                    </span>
                    <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
                    </div>
                </a>
            </div>
        </section>
    );
});

export default HeroSection;
