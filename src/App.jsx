import { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      badge: 'Trusted sourcing for international partners',
      headerSubtitle: 'Export solutions from Turkey',
      getQuote: 'Get Quote',
      heroTitle: 'Waterproofing & construction materials supply from Turkey',
      heroText:
        'We provide reliable sourcing, competitive pricing, and fast delivery solutions for distributors, contractors, and international buyers.',
      requestQuote: 'Request a Quote',
      exploreServices: 'Explore Services',
      stat1Title: 'Turkey-Based',
      stat1Desc: 'Reliable supplier network',
      stat2Title: 'B2B Focus',
      stat2Desc: 'Built for international partners',
      stat3Title: 'Fast Response',
      stat3Desc: 'Clear and practical communication',
      supplyFocus: 'Supply Focus',
      supplyTitle: 'Built for trust, speed, and export clarity',
      servicesLabel: 'Services',
      servicesTitle: 'What we offer',
      servicesText:
        'A focused export structure designed for buyers who need dependable products, smooth coordination, and direct communication.',
      whyLabel: 'Why OKG Global',
      whyTitle: 'A reliable export partner, not just a supplier',
      whyText:
        'We focus on clear coordination, dependable sourcing, and practical support for buyers who want consistent business from Turkey.',
      aboutLabel: 'About',
      aboutTitle:
        'Exporting construction materials with a practical, partnership-focused approach',
      aboutText:
        'OKG Global is a Turkey-based export company focused on waterproofing materials and construction chemicals. We help international partners source the right products with competitive terms, clear communication, and organized delivery support.',
      contactLabel: 'Contact',
      contactTitle: "Let's talk about your sourcing needs",
      contactText:
        'Share your product requirements, target market, or order quantity. We will get back to you with a practical quotation path.',
      location: 'Location: Turkey',
      businessType: 'Business Type: Export & sourcing partner',
      fullName: 'Full Name',
      email: 'Email Address',
      company: 'Company Name',
      message: 'Tell us what products you need',
      send: 'Send Request',
      services: [
        {
          title: 'Waterproofing Products',
          description:
            'Reliable sourcing for membranes, sealants, coatings, and other waterproofing materials from Turkey.',
        },
        {
          title: 'Construction Chemicals',
          description:
            'Supply solutions for adhesives, grouts, repair mortars, and performance-focused construction chemicals.',
        },
        {
          title: 'Private Label Supply',
          description:
            'Flexible private label options for partners who want custom branding with dependable production support.',
        },
        {
          title: 'Export Coordination',
          description:
            'Clear communication, quotation support, and organized export handling for international buyers.',
        },
      ],
      reasons: [
        'Competitive pricing from Turkish manufacturers',
        'Fast truck delivery to Europe',
        'Flexible supply options for different order sizes',
        'Clear communication and fast response',
      ],
      products: [
        'Bitumen-based waterproofing materials',
        'Cementitious waterproofing systems',
        'Polyurethane and acrylic coatings',
        'Tile adhesives and grouts',
        'Repair mortars and sealants',
        'Project-based sourcing support',
      ],
    },
    tr: {
      badge: 'Uluslararası iş ortakları için güvenilir tedarik',
      headerSubtitle: 'Türkiye’den ihracat çözümleri',
      getQuote: 'Teklif Al',
      heroTitle: 'Türkiye’den su yalıtımı ve yapı malzemeleri tedariki',
      heroText:
        'Distribütörler, müteahhitler ve uluslararası alıcılar için güvenilir tedarik, rekabetçi fiyat ve hızlı teslimat çözümleri sunuyoruz.',
      requestQuote: 'Teklif İsteyin',
      exploreServices: 'Hizmetleri İncele',
      stat1Title: 'Türkiye Merkezli',
      stat1Desc: 'Güvenilir tedarik ağı',
      stat2Title: 'B2B Odaklı',
      stat2Desc: 'Uluslararası iş ortakları için',
      stat3Title: 'Hızlı Dönüş',
      stat3Desc: 'Net ve pratik iletişim',
      supplyFocus: 'Tedarik Odağı',
      supplyTitle: 'Güven, hız ve ihracat netliği için tasarlandı',
      servicesLabel: 'Hizmetler',
      servicesTitle: 'Neler sunuyoruz',
      servicesText:
        'Güvenilir ürün, düzenli koordinasyon ve doğrudan iletişim isteyen alıcılar için odaklanmış bir ihracat yapısı sunuyoruz.',
      whyLabel: 'Neden OKG Global',
      whyTitle: 'Sadece tedarikçi değil, güvenilir bir ihracat partneri',
      whyText:
        'Türkiye’den düzenli iş yapmak isteyen alıcılar için net koordinasyon, güvenilir tedarik ve pratik destek sağlıyoruz.',
      aboutLabel: 'Hakkımızda',
      aboutTitle:
        'Pratik ve iş ortaklığı odaklı yaklaşımla yapı malzemeleri ihracatı',
      aboutText:
        'OKG Global, su yalıtımı ürünleri ve yapı kimyasalları alanına odaklanan Türkiye merkezli bir ihracat firmasıdır. Uluslararası iş ortaklarımızın doğru ürünleri rekabetçi şartlarla, net iletişimle ve düzenli teslimat desteğiyle tedarik etmesine yardımcı oluyoruz.',
      contactLabel: 'İletişim',
      contactTitle: 'Tedarik ihtiyacınız hakkında konuşalım',
      contactText:
        'Ürün ihtiyacınızı, hedef pazarınızı veya sipariş miktarınızı paylaşın. Size en uygun teklif süreciyle dönüş sağlayalım.',
      location: 'Konum: Türkiye',
      businessType: 'Faaliyet Alanı: İhracat ve tedarik partneri',
      fullName: 'Ad Soyad',
      email: 'E-posta Adresi',
      company: 'Şirket Adı',
      message: 'İhtiyacınız olan ürünleri yazın',
      send: 'Talep Gönder',
      services: [
        {
          title: 'Su Yalıtım Ürünleri',
          description:
            'Membranlar, mastikler, kaplamalar ve diğer su yalıtım malzemeleri için Türkiye’den güvenilir tedarik sağlıyoruz.',
        },
        {
          title: 'Yapı Kimyasalları',
          description:
            'Yapıştırıcılar, derz dolguları, tamir harçları ve performans odaklı yapı kimyasalları için tedarik çözümleri sunuyoruz.',
        },
        {
          title: 'Private Label Tedarik',
          description:
            'Kendi markasıyla ilerlemek isteyen iş ortakları için esnek private label seçenekleri sunuyoruz.',
        },
        {
          title: 'İhracat Koordinasyonu',
          description:
            'Uluslararası alıcılar için net iletişim, teklif desteği ve düzenli ihracat yönetimi sağlıyoruz.',
        },
      ],
      reasons: [
        'Türk üreticilerden rekabetçi fiyatlama',
        'Avrupa’ya hızlı tır teslimatı',
        'Farklı sipariş miktarlarına uygun esnek tedarik',
        'Hızlı ve net iletişim',
      ],
      products: [
        'Bitüm esaslı su yalıtım malzemeleri',
        'Çimento esaslı su yalıtım sistemleri',
        'Poliüretan ve akrilik kaplamalar',
        'Seramik yapıştırıcıları ve derz dolguları',
        'Tamir harçları ve mastikler',
        'Projeye özel tedarik desteği',
      ],
    },
  };

  const t = content[language];

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">OKG</div>
            <div>
              <div className="brand-title">OKG GLOBAL</div>
              <div className="brand-subtitle">{t.headerSubtitle}</div>
            </div>
          </div>

          <div className="header-right">
            <div className="lang-switch">
              <button
                onClick={() => setLanguage('tr')}
                className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
            </div>
            <a href="#contact" className="cta-btn compact">{t.getQuote}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot" />
              {t.badge}
            </div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a href="#contact" className="cta-btn">{t.requestQuote}</a>
              <a href="#services" className="secondary-btn">{t.exploreServices}</a>
            </div>
            <div className="stats-grid">
              {[
                [t.stat1Title, t.stat1Desc],
                [t.stat2Title, t.stat2Desc],
                [t.stat3Title, t.stat3Desc],
              ].map(([title, desc]) => (
                <div key={title} className="stat-card">
                  <div className="stat-title">{title}</div>
                  <div className="stat-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="feature-panel">
              <div className="section-mini">{t.supplyFocus}</div>
              <h2>{t.supplyTitle}</h2>
              <div className="product-list">
                {t.products.map((item) => (
                  <div key={item} className="product-item">
                    <div className="check">✓</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <div className="section-head narrow">
            <div className="section-mini blue">{t.servicesLabel}</div>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>
          <div className="services-grid">
            {t.services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">◆</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section-small">
          <div className="why-box">
            <div>
              <div className="section-mini gold">{t.whyLabel}</div>
              <h2>{t.whyTitle}</h2>
              <p>{t.whyText}</p>
            </div>
            <div className="reasons-grid">
              {t.reasons.map((reason) => (
                <div key={reason} className="reason-card">
                  <span className="reason-dot" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section container about-grid">
          <div>
            <div className="section-mini blue">{t.aboutLabel}</div>
            <h2>{t.aboutTitle}</h2>
          </div>
          <p className="about-text">{t.aboutText}</p>
        </section>

        <section id="contact" className="section container">
          <div className="contact-box">
            <div>
              <div className="section-mini gold">{t.contactLabel}</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-info">
                <div>Email: info@okgglobal.com</div>
                <div>{t.location}</div>
                <div>{t.businessType}</div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder={t.fullName} />
              <input type="email" placeholder={t.email} />
              <input type="text" placeholder={t.company} />
              <textarea rows="5" placeholder={t.message} />
              <button type="button" className="submit-btn">{t.send}</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
