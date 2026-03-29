import './Footer.css';

const WHATSAPP = 'https://wa.me/919414709224';

function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Kritika & Shubham – Wedding | 25 April 2026',
      text: 'You are cordially invited! Mangalam Palace, Jaipur.',
      url: window.location.href,
    }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">
        {/* Names */}
        <div className="footer-names">
          <span>Kritika</span>
          <span className="footer-amp">💍</span>
          <span>Shubham</span>
        </div>
        <p className="footer-date">Saturday, 25 April 2026 &middot; Mangalam Palace, Jaipur</p>

        <div className="footer-divider" />

        {/* Host */}
        <div className="footer-host">
          <p className="host-name">Shri Shivnarayan, Rajnarayan, Riddhishankar Sharma</p>
          <p className="host-addr">67/78, RHB, Pratap Nagar, Sanganer, Jaipur – 302033</p>
          <p className="host-mob">📞 +91-9414709224 &nbsp;|&nbsp; +91-9414666981</p>
        </div>

        <div className="footer-actions">
          <a className="btn btn-gold" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp RSVP
          </a>
          <button className="btn btn-maroon" onClick={share}>
            🔗 Share Invitation
          </button>
        </div>

        <div className="footer-copyright">
          <p>© 2026 Kritika &amp; Shubham &nbsp;·&nbsp; Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
