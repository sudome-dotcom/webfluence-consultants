import Reveal from './Reveal';
import { PROCESS_STEPS } from '../data/siteData';
import styles from './Process.module.css';

const ICONS = {
  audit: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  strategy: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  execute: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
  scale: <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
};

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>How we work</p>
            <h2 className={styles.title}>A process that delivers results</h2>
            <p className={styles.sub}>No guesswork. No fluff. A proven system built for growth.</p>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className={styles.card}>
                <div className={styles.num}>{s.num}</div>
                <div className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    {ICONS[s.icon]}
                  </svg>
                </div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.desc}>{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
