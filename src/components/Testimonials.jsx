import Reveal from './Reveal';
import { TESTIMONIALS } from '../data/siteData';
import styles from './Testimonials.module.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: '#ff6b35' }}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Client stories</p>
            <h2 className={styles.title}>What our clients say</h2>
            <p className={styles.sub}>Real outcomes. Real businesses. Real growth.</p>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, k) => <StarIcon key={k} />)}
                </div>
                <p className={styles.text}>{t.text}</p>
                <div className={styles.person}>
                  <div className={styles.avatar} style={{ background: t.gradient, overflow: 'hidden', position: 'relative' }}>
                    {t.img ? (
                      <img
                        src={t.img}
                        alt={t.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      t.initials
                    )}
                  </div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.role}>{t.role}</div>
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
