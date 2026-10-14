import React, { useState, useEffect, memo, useRef } from 'react';
import { Mail, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ROLES = [
    'Machine Learning',
    'LLMs & Agentic AI',
    'Natural Language Processing',
    'MLOps on AWS',
    'Knowledge Graphs',
];

// Contents of the about.js card (all taken from the CV).
const ABOUT = {
    name: 'David Hristov',
    role: 'ML & Software Engineer',
    location: 'Skopje, Macedonia',
    focus: ['Machine Learning', 'LLMs & Agents', 'MLOps on AWS'],
    experience: ['ML Intern @ Loka', 'SWE Intern @ Inteligenta'],
    education: ['MSc Data Science @ FCSE', 'BSc CS & Engineering @ FCSE'],
    publications: 2,
};

const CodeValue = ({ value }) =>
    typeof value === 'number'
        ? <span className="text-accent">{value}</span>
        : <span className="text-muted">'{value}'</span>;

const CodeEntry = ({ name, value }) => (
    <>
        <div className="pl-5">
            <span className="text-ink">{name}</span>
            <span className="text-muted/70">:</span>{' '}
            {Array.isArray(value) ? <span className="text-muted">[</span> : <CodeValue value={value} />}
            {!Array.isArray(value) && <span className="text-muted/70">,</span>}
        </div>
        {Array.isArray(value) && (
            <>
                {value.map((item) => (
                    <div key={item} className="pl-10">
                        <CodeValue value={item} />
                        <span className="text-muted/70">,</span>
                    </div>
                ))}
                <div className="pl-5">
                    <span className="text-muted">]</span>
                    <span className="text-muted/70">,</span>
                </div>
            </>
        )}
    </>
);

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
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            }, 0);
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
        >
            {/* CSS custom properties for theming */}
            <style>{`
                #top {
                    background: rgb(var(--bg));
                }

                .hero-grid {
                    background-image:
                        linear-gradient(rgb(var(--line) / 0.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgb(var(--line) / 0.6) 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .dark .hero-grid {
                    background-image:
                        linear-gradient(rgb(var(--line) / 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgb(var(--line) / 0.5) 1px, transparent 1px);
                }

                .code-block {
                    background: rgb(var(--surface) / 0.7);
                    border: 1px solid rgb(var(--line));
                    backdrop-filter: blur(12px);
                }

                .hero-name {
                    color: rgb(var(--ink));
                }

                .accent-line {
                    background: rgb(var(--accent));
                }

                .cursor-blink {
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                .hero-cta-primary {
                    background: rgb(var(--accent));
                    color: #ffffff;
                    position: relative;
                    overflow: hidden;
                }
                .hero-cta-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgb(var(--accent-strong));
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .hero-cta-primary:hover::before {
                    opacity: 1;
                }
                .dark .hero-cta-primary {
                    color: rgb(var(--bg));
                }
            `}</style>

            {/* Grid pattern background */}
            <div className="hero-grid absolute inset-0" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03]">
                <svg viewBox="0 0 200 200" fill="none">
                    <circle cx="0" cy="0" r="180" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                    <circle cx="0" cy="0" r="120" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                    <circle cx="0" cy="0" r="60" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen py-24">

                    {/* Left Column — Main Content */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Name */}
                        <div>
                            <p className="text-base md:text-lg font-medium text-muted mb-2 tracking-wide uppercase">
                                Machine Learning &amp; Software Engineer
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                <span className="hero-name">{displayText}</span>
                                <span className="cursor-blink text-accent font-light">|</span>
                            </h1>
                            <div className="accent-line h-1 w-24 rounded-full mt-5" />
                        </div>

                        {/* Role rotator */}
                        <div className="flex items-center gap-3">
                            <Terminal className="w-5 h-5 text-muted flex-shrink-0" />
                            <p className="text-lg md:text-xl font-mono text-muted">
                                Focused on{' '}
                                <span className="text-accent font-semibold">
                                    {roleText}
                                    <span className="cursor-blink">_</span>
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted leading-relaxed max-w-xl">
                            Designing, training and deploying reliable AI systems, from
                            <span className="font-semibold text-ink"> traditional ML</span> and
                            <span className="font-semibold text-ink"> deep learning</span> to
                            <span className="font-semibold text-ink"> NLP</span> and
                            <span className="font-semibold text-ink"> agentic LLM applications</span>.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="#projects"
                                className="hero-cta-primary group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/20 font-semibold text-base"
                            >
                                <span className="relative z-10 flex items-center gap-2.5">
                                    View My Work
                                    <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-line text-ink hover:border-accent hover:text-accent transition-all duration-300 transform hover:scale-[1.03] font-semibold text-base bg-surface/50 backdrop-blur-sm"
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
                                className="text-muted hover:text-ink transition-colors duration-200"
                                aria-label="GitHub"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/david-hristov-0985a4176"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="mailto:davidhristov10@gmail.com"
                                className="text-muted hover:text-accent transition-colors duration-200"
                                aria-label="Email"
                            >
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column — Code/Terminal Card */}
                    <div className="lg:col-span-6 hidden lg:flex justify-center items-center">
                        <div
                            className="w-full max-w-xl"
                            style={{
                                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        >
                            <div className="code-block rounded-2xl overflow-hidden shadow-2xl shadow-ink/5 dark:shadow-black/30">
                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-bg/60 border-b border-line">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    <span className="ml-3 text-xs font-mono text-muted">
                                        ~/david/about.js
                                    </span>
                                </div>

                                {/* Code content */}
                                <div className="p-6 font-mono text-[15px] leading-7 text-muted">
                                    <div>
                                        <span className="text-accent">const</span>{' '}
                                        <span className="text-accent">developer</span>{' '}
                                        <span className="text-muted/70">=</span>{' '}
                                        <span className="text-muted">{'{'}</span>
                                    </div>
                                    {Object.entries(ABOUT).map(([key, value]) => (
                                        <CodeEntry key={key} name={key} value={value} />
                                    ))}
                                    <div>
                                        <span className="text-muted">{'}'}</span>
                                        <span className="text-muted/70">;</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a href="#experience" className="group flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors duration-300">
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
