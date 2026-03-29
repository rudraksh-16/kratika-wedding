import { useState, useEffect } from 'react';
import './Navbar.css';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1gKDJkfGc6e9_XKbkyFEJButpR_kBIxSA';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home',    href: '#hero' },
    { label: 'Events',  href: '#events' },
    { label: 'Venue',   href: '#venue' },
    { label: 'Contact', href: '#footer' },
  ];

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => scrollTo('#hero')}>
        <span className="brand-hindi">Wedding</span>
        <span className="brand-names">Kritika &amp; Shubham</span>
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.label}>
            <button onClick={() => scrollTo(link.href)}>{link.label}</button>
          </li>
        ))}
        <li>
          <a className="nav-photos-btn" href={DRIVE_LINK} target="_blank" rel="noopener noreferrer">
            📸 Photos
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(p => !p)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
