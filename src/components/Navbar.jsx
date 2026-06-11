import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const WA_NUMBER = '9779867925779';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            {/* <svg viewBox="0 0 36 36" width="36" height="36" className={styles.logoIcon}>
              <circle cx="18" cy="18" r="18" fill="#0025cc" />
              <text x="18" y="23" textAnchor="middle" fontFamily="Syne,sans-serif" fontSize="16" fontWeight="800" fill="white">W</text>
            </svg>
            WEBFLUENCE */}
            <img src="/webfluence-logo.png" alt="WEBFLUENCE Logo" /> WEBFLUENCE
          </a>

          <div className={styles.links}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
            ))}
          </div>

          <div className={styles.cta}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Webfluence, I'm interested in your digital marketing services!")}`}
              className={styles.waBtn}
              target="_blank"
              rel="noreferrer"

            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp
            </a>
            <a href="#contact" className={styles.btnPrimary}>Get Started →</a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {/* <button className={styles.mobileClose} onClick={closeMenu} aria-label="Close menu">✕</button> */}
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="#contact" className={styles.btnPrimary} onClick={closeMenu}>Get Started →</a>
      </div>
    </>
  );
}
