import useReveal from '../hooks/useReveal';
import './AboutCouple.css';

const DIVIDER = () => (
  <div className="gold-divider"><span className="lotus">✿</span></div>
);

export default function AboutCouple() {
  const ref = useReveal();
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="reveal">
        <span className="section-eyebrow">Our Story</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>The Couple</h2>
        <DIVIDER />

        <div className="couple-grid">
          {/* Bride */}
          <div className="person-card">
            <div className="person-icon bride-icon">🌸</div>
            <h3 className="person-hindi">Kritika Sharma</h3>
            <p className="person-name-en">Kritika Sharma</p>
            <div className="person-divider" />
            <p className="person-parents">
              <span className="label">Parents: </span>
              Dr. Kalpana Vyas &amp; Dr. Ridhi Shankar Sharma
            </p>
            <p className="person-grandparents">
              <span className="label">Late Grandparents: </span>
              Smritidhesh Smt. Shantidevi &amp; Shri Govind Narayan Sharma
            </p>
          </div>

          {/* Center motif */}
          <div className="center-motif">
            <span className="motif-text">💍</span>
            <span className="motif-sub">Getting Married</span>
            <span className="motif-date">25 April 2026</span>
          </div>

          {/* Groom */}
          <div className="person-card">
            <div className="person-icon groom-icon">🌺</div>
            <h3 className="person-hindi">Shubham Suthwal</h3>
            <p className="person-name-en">Shubham Suthwal</p>
            <div className="person-divider" />
            <p className="person-parents">
              <span className="label">Parents: </span>
              Smt. Anita Devi &amp; Shri Babulal Ji Suthwal
            </p>
            <p className="person-grandparents">
              <span className="label">Late Grandfather: </span>
              Smritidhesh Shri Keser Dev Ji Suthwal
            </p>
            <p className="person-from">
              <span className="label">From: </span> Fagalva (Sikar)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
