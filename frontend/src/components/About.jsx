import { useEffect, useRef } from 'react';
import './About.css';

const highlights = [
  { icon: '🎓', title: 'B.Tech CS (CGPA 7.92)', desc: 'RV Institute of Technology and Management, Bengaluru' },
  { icon: '🏫', title: 'Class 12 (95.9%)', desc: 'SDR World School, Nandyal, Andhra Pradesh' },
  { icon: '🤖', title: 'GenAI & Full Stack', desc: 'LangChain, Ollama, pgvector, React, Node.js' },
  { icon: '✍️', title: 'Monetized Author', desc: 'Published tech articles on Medium & Twitter' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">👋 About Me</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Get to know me — my academic background, technical skills, and passion for software engineering.</p>
        </div>

        <div className="about__grid">
          {/* Left: Avatar + Decoration */}
          <div className="about__visual reveal">
            <div className="about__avatar-wrapper">
              <div className="about__avatar-ring" aria-hidden="true" />
              <div className="about__avatar" aria-label="V. Hari Charan Reddy avatar">
                <span>HC</span>
              </div>
              <div className="about__avatar-badge about__avatar-badge--1">React.js</div>
              <div className="about__avatar-badge about__avatar-badge--2">GenAI</div>
              <div className="about__avatar-badge about__avatar-badge--3">Node.js</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div className="reveal">
              <h3 className="about__title">
                Hi, I'm <span className="about__title-highlight">V. Hari Charan Reddy</span>
              </h3>
            </div>

            <div className="reveal">
              <p className="about__text">
                I'm a B.Tech Information Science student at <strong>RV Institute of Technology and Management, Bengaluru</strong> (CGPA: 7.92).
                I specialize in building full-stack web applications and AI-driven platforms using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>PostgreSQL (Supabase)</strong>, and <strong>MongoDB</strong>.
              </p>
              <p className="about__text">
                My project work includes developing offline AI repository intelligence tools (CodeGuardian) with <strong>Ollama & ONNX</strong>, real-time donation marketplaces, and ML-driven system monitoring platforms. I have strong experience implementing <strong>RAG</strong>, <strong>Hybrid Search (pgvector + HNSW)</strong>, and building performant APIs.
              </p>
              <p className="about__text">
                In addition to coding, I write technical articles on Medium and Twitter. I am actively seeking software engineering and AI-focused internship or full-time roles where I can deliver high-impact software.
              </p>
            </div>

            <div className="about__tags reveal">
              {['JavaScript & TypeScript', 'Python', 'React.js', 'Node.js', 'PostgreSQL', 'LangChain', 'Hugging Face', 'Ollama', 'RAG'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="about__actions reveal">
              <a href="#contact" className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                📧 Let's Connect
              </a>
              <a href="#resume" className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}>
                📄 My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="about__highlights">
          {highlights.map(({ icon, title, desc }, i) => (
            <div key={title} className="glass-card about__highlight-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="about__highlight-icon">{icon}</span>
              <h4 className="about__highlight-title">{title}</h4>
              <p className="about__highlight-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
