import useReveal from '../hooks/useReveal';
import './BaaratNote.css';

export default function BaaratNote() {
  const ref = useReveal();
  return (
    <section className="baarat-section" ref={ref}>
      <div className="baarat-box reveal">
        <span className="baarat-icon">🎺</span>
        <h3 className="baarat-title">Baarat Information</h3>
        <p className="baarat-text">
          The Baarat (wedding procession) from Shri Babulal Ji Suthwal's family — 
          Fagalva (Sikar) — will arrive on the evening of <strong>25 April 2026</strong>.
        </p>
      </div>
    </section>
  );
}
