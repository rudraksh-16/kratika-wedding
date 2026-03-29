import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const photos = [
  '/assets/1W2A3046.JPG',
  '/assets/1W2A3650.JPG',
  '/assets/1W2A3682.JPG',
  '/assets/1W2A3995.JPG',
  '/assets/1W2A4040.JPG',
  '/assets/1W2A4267.JPG',
  '/assets/1W2A4359.JPG',
  '/assets/1W2A4631.JPG',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate photos every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setCurrent(p => (p + 1) % photos.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Also change photo on scroll
  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScroll);
      if (delta > 300) {
        lastScroll = window.scrollY;
        setCurrent(p => (p + 1) % photos.length);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = () => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      {/* Background photos with crossfade */}
      <div className="hero-bg">
        {photos.map((src, i) => (
          <div
            key={i}
            className={`hero-photo ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Floating petal particles */}
      <div className="petals-container">
        {[...Array(14)].map((_, i) => (
          <span key={i} className="petal" style={{ '--i': i }} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-blessing">।। श्री गणेशाय नमः ।।</p>

        <div className="hero-names">
          <h1 className="hero-bride">Kritika</h1>
          <div className="amp-wrap">
            <span className="gold-line" />
            <span className="amp">&amp;</span>
            <span className="gold-line" />
          </div>
          <h1 className="hero-groom">Shubham</h1>
        </div>

        <div className="gold-divider" style={{ margin: '1.5rem auto' }}>
          <span className="lotus">✿</span>
        </div>

        <p className="hero-date">Saturday, 25 April 2026</p>
        <p className="hero-venue">Mangalam Palace, Mansarovar, Jaipur</p>
      </div>

      <button className="scroll-down" onClick={scroll} aria-label="Scroll down">
        <span className="chevron" />
      </button>
    </section>
  );
}
