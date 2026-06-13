import { useState } from 'react';
import Reveal from './Reveal';
import { PROJECTS } from '../data/siteData';
import styles from './Work.module.css';

const FILTERS = ['All Work', 'Social Media', 'Paid Media', 'SEO', 'Web Development'];

const IMAGES = {
  "Devi's Kitchen":    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=340&fit=crop&auto=format',
  'Nepali Craft Store':'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=340&fit=crop&auto=format',
  'Summit Realty':     'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop&auto=format',
  'Pokhara Tourism Board':'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=340&fit=crop&auto=format',
  'TechStart Nepal':   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&auto=format',
  'Hotel Himalaya View':'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=340&fit=crop&auto=format',
};

const DURATIONS = {
  "Devi's Kitchen": '8 months', 'Nepali Craft Store': '90 days',
  'Summit Realty': '3 months', 'Pokhara Tourism Board': '6 months',
  'TechStart Nepal': '4 months', 'Hotel Himalaya View': '60 days',
};

export default function Work() {
  const [active, setActive] = useState('All Work');
  const [expanded, setExpanded] = useState(null);

  const filtered = active === 'All Work'
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === active);

  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Our work</p>
            <h2 className={styles.title}>Campaigns that moved the needle</h2>
            <p className={styles.sub}>Real projects, real results, real clients who trusted us to deliver.</p>
          </div>
        </Reveal>

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <Reveal key={p.title + p.client} delay={i % 3 * 0.1}>
              <div
                className={`${styles.card} ${expanded === i ? styles.cardExpanded : ''}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {/* Image */}
                <div className={styles.imgWrap}>
                  <img src={IMAGES[p.client]} alt={p.client} className={styles.img} />
                  <div className={styles.imgOverlay} style={{ background: `linear-gradient(to top, ${p.color}cc, transparent)` }} />
                  <span className={styles.badge} style={{ background: p.bg, color: p.color }}>{p.cat}</span>
                  <span className={styles.duration}>{DURATIONS[p.client]}</span>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.client} style={{ color: p.color }}>{p.client} · {p.year}</div>
                  <p className={styles.desc}>{p.desc}</p>

                  {/* Key result highlight */}
                  <div className={styles.resultRow}>
                    <div className={styles.resultMain} style={{ background: p.bg }}>
                      <div className={styles.resultAccent} style={{ background: p.color }} />
                      <div>
                        <div className={styles.resultVal} style={{ color: p.color }}>{p.metric.val}</div>
                        <div className={styles.resultLbl} style={{ color: p.color }}>{p.metric.lbl}</div>
                      </div>
                    </div>
                    <div className={styles.resultIcon} style={{ background: p.bg, color: p.color }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable detail */}
                  <div className={styles.expandSection} style={{ maxHeight: expanded === i ? '200px' : '0' }}>
                    <div className={styles.expandInner}>
                      <div className={styles.expandTitle}>What we did</div>
                      <div className={styles.expandSteps}>
                        {p.tags.map((t, ti) => (
                          <div key={t} className={styles.expandStep}>
                            <div className={styles.stepDot} style={{ background: p.color }}>{ti + 1}</div>
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#contact" className={styles.expandCta} style={{ background: p.color }} onClick={e => e.stopPropagation()}>
                        Start a similar project →
                      </a>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={styles.cardFooter}>
                    <div className={styles.tags}>
                      {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <span className={styles.expandHint}>{expanded === i ? '↑ Less' : '↓ More'}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
