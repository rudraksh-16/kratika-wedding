import useReveal from '../hooks/useReveal';
import './PhotoGallery.css';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1gKDJkfGc6e9_XKbkyFEJButpR_kBIxSA';

export default function PhotoGallery() {
  const ref = useReveal();
  return (
    <section id="photos" className="gallery-section" ref={ref}>
      <div className="gallery-card reveal">
        <div className="gallery-icon">📸</div>
        <span className="section-eyebrow">Memories</span>
        <h2 className="section-title light">Wedding Photo Album</h2>
        <p className="gallery-sub">
          Relive every beautiful moment of the celebration. Our complete wedding photos are available on Google Drive.
        </p>
        <div className="gold-divider" style={{ margin: '1.5rem auto' }}>
          <span className="lotus">✿</span>
        </div>
        <a className="btn btn-gold gallery-btn" href={DRIVE_LINK} target="_blank" rel="noopener noreferrer">
          📸 View Wedding Photos
        </a>
      </div>
    </section>
  );
}
