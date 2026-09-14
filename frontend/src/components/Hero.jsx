import { useEffect, useRef } from 'react';
import './Hero.css';

const ROLES = [
  'Full Stack Software Engineer',
  'AI / GenAI Developer (LangChain & Hugging Face)',
  'React.js & Node.js Developer',
  'Technical Writer & Open Source Contributor',
];

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentRole = ROLES[roleIdx];
      if (!deleting) {
        charIdx++;
        if (roleRef.current) roleRef.current.textContent = currentRole.slice(0, charIdx);
        if (charIdx === currentRole.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIdx--;
        if (roleRef.current) roleRef.current.textContent = currentRole.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 45 : 75);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  // Floating orbs parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const orbs = document.querySelectorAll('.hero__orb');
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 12;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Particle grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for SDE &amp; AI Opportunities
        </div>

        <h1 className="hero__name">
          <span className="hero__greeting">👋 Hi, I'm</span>
          <br />
          <span className="hero__name-highlight">V. Hari Charan Reddy</span>
        </h1>

        <p className="hero__role">
          <span>I'm a </span>
          <span className="hero__typewriter" ref={roleRef} />
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>

        <p className="hero__bio">
          B.Tech Computer Science student at RVITM Bengaluru. Passionate about building modern web applications, AI repository intelligence (CodeGuardian), system observability, and full-stack solutions using React.js, Node.js, Express, LangChain, Hugging Face, PostgreSQL (pgvector), and Supabase.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            🚀 View Projects
          </a>
          <a href="#contact" className="btn btn-outline" id="hero-contact-btn"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            📧 Contact Me
          </a>
        </div>

        <div className="hero__stats">
          {[
            { value: '7.92', label: 'B.Tech CGPA (RVITM)' },
            { value: '4+', label: 'Major Apps & Simulations' },
            { value: '3+', label: 'AI Platforms Built' },
            { value: '95.9%', label: 'Class 12 Score' },
          ].map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
