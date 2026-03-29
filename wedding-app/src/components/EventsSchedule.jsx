import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './EventsSchedule.css';

const events = [
  { id: 1, name: 'Vinayak Pujan',       day: 'Friday',   date: '24 Apr 2026', time: '8:00 AM',
    theme: '🌼 Shine in bright yellow!', themeHi: 'चमकीले पीले रंग में चमकें' },
  { id: 2, name: 'Mehfil-e-Mehndi',              day: 'Friday',   date: '24 Apr 2026', time: '11:00 AM',
    theme: '🌿 Multicolour — wear your most vibrant outfit!', themeHi: 'बहुरंगी' },
  { id: 3, name: 'Mangal Kalash Chauk',  day: 'Friday',   date: '24 Apr 2026', time: '5:00 PM',
    theme: '👑 Traditional Rajputana attire', themeHi: 'पारंपरिक राजपूती पोशाक' },
  { id: 4, name: 'Sangeet Sandhya',      day: 'Friday',   date: '24 Apr 2026', time: '7:00 PM',
    theme: '🎶 Couples wear matching outfits — shine together!', themeHi: 'युगल एक जैसे कपड़े पहनें - समन्वित होकर एक साथ चमकें' },
  { id: 5, name: 'Haldi Hungama',           day: 'Saturday', date: '25 Apr 2026', time: '10:00 AM',
    theme: '🌸 Celebrate in lovely shades of pink!', themeHi: 'गुलाबी रंग के प्यारे शेड्स में जश्न मनाएं' },
  { id: 6, name: 'Barat Swagat',         day: 'Saturday', date: '25 Apr 2026', time: '7:30 PM',
    theme: '✨ Glamorous attire — your own theme!', themeHi: 'ग्लैमरस पोशाक - अपनी पसंद की थीम' },
  { id: 7, name: 'Dinner',           day: 'Saturday', date: '25 Apr 2026', time: '8:00 PM onwards',
    theme: '✨ Glamorous attire — reception style!', themeHi: 'ग्लैमरस पोशाक - अपनी पसंद की थीम' },
  { id: 8, name: 'Panigrahana Sanskar',   day: 'Saturday', date: '25 Apr 2026', time: 'Auspicious Muhurta',
    theme: '🔥 Ladies — wear a beautiful Chunri!', themeHi: 'महिलाएं खूबसूरत चुनरी पहनें' },
];

export default function EventsSchedule() {
  const ref = useReveal();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="events" className="events-section" ref={ref}>
      <div className="reveal">
        <span className="section-eyebrow">Celebration Moments</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Events Schedule</h2>
        <p className="events-subtitle">
          Tap on any event to see the dress code &amp; colour theme!
        </p>
        <div className="gold-divider" style={{ margin: '1.5rem auto' }}>
          <span className="lotus">✿</span>
        </div>
        <div className="events-grid">
          {events.map((ev, i) => (
            <div key={ev.id} className="reveal" style={{ transitionDelay: `${i * 0.07}s`, display: 'flex', flexDirection: 'column' }}>
              <div
                className={`event-card ${openId === ev.id ? 'expanded' : ''}`}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onClick={() => toggle(ev.id)}
              >
                <div>
                  <div className="event-number">0{ev.id}</div>
                  <h3 className="event-name">{ev.name}</h3>
                  <div className="event-divider" />
                  <div className="event-meta">
                    <span className="event-day">{ev.day}</span>
                    <span className="event-date">📅 {ev.date}</span>
                    <span className="event-time">🕐 {ev.time}</span>
                  </div>
                  {/* Expandable dress code */}
                  <div className={`event-theme ${openId === ev.id ? 'show' : ''}`}>
                    <div className="theme-divider" />
                    <p className="theme-en">{ev.theme}</p>
                    <p className="theme-hi">{ev.themeHi}</p>
                  </div>
                </div>
                <span className="tap-hint" style={{ marginTop: 'auto', paddingTop: '0.8rem' }}>{openId === ev.id ? '▲ Close' : '▼ Dress Code'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
