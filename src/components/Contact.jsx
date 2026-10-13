import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, EmailIcon } from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-tag text-center">Contact</span>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              Whether you have a question, a project idea, or just want to connect,
              feel free to reach out. I'll get back to you as soon as I can.
            </p>

            <a href={`mailto:${personalInfo.email}`} className="contact-email-link">
              <span className="contact-email-icon">
                <EmailIcon size={20} />
              </span>
              {personalInfo.email}
            </a>

            <div className="contact-socials">
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

          {/* Contact form */}
          <form className="contact-form card animate-on-scroll delay-1" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-success">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info-title {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        .contact-info-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .contact-email-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 32px;
          transition: color 0.2s ease;
        }

        .contact-email-link:hover {
          color: var(--accent);
        }

        .contact-email-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-light);
          color: var(--accent);
        }

        .contact-socials {
          display: flex;
          gap: 16px;
        }

        .contact-form {
          padding: 36px;
        }

        .form-success {
          background: #22C55E;
          color: #fff;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 24px;
          animation: fadeInUp 0.4s ease forwards;
        }

        .form-group {
          margin-bottom: 22px;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 0.95rem;
          font-family: var(--font-body);
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: border-color 0.2s ease;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .contact-submit {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}
