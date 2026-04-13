import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      badge: "Trusted sourcing for international partners",
      headerSubtitle: "Export solutions from Turkey",
      getQuote: "Get Quote",
      heroTitle: "Waterproofing & construction materials supply from Turkey",
      heroText:
        "We provide reliable sourcing, competitive pricing, and fast delivery solutions for distributors, contractors, and international buyers.",
      requestQuote: "Request a Quote",
      exploreServices: "Explore Services",
      stat1Title: "Turkey-Based",
      stat1Desc: "Reliable supplier network",
      stat2Title: "B2B Focus",
      stat2Desc: "Built for international partners",
      stat3Title: "Fast Response",
      stat3Desc: "Clear and practical communication",
      supplyFocus: "Supply Focus",
      supplyTitle: "Built for trust, speed, and export clarity",
      servicesLabel: "Services",
      servicesTitle: "What we offer",
      servicesText:
        "A focused export structure designed for buyers who need dependable products, smooth coordination, and direct communication.",
      whyLabel: "Why OKG Global",
      whyTitle: "A reliable export partner, not just a supplier",
      whyText:
        "We focus on clear coordination, dependable sourcing, and practical support for buyers who want consistent business from Turkey.",
      aboutLabel: "About",
      aboutTitle:
        "Exporting construction materials with a practical, partnership-focused approach",
      aboutText:
        "OKG Global is a Turkey-based export company focused on waterproofing materials and construction chemicals. We help international partners source the right products with competitive terms, clear communication, and organized delivery support.",
      contactLabel: "Contact",
      contactTitle: "Let’s talk about your sourcing needs",
      contactText:
        "Share your product requirements, target market, or order quantity. We will get back to you with a practical quotation path.",
      location: "Location: Turkey",
      businessType: "Business Type: Export & sourcing partner",
      fullName: "Full Name",
      email: "Email Address",
      company: "Company Name",
      message: "Tell us what products you need",
      send: "Send Request",
      services: [
        {
          title: "Waterproofing Products",
          description:
            "Reliable sourcing for membranes, sealants, coatings, and other waterproofing materials from Turkey.",
        },
        {
          title: "Construction Chemicals",
          description:
            "Supply solutions for adhesives, grouts, repair mortars, and performance-focused construction chemicals.",
        },
        {
          title: "Private Label Supply",
          description:
            "Flexible private label options for partners who want custom branding with dependable production support.",
        },
        {
          title: "Export Coordination",
          description:
            "Clear communication, quotation support, and organized export handling for international buyers.",
        },
      ],
      reasons: [
        "Competitive pricing from Turkish manufacturers",
        "Fast truck delivery to Europe",
        "Flexible supply options for different order sizes",
        "Clear communication and fast response",
      ],
      products: [
        "Bitumen-based waterproofing materials",
        "Cementitious waterproofing systems",
        "Polyurethane and acrylic coatings",
        "Tile adhesives and grouts",
        "Repair mortars and sealants",
        "Project-based sourcing support",
      ],
    },
    tr: {
      badge: "Uluslararası iş ortakları için güvenilir tedarik",
      headerSubtitle: "Türkiye’den ihracat çözümleri",
      getQuote: "Teklif Al",
      heroTitle: "Türkiye’den su yalıtımı ve yapı malzemeleri tedariki",
      heroText:
        "Distribütörler, müteahhitler ve uluslararası alıcılar için güvenilir tedarik, rekabetçi fiyat ve hızlı teslimat çözümleri sunuyoruz.",
      requestQuote: "Teklif İsteyin",
      exploreServices: "Hizmetleri İncele",
      stat1Title: "Türkiye Merkezli",
      stat1Desc: "Güvenilir tedarik ağı",
      stat2Title: "B2B Odaklı",
      stat2Desc: "Uluslararası iş ortakları için",
      stat3Title: "Hızlı Dönüş",
      stat3Desc: "Net ve pratik iletişim",
      supplyFocus: "Tedarik Odağı",
      supplyTitle: "Güven, hız ve ihracat netliği için tasarlandı",
      servicesLabel: "Hizmetler",
      servicesTitle: "Neler sunuyoruz",
      servicesText:
        "Güvenilir ürün, düzenli koordinasyon ve doğrudan iletişim isteyen alıcılar için odaklanmış bir ihracat yapısı sunuyoruz.",
      whyLabel: "Neden OKG Global",
      whyTitle: "Sadece tedarikçi değil, güvenilir bir ihracat partneri",
      whyText:
        "Türkiye’den düzenli iş yapmak isteyen alıcılar için net koordinasyon, güvenilir tedarik ve pratik destek sağlıyoruz.",
      aboutLabel: "Hakkımızda",
      aboutTitle:
        "Pratik ve iş ortaklığı odaklı yaklaşımla yapı malzemeleri ihracatı",
      aboutText:
        "OKG Global, su yalıtımı ürünleri ve yapı kimyasalları alanına odaklanan Türkiye merkezli bir ihracat firmasıdır. Uluslararası iş ortaklarımızın doğru ürünleri rekabetçi şartlarla, net iletişimle ve düzenli teslimat desteğiyle tedarik etmesine yardımcı oluyoruz.",
      contactLabel: "İletişim",
      contactTitle: "Tedarik ihtiyacınız hakkında konuşalım",
      contactText:
        "Ürün ihtiyacınızı, hedef pazarınızı veya sipariş miktarınızı paylaşın. Size en uygun teklif süreciyle dönüş sağlayalım.",
      location: "Konum: Türkiye",
      businessType: "Faaliyet Alanı: İhracat ve tedarik partneri",
      fullName: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      message: "İhtiyacınız olan ürünleri yazın",
      send: "Talep Gönder",
      services: [
        {
          title: "Su Yalıtım Ürünleri",
          description:
            "Membranlar, mastikler, kaplamalar ve diğer su yalıtım malzemeleri için Türkiye’den güvenilir tedarik sağlıyoruz.",
        },
        {
          title: "Yapı Kimyasalları",
          description:
            "Yapıştırıcılar, derz dolguları, tamir harçları ve performans odaklı yapı kimyasalları için tedarik çözümleri sunuyoruz.",
        },
        {
          title: "Private Label Tedarik",
          description:
            "Kendi markasıyla ilerlemek isteyen iş ortakları için esnek private label seçenekleri sunuyoruz.",
        },
        {
          title: "İhracat Koordinasyonu",
          description:
            "Uluslararası alıcılar için net iletişim, teklif desteği ve düzenli ihracat yönetimi sağlıyoruz.",
        },
      ],
      reasons: [
        "Türk üreticilerden rekabetçi fiyatlama",
        "Avrupa’ya hızlı tır teslimatı",
        "Farklı sipariş miktarlarına uygun esnek tedarik",
        "Hızlı ve net iletişim",
      ],
      products: [
        "Bitüm esaslı su yalıtım malzemeleri",
        "Çimento esaslı su yalıtım sistemleri",
        "Poliüretan ve akrilik kaplamalar",
        "Seramik yapıştırıcıları ve derz dolguları",
        "Tamir harçları ve mastikler",
        "Projeye özel tedarik desteği",
      ],
    },
  };

  const t = content[language];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.headerInner}>
            <div style={styles.brand}>
              <img src="/logo.png" alt="OKG Global" style={styles.logo} />
            </div>

            <div style={styles.headerRight}>
              <div style={styles.langSwitch}>
                <button
                  onClick={() => setLanguage("tr")}
                  style={{
                    ...styles.langBtn,
                    ...(language === "tr" ? styles.langBtnActive : {}),
                  }}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  style={{
                    ...styles.langBtn,
                    ...(language === "en" ? styles.langBtnActive : {}),
                  }}
                >
                  EN
                </button>
              </div>

              <a href="#contact" style={{ ...styles.ctaBtn, ...styles.compactBtn }}>
                {t.getQuote}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section style={{ ...styles.container, ...styles.hero }}>
          <div style={styles.heroLeft}>
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              {t.badge}
            </div>

            <h1 style={styles.heroTitle}>{t.heroTitle}</h1>
            <p style={styles.heroText}>{t.heroText}</p>

            <div style={styles.heroActions}>
              <a href="#contact" style={styles.ctaBtn}>
                {t.requestQuote}
              </a>
              <a href="#services" style={styles.secondaryBtn}>
                {t.exploreServices}
              </a>
            </div>

            <div style={styles.statsGrid}>
              {[
                [t.stat1Title, t.stat1Desc],
                [t.stat2Title, t.stat2Desc],
                [t.stat3Title, t.stat3Desc],
              ].map(([title, desc]) => (
                <div key={title} style={styles.statCard}>
                  <div style={styles.statTitle}>{title}</div>
                  <div style={styles.statDesc}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.featurePanel}>
              <div style={styles.sectionMiniGold}>{t.supplyFocus}</div>
              <h2 style={styles.panelTitle}>{t.supplyTitle}</h2>

              <div style={styles.productList}>
                {t.products.map((item) => (
                  <div key={item} style={styles.productItem}>
                    <div style={styles.check}>✓</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" style={{ ...styles.container, ...styles.section }}>
          <div style={styles.sectionHead}>
            <div style={styles.sectionMiniBlue}>{t.servicesLabel}</div>
            <h2 style={styles.sectionTitle}>{t.servicesTitle}</h2>
            <p style={styles.sectionText}>{t.servicesText}</p>
          </div>

          <div style={styles.servicesGrid}>
            {t.services.map((service) => (
              <div key={service.title} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>◆</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceText}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...styles.container, ...styles.sectionSmall }}>
          <div style={styles.whyBox}>
            <div>
              <div style={styles.sectionMiniGold}>{t.whyLabel}</div>
              <h2 style={styles.sectionTitle}>{t.whyTitle}</h2>
              <p style={styles.sectionText}>{t.whyText}</p>
            </div>

            <div style={styles.reasonsGrid}>
              {t.reasons.map((reason) => (
                <div key={reason} style={styles.reasonCard}>
                  <span style={styles.reasonDot}></span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" style={{ ...styles.container, ...styles.section, ...styles.aboutGrid }}>
          <div>
            <div style={styles.sectionMiniBlue}>{t.aboutLabel}</div>
            <h2 style={styles.sectionTitle}>{t.aboutTitle}</h2>
          </div>
          <p style={styles.aboutText}>{t.aboutText}</p>
        </section>

        <section id="contact" style={{ ...styles.container, ...styles.section }}>
          <div style={styles.contactBox}>
            <div>
              <div style={styles.sectionMiniGold}>{t.contactLabel}</div>
              <h2 style={styles.sectionTitle}>{t.contactTitle}</h2>
              <p style={styles.sectionText}>{t.contactText}</p>

              <div style={styles.contactInfo}>
                <div style={styles.contactInfoItem}>Email: info@okgglobal.com</div>
                <div style={styles.contactInfoItem}>{t.location}</div>
                <div style={styles.contactInfoItem}>{t.businessType}</div>
              </div>
            </div>

            <form style={styles.contactForm}>
              <input type="text" placeholder={t.fullName} style={styles.input} />
              <input type="email" placeholder={t.email} style={styles.input} />
              <input type="text" placeholder={t.company} style={styles.input} />
              <textarea rows="5" placeholder={t.message} style={styles.textarea}></textarea>
              <button type="button" style={styles.submitBtn}>
                {t.send}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 10% 10%, rgba(212,175,55,0.12), transparent 22%), radial-gradient(circle at 88% 18%, rgba(99,179,255,0.12), transparent 28%), radial-gradient(circle at 40% 85%, rgba(31,111,235,0.10), transparent 24%), #071326",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "min(1180px, calc(100% - 40px))",
    margin: "0 auto",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(14px)",
    background: "rgba(7, 19, 38, 0.8)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    gap: "20px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "58px",
    width: "auto",
    display: "block",
    objectFit: "contain",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  langSwitch: {
    display: "flex",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "999px",
    padding: "4px",
  },
  langBtn: {
    background: "transparent",
    color: "rgba(255,255,255,0.7)",
    padding: "8px 12px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
  },
  langBtnActive: {
    background: "#d4af37",
    color: "#071326",
    fontWeight: "700",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "14px 24px",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "none",
    background: "#d4af37",
    color: "#071326",
  },
  compactBtn: {
    padding: "10px 18px",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "14px 24px",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "none",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "40px",
    padding: "60px 0",
  },
  heroLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroRight: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    width: "fit-content",
    border: "1px solid rgba(99,179,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    padding: "10px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    color: "#b8d9ff",
    marginBottom: "20px",
  },
  badgeDot: {
    width: "8px",
    height: "8px",
    background: "#63b3ff",
    borderRadius: "50%",
  },
  heroTitle: {
    fontSize: "56px",
    lineHeight: "1.05",
    margin: "0 0 20px 0",
  },
  heroText: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "rgba(255,255,255,0.72)",
    maxWidth: "620px",
  },
  heroActions: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "28px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "14px",
    marginTop: "34px",
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "18px",
    padding: "16px",
  },
  statTitle: {
    color: "#d4af37",
    fontWeight: "700",
    marginBottom: "6px",
  },
  statDesc: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.60)",
    lineHeight: "1.5",
  },
  featurePanel: {
    width: "100%",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "linear-gradient(to bottom right, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
    borderRadius: "32px",
    padding: "28px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  },
  sectionMiniGold: {
    color: "#d4af37",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  sectionMiniBlue: {
    color: "#63b3ff",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  panelTitle: {
    fontSize: "32px",
    margin: "0 0 20px 0",
  },
  productList: {
    display: "grid",
    gap: "12px",
  },
  productItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "18px",
    background: "#0a1a33",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  check: {
    width: "34px",
    height: "34px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(99,179,255,0.10)",
    color: "#63b3ff",
    flexShrink: 0,
  },
  section: {
    padding: "70px 0",
  },
  sectionSmall: {
    padding: "20px 0 40px 0",
  },
  sectionHead: {
    maxWidth: "720px",
    marginBottom: "34px",
  },
  sectionTitle: {
    fontSize: "36px",
    margin: "0 0 14px 0",
  },
  sectionText: {
    color: "rgba(255,255,255,0.70)",
    lineHeight: "1.8",
    fontSize: "16px",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
  },
  serviceCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "24px",
    padding: "24px",
  },
  serviceIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "16px",
    background: "rgba(212,175,55,0.10)",
    color: "#d4af37",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },
  serviceTitle: {
    margin: "0 0 12px 0",
    fontSize: "22px",
  },
  serviceText: {
    margin: 0,
    color: "rgba(255,255,255,0.65)",
    lineHeight: "1.7",
    fontSize: "15px",
  },
  whyBox: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "26px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "linear-gradient(to right, #0c1d39, #0b1830)",
    borderRadius: "32px",
    padding: "30px",
  },
  reasonsGrid: {
    display: "grid",
    gap: "14px",
  },
  reasonCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "14px 16px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  reasonDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#63b3ff",
    marginTop: "6px",
    flexShrink: 0,
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "26px",
    alignItems: "center",
  },
  aboutText: {
    color: "rgba(255,255,255,0.70)",
    lineHeight: "1.9",
    fontSize: "16px",
  },
  contactBox: {
    border: "1px solid rgba(212,175,55,0.20)",
    background: "linear-gradient(to bottom right, #0e203d, #0b1730, #071326)",
    borderRadius: "32px",
    padding: "32px",
    display: "grid",
    gridTemplateColumns: "1fr 0.95fr",
    gap: "28px",
  },
  contactInfo: {
    display: "grid",
    gap: "12px",
    marginTop: "24px",
  },
  contactInfoItem: {
    padding: "14px 16px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.75)",
  },
  contactForm: {
    display: "grid",
    gap: "14px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: "24px",
    borderRadius: "28px",
  },
  input: {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "#09162a",
    padding: "14px 16px",
    color: "white",
    outline: "none",
  },
  textarea: {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "#09162a",
    padding: "14px 16px",
    color: "white",
    outline: "none",
    resize: "vertical",
  },
  submitBtn: {
    borderRadius: "16px",
    border: "none",
    background: "#d4af37",
    color: "#071326",
    padding: "14px 18px",
    fontWeight: "700",
    cursor: "pointer",
  },
};
