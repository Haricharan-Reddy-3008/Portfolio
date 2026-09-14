import { useEffect, useRef } from 'react';
import './Resume.css';

// User's Google Drive Resume Link
const RESUME_DRIVE_LINK = 'https://drive.google.com/file/d/1hV70rXsD0zlM395oE2swMdIazIRu_AA-/view?usp=drivesdk';

export default function Resume() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="resume" ref={sectionRef}>
      {/* Decorative background */}
      <div className="resume__bg" aria-hidden="true">
        <div className="resume__bg-orb resume__bg-orb--1" />
        <div className="resume__bg-orb resume__bg-orb--2" />
      </div>

      <div className="container">
        <div className="reveal">
          <h2 className="section-heading">📄 Resume</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Official Resume &amp; Academic Details of V. Hari Charan Reddy.</p>
        </div>

        <div className="resume__card glass-card reveal">
          {/* PDF Icon / Preview */}
          <div className="resume__preview">
            <div className="resume__pdf-icon" aria-hidden="true">
              <span className="resume__pdf-icon-text">PDF</span>
              <div className="resume__pdf-lines">
                <div /><div /><div /><div /><div />
              </div>
            </div>
          </div>

          <div className="resume__info">
            <h3 className="resume__name">V. HARI CHARAN REDDY</h3>
            <p className="resume__role-label">Full Stack Developer &amp; CS Student | Bengaluru, Karnataka</p>

            <div className="resume__highlights">
              {[
                { icon: '🎓', text: 'B.Tech Information Science — RV Institute of Technology and Management (CGPA: 7.92)' },
                { icon: '🏫', text: 'Intermediate (Class 12) — SDR World School (95.9%)' },
                { icon: '💻', text: 'React.js, Node.js, Express, PostgreSQL, MongoDB, TypeScript' },
                { icon: '🤖', text: 'LangChain, Hugging Face, Ollama, ONNX, Prompt Engineering, RAG' },
                { icon: '📚', text: 'Coursework: DBMS, Operating Systems, Computer Networks' },
              ].map(({ icon, text }) => (
                <div key={text} className="resume__highlight-item">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="resume__actions">
              <a
                href={RESUME_DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="resume-view-btn"
              >
                👁️ View Resume on Google Drive
              </a>
              <a
                href="mailto:haricharan30082005@gmail.com"
                className="btn btn-outline"
                id="resume-contact-btn"
              >
                📧 Email Me
              </a>
            </div>

            <p className="resume__note">
              📍 Bengaluru, KA · 📞 +91 9502136817 · ✉️ haricharan30082005@gmail.com
            </p>
          </div>
        </div>

        {/* Education & Academic Timeline */}
        <div className="resume__timeline reveal">
          <h3 className="resume__timeline-title">Education &amp; Academic Record</h3>
          <div className="resume__timeline-list">
            {[
              {
                period: 'Sept 2023 – Present',
                title: 'B.Tech in Information Science Engineering',
                org: 'RV Institute of Technology and Management — Bengaluru, Karnataka',
                desc: 'CGPA: 7.92 | Core Focus: Full Stack Development, Data Structures & Algorithms, Systems, AI Integrations.',
                type: 'edu',
              },
              {
                period: 'Aug 2021 – Mar 2023',
                title: 'Intermediate (Class 12)',
                org: 'SDR World School — Nandyal, Andhra Pradesh',
                desc: 'Score: 95.9% | Major: Mathematics, Physics, Chemistry.',
                type: 'edu',
              },
              {
                period: '2024 – 2026',
                title: 'Relevant Computer Science Coursework',
                org: 'Academic Curriculum',
                desc: 'Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN).',
                type: 'work',
              },
            ].map((item, i) => (
              <div key={i} className={`resume__timeline-item resume__timeline-item--${item.type}`}>
                <div className="resume__timeline-dot" aria-hidden="true" />
                <div className="resume__timeline-content">
                  <div className="resume__timeline-meta">
                    <span className="resume__timeline-period">{item.period}</span>
                    <span className={`resume__timeline-badge resume__timeline-badge--${item.type}`}>
                      🎓 Education
                    </span>
                  </div>
                  <h4 className="resume__timeline-role">{item.title}</h4>
                  <p className="resume__timeline-org">{item.org}</p>
                  <p className="resume__timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
