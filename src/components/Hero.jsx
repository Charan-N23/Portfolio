import { personalInfo } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useAnimations'
import { GithubIcon, LinkedinIcon, EmailIcon, DownloadIcon, CodeIcon } from './Icons'

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.roles)

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Text column */}
        <div className="hero-text fade-in-up">
          {personalInfo.available && (
            <span className="availability-badge">
              <span className="badge-dot" />
              Available for opportunities
            </span>
          )}

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-name">{personalInfo.name}</span>
          </h1>

          <p className="hero-role">
            <span className="typing-text typing-cursor text-accent">{typedText}</span>
          </p>

          <p className="hero-intro">{personalInfo.tagline}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <CodeIcon size={18} /> View Projects
            </a>
            <a href={personalInfo.resumeUrl} download className="btn btn-secondary">
              <DownloadIcon size={18} /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="social-link"
            >
              <EmailIcon size={22} />
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-photo-wrapper float-animation">
          <div className="hero-photo-frame">
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              className="hero-photo"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.08;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.25);
        }

        .hero-title {
          font-size: 3.25rem;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .gradient-name {
          background: linear-gradient(90deg, var(--accent) 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-role {
          margin-bottom: 20px;
        }

        .typing-text {
          display: inline-block;
          min-height: 1.2em;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .hero-intro {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .hero-socials {
          display: flex;
          gap: 16px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          background: var(--bg-secondary);
          transition: all 0.25s ease;
        }

        .social-link:hover {
          color: #fff;
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }

        .hero-photo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-photo-frame {
          position: relative;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, var(--accent) 0%, #8B5CF6 100%);
          box-shadow: 0 0 60px rgba(59,130,246,0.35);
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg-primary);
          display: block;
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-text {
            order: 2;
          }

          .hero-photo-wrapper {
            order: 1;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta, .hero-socials, .availability-badge {
            justify-content: center;
          }

          .hero-photo-frame {
            width: 260px;
            height: 260px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-intro {
            font-size: 1.05rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            justify-content: center;
          }

          .hero-photo-frame {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  )
}
