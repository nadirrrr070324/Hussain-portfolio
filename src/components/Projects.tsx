import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase() === filter.toLowerCase()));

  const allTags = [...new Set(PROJECTS.flatMap((p) => p.tags))];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="divider mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on. All source code is available on GitHub.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === tag
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group glass-card p-6 hover:border-primary-400/50 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary-600 shadow-lg hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium bg-white/90 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                  {project.featured ? 'Featured' : 'New'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 underline-offset-4 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">No projects found with this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}