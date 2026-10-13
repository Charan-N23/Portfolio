import { projects } from '../data/portfolio'
import { GithubIcon, ExternalLinkIcon, CodeIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-tag text-center">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects I've built — from client work to personal experiments
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card card animate-on-scroll delay-${(index % 4) + 1}`}
            >
              <div className="project-card-header">
                <span className="project-icon">
                  <CodeIcon size={24} />
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLinkIcon size={16} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .project-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .project-card-header {
          margin-bottom: 20px;
        }

        .project-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-light);
          color: var(--accent);
        }

        .project-title {
          font-size: 1.35rem;
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 6px;
          background: var(--accent-light);
          color: var(--accent);
        }

        .project-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-sm {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-links {
            flex-direction: column;
          }

          .project-links .btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
