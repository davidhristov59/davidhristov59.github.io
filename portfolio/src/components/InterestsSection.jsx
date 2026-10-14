import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';
import { interestsData } from '../data/portfolioData';

const InterestsSection = memo(() => {
    return (
        <section id="interests" className="py-20 bg-surface transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Fields of Interest<span className="text-accent">.</span>
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {interestsData.map((interest, index) => (
                            <div key={index} className="flex items-start p-2">
                                <Sparkles className="w-5 h-5 text-accent mr-4 mt-1 flex-shrink-0" />
                                <p className="text-muted text-lg">{interest}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default InterestsSection;
