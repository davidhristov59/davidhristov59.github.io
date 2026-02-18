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
            className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                    My Projects<span className="text-blue-600">.</span>
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                    A collection of projects showcasing my passion for intelligent
                    systems, AI-driven solutions, and scalable software architecture.
                </p>

                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
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
                            className="group overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            {project.image && (
                                <div className="relative h-[13.5rem] overflow-hidden flex-shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.status && (
                                        <span className="flex-shrink-0 px-3 py-1 text-xs font-semibold bg-slate-400 dark:bg-slate-600 text-white rounded-full">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed min-h-[4rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
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
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
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
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
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
