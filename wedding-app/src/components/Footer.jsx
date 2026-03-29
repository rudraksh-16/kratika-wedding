import './Footer.css';

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
          <p className="host-mob">📞 +91-9414709224 &nbsp;|&nbsp; +91-9414666981|&nbsp; +91-8112266382</p>
        </div>

        <div className="footer-copyright">
          <p>© 2026 Kritika &amp; Shubham &nbsp;·&nbsp; Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
