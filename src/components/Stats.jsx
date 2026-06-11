import { useCountUp } from '../hooks/useScrollReveal';
import { STATS } from '../data/siteData';
import styles from './Stats.module.css';

function StatItem({ target, decimal = 0, suffix, label }) {
  const [ref, count] = useCountUp(target, decimal);
  return (
    <div ref={ref} className={styles.item}>
      <div>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.section} id="stats">
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <StatItem key={s.label} target={s.target} decimal={s.decimal} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
