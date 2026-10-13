import { stats } from '../data/portfolio'
import { TechOrbitIllustration } from './Illustrations'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Illustration */}
          <div className="about-illustration-wrapper animate-on-scroll">
            <TechOrbitIllustration />
          </div>

          {/* Text + stats */}
          <div className="about-content animate-on-scroll delay-1">
            <span className="section-tag">About Me</span>
            <h2 className="section-title-left">Get to know me</h2>
            <p className="about-text">
              Computer Science graduate with a strong foundation in software development, Python, FastAPI, Flask, React, and RESTful API development. Hands-on experience in building full-stack web applications and AI/ML-based solutions, with knowledge of backend development, API integration, database concepts, and responsive UI development. Skilled in problem-solving and writing clean, efficient, and maintainable code.
            </p>

            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .about-illustration-wrapper {
          display: flex;
          justify-content: center;
        }

        .section-title-left {
          font-size: 2.5rem;
          text-align: left;
          margin-bottom: 20px;
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 36px;
        }

        .stats-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat-card {
          flex: 1;
          min-width: 140px;
          padding: 24px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-illustration-wrapper {
            order: 1;
          }

          .about-content {
            order: 2;
          }

          .section-title-left {
            font-size: 2rem;
            text-align: center;
          }

          .about-text {
            text-align: center;
          }

          .stats-row {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
