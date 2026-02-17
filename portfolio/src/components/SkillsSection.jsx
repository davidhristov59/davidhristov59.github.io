import React, { memo } from 'react';
import { skillsData } from '../data/portfolioData';

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

export default SkillsSection;
