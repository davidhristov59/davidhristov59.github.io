import React, { memo } from 'react';
import { educationData } from '../data/portfolioData';

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

export default EducationSection;
