import React, { memo } from 'react';
import { skillsData } from '../data/portfolioData';

const SkillsSection = memo(() => {
    return (
        <section id="skills" className="py-20 bg-surface transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-ink">
                    Technical Skills<span className="text-accent">.</span>
                </h2>
                <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
                    Technologies and tools I use to bring ideas to life.
                </p>
                <div className="max-w-6xl mx-auto space-y-12">
                    {skillsData.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3 className="text-2xl font-bold text-center text-ink mb-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group flex flex-col items-center justify-center p-6 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-sm font-semibold text-center text-ink">
                                            {skill.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default SkillsSection;
