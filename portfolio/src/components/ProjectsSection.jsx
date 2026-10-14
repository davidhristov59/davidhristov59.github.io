import React, { memo, useState, useMemo, useRef, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Tags shown on a card; the rest appear as "+N" (the popup shows all of them).
const MAX_TAGS = 5;

// Screenshots are kept in the data. Cards hide them for now; the popup shows them.
// Set either flag to change that.
const SHOW_CARD_IMAGES = false;
const SHOW_POPUP_IMAGES = true;

const Tag = ({ children }) => (
    <span className="px-3 py-1 text-xs font-medium bg-line text-muted rounded-full">
        {children}
    </span>
);

const ProjectLinks = ({ project }) => {
    if (!project.link && !project.website) return null;
    return (
        <div className="flex items-center gap-6">
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent hover:text-accent-strong font-medium transition-colors"
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
                    className="inline-flex items-center text-sm text-accent hover:text-accent-strong font-medium transition-colors"
                >
                    <span className="mr-2">Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            )}
        </div>
    );
};

const ProjectCard = ({ project, onOpen }) => {
    const tags = project.tags ?? [];
    const hiddenTagCount = Math.max(0, tags.length - MAX_TAGS);

    return (
        <div className="group overflow-hidden rounded-2xl bg-bg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            {SHOW_CARD_IMAGES && project.image && (
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                        src={project.image}
                        srcSet={project.imageSrcSet}
                        sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
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
                    <h3
                        title={project.title}
                        className="text-lg font-bold text-ink line-clamp-2 group-hover:text-accent dark:group-hover:text-accent transition-colors"
                    >
                        {project.title}
                    </h3>
                    {project.status && (
                        <span className="flex-shrink-0 px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                            {project.status}
                        </span>
                    )}
                </div>

                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                <button
                    type="button"
                    onClick={() => onOpen(project)}
                    aria-haspopup="dialog"
                    className="self-start mt-1 p-0 text-sm font-medium text-accent hover:text-accent-strong bg-transparent border-0 rounded-none"
                >
                    Read more
                </button>

                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {tags.slice(0, MAX_TAGS).map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                    {hiddenTagCount > 0 && (
                        <span className="px-3 py-1 text-xs font-medium text-muted">
                            +{hiddenTagCount}
                        </span>
                    )}
                </div>

                <div className="mt-auto">
                    <ProjectLinks project={project} />
                </div>
            </div>
        </div>
    );
};

// Full project details in a native <dialog>: Escape, the close button or a
// click on the backdrop closes it, and focus stays inside while it is open.
const ProjectModal = ({ project, onClose }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog.open) dialog.showModal();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        // No dialog.close() here: unmounting removes the dialog anyway, and its
        // close event would immediately re-close it under StrictMode.
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={(e) => {
                if (e.target === dialogRef.current) onClose();
            }}
            aria-labelledby="project-modal-title"
            className="p-0 m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] rounded-2xl border-0 bg-transparent text-ink backdrop:bg-black/60"
        >
            <div className="bg-surface rounded-2xl shadow-2xl ring-1 ring-line">
                {SHOW_POPUP_IMAGES && project.image && (
                    <img
                        src={project.image}
                        srcSet={project.imageSrcSet}
                        sizes="(min-width: 704px) 672px, 100vw"
                        alt={project.title}
                        decoding="async"
                        className="w-full max-h-72 object-cover object-top rounded-t-2xl"
                    />
                )}

                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                            {project.status && (
                                <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                                    {project.status}
                                </span>
                            )}
                            <h3 id="project-modal-title" className="text-2xl font-bold text-ink">
                                {project.title}
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="flex-shrink-0 p-2 -m-2 text-muted hover:text-accent bg-transparent border-0 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {(project.tags ?? []).map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>

                    <ProjectLinks project={project} />
                </div>
            </div>
        </dialog>
    );
};

const ProjectsSection = memo(() => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [openProject, setOpenProject] = useState(null);

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
            className="py-20 bg-surface transition-colors duration-200"
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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-6 max-w-7xl mx-auto">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} onOpen={setOpenProject} />
                    ))}
                </div>
            </div>

            {openProject && (
                <ProjectModal
                    key={openProject.title}
                    project={openProject}
                    onClose={() => setOpenProject(null)}
                />
            )}
        </section>
    );
});

export default ProjectsSection;
