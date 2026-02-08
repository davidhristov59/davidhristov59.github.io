import React, { useState, useEffect, useCallback, memo, Suspense } from 'react';
import { Github, Linkedin, Mail, ChevronUp, ExternalLink , Moon, Sun } from 'lucide-react';
import { FaPython, FaJava, FaDocker, FaGit, FaReact, FaAws, FaHtml5 } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiKubernetes, SiPostgresql, SiMongodb, SiTensorflow, SiDotnet, SiC, SiTailwindcss } from 'react-icons/si';
import { SiPytorch, SiApacheflink, SiHuggingface, SiDjango, SiFlask, SiStreamlit} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { Shield } from 'lucide-react';

import semanticImg from './assets/img/semantic.png'
import fitforgeImg from './assets/img/fitforge.png'
import movieImg from './assets/img/movie.png'
import mseImg from './assets/img/mse.png'
import opticalflowImg from './assets/img/opticalflow.png'
import eegImg from './assets/img/eeg.png'
import taskmngmntImg from './assets/img/taskmngmnt.png'

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
);

const skillsData = [
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'C++', icon: <SiCplusplus size={40} /> },
    { name: 'C', icon: <SiC size={40} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
    { name: 'ASP .NET Core', icon: <SiDotnet size={40} /> },
    { name: 'Flask', icon: <SiFlask size={40} /> },
    { name: 'Django', icon: <SiDjango size={40} /> },
    { name: 'React', icon: <FaReact size={40}/>},
    { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
    { name: 'Streamlit', icon: <SiStreamlit size={40} /> },
    { name: 'HTML/CSS', icon: <FaHtml5 size={40} /> },
    { name: 'Docker', icon: <FaDocker size={40} /> },
    { name: 'Git', icon: <FaGit size={40} /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
    { name: 'AWS', icon: <FaAws size={40} /> },
    { name: 'Azure', icon: <VscAzure size={40} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
];

const projectsData = [
    {
        title: 'CogniViz',
        description: 'Knowledge Graph Exploration Platform with VQA capabilities, multi-hop traversal, LLM-based entity linking, and interactive visualization',
        link: 'https://github.com/davidhristov59/semantic-visualizer',
        tags: ['Semantic Web', 'Java', 'Spring Boot', 'React', 'Apache Jena', 'D3.js', 'Tailwind'],
        image: semanticImg,
        status: 'Ongoing'
    },
    {
        title: 'Azure AI Assistant',
        description: 'Azure-RAG-System is a .NET 8 web application that implements a Retrieval-Augmented Generation (RAG) architecture. It leverages Azure\'s robust AI ecosystem to provide intelligent, context-aware responses to user queries.',
        link: 'https://github.com/davidhristov59/Azure-RAG-System',
        // image: '/src/assets/img/rag.png',
        tags: ['ASP.NET Core', 'Azure Cloud', 'Azure App Services', 'Cosmos DB', 'Azure OpenAI', 'Azure Cognitive Search', 'Github Actions'],
        status: 'Ongoing',
        website: 'https://azure-rag-platform-gudwa2bjhehme5hf.italynorth-01.azurewebsites.net'
    },
    {
        title: 'EEG Epileptic Seizure Classification',
        description: 'ML system for seizure prediction using advanced time/frequency/nonlinear features with multiple classification models',
        link: 'https://github.com/davidhristov59/eeg-epilepsy-seizure-classification',
        tags: ['Python', 'PyEEG', 'MNE', 'SciPy', 'Sci-kit learn'],
        image: eegImg
    },
    {
        title: 'Task Management System Microservice',
        description: 'This project implements a DDD Service-Oriented designed to help users (employees and students) create and manage workspaces, projects, and tasks. ',
        link: 'https://github.com/davidhristov59/task-management',
        tags: ['Kotlin', 'Axon Framework', 'Kafka', 'Consul', 'TypeScript'],
        image: taskmngmntImg
    },
    {
        title: 'Movie Management System ',
        description: 'This project demonstrates modern containerization, orchestration, CI/CD pipelines, and cloud deployment practices through a practical movie exploration and management system.',
        link: 'https://github.com/davidhristov59/Movie-Management-System',
        tags: ['Kubernetes (k3d)','AWS EC2', 'MongoDB', 'Flask', 'Streamlit', 'Docker', 'GitHub Actions'],
        image: movieImg
    },
    {
        title: 'Macedonian Stock Exchange Prediction',
        description: 'Developed a web application to predict stock prices using technical and sentiment analysis.',
        link: 'https://github.com/davidhristov59/Macedonian-Stock-Exchange-Prediction',
        image: mseImg,
        tags: ['Flask', 'Python', 'Docker', 'BeautifulSoup', 'Azure Cloud'],
        website: 'https://msepredictions-cqb0d5b7e4cyc4ar.westeurope-01.azurewebsites.net'
    },
    {
        title: 'FitForge',
        description: 'FitForge is a ready to use application for fitness and nutrition tracking, designed to generate personalized workout and meal plans based on user preferences and goals.',
        link: 'https://github.com/davidhristov59/FitForge',
        image: fitforgeImg,
        tags: ['C#', 'ASP .NET', 'Entity Framework', 'SQL Server', 'Bootstrap'],
    },
    {
        title: 'Optical Flow Calculation Algorithm',
        description: 'Created an algorithm to calculate optical flow in videos.',
        link: 'https://github.com/davidhristov59/Calculating-Optical-Flow',
        image: opticalflowImg,
        tags: ['Python', 'OpenCV', 'Computer Vision'],
    },
    {
        title: 'Real-Time Cascading Failure Detection and Prevention System for Smart Grids',
        description: 'An early warning system that detects cascading failures in smart grid networks using graph-based analysis, Apache Flink stream processing, and real-time simulation.',
        link: 'https://github.com/davidhristov59/Real-Time-Cascading-Failure-Detection-System',
        // image: '/src/assets/img/opticalflow.png',
        tags: ['Apache Flink', 'Apache Spark', 'Apache Kafka', 'Graph Analysis', 'TimeScaleDB', 'Docker', 'FastAPI'],
        status: 'Ongoing'
    },
    {
        title: 'Hybrid Privacy-Preserving RAG – Secure Edge-Cloud AI System',
        description: 'RAG system that enables the secure use of Cloud-based LLMs without exposing sensitive data by utilizing a Split Inference architecture, the system ensures that personally identifiable information (PII) is masked locally before being sent to the cloud for processing.',
        // link: 'https://github.com/davidhristov59/Real-Time-Cascading-Failure-Detection-System',
        // image: '/src/assets/img/opticalflow.png',
        tags: ['Python', 'NLP', 'LLM', 'Hybrid RAG', 'Edge Computing', 'LangChain', 'FastAPI'],
        status: 'Ongoing'
    },
];

const experienceData = [
    {
        title: 'Software Engineering Intern',
        company: 'Inteligenta',
        date: 'April 2025 – August 2025',
        description:
            'Contributed to enterprise-scale system development with modernized architecture and clean design practices. Worked across frontend, backend, and integration layers, improving service communication and data workflows. Refactored legacy components to enhance reliability, maintainability, and system performance.',
    },
];

const educationData = [
    {
        institution: 'Faculty of Computer Science and Engineering (FCSE)',
        degree: 'BSc in Software Engineering',
        date: 'Sept 2022 – current',
        location: 'Skopje, Macedonia',
        status: 'Ongoing',
        coursework: [
            'Natural Language Processing',
            'Mining Massive Datasets',
            'Web-Based Systems',
            'Data Science',
            'Artificial Intelligence',
            'DevOps',
            'Service-Oriented Architectures',
            'Databases',
            'Web Programming',
            'Advanced Programming',
            'Probability & Statistics'
        ]
    },
];

const certificationsData = [
    {
        name: 'Deep Learning with TensorFlow & PyTorch',
        icon: <SiTensorflow size={24} />
    },
    {
        name: 'Latency-limited processing of streaming data with Apache Flink',
        icon: <SiApacheflink size={24} />
    },
    {
        name: 'Natural Language Processing',
        icon: <SiHuggingface size={24} />
    },
    {
        name: 'Day After Production - Cybersecurity and Exploiting',
        icon: <Shield size={24} />
    },
];

const navLinks = [
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#education', text: 'Education' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' },
];

const TagCloud = ({ coursework }) => {
    return (
        <div className="flex flex-wrap gap-3 justify-start mt-4">
            {coursework.map((course, i) => (
                <span
                    key={i}
                    className="px-4 py-2 bg-blue-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    {course}
                </span>
            ))}
        </div>
    );
};

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
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-slate-700 dark:text-slate-200 p-2"
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
                                className="text-left text-slate-700 dark:text-slate-200 font-medium"
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
                    I build intelligent, scalable systems for knowledge-driven applications.
                </p>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-4 mb-12 max-w-3xl mx-auto">
                    Passionate about <span className="text-blue-600 dark:text-blue-400 font-semibold">AI</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">Machine Learning</span>, and creating innovative software solutions that make a difference.
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

const ExperienceSection = memo(() => {
    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
                    Experience<span className="text-blue-600">.</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{exp.title}</h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{exp.date}</p>
                            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const ProjectsSection = memo(() => {
    return (
        <section
            id="projects"
            className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                    My Projects<span className="text-blue-600">.</span>
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
                    A collection of projects showcasing my passion for intelligent
                    systems, AI-driven solutions, and scalable software architecture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {project.image && (
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.status && (
                                        <span className="flex-shrink-0 px-3 py-1 text-xs font-semibold bg-slate-400 dark:bg-slate-600 text-white rounded-full">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed min-h-[4rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-6">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                                        >
                                            <span className="mr-2">View on GitHub</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                                        >
                                            <span className="mr-2">Visit Website</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const SkillsSection = memo(() => {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                    Technical Skills<span className="text-blue-600">.</span>
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
                    Technologies and tools I use to bring ideas to life.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-center text-slate-900 dark:text-white">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const EducationSection = memo(() => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
                    Education<span className="text-blue-600">.</span>
                </h2>
                <div className="max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{edu.institution}</h3>
                                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.degree}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</p>
                                </div>
                                {edu.status && (
                                    <span className="px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                                        {edu.status}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{edu.date}</p>
                            {edu.coursework && (
                                <div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Relevant Coursework</h4>
                                    <TagCloud coursework={edu.coursework} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const CertificationsSection = memo(() => {
    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
                    Certifications<span className="text-blue-600">.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                                    <div className="text-blue-600 dark:text-blue-400">
                                        {cert.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

const ContactSection = memo(() => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                    Get In Touch<span className="text-blue-600">.</span>
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
                    Interested in collaboration or have questions? Feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <a
                        href="mailto:davidhristov10@gmail.com"
                        className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">Email</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-center text-sm">davidhristov10@gmail.com</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/david-hristov-0985a4176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">LinkedIn</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-center text-sm">Connect with me</p>
                    </a>

                    <a
                        href="https://github.com/davidhristov59"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">GitHub</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-center text-sm">Check out my code</p>
                    </a>
                </div>
            </div>
        </section>
    );
});

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

const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            // If no saved preference, default to false (light mode)
            return savedMode === 'true';
        }
        return false;
    });
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isVisible, setIsVisible] = useState({});
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Custom styles for animations
    const customStyles = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.6);
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
    
    .animation-delay-0 { animation-delay: 0s; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-1500 { animation-delay: 1.5s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-3000 { animation-delay: 3s; }
    
    .hover-lift {
      transition: all 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .dark .hover-lift:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #f59e0b, #d97706, #92400e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .dark .gradient-text {
      background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .shake {
      animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `;

    const handleScroll = useCallback(() => {
        setShowScrollTop(window.scrollY > 560);

        document.querySelectorAll('[data-animate]').forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isElementVisible = rect.top < window.innerHeight - 100;
            setIsVisible((prev) => ({
                ...prev,
                [element.dataset.animate]: isElementVisible,
            }));
        });

        const sections = ['experience', 'projects', 'skills', 'education', 'certifications', 'publications','contact'];
        let currentSection = '';

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = section;
                }
            }
        });

        if (window.scrollY < 100) {
            currentSection = 'home';
        }

        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const toggleTheme = useCallback(() => {
        setIsDarkMode((prev) => {
            const newValue = !prev;
            if (typeof window !== 'undefined') {
                localStorage.setItem('darkMode', newValue.toString());
            }
            return newValue;
        });
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <style>{customStyles}</style>
            <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
                <Suspense fallback={<LoadingSpinner />}>
                    <Navbar
                        isDarkMode={isDarkMode}
                        toggleTheme={toggleTheme}
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                        activeSection={activeSection}
                    />
                    <HeroSection />
                    <ExperienceSection isVisible={isVisible} />
                    <ProjectsSection isVisible={isVisible} />
                    <SkillsSection />
                    <EducationSection isVisible={isVisible} />
                    <CertificationsSection isVisible={isVisible} />
                    {/*<PublicationsSection isVisible={isVisible} />*/}
                    {/*<CallToActionSection />*/}
                    <ContactSection />
                    <Footer />
                    {showScrollTop && (
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="fixed bottom-8 right-8 p-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-110 animate-glow"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp size={24} />
                        </button>
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default Portfolio;
