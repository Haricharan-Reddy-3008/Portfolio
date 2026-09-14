import { useEffect, useRef } from 'react';
import './Contact.css';

const SOCIAL_LINKS = [
  {
    id: 'email',
    name: 'Email Address',
    value: 'haricharan30082005@gmail.com',
    url: 'mailto:haricharan30082005@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: '#ec4899',
    cta: 'Send an Email',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Profile',
    value: 'linkedin.com/in/hari-charan-reddy-a6a3861bb',
    url: 'https://linkedin.com/in/hari-charan-reddy-a6a3861bb',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0077b5',
    cta: 'Connect on LinkedIn',
  },
  {
    id: 'github',
    name: 'GitHub Profile',
    value: 'github.com/Haricharan-Reddy-3008',
    url: 'https://github.com/Haricharan-Reddy-3008',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#a78bfa',
    cta: 'View Repositories',
  },
  {
    id: 'phone',
    name: 'Phone & Location',
    value: '+91 9502136817 • Bengaluru, KA',
    url: 'tel:+919502136817',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#4ade80',
    cta: 'Call Directly',
  },
];

export default function Contact() {
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
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">📧 Get In Touch</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            I'm actively open to software engineering, full-stack, and AI-focused opportunities. Feel free to connect directly!
          </p>
        </div>

        {/* Centered Direct Contact Cards */}
        <div className="contact__cards-grid">
          {SOCIAL_LINKS.map(({ id, name, value, url, icon, color, cta }, idx) => (
            <a
              key={id}
              href={url}
              target={url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="glass-card contact__direct-card reveal"
              id={`contact-${id}-link`}
              style={{ '--social-color': color, animationDelay: `${idx * 0.1}s` }}
            >
              <div className="contact__card-icon-wrapper" style={{ color, borderColor: `${color}33`, background: `${color}15` }}>
                {icon}
              </div>
              <div className="contact__card-content">
                <span className="contact__card-name">{name}</span>
                <span className="contact__card-value">{value}</span>
                <span className="contact__card-cta">
                  {cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Primary CTA Banner */}
        <div className="contact__cta-banner glass-card reveal">
          <div className="contact__cta-text">
            <h3>Ready to collaborate or discuss an opportunity?</h3>
            <p>I typically respond to emails and messages within 24 hours.</p>
          </div>
          <a href="mailto:haricharan30082005@gmail.com" className="btn btn-primary" id="contact-direct-email-btn">
            ✉️ Send Direct Email
          </a>
        </div>
      </div>
    </section>
  );
}
