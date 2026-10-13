/* Flat-design SVG illustrations for the portfolio */

/* Developer at desk — used in Hero */
export function DeveloperIllustration() {
  return (
    <svg viewBox="0 0 480 400" className="hero-illustration" role="img" aria-label="Illustration of a developer working at a desk with a laptop">
      {/* Desk */}
      <rect x="40" y="320" width="400" height="12" rx="6" fill="#475569" />
      <rect x="60" y="332" width="8" height="48" fill="#334155" />
      <rect x="412" y="332" width="8" height="48" fill="#334155" />

      {/* Monitor / Laptop */}
      <rect x="180" y="220" width="200" height="110" rx="10" fill="#1E293B" />
      <rect x="190" y="230" width="180" height="80" rx="4" fill="#3B82F6" opacity="0.15" />
      {/* Code lines on screen */}
      <rect x="200" y="242" width="60" height="6" rx="3" fill="#3B82F6" />
      <rect x="210" y="256" width="80" height="6" rx="3" fill="#60A5FA" opacity="0.7" />
      <rect x="200" y="270" width="40" height="6" rx="3" fill="#93C5FD" opacity="0.6" />
      <rect x="250" y="270" width="50" height="6" rx="3" fill="#3B82F6" opacity="0.5" />
      <rect x="210" y="284" width="70" height="6" rx="3" fill="#60A5FA" opacity="0.5" />
      <rect x="200" y="298" width="30" height="6" rx="3" fill="#93C5FD" opacity="0.4" />

      {/* Laptop base */}
      <rect x="160" y="330" width="240" height="10" rx="5" fill="#64748B" />

      {/* Developer — body */}
      {/* Chair */}
      <rect x="80" y="280" width="60" height="60" rx="8" fill="#334155" />
      <rect x="100" y="340" width="6" height="40" fill="#1E293B" />

      {/* Body */}
      <ellipse cx="115" cy="240" rx="28" ry="32" fill="#3B82F6" />
      {/* Head */}
      <circle cx="115" cy="195" r="22" fill="#FDBA74" />
      {/* Hair */}
      <path d="M93 190 Q95 168 115 168 Q138 168 138 190 Q138 178 130 174 Q120 170 115 172 Q108 170 100 176 Q93 180 93 190Z" fill="#1E293B" />
      {/* Eyes */}
      <circle cx="108" cy="196" r="2.5" fill="#1E293B" />
      <circle cx="122" cy="196" r="2.5" fill="#1E293B" />
      {/* Smile */}
      <path d="M108 206 Q115 210 122 206" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Arms */}
      <rect x="135" y="230" width="50" height="12" rx="6" fill="#3B82F6" transform="rotate(15 135 230)" />
      <rect x="135" y="248" width="55" height="12" rx="6" fill="#2563EB" transform="rotate(10 135 248)" />

      {/* Coffee cup */}
      <rect x="400" y="295" width="28" height="30" rx="4" fill="#94A3B8" />
      <path d="M428 300 Q438 300 438 308 Q438 316 428 316" fill="none" stroke="#94A3B8" strokeWidth="3" />
      <rect x="400" y="292" width="28" height="6" rx="3" fill="#64748B" />
      {/* Steam */}
      <path d="M408 285 Q406 280 410 275 Q414 270 412 265" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M418 285 Q420 280 416 275 Q412 270 416 265" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Plant */}
      <rect x="40" y="290" width="30" height="35" rx="4" fill="#475569" />
      <ellipse cx="55" cy="278" rx="20" ry="22" fill="#22C55E" opacity="0.8" />
      <ellipse cx="45" cy="270" rx="12" ry="14" fill="#16A34A" opacity="0.8" />
      <ellipse cx="68" cy="272" rx="12" ry="14" fill="#16A34A" opacity="0.8" />

      {/* Floating shapes — decorative */}
      <circle cx="420" cy="100" r="18" fill="#3B82F6" opacity="0.15" />
      <rect x="60" y="80" width="30" height="30" rx="6" fill="#3B82F6" opacity="0.12" transform="rotate(15 75 95)" />
      <polygon points="380,60 395,90 365,90" fill="#3B82F6" opacity="0.1" />

      {/* Keyboard */}
      <rect x="155" y="335" width="120" height="6" rx="3" fill="#475569" />

      <style>{`
        .hero-illustration {
          max-width: 480px;
          width: 100%;
          height: auto;
        }
      `}</style>
    </svg>
  )
}

