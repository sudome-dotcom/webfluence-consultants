import { BRAND_LOGOS } from '../data/siteData';
import styles from './Marquee.module.css';

export default function Marquee() {
  const doubled = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted platforms &amp; channels we work with</p>
      <div className={styles.wrap}>
        <div className={styles.track}>
          {doubled.map((l, i) => (
            <img key={i} src={l.src} alt={l.alt} className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
