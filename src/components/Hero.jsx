import { useTypewriter } from '../hooks/useTypewriter';
import styles from './Hero.module.css';

const STATS = [
  { val: '50+', lbl: 'Projects' },
  { val: '3.2×', lbl: 'Revenue Growth' },
  { val: '98%', lbl: 'Satisfaction' },
  { val: '180%', lbl: 'Organic Lift' },
];

export default function Hero() {
  const word = useTypewriter();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.mesh} />
        <div className={styles.dots} />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.pill}>
            <span className={styles.pillBadge}>NEW</span>
            Nepal's #1 Growth Agency
          </div>
          <p className={styles.eyebrow}>We are a</p>
          <h1 className={styles.title}>
            <span>{word}</span>
            <span className={styles.cursor} />
          </h1>
          <p className={styles.sub}>
            We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale.
          </p>
          <div className={styles.btns}>
            <a href="#contact" className={styles.btnPrimary}>Get started →</a>
            <a href="#services" className={styles.btnOutline}>Our services</a>
          </div>
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <>
                <div key={s.lbl} className={styles.statItem}>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLbl}>{s.lbl}</div>
                </div>
                {i < STATS.length - 1 && <div key={`sep-${i}`} className={styles.statSep} />}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollTrack}><div className={styles.scrollLine} /></div>
        Scroll
      </div>
    </section>
  );
}
