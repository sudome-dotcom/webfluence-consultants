import Reveal from './Reveal';
import styles from './About.module.css';

const FEATURES = [
  'Revenue-first strategy',
  'Live performance dashboards',
  'You own all assets, always',
  'International & Nepal clients',
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.inner}>
          <Reveal>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=600&h=480&auto=format&fit=crop"
                alt="Webfluence team collaborating"
              />
              <div className={styles.accent}>
                <div className={styles.accentNum}>98%</div>
                <div className={styles.accentLbl}>CLIENT SATISFACTION</div>
              </div>
              <div className={styles.badge}>NEPAL'S GROWTH PARTNER</div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={styles.content}>
              <p className={styles.label}>Who we are</p>
              <h2 className={styles.title}>We build digital experiences that convert</h2>
              <div className={styles.bar} />
              <p className={styles.text}>
                We don't just build websites — we build <strong>digital experiences that convert.</strong> Webfluence Consultants turns your boldest ideas into strategies that dominate search, social, and beyond.
              </p>
              <p className={styles.text}>
                Whether you're a startup ready to make noise or an established brand hungry for more — we craft campaigns that <strong>stop the scroll, spark curiosity, and drive real revenue.</strong>
              </p>
              <div className={styles.features}>
                {FEATURES.map((f) => (
                  <div key={f} className={styles.feat}>
                    <div className={styles.dot} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={styles.btn}>Work with us →</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
