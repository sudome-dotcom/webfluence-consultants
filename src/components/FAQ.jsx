import { useState } from 'react';
import Reveal from './Reveal';
import { FAQS } from '../data/siteData';
import styles from './FAQ.module.css';

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.trigger} onClick={onToggle}>
        <span className={styles.question}>{q}</span>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14">
            <line x1="12" y1="5" x2="12" y2="19" className={styles.vertical} />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <div className={styles.body} style={{ maxHeight: open ? '300px' : '0' }}>
        <p className={styles.answer}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Questions</p>
            <h2 className={styles.title}>Straight answers</h2>
            <p className={styles.sub}>No corporate speak. Just honest answers to the questions we get asked most.</p>
          </div>
        </Reveal>
        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FAQItem
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
