import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#resume',       label: 'Resume' },
  { href: '#contact',      label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => handleNav('#hero')}>
          <span className="navbar__logo-icon">HC</span>
          <span className="navbar__logo-text">Hari Charan Reddy</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${active === href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(href); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="navbar__drawer-link"
            onClick={(e) => { e.preventDefault(); handleNav(href); }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
