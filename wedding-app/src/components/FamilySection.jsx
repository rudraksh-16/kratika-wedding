import useReveal from '../hooks/useReveal';
import './FamilySection.css';

export default function FamilySection() {
  const ref = useReveal();
  return (
    <section id="family" className="family-section" ref={ref}>
      <div className="reveal">
        <span className="section-eyebrow">Family</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Families</h2>
        <div className="gold-divider" style={{ margin: '1.5rem auto' }}>
          <span className="lotus">✿</span>
        </div>

        <div className="family-grid">
          {/* Bride's Side */}
          <div className="family-card">
            <h3 className="family-role">Bride's Family</h3>
            <p className="family-role-en"></p>
            <div className="family-divider" />
            <p className="family-main">Shri Shivnarayan, Rajnarayan, Ridhi Shankar Sharma</p>
            <p className="family-addr">67/78, RHB, Pratap Nagar, Sanganer, Jaipur (Raj.) – 302033</p>
            <p className="family-mob">📞 9414709224 &nbsp;|&nbsp; 9414666981|&nbsp; +91-8112266382</p>

            <div className="sub-group">
              <h4 className="sub-title">Maternal Side (Nanihal Paksha)</h4>
              <p>Dr. Manmohan, Hitendra, Manuj, Anuj</p>
              <p className="family-secondary">Evam Samast Vyas Pariwar</p>
            </div>
          </div>

          {/* Groom's Side */}
          <div className="family-card">
            <h3 className="family-role">Groom's Family</h3>
            <p className="family-role-en"></p>
            <div className="family-divider" />
            <p className="family-main">Shri Dwarkprasad, Omprakash</p>
            <p className="family-secondary">Vijay Kumar, Lakshminarayan, Naresh Kumar, Pawan Kumar</p>
            <p className="family-secondary">Evam Samast Ratawa Joshi Pariwar</p>
          </div>
        </div>

        {/* Swagatkarta */}
        <div className="swagat-box reveal">
          <h4 className="swagat-title">Brothers</h4>
          <p className="swagat-names">Vaibhav &nbsp;✦&nbsp; Vishal &nbsp;✦&nbsp; Tanmay &nbsp;✦&nbsp; Rudraksh</p>
        </div>

        {/* Baal Manuhar */}
        <div className="baal-box reveal">
          <p className="baal-text">
            "Haldi hai Chandan hai, Rishton ka Bandhan hai,<br />
            Hamari Bhua-Mausi ki Shaadi mein aapka Abhinandan hai"
          </p>
          <p className="baal-names">— Aishani, Takshvi, Niom 🌸</p>
        </div>
      </div>
    </section>
  );
}
