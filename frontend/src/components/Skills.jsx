import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    icon: '💻',
    title: 'Languages & Frontend',
    color: '#8b5cf6',
    skills: [
      { name: 'JavaScript (ES6+) & TypeScript' },
      { name: 'Python' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend & Databases',
    color: '#ec4899',
    skills: [
      { name: 'Node.js & Express.js' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL (Supabase, pgvector)' },
      { name: 'MongoDB' },
      { name: 'REST APIs, JWT, Socket.io' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI/ML & Cloud',
    color: '#06b6d4',
    skills: [
      { name: 'RAG & Hybrid Search' },
      { name: 'Prompt Engineering' },
      { name: 'LangChain & Hugging Face' },
      { name: 'LLM Integration (Gemini, Ollama)' },
      { name: 'AWS Basics & Cloudinary' },
    ],
  },
  {
    icon: '🛠',
    title: 'DevOps & Core Concepts',
    color: '#a78bfa',
    skills: [
      { name: 'Git, GitHub Actions (CI/CD)' },
      { name: 'Docker & Jest' },
      { name: 'Netlify & Render' },
      { name: 'Data Structures & Algorithms' },
      { name: 'OOP & Async Programming' },
    ],
  },
];

const techBadges = [
  'JavaScript', 'TypeScript', 'Python', 'React.js', 'Node.js', 'Express.js',
  'FastAPI', 'PostgreSQL', 'Supabase', 'pgvector', 'MongoDB', 'RAG', 'LangChain',
  'Hugging Face', 'Ollama', 'ONNX', 'Google Gemini', 'Tailwind CSS', 'Socket.io',
  'Mapbox GL', 'Turf.js', 'Cloudinary', 'AWS', 'Git', 'GitHub Actions', 'Jest'
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
            // We removed the animated progress bars based on your request!
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">🛠 Skills</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Core technical stack, frameworks, AI integrations, and tools.</p>
        </div>

        {/* Skill Category Cards */}
        <div className="skills__grid">
          {skillCategories.map(({ icon, title, color, skills }) => (
            <div
              key={title}
              className="glass-card skills__card reveal"
              style={{ '--card-color': color }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{icon}</span>
                <h3 className="skills__card-title">{title}</h3>
              </div>
              <div className="skills__list">
                {skills.map(({ name }) => (
                  <div key={name} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <div className="skills__badges reveal">
          <h3 className="skills__badges-title">Technologies &amp; Frameworks</h3>
          <div className="skills__badges-cloud">
            {techBadges.map(badge => (
              <span key={badge} className="skills__badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
