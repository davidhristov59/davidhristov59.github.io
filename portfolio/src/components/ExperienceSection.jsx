import React, { memo } from 'react';
import { experienceData } from '../data/portfolioData';

const ExperienceSection = memo(() => {
    return (
        <section id="experience" className="py-20 bg-bg transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Experience<span className="text-accent">.</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            className="p-8 bg-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-bold mb-2 text-ink">{exp.title}</h3>
                            <p className="text-lg text-accent font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-muted mb-4">{exp.date}</p>
                            <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed marker:text-accent">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ExperienceSection;
