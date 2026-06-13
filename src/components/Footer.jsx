import styles from './Footer.module.css';

const WA_NUMBER = '9779867925779';

const SERVICES_LINKS = ['Social Media', 'SEO', 'Performance Ads', 'Branding', 'Video Production', 'Web Development'];
const COMPANY_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// 1. Added 'href' directly to the SocialIcon component props
const SocialIcon = ({ title, path, href = "#" }) => (
  <a
    href={href}
    className={styles.socBtn}
    title={title}
    aria-label={title}
    target={href !== "#" ? "_blank" : undefined}
    rel={href !== "#" ? "noreferrer" : undefined}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      {path}
    </svg>
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              {/* 2. Fixed public asset route for Next.js */}
              <img src="/webfluence-logo.png" alt="WEBFLUENCE" />
              WEBFLUENCE <br />
              CONSULTANTS
            </div>
            <p className={styles.tagline}>Nepal's growth-focused digital marketing agency. We build the digital engines that attract, convert, and retain customers at scale.</p>

            {/* 3. Cleaned up social icon links (No more nested anchor tags) */}
            <div className={styles.social}>
              <SocialIcon
                title="Facebook"
                href="https://www.facebook.com/profile.php?id=61585824181750"
                path={<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
              />
              <SocialIcon
                title="Instagram"
                href="https://www.instagram.com/webfluenceconsultants/"
                path={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
              />
              <SocialIcon
                title="LinkedIn"
                href="https://www.linkedin.com/company/webfluence-consultants/posts/?feedView=all"
                path={<><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>}
              />

            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            {SERVICES_LINKS.map((s) => (
              <a key={s} href="#services" className={styles.colLink}>{s}</a>
            ))}
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            {COMPANY_LINKS.map((l) => (
              <a key={l.label} href={l.href} className={styles.colLink}>{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <span className={styles.colLink}>hello@webfluence.com</span>
            <span className={styles.colLink}>+977 9867925779</span>
            <span className={styles.colLink}>Butwal, Rupandehi</span>
            <span className={styles.colLink}>Nepal</span>
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
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Webfluence Consultants. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}