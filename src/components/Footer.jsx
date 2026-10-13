import { navLinks, personalInfo } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, EmailIcon, ArrowUpIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              Charan<span className="text-accent">.</span>N
            </h3>
            <p className="footer-tagline">Full Stack Developer </p>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="social-link"
              >
                <EmailIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Charan N. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            Back to top <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 60px 0 24px;
          border-top: 1px solid var(--border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .footer-links h4,
        .footer-social h4 {
          font-size: 1rem;
          margin-bottom: 16px;
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .back-to-top:hover {
          color: var(--accent);
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }

          .footer-links ul {
            align-items: center;
          }

          .footer-bottom {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
