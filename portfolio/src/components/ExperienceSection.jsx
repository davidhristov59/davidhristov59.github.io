import React, { memo } from 'react';
import { experienceData } from '../data/portfolioData';

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

export default ExperienceSection;
