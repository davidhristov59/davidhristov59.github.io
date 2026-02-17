import React, { memo } from 'react';
import { certificationsData } from '../data/portfolioData';

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

export default CertificationsSection;
