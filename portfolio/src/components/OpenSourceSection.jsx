import React, { memo } from 'react';
import { ExternalLink, GitPullRequest } from 'lucide-react';
import { openSourceData } from '../data/portfolioData';

const OpenSourceSection = memo(() => {
    return (
        <section id="open-source" className="py-20 bg-bg transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Open-Source Contributions<span className="text-accent">.</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {openSourceData.map((item) => (
                        <div
                            key={`${item.project}-${item.title}`}
                            className="p-8 bg-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start">
                                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full items-center justify-center mr-4">
                                    <GitPullRequest className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-1 text-ink">{item.project}</h3>
                                    <p className="text-lg text-accent font-medium mb-2">{item.title}</p>
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                                        {item.context}
                                    </span>
                                    <p className="text-muted leading-relaxed mb-4">{item.description}</p>
                                    <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed marker:text-accent mb-6">
                                        {item.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium bg-line text-muted rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-accent hover:text-accent-strong font-medium transition-colors"
                                        >
                                            <span className="mr-2">View on GitHub</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default OpenSourceSection;
