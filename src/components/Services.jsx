import Reveal from './Reveal';
import { SERVICES } from '../data/siteData';
import styles from './Services.module.css';

const ICONS = {
  share: <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
  search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  trending: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  palette: <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  video: <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />,
  code: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>What we offer</p>
            <h2 className={styles.title}>Services built to grow<br />your business</h2>
            <p className={styles.sub}>Everything you need to dominate online — strategy, execution, and measurable results.</p>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i % 3 * 0.12}>
              <div className={styles.card} onClick={() => (window.location.href = '#contact')}>
                <div className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    {ICONS[s.icon]}
                  </svg>
                </div>
                <div className={styles.name}>{s.name}</div>
                <div className={styles.desc}>{s.desc}</div>
                <div className={styles.arr}><ArrowIcon /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
