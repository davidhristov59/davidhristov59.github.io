import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { ChevronUp } from 'lucide-react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import InterestsSection from './components/InterestsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

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
    const [activeSection, setActiveSection] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

        const sections = ['experience', 'projects', 'skills', 'education', 'interests', 'certifications', 'contact'];
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
            <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
                <Suspense fallback={<LoadingSpinner />}>
                    <Navbar
                        isDarkMode={isDarkMode}
                        toggleTheme={toggleTheme}
                        activeSection={activeSection}
                    />
                    <HeroSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <EducationSection />
                    <InterestsSection />
                    <CertificationsSection />
                    <ContactSection />
                    <Footer />
                    {showScrollTop && (
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="fixed bottom-8 right-8 p-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-110 animate-glow z-50"
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
