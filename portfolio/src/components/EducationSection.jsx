import React, { memo } from 'react';
import { educationData } from '../data/portfolioData';

const TagCloud = ({ coursework }) => {
    return (
        <div className="flex flex-wrap gap-3 justify-start mt-4">
            {coursework.map((course, i) => (
                <span
                    key={i}
                    className="px-4 py-2 bg-accent/10 text-muted rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    {course}
                </span>
            ))}
        </div>
    );
};

const EducationSection = memo(() => {
    return (
        <section id="education" className="py-20 bg-surface transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Education<span className="text-accent">.</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="p-8 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-ink mb-2">{edu.institution}</h3>
                                    {edu.university && (
                                        <p className="text-muted mb-2">{edu.university}</p>
                                    )}
                                    <p className="text-lg text-accent font-medium mb-1">{edu.degree}</p>
                                    <p className="text-sm text-muted">{edu.location}</p>
                                </div>
                                {edu.status && (
                                    <span className="px-4 py-2 text-sm font-semibold bg-accent/10 text-accent rounded-full">
                                        {edu.status}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-muted mb-6">{edu.date}</p>
                            {edu.thesis && (
                                <div className="mb-6">
                                    <p className="text-muted">
                                        <span className="font-bold text-ink">Thesis: </span>
                                        {edu.thesis}
                                    </p>
                                    {edu.thesisGrade && (
                                        <p className="text-muted mt-2">
                                            <span className="font-bold text-ink">Grade: </span>
                                            <span className="font-semibold text-accent">{edu.thesisGrade}</span>
                                        </p>
                                    )}
                                </div>
                            )}
                            {edu.coursework && (
                                <div>
                                    <h4 className="text-lg font-bold mb-3 text-ink">Relevant Coursework</h4>
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

export default EducationSection;
