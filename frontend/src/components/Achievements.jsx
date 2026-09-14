import { useEffect, useRef } from 'react';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    icon: '🤖',
    title: 'Introduction to Generative AI',
    org: 'Google Cloud — Coursera',
    desc: 'Certified by Google Cloud on core Large Language Model fundamentals, generative AI architectures, prompt design, and responsible AI principles.',
    color: '#4285f4',
    year: '2026',
  },
  {
    id: 2,
    icon: '✈️',
    title: 'Frontend Software Engineering Job Simulation',
    org: 'Forage — Skyscanner',
    desc: 'Completed Skyscanner’s Frontend Software Engineering simulation. Built a Backpack React Web App featuring Flight Schedule headers, Backpack Calendar date selector, and Continue booking workflows.',
    color: '#00a698',
    year: 'Aug 2026',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'ReactJS Certification',
    org: 'Simplilearn SkillUp',
    desc: 'Certified in modern React.js paradigms, state management, component lifecycles, and performance optimization.',
    color: '#ec4899',
    year: '2025',
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Computer Networks Certification',
    org: 'Cisco Networking Academy',
    desc: 'Verified foundational understanding of network architecture, OSI/TCP-IP layers, IP addressing, and routing protocols.',
    color: '#4ade80',
    year: 'Certified',
  },
  {
    id: 5,
    icon: '✍️',
    title: 'Monetized Technical Writing',
    org: 'Medium & Twitter Partner Program',
    desc: 'Monetized frontend development and AI articles on Twitter and Medium, sharing practical engineering tutorials and developer guides.',
    color: '#f59e0b',
    year: 'Active',
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

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
    <section id="achievements" className="achievements" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">🏅 Achievements &amp; Certifications</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Professional certifications, engineering simulations, and technical publications.</p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className="glass-card achievements__card reveal"
              style={{ '--ach-color': item.color, animationDelay: `${i * 0.1}s` }}
              id={`achievement-${item.id}`}
            >
              <div className="achievements__icon-wrap">
                <span className="achievements__icon">{item.icon}</span>
                <div className="achievements__icon-glow" aria-hidden="true" />
              </div>
              <div className="achievements__content">
                <div className="achievements__meta">
                  <span className="achievements__org">{item.org}</span>
                  <span className="achievements__year">{item.year}</span>
                </div>
                <h3 className="achievements__title">{item.title}</h3>
                <p className="achievements__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
