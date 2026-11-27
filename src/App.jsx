import { useEffect, useState } from "react";

const CONTACT_EMAIL = "robertkeiser50@gmail.com";
const MAILTO = `mailto:${CONTACT_EMAIL}`;

const NAV = [
  { href: "#what-we-build", label: "What we build" },
  { href: "#who-we-serve", label: "Who we serve" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

function IconMark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" className="mark-fill" />
      <path
        d="M10 8v16M10 16.2 21.5 8.4M10 16.2 21.5 23.6"
        fill="none"
        stroke="#f2ece3"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <IconMark />
            <span>Kyokaizen</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-small desktop-cta" href={MAILTO}>
            Get in touch
          </a>

          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
          hidden={!menuOpen}
        >
          <nav aria-label="Mobile">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="btn" href={MAILTO} onClick={closeMenu}>
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="eyebrow">
            Kyokaizen, LLC <span className="dot" aria-hidden="true" /> Florida
          </p>
          <h1>Kyokaizen</h1>
          <p className="lede">AI software tools for institutions and businesses.</p>
          <p className="hero-copy">
            We develop and sell practical AI products for education, operations,
            and the work around them. A Florida company. Building carefully,
            publishing when a tool is ready.
          </p>
          <div className="hero-actions">
            <a className="btn" href={MAILTO}>
              Contact Kyokaizen
            </a>
            <a className="text-link" href="#what-we-build">
              See what we build
            </a>
          </div>
        </section>

        <section id="what-we-build" className="section">
          <div className="section-head">
            <p className="eyebrow">What we build</p>
            <h2>AI tools, not a single-product shop.</h2>
            <p>
              Kyokaizen is an AI software company. We design tools that help
              organizations teach, operate, and improve — and we will add
              related products as they earn a place.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <p className="card-index">01</p>
              <h3>Education</h3>
              <p>
                Software for schools, colleges, and other institutions that
                need focused help with teaching, learning, and the work that
                surrounds both.
              </p>
            </article>
            <article className="card">
              <p className="card-index">02</p>
              <h3>Operations</h3>
              <p>
                Tools for the day-to-day: the coordination, review, and
                decision-making that keep a business or institution moving.
              </p>
            </article>
            <article className="card">
              <p className="card-index">03</p>
              <h3>Related products</h3>
              <p>
                Adjacent AI software as the need becomes clear. We do not
                announce capabilities we have not built.
              </p>
            </article>
          </div>
        </section>

        <section id="who-we-serve" className="section section-alt">
          <div className="section-head">
            <p className="eyebrow">Who we serve</p>
            <h2>Institutions and businesses that want useful software.</h2>
            <p>
              We work with organizations that need AI tools fitted to real
              workflows — not a generic chatbot with a new coat of paint.
            </p>
          </div>
          <ul className="serve-list">
            <li>
              <h3>Educational institutions</h3>
              <p>
                Schools, colleges, and related organizations looking for
                software that respects how they actually teach and administer.
              </p>
            </li>
            <li>
              <h3>Businesses and operators</h3>
              <p>
                Teams that want focused AI tools for operations and the work
                around them, without theater or inflated claims.
              </p>
            </li>
            <li>
              <h3>Partners with a specific need</h3>
              <p>
                If you have a concrete institutional or operational problem,
                write to us. That conversation is more useful than a
                placeholder catalog.
              </p>
            </li>
          </ul>
        </section>

        <section id="products" className="section">
          <div className="section-head">
            <p className="eyebrow">Products</p>
            <h2>A line in formation. Details when they are real.</h2>
          </div>
          <div className="product-panel">
            <p>
              Kyokaizen is building a suite of AI software tools. We will
              publish names, capabilities, and availability here when those
              products are ready to use. Until then, this page will not
              pretend a catalog exists.
            </p>
            <p>
              If you represent an institution or business and want to talk
              about a tool you need, the inbox is open.
            </p>
            <a className="btn btn-ghost" href={MAILTO}>
              Ask about upcoming work
            </a>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Write to the company.</h2>
            <p>
              For product questions, institutional inquiries, or anything
              else related to Kyokaizen, LLC.
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a className="contact-email" href={MAILTO}>
              {CONTACT_EMAIL}
            </a>
            <p className="contact-meta">Kyokaizen, LLC · Florida</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">Kyokaizen, LLC</p>
            <p>A Florida company developing AI software tools.</p>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Kyokaizen, LLC</p>
        </div>
      </footer>
    </>
  );
}
