import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo-icon">HC</span>
            <span className="footer__logo-text">V. Hari Charan Reddy</span>
          </div>
          <p className="footer__tagline">
            B.Tech Computer Science @ RVITM | Full Stack Developer &amp; AI Engineer
          </p>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} V. Hari Charan Reddy. All rights reserved. Built with React &amp; Express.
          </p>
          <button
            onClick={handleScrollTop}
            className="footer__scroll-top"
            aria-label="Scroll to top"
            id="footer-scroll-top-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
