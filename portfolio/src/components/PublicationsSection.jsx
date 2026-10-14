import React, { memo } from 'react';
import { BookOpen } from 'lucide-react';
import { publicationsData } from '../data/portfolioData';

const OWN_NAME = 'D. Hristov';

const PublicationsSection = memo(() => {
    return (
        <section id="publications" className="py-20 bg-bg transition-colors duration-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-ink">
                    Publications<span className="text-accent">.</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {publicationsData.map((pub) => (
                        <div
                            key={pub.title}
                            className="p-6 bg-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                                    <BookOpen className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-ink">{pub.title}</h3>
                                        <span className="self-start flex-shrink-0 px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                                            {pub.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted mb-1">
                                        {pub.authors.map((author, i) => (
                                            <React.Fragment key={author}>
                                                {i > 0 && ', '}
                                                {author === OWN_NAME ? (
                                                    <span className="font-semibold text-ink">{author}</span>
                                                ) : (
                                                    author
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    <p className="text-sm italic text-muted">{pub.venue}</p>
                                    {pub.note && <p className="text-sm text-muted mt-2">{pub.note}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default PublicationsSection;
