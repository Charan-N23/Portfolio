import { skillCategories } from '../data/portfolio'
import { TechIcon } from './Icons'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-tag text-center">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A collection of tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`skill-category card animate-on-scroll delay-${catIndex + 1}`}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    <span className="skill-pill-icon">
                      <TechIcon name={skill.icon} size={20} />
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-alt {
          background: var(--bg-secondary);
        }

        .text-center {
          display: block;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .skill-category {
          padding: 32px;
        }

        .skill-category-title {
          font-size: 1.3rem;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--accent);
          display: inline-block;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: var(--bg-tertiary);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.25s ease;
          cursor: default;
        }

        .skill-pill:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59,130,246,0.25);
        }

        .skill-pill:hover .skill-pill-icon {
          color: #fff;
        }

        .skill-pill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.25s ease;
        }
      `}</style>
    </section>
  )
}
