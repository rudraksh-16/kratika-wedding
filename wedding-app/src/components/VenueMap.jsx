import useReveal from '../hooks/useReveal';
import './VenueMap.css';

const MAPS_URL = 'https://maps.google.com/?q=Mangalam+Palace+Muhana+Mandi+Road+Mansarovar+Jaipur';
const EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d75.7566!3d26.8523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e0b8e7c9e7%3A0x2b03e6f1b3caaa97!2sMangalam%20Palace!5e0!3m2!1sen!2sin!4v1711700000000!5m2!1sen!2sin';

export default function VenueMap() {
  const ref = useReveal();
  return (
    <section id="venue" className="venue-section" ref={ref}>
      <div className="reveal">
        <span className="section-eyebrow">Wedding Venue</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Venue &amp; Directions</h2>
        <div className="gold-divider" style={{ margin: '1.5rem auto' }}>
          <span className="lotus">✿</span>
        </div>

        <div className="venue-info">
          <div className="venue-details">
            <span className="venue-icon">📍</span>
            <div>
              <h3 className="venue-name">Mangalam Palace</h3>
              <p className="venue-addr">Muhana Mandi Road, Mansarovar,<br />Jaipur, Rajasthan</p>
            </div>
          </div>
          <a
            className="btn btn-maroon venue-btn"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Get Directions to Venue
          </a>
        </div>

        <div className="map-wrap">
          <iframe
            title="Mangalam Palace Map"
            src={EMBED_URL}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
