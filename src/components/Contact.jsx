import { useState } from 'react';
import Reveal from './Reveal';
import styles from './Contact.module.css';

const WA_NUMBER = '9779867925779';

// ─── Formspree ───────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → sign up (free) → New Form
// 2. Replace the placeholder below with your real form ID, e.g. 'xpwzgkqb'
const FORMSPREE_ID = 'xnjyzzpb';
// ─────────────────────────────────────────────────────────────────────────────

const PROMISES = [
  {
    icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: 'Response within one business day',
    sub: "We reply fast — you won't be left hanging.",
  },
  {
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    title: 'You own everything we build',
    sub: 'Accounts, assets, code — yours from day one.',
  },
  {
    icon: <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
    title: 'Live dashboard from day one',
    sub: 'Track every metric in real time, not monthly PDFs.',
  },
];

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', service: '', message: '' });

  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          service: form.service || 'Not specified',
          message: form.message,
        }),
      });

      if (res.ok) {
        setShowPopup(true);
        setForm({ firstName: '', lastName: '', email: '', service: '', message: '' });
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <div className={styles.inner}>
            {/* Left info */}
            <Reveal>
              <div className={styles.info}>
                <p className={styles.label}>Get in touch</p>
                <h2 className={styles.title}>Let's build something remarkable</h2>
                <div className={styles.bar} />
                <p className={styles.sub}>
                  We start with a free audit — no pitch, no pressure. Tell us what you're working on and we'll come back with real ideas, not a templated deck.
                </p>
                <div className={styles.promises}>
                  {PROMISES.map((p) => (
                    <div key={p.title} className={styles.promise}>
                      <div className={styles.promiseIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0025cc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                          {p.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.promiseTitle}>{p.title}</h4>
                        <p className={styles.promiseSub}>{p.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
            <a 
  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Webfluence, I'm interested in your digital marketing services!")}`} 
  className={styles.waBtn} 
  target="_blank" 
  rel="noreferrer" 
  style={{ marginTop: 16 }}
>
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
  Chat on WhatsApp instead
</a>
              </div>
            </Reveal>

            {/* Right form */}
            <Reveal delay={0.15}>
              <div className={styles.formWrap}>
                <h3 className={styles.formTitle}>Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label className={styles.fieldLabel}>First Name</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} type="text" className={styles.input} placeholder="Aarav" required />
                    </div>
                    <div className={styles.group}>
                      <label className={styles.fieldLabel}>Last Name</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} type="text" className={styles.input} placeholder="Sharma" />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.fieldLabel}>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className={styles.input} placeholder="aarav@company.com" required />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.fieldLabel}>Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange} className={styles.select}>
                      <option value="">Choose a service…</option>
                      <option>Social Media Marketing</option>
                      <option>SEO</option>
                      <option>Performance Marketing</option>
                      <option>Branding</option>
                      <option>Video Production</option>
                      <option>Web Development</option>
                      <option>Full Growth Package</option>
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.fieldLabel}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder="Tell us about your business and goals…" required />
                  </div>
                  <button type="submit" className={styles.submit} disabled={sending}>
                    {sending ? 'Sending…' : 'Send Message →'}
                  </button>
                  {error && <p className={styles.errorMsg}>{error}</p>}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      <div className={`${styles.overlay} ${showPopup ? styles.overlayShow : ''}`} onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}>
        <div className={styles.popup}>
          <div className={styles.popupIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={styles.popupTitle}>Message Sent!</h3>
          <p className={styles.popupMsg}>Thanks for reaching out. We'll get back to you within one business day.</p>
          <button className={styles.popupBtn} onClick={() => setShowPopup(false)}>Done</button>
        </div>
      </div>
    </>
  );
}