export function TechOrbitIllustration() {
  const innerItems = [
    { label: '⚛', bg: '#0EA5E9', name: 'React' },
    { label: 'JS', bg: '#EAB308', name: 'JavaScript' },
  ]
  const outerItems = [
    { label: '⬢', bg: '#22C55E', name: 'Node.js' },
    { label: '</>', bg: '#8B5CF6', name: 'Code' },
    { label: '#', bg: '#F97316', name: 'CSS' },
  ]

  return (
    <div className="orbit-scene">
      <div className="orbit-glow" />

      <div className="orbit-track track-1" />
      <div className="orbit-track track-2" />

      <div className="orbit-ring ring-inner">
        {innerItems.map((item, i) => (
          <div
            key={item.name}
            className="orbit-item"
            style={{ '--angle': `${i * 180}deg`, '--radius': '90px' }}
          >
            <span className="orbit-badge" style={{ background: item.bg }} title={item.name}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="orbit-ring ring-outer">
        {outerItems.map((item, i) => (
          <div
            key={item.name}
            className="orbit-item"
            style={{ '--angle': `${i * 120}deg`, '--radius': '160px' }}
          >
            <span className="orbit-badge" style={{ background: item.bg }} title={item.name}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="orbit-core">
        <span className="orbit-core-symbol">{'</>'}</span>
        <span className="orbit-core-pulse" />
      </div>

      <span className="orbit-float float-1">{'{ }'}</span>
      <span className="orbit-float float-2">✦</span>
      <span className="orbit-float float-3">•</span>

      <style>{`
        .orbit-scene {
          position: relative;
          width: 380px;
          height: 380px;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-glow {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(10px);
        }

        .orbit-track {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed var(--border);
        }

        .track-1 { width: 180px; height: 180px; }
        .track-2 { width: 320px; height: 320px; }

        .orbit-ring {
          position: absolute;
          width: 0;
          height: 0;
          animation: orbitSpin linear infinite;
        }

        .ring-inner { animation-duration: 14s; }
        .ring-outer { animation-duration: 22s; animation-direction: reverse; }

        .orbit-item {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)));
          animation: orbitCounterSpin linear infinite;
          animation-duration: inherit;
        }

        .ring-outer .orbit-item {
          animation-name: orbitCounterSpinReverse;
        }

        .orbit-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          border: 2px solid var(--bg-primary);
        }

        .orbit-core {
          position: relative;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, #8B5CF6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px rgba(59,130,246,0.45);
          z-index: 2;
        }

        .orbit-core-symbol {
          color: #fff;
          font-weight: 800;
          font-size: 1.6rem;
          font-family: var(--font-heading);
        }

        .orbit-core-pulse {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: corePulse 2.5s ease-out infinite;
        }

        .orbit-float {
          position: absolute;
          color: var(--accent);
          font-weight: 700;
          opacity: 0.35;
          animation: floatDrift 5s ease-in-out infinite;
        }

        .float-1 { top: 12%; left: 6%; font-size: 1.3rem; animation-delay: 0s; }
        .float-2 { bottom: 14%; right: 8%; font-size: 1.5rem; animation-delay: 1s; }
        .float-3 { top: 50%; right: 2%; font-size: 2rem; animation-delay: 2s; }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitCounterSpin {
          from { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(0deg); }
          to { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(-360deg); }
        }

        @keyframes orbitCounterSpinReverse {
          from { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(0deg); }
          to { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(360deg); }
        }

        @keyframes corePulse {
          0% { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @keyframes floatDrift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @media (max-width: 480px) {
          .orbit-scene { width: 280px; height: 280px; }
          .track-1 { width: 140px; height: 140px; }
          .track-2 { width: 240px; height: 240px; }
          .orbit-core { width: 84px; height: 84px; }
          .orbit-core-symbol { font-size: 1.2rem; }
          .orbit-badge { width: 42px; height: 42px; font-size: 0.8rem; border-radius: 11px; }
        }
      `}</style>
    </div>
  )
}

/* Person coding — used in About */
export function CodingIllustration() {
  return (
    <svg viewBox="0 0 420 360" className="about-illustration" role="img" aria-label="Illustration of a person coding on a laptop">
      {/* Background blob */}
      <ellipse cx="210" cy="280" rx="180" ry="70" fill="#3B82F6" opacity="0.08" />

      {/* Person sitting cross-legged */}
      {/* Legs */}
      <ellipse cx="210" cy="290" rx="70" ry="25" fill="#1E293B" />
      {/* Body */}
      <ellipse cx="210" cy="230" rx="35" ry="45" fill="#3B82F6" />
      {/* Head */}
      <circle cx="210" cy="170" r="26" fill="#FDBA74" />
      {/* Hair */}
      <path d="M184 165 Q186 140 210 140 Q236 140 238 165 Q238 150 228 146 Q218 142 210 144 Q200 142 192 148 Q184 154 184 165Z" fill="#1E293B" />
      {/* Glasses */}
      <circle cx="200" cy="172" r="6" fill="none" stroke="#1E293B" strokeWidth="2" />
      <circle cx="220" cy="172" r="6" fill="none" stroke="#1E293B" strokeWidth="2" />
      <line x1="206" y1="172" x2="214" y2="172" stroke="#1E293B" strokeWidth="2" />
      {/* Smile */}
      <path d="M202 184 Q210 189 218 184" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Laptop on lap */}
      <rect x="160" y="250" width="100" height="55" rx="8" fill="#334155" />
      <rect x="168" y="258" width="84" height="40" rx="4" fill="#3B82F6" opacity="0.2" />
      <rect x="176" y="266" width="30" height="4" rx="2" fill="#3B82F6" />
      <rect x="176" y="274" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.6" />
      <rect x="186" y="282" width="40" height="4" rx="2" fill="#93C5FD" opacity="0.5" />

      {/* Arms */}
      <ellipse cx="175" cy="240" rx="12" ry="22" fill="#2563EB" transform="rotate(-25 175 240)" />
      <ellipse cx="245" cy="240" rx="12" ry="22" fill="#2563EB" transform="rotate(25 245 240)" />

      {/* Floating code brackets */}
      <text x="70" y="100" fontSize="28" fontWeight="bold" fill="#3B82F6" opacity="0.3">{'</>'}</text>
      <text x="320" y="120" fontSize="20" fontWeight="bold" fill="#3B82F6" opacity="0.2">{'{ }'}</text>
      <circle cx="100" cy="200" r="10" fill="#3B82F6" opacity="0.15" />
      <rect x="330" y="200" width="20" height="20" rx="4" fill="#3B82F6" opacity="0.12" transform="rotate(20 340 210)" />

      <style>{`
        .about-illustration {
          max-width: 420px;
          width: 100%;
          height: auto;
        }
      `}</style>
    </svg>
  )
}
