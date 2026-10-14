import React, { memo, useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const ProjectsSection = memo(() => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filterCategories = useMemo(() => {
        const categories = new Set();
        projectsData.forEach(p => {
            p.category.forEach(c => categories.add(c));
        });
        return ['All', ...Array.from(categories)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projectsData;
        }
        return projectsData.filter(project => project.category.includes(activeFilter));
    }, [activeFilter]);

    return (
        <section
            id="projects"
            className="py-20 bg-bg transition-colors duration-200"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-ink">
                    My Projects<span className="text-accent">.</span>
                </h2>
                <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
                    A collection of projects showcasing my passion for intelligent
                    systems, AI-driven solutions, and scalable software architecture.
                </p>

                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-12">
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            aria-pressed={activeFilter === category}
                            className={`px-1 py-2 text-sm md:text-base font-medium rounded-none bg-transparent border-0 border-b-2 transition-colors duration-150 ${
                                activeFilter === category
                                    ? 'text-accent border-accent hover:border-accent'
                                    : 'text-muted border-transparent hover:text-ink hover:border-line'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="group overflow-hidden rounded-2xl bg-surface shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            {project.image && (
                                <div className="relative h-[13.5rem] overflow-hidden flex-shrink-0">
                                    <img
                                        src={project.image}
                                        srcSet={project.imageSrcSet}
                                        sizes="(min-width: 768px) 576px, 100vw"
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-ink group-hover:text-accent dark:group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.status && (
                                        <span className="flex-shrink-0 px-3 py-1 text-xs font-semibold bg-muted text-white rounded-full">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <p className="text-muted mb-4 leading-relaxed min-h-[4rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-line text-muted rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-accent hover:text-accent-strong font-medium transition-colors"
                                        >
                                            <span className="mr-2">View on GitHub</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-accent hover:text-accent-strong font-medium transition-colors"
                                        >
                                            <span className="mr-2">Visit Website</span>
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

export default ProjectsSection;
