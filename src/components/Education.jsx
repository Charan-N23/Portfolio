import { education } from '../data/portfolio'
import { GraduationCapIcon } from './Icons'

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-tag text-center">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">My educational journey </p>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`timeline-item animate-on-scroll delay-${index + 1}`}
            >
              <div className="timeline-dot">
                <GraduationCapIcon size={20} />
              </div>
              <div className="timeline-content card">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          padding-left: 40px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -40px;
          top: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          box-shadow: 0 0 0 4px var(--bg-secondary);
        }

        .timeline-content {
          padding: 28px;
        }

        .timeline-period {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
          background: var(--accent-light);
          padding: 4px 12px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .timeline-degree {
          font-size: 1.25rem;
          margin-bottom: 6px;
        }

        .timeline-institution {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .timeline-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  )
}
