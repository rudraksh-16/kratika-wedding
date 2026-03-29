import { useState, useEffect } from 'react';
import './Countdown.css';

const TARGET = new Date('2026-04-25T07:00:00+05:30');

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return (
    <section id="countdown" className="countdown-section">
      <p className="wedding-day">It's Wedding Day! 🎉</p>
    </section>
  );

  const units = [
    { label: 'Days',    value: time.days },
    { label: 'Hours',   value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section id="countdown" className="countdown-section">
      <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Until We Say I Do</p>
      <h2 className="section-title" style={{ color: 'var(--gold-light)' }}>Counting Down</h2>
      <div className="countdown-grid">
        {units.map(u => (
          <div key={u.label} className="countdown-box">
            <span className="cd-value">{String(u.value).padStart(2, '0')}</span>
            <span className="cd-label">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
