import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const FILTERS = ['All', 'AI / GenAI', 'Full Stack'];

const projects = [
  {
    id: 1,
    title: 'CodeGuardian — Offline AI Repository Intelligence Platform',
    period: 'Jun 2026 – Jul 2026',
    desc: 'Built a fully offline RAG system over local LLMs (Ollama, Qwen2.5-Coder) that lets developers query, navigate, and review proprietary codebases without any code ever leaving their machine.',
    highlights: [
      'Engineered a Hybrid Search pipeline (dense pgvector + sparse full-text) fused via Reciprocal Rank Fusion, the same technique Azure AI Search uses for hybrid queries, re-ranked via a PostgreSQL HNSW index for sub-millisecond search.',
      'Replaced HTTP-based embedding calls with in-process ONNX inference (bge-base-en-v1.5, 768-dim, quantized), eliminating round-trip latency, with Ollama retained as automatic fallback.',
      'Designed a grounded RAG pipeline injecting only top-5 retrieved chunks (under ~4K tokens) into the prompt to prevent hallucination, powering 5 LLM features: Chat Q&A, File/Function Explainer, Repo Summary, and Architecture Diagram, all fully offline.'
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL (pgvector)', 'Ollama', 'ONNX'],
    category: 'AI / GenAI',
    emoji: '🛡️',
    color: '#8b5cf6',
    github: 'https://github.com/Haricharan-Reddy-3008/CodeGuardian',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'ServerLens — AI-Native System Monitoring Platform',
    period: 'Jan 2026 – Mar 2026',
    desc: 'An intelligent system observability platform with real-time metrics tracking, ML-driven anomaly detection, and a Python microservice architecture.',
    highlights: [
      'Architected a microservices telemetry engine: a Node.js Express gateway for high-throughput metric ingestion + a Python FastAPI microservice for real-time ML inference.',
      'Replaced static thresholds with an unsupervised Isolation Forest model analyzing CPU, memory, requests, error rate, and P95 latency as a single multivariate vector, cutting false-positive alerts by 40%.',
      'Engineered a dynamic in-memory model-caching layer in Python bypassing DB bottlenecks to guarantee sub-10ms inference latency.'
    ],
    tags: ['Python', 'Node.js', 'Supabase', 'Machine Learning', 'FastAPI'],
    category: 'AI / GenAI',
    emoji: '📈',
    color: '#06b6d4',
    github: 'https://github.com/Haricharan-Reddy-3008/ServerLens-AI-Powered-System-Monitoring-platform',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'MealConnect — Surplus Food Donation Platform',
    period: 'Oct 2025 – Dec 2025',
    desc: 'A real-time food donation marketplace bridging restaurants and NGOs with document verification, geofenced logistics, and proof-of-delivery audit trails.',
    highlights: [
      'Designed and built a full-stack platform end-to-end connecting restaurants and NGOs with real-time updates, using React, Node.js, MongoDB, and Socket.io.',
      'Eliminated unauthorized claims via admin document verification, and streamlined NGO pickups with geofenced radius queries (Mapbox GL, Turf.js).',
      'Structured a secure audit trail using Cloudinary for delivery-proof uploads and post-delivery ratings.'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Mapbox GL', 'Turf.js', 'Cloudinary'],
    category: 'Full Stack',
    emoji: '🍲',
    color: '#ec4899',
    github: 'https://github.com/Haricharan-Reddy-3008/mealconnect',
    demo: '#',
    featured: true,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">🚀 Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Key full-stack web applications and AI-driven platforms I have built.</p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filters reveal">
          {FILTERS.map(f => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(/[^a-z0-9]/g, '-')}-btn`}
              className={`projects__filter-btn ${activeFilter === f ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects__grid">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className={`glass-card projects__card ${proj.featured ? 'projects__card--featured' : ''}`}
              style={{ '--proj-color': proj.color }}
            >
              {proj.featured && <div className="projects__featured-badge">⭐ Featured</div>}

              <div className="projects__card-header">
                <span className="projects__emoji">{proj.emoji}</span>
                <span className="projects__category">{proj.period}</span>
              </div>

              <h3 className="projects__card-title">{proj.title}</h3>
              <p className="projects__card-desc">{proj.desc}</p>

              <ul className="projects__highlights-list">
                {proj.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="projects__tags">
                {proj.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="projects__card-actions">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline projects__btn"
                  id={`project-${proj.id}-github-btn`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects__github-cta reveal">
          <p>Explore all code repositories and contributions</p>
          <a
            href="https://github.com/Haricharan-Reddy-3008"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="view-all-github-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
