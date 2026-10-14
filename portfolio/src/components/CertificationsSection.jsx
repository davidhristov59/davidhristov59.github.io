import React, { memo } from 'react';
import { certificationsData, languagesData } from '../data/portfolioData';

const CertificationsSection = memo(() => {
    return (
        <section id="certifications" className="py-20 bg-surface transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Certifications<span className="text-accent">.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className="p-6 bg-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                                    <div className="text-accent">
                                        {cert.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-ink">{cert.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-ink">Languages</h3>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {languagesData.map((lang) => (
                        <div key={lang.name} className="px-6 py-4 bg-bg rounded-xl shadow-lg text-center">
                            <p className="text-lg font-semibold text-ink">{lang.name}</p>
                            <p className="text-sm text-accent">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default CertificationsSection;
