import { useState } from 'react';
import Reveal from './Reveal';
import { PROJECTS } from '../data/siteData';
import styles from './Work.module.css';

const FILTERS = ['All Work', 'Social Media', 'Paid Media', 'SEO', 'Web Development'];

export default function Work() {
  const [active, setActive] = useState('All Work');

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
              <div className={styles.card}>
                <div className={styles.cardTop} style={{ background: p.color }} />
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span className={styles.badge} style={{ background: p.bg, color: p.color }}>{p.cat}</span>
                    <span className={styles.year}>{p.year}</span>
                  </div>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.client} style={{ color: p.color }}>{p.client}</div>
                  <div className={styles.desc}>{p.desc}</div>
                  <div className={styles.metric} style={{ background: p.bg }}>
                    <div className={styles.metricBar} style={{ background: p.color }} />
                    <div style={{ paddingLeft: 12 }}>
                      <div className={styles.metricVal} style={{ color: p.color }}>{p.metric.val}</div>
                      <div className={styles.metricLbl} style={{ color: p.color }}>{p.metric.lbl}</div>
                    </div>
                  </div>
                  <div className={styles.tags}>
                    {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
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
