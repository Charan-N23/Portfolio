import { experience } from '../data/portfolio'
import { BriefcaseIcon, CheckIcon } from './Icons'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-tag text-center">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Where I've been putting my skills into practice</p>
        </div>

        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={exp.role} className={`experience-card card animate-on-scroll delay-${index + 1}`}>
              <div className="experience-header">
                <div className="experience-icon">
                  <BriefcaseIcon size={24} />
                </div>
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>

              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="bullet-check">
                      <CheckIcon size={14} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .experience-card {
          padding: 36px;
        }

        .experience-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .experience-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-light);
          color: var(--accent);
          flex-shrink: 0;
        }

        .experience-role {
          font-size: 1.3rem;
        }

        .experience-company {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .experience-period {
          margin-left: auto;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
          background: var(--accent-light);
          padding: 6px 14px;
          border-radius: 8px;
        }

        .experience-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .experience-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .bullet-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 600px) {
          .experience-period {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  )
}
