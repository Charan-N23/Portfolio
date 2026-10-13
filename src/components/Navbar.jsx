import { useState } from 'react'
import { navLinks } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'
import { useScrollPosition } from '../hooks/useAnimations'
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrollPosition(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleNavClick}>
          Charan<span className="text-accent">.</span>N
        </a>

        {/* Desktop nav */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--bg-secondary);
          box-shadow: var(--shadow-md);
          padding: 10px 0;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .navbar-logo:hover {
          color: var(--text-primary);
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .navbar-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 4px 0;
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.25s ease;
        }

        .navbar-links a:hover {
          color: var(--accent);
        }

        .navbar-links a:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle, .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--text-primary);
          border: 1px solid var(--border);
          background: var(--bg-secondary);
          transition: all 0.2s ease;
        }

        .theme-toggle:hover, .mobile-toggle:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .mobile-toggle {
          display: none;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .mobile-menu {
            display: block;
            background: var(--bg-secondary);
            box-shadow: var(--shadow-lg);
            padding: 16px 24px 24px;
            animation: fadeInUp 0.3s ease forwards;
          }

          .mobile-menu ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .mobile-menu a {
            display: block;
            padding: 12px 16px;
            border-radius: 8px;
            color: var(--text-secondary);
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .mobile-menu a:hover {
            background: var(--accent-light);
            color: var(--accent);
          }
        }
      `}</style>
    </nav>
  )
}
