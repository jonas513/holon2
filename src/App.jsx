import React, { useState, useEffect } from 'react';
import { ServicePage, AboutPage, Contact, ReferencesPage, MasterclassPage, AuditPage, PnlPage } from './Pages';

const t = {
  NL: {
    nav: {
      services: 'Diensten',
      references: 'Referenties',
      about: 'Over ons',
      contact: 'Contact',
      servicesItems: [
        { label: 'SAP-CO Consultancy', view: 'service' },
        { label: 'SAP-CO Masterclass', view: 'masterclass' },
        { label: 'SAP-CO Audit', view: 'audit' },
        { label: 'P&L by Destination®', view: 'pnl' },
      ],
    },
    hero: {
      overline: 'SAP Controlling Specialist',
      title: 'De brug tussen wat uw business vraagt en wat SAP kan leveren.',
      subtitle: '25 jaar SAP-CO ervaring. Bewezen methodologie. Echte resultaten voor controllers bij Belgische topbedrijven.',
      cta1: 'Plan een gesprek',
      cta2: 'Ontdek onze aanpak',
      proof: 'Vertrouwd door 30+ Belgische topbedrijven',
    },
    clients: {
      label: 'Zij kozen voor Holon',
    },
    services: {
      overline: 'Onze expertise',
      title: 'Vier manieren waarop wij uw SAP-CO naar het volgende niveau brengen.',
      items: [
        {
          id: 'service',
          tag: 'Consultancy',
          title: 'SAP-CO Consultancy',
          desc: 'Van conceptueel ontwerp tot technische implementatie. Wij optimaliseren uw Controlling-module en transformeren uw managementrapportering naar een écht strategisch stuurinstrument.',
          cta: 'Meer over consultancy',
        },
        {
          id: 'masterclass',
          tag: 'Opleiding',
          title: 'SAP-CO Masterclass',
          desc: 'Eén dag. Van nul naar zelfzeker in SAP Controlling. Open sessies in Gent of in-house bij uw bedrijf. Geleid door Mark De Backer, 25 jaar SAP-CO expert.',
          cta: 'Inschrijven',
          badge: 'Volgende sessie: december 2026',
        },
        {
          id: 'audit',
          tag: 'Audit',
          title: 'SAP-CO Systeemaudit',
          desc: 'Een grondige analyse van uw bestaande SAP CO-configuratie. Conceptueel, technisch en organisatorisch. U krijgt concrete aanbevelingen, geen abstract rapport.',
          cta: 'Meer over audit',
        },
        {
          id: 'pnl',
          tag: 'Methodologie',
          title: 'P&L by Destination®',
          desc: 'Onze eigen methodologie voor resultatenrekening per afdeling op basis van Activity Based Costing. Uniek IP dat uw management reporting fundamenteel verandert.',
          cta: 'Ontdek de methodologie',
          badge: 'Eigen methodologie',
        },
      ],
    },
    mark: {
      overline: 'De expert achter Holon',
      quote: 'SAP-CO is geen technisch systeem. Het is het geheugen van uw bedrijf. Als dat geheugen correct geconfigureerd is, neemt uw management betere beslissingen.',
      name: 'Mark De Backer',
      title: 'Oprichter & SAP-CO Expert, Holon',
      bio: '25 jaar ervaring in SAP Controlling bij Belgische industriebedrijven. Voormalig financieel controller. Auteur van de P&L by Destination® methodologie.',
      cta: 'Maak kennis met Mark',
    },
    cta: {
      overline: 'Klaar om te beginnen?',
      title: 'Plan een vrijblijvend gesprek met Mark.',
      subtitle: 'Vertel ons uw situatie. Wij vertellen u of en hoe wij kunnen helpen.',
      button: 'Plan een gesprek',
      secondary: 'Of stuur een e-mail',
    },
    footer: {
      tagline: 'SAP Controlling specialist voor Belgische industrie.',
      services: 'Diensten',
      company: 'Bedrijf',
      companyLinks: ['Over ons', 'Referenties', 'Contact', 'Privacy Policy'],
      legal: '© 2026 Holon BV. Alle rechten voorbehouden.',
      address: 'Vossestaart 1, 9881 Bellem',
      phone: '+32 476 42 11 46',
      email: 'info@holon.be',
    },
  },
  EN: {
    nav: {
      services: 'Services',
      references: 'References',
      about: 'About us',
      contact: 'Contact',
      servicesItems: [
        { label: 'SAP-CO Consultancy', view: 'service' },
        { label: 'SAP-CO Masterclass', view: 'masterclass' },
        { label: 'SAP-CO Audit', view: 'audit' },
        { label: 'P&L by Destination®', view: 'pnl' },
      ],
    },
    hero: {
      overline: 'SAP Controlling Specialist',
      title: 'Bridging the gap between what your business needs and what SAP can deliver.',
      subtitle: '25 years of SAP-CO expertise. Proven methodology. Real results for controllers at Belgian industry leaders.',
      cta1: 'Schedule a call',
      cta2: 'Explore our services',
      proof: 'Trusted by 30+ top Belgian companies',
    },
    clients: {
      label: 'They chose Holon',
    },
    services: {
      overline: 'Our expertise',
      title: 'Four ways we take your SAP-CO to the next level.',
      items: [
        {
          id: 'service',
          tag: 'Consultancy',
          title: 'SAP-CO Consultancy',
          desc: 'From conceptual design to technical implementation. We optimize your Controlling module and transform your management reporting into a real strategic steering tool.',
          cta: 'More about consultancy',
        },
        {
          id: 'masterclass',
          tag: 'Training',
          title: 'SAP-CO Masterclass',
          desc: 'One day. From zero to confident in SAP Controlling. Open sessions in Ghent or in-house at your company. Led by Mark De Backer, 25-year SAP-CO expert.',
          cta: 'Register now',
          badge: 'Next session: December 2026',
        },
        {
          id: 'audit',
          tag: 'Audit',
          title: 'SAP-CO System Audit',
          desc: 'A thorough analysis of your existing SAP CO configuration. Conceptual, technical, and organizational. You get concrete recommendations, not an abstract report.',
          cta: 'More about audit',
        },
        {
          id: 'pnl',
          tag: 'Methodology',
          title: 'P&L by Destination®',
          desc: 'Our proprietary methodology for income statement by department based on Activity Based Costing. Unique IP that fundamentally changes your management reporting.',
          cta: 'Discover the methodology',
          badge: 'Proprietary methodology',
        },
      ],
    },
    mark: {
      overline: "The expert behind Holon",
      quote: "SAP-CO is not a technical system. It's the memory of your company. When that memory is correctly configured, your management makes better decisions.",
      name: 'Mark De Backer',
      title: 'Founder & SAP-CO Expert, Holon',
      bio: '25 years of experience in SAP Controlling at Belgian industrial companies. Former financial controller. Author of the P&L by Destination® methodology.',
      cta: 'Meet Mark',
    },
    cta: {
      overline: 'Ready to start?',
      title: 'Schedule a no-obligation call with Mark.',
      subtitle: "Tell us your situation. We'll tell you if and how we can help.",
      button: 'Schedule a call',
      secondary: 'Or send an email',
    },
    footer: {
      tagline: 'SAP Controlling specialist for Belgian industry.',
      services: 'Services',
      company: 'Company',
      companyLinks: ['About us', 'References', 'Contact', 'Privacy Policy'],
      legal: '© 2026 Holon BV. All rights reserved.',
      address: 'Vossestaart 1, 9881 Bellem',
      phone: '+32 476 42 11 46',
      email: 'info@holon.be',
    },
  },
};

const clients = [
  { name: 'AGC',           src: '/clients/agc.jpg' },
  { name: 'Alpro',         src: '/clients/alpro.jpg' },
  { name: 'Colruyt',       src: '/clients/colruyt.jpg' },
  { name: 'Delhaize',      src: '/clients/delhaize.jpg' },
  { name: 'Heinz',         src: '/clients/heinz.jpg' },
  { name: 'Honda',         src: '/clients/honda.jpg' },
  { name: 'McCain',        src: '/clients/mccain.jpg' },
  { name: 'Neuhaus',       src: '/clients/neuhaus.jpg' },
  { name: 'Ontex',         src: '/clients/ontex.jpg' },
  { name: 'Ravago',        src: '/clients/ravago.png' },
  { name: 'Milcobel',      src: '/clients/milcobel.jpg' },
  { name: 'Recticel',      src: '/clients/recticel.jpg' },
  { name: 'Lotus Biscoff', src: '/clients/lotus.png' },
  { name: 'Nitto',         src: '/clients/nitto.jpg' },
  { name: 'Impextraco',    src: '/clients/impextraco.jpg' },
  { name: 'Imperial',      src: '/clients/imperial.jpg' },
];

const Navbar = ({ setView, lang, setLang, tx }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-holon-white shadow-sm border-b border-holon-subtle/60' : 'bg-holon-white/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Hoofdnavigatie"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => setView('home')}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2 rounded-sm"
            aria-label="Holon — Terug naar homepage"
          >
            <img
              src="/holon-logo-official.png"
              alt="Holon — Strong Concepts • Reliable Delivery"
              className="h-10 w-auto"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[0.9375rem] font-medium text-holon-ink/70 hover:text-holon-teal transition-colors duration-150 py-8 focus-visible:outline-none focus-visible:text-holon-teal">
                {tx.nav.services}
                <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full w-56 bg-holon-white border border-holon-subtle/60 rounded-xl shadow-hover-lift py-2 overflow-hidden">
                  {tx.nav.servicesItems.map((item) => (
                    <button
                      key={item.view}
                      onClick={() => { setView(item.view); setServicesOpen(false); }}
                      className="block w-full text-left px-5 py-3 text-sm text-holon-ink hover:bg-holon-canvas hover:text-holon-teal transition-colors duration-100"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setView('references')} className="text-[0.9375rem] font-medium text-holon-ink/70 hover:text-holon-teal transition-colors duration-150 focus-visible:outline-none focus-visible:text-holon-teal">
              {tx.nav.references}
            </button>
            <button onClick={() => setView('about')} className="text-[0.9375rem] font-medium text-holon-ink/70 hover:text-holon-teal transition-colors duration-150 focus-visible:outline-none focus-visible:text-holon-teal">
              {tx.nav.about}
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-holon-subtle">
              <button
                onClick={() => setLang('NL')}
                className={`text-[0.8125rem] font-600 transition-colors duration-100 ${lang === 'NL' ? 'text-holon-teal font-bold' : 'text-holon-mid hover:text-holon-ink'}`}
                aria-pressed={lang === 'NL'}
              >
                NL
              </button>
              <span className="text-holon-subtle" aria-hidden="true">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`text-[0.8125rem] transition-colors duration-100 ${lang === 'EN' ? 'text-holon-teal font-bold' : 'text-holon-mid hover:text-holon-ink'}`}
                aria-pressed={lang === 'EN'}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setView('contact')}
              className="bg-holon-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-holon-teal-deep transition-colors duration-150 shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2"
            >
              {tx.nav.contact}
            </button>
          </div>

          <button
            className="md:hidden text-holon-ink p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Menu openen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-holon-white border-t border-holon-subtle/60 px-6 py-4 space-y-1">
          {tx.nav.servicesItems.map((item) => (
            <button key={item.view} onClick={() => { setView(item.view); setMenuOpen(false); }} className="block w-full text-left py-3 text-[0.9375rem] text-holon-ink hover:text-holon-teal transition-colors border-b border-holon-surface last:border-0">
              {item.label}
            </button>
          ))}
          <button onClick={() => { setView('references'); setMenuOpen(false); }} className="block w-full text-left py-3 text-[0.9375rem] text-holon-ink hover:text-holon-teal transition-colors border-b border-holon-surface">
            {tx.nav.references}
          </button>
          <button onClick={() => { setView('about'); setMenuOpen(false); }} className="block w-full text-left py-3 text-[0.9375rem] text-holon-ink hover:text-holon-teal transition-colors border-b border-holon-surface">
            {tx.nav.about}
          </button>
          <div className="pt-3 flex items-center gap-4">
            <button onClick={() => { setLang('NL'); setMenuOpen(false); }} className={`text-sm font-semibold ${lang === 'NL' ? 'text-holon-teal' : 'text-holon-mid'}`}>NL</button>
            <span className="text-holon-subtle">|</span>
            <button onClick={() => { setLang('EN'); setMenuOpen(false); }} className={`text-sm font-semibold ${lang === 'EN' ? 'text-holon-teal' : 'text-holon-mid'}`}>EN</button>
            <button onClick={() => { setView('contact'); setMenuOpen(false); }} className="ml-auto bg-holon-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
              {tx.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setView, tx }) => (
  <section className="relative min-h-screen flex items-end bg-holon-dark overflow-hidden" aria-labelledby="hero-heading">
    <img
      src="/masterclass-classroom.jpg"
      alt="Holon SAP-CO Masterclass sessie"
      className="absolute inset-0 w-full h-full object-cover object-center"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-holon-dark via-holon-dark/70 to-holon-dark/30" aria-hidden="true" />

    <div className="relative z-10 w-full pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest mb-6">
            {tx.hero.overline}
          </p>
          <h1
            id="hero-heading"
            className="font-bold text-holon-white mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
            }}
          >
            {tx.hero.title}
          </h1>
          <p className="text-holon-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            {tx.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setView('contact')}
              className="bg-holon-teal text-white px-8 py-4 rounded-lg font-semibold text-[0.9375rem] hover:bg-holon-teal-deep transition-all duration-150 shadow-cta hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2 focus-visible:ring-offset-holon-dark"
            >
              {tx.hero.cta1}
            </button>
            <button
              onClick={() => setView('service')}
              className="border border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-[0.9375rem] hover:border-white hover:bg-white/10 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-holon-dark"
            >
              {tx.hero.cta2}
            </button>
          </div>
          <p className="mt-10 text-holon-white/40 text-sm font-medium tracking-wide">
            {tx.hero.proof}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ClientLogos = ({ tx }) => {
  const doubled = [...clients, ...clients];
  return (
    <section className="bg-holon-surface py-14 overflow-hidden" aria-label={tx.clients.label}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-[0.75rem] font-semibold uppercase tracking-widest text-holon-mid">
          {tx.clients.label}
        </p>
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-12 animate-marquee"
          style={{ width: 'max-content' }}
          aria-hidden="true"
        >
          {doubled.map((c, i) => (
            <div key={i} className="flex-shrink-0 h-10 w-28 flex items-center justify-center grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300">
              <img
                src={c.src}
                alt={c.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = ({ setView, tx }) => {
  const items = tx.services.items;
  return (
    <section className="bg-holon-canvas py-28 lg:py-36" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest mb-4">
            {tx.services.overline}
          </p>
          <h2
            id="services-heading"
            className="font-bold text-holon-ink"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
          >
            {tx.services.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Groot service-kaart — SAP-CO Consultancy */}
          <div
            onClick={() => setView(items[0].id)}
            className="lg:col-span-7 bg-holon-white border border-holon-subtle/60 rounded-2xl p-10 lg:p-12 cursor-pointer group hover:border-holon-teal/30 hover:shadow-hover-lift transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal"
            role="article"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setView(items[0].id)}
            aria-label={items[0].title}
          >
            <span className="inline-block bg-holon-teal-wash text-holon-teal text-[0.6875rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              {items[0].tag}
            </span>
            <h3 className="text-2xl font-bold text-holon-ink mb-4" style={{ letterSpacing: '-0.01em' }}>
              {items[0].title}
            </h3>
            <p className="text-holon-mid leading-relaxed mb-8 max-w-lg text-[1.0625rem]">
              {items[0].desc}
            </p>
            <span className="inline-flex items-center gap-2 text-holon-teal text-[0.8125rem] font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-150">
              {items[0].cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Masterclass — met badge */}
          <div
            onClick={() => setView(items[1].id)}
            className="lg:col-span-5 bg-holon-dark text-white rounded-2xl p-10 cursor-pointer group hover:bg-holon-dark/90 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal relative overflow-hidden"
            role="article"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setView(items[1].id)}
            aria-label={items[1].title}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-holon-teal/10 rounded-full -translate-y-16 translate-x-16" aria-hidden="true" />
            {items[1].badge && (
              <span className="inline-block bg-holon-teal text-white text-[0.6875rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {items[1].badge}
              </span>
            )}
            <h3 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.01em' }}>
              {items[1].title}
            </h3>
            <p className="text-white/65 leading-relaxed mb-8 text-[1.0625rem]">
              {items[1].desc}
            </p>
            <span className="inline-flex items-center gap-2 text-holon-teal text-[0.8125rem] font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-150">
              {items[1].cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Audit */}
          <div
            onClick={() => setView(items[2].id)}
            className="lg:col-span-5 bg-holon-white border border-holon-subtle/60 rounded-2xl p-10 cursor-pointer group hover:border-holon-teal/30 hover:shadow-hover-lift transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal"
            role="article"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setView(items[2].id)}
            aria-label={items[2].title}
          >
            <span className="inline-block bg-holon-surface text-holon-mid text-[0.6875rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              {items[2].tag}
            </span>
            <h3 className="text-xl font-bold text-holon-ink mb-3" style={{ letterSpacing: '-0.01em' }}>
              {items[2].title}
            </h3>
            <p className="text-holon-mid leading-relaxed mb-6 text-[0.9375rem]">
              {items[2].desc}
            </p>
            <span className="inline-flex items-center gap-2 text-holon-teal text-[0.8125rem] font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-150">
              {items[2].cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* P&L by Destination — eigen methodologie badge */}
          <div
            onClick={() => setView(items[3].id)}
            className="lg:col-span-7 bg-holon-surface rounded-2xl p-10 cursor-pointer group hover:shadow-hover-lift transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal"
            role="article"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setView(items[3].id)}
            aria-label={items[3].title}
          >
            {items[3].badge && (
              <span className="inline-block bg-holon-white text-holon-teal border border-holon-teal/20 text-[0.6875rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {items[3].badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-holon-ink mb-3" style={{ letterSpacing: '-0.01em' }}>
              {items[3].title}
            </h3>
            <p className="text-holon-mid leading-relaxed mb-6 text-[0.9375rem] max-w-lg">
              {items[3].desc}
            </p>
            <span className="inline-flex items-center gap-2 text-holon-teal text-[0.8125rem] font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-150">
              {items[3].cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarkSection = ({ setView, tx }) => (
  <section className="bg-holon-dark overflow-hidden" aria-labelledby="mark-heading">
    <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
      <div className="py-20 lg:py-28 px-6 lg:px-12 xl:pl-16 flex flex-col justify-center order-2 lg:order-1">
        <p className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest mb-8">
          {tx.mark.overline}
        </p>
        <blockquote className="mb-10">
          <p
            className="text-holon-white/90 italic leading-relaxed mb-6"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.65 }}
          >
            "{tx.mark.quote}"
          </p>
        </blockquote>
        <div className="mb-8">
          <p id="mark-heading" className="font-bold text-holon-white text-lg mb-1">
            {tx.mark.name}
          </p>
          <p className="text-holon-teal text-sm font-medium">{tx.mark.title}</p>
        </div>
        <p className="text-holon-white/50 text-sm leading-relaxed mb-10 max-w-sm">
          {tx.mark.bio}
        </p>
        <button
          onClick={() => setView('about')}
          className="self-start border border-white/25 text-white px-7 py-3.5 rounded-lg text-[0.9375rem] font-semibold hover:border-white hover:bg-white/10 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-holon-dark"
        >
          {tx.mark.cta}
        </button>
      </div>

      <div className="order-1 lg:order-2 h-72 lg:h-auto relative">
        <img
          src="/mark-instructor.jpg"
          alt="Mark De Backer — Oprichter en SAP-CO Expert bij Holon"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-holon-dark/60 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-holon-dark/40" aria-hidden="true" />
      </div>
    </div>
  </section>
);

const CTASection = ({ setView, tx }) => (
  <section className="bg-holon-canvas py-28 lg:py-36" aria-labelledby="cta-heading">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <p className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest mb-6">
        {tx.cta.overline}
      </p>
      <h2
        id="cta-heading"
        className="font-bold text-holon-ink mb-6"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
      >
        {tx.cta.title}
      </h2>
      <p className="text-holon-mid text-lg leading-relaxed mb-12 max-w-xl mx-auto">
        {tx.cta.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => setView('contact')}
          className="bg-holon-teal text-white px-10 py-4 rounded-lg font-semibold text-[0.9375rem] hover:bg-holon-teal-deep transition-all duration-150 shadow-cta hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2"
        >
          {tx.cta.button}
        </button>
        <a
          href="mailto:info@holon.be"
          className="text-holon-mid hover:text-holon-teal transition-colors duration-150 text-[0.9375rem] font-medium underline underline-offset-4 decoration-holon-subtle hover:decoration-holon-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal rounded-sm"
        >
          {tx.cta.secondary}
        </a>
      </div>
    </div>
  </section>
);

const Footer = ({ setView, tx, lang, setLang }) => (
  <footer className="bg-holon-dark text-white" role="contentinfo">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-bold text-xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>HOLON</span>
            <span className="w-0.5 h-5 bg-holon-teal rounded-full" aria-hidden="true" />
          </div>
          <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
            {tx.footer.tagline}
          </p>
          <address className="not-italic space-y-3 text-sm text-white/40">
            <p>{tx.footer.address}</p>
            <p>
              <a href="tel:+32476421146" className="hover:text-holon-teal transition-colors duration-150">
                {tx.footer.phone}
              </a>
            </p>
            <p>
              <a href="mailto:info@holon.be" className="hover:text-holon-teal transition-colors duration-150">
                {tx.footer.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-5">
            {tx.footer.services}
          </h3>
          <ul className="space-y-3">
            {tx.nav.servicesItems.map((item) => (
              <li key={item.view}>
                <button
                  onClick={() => setView(item.view)}
                  className="text-sm text-white/55 hover:text-holon-teal transition-colors duration-150 text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-5">
            {tx.footer.company}
          </h3>
          <ul className="space-y-3">
            {[
              { label: tx.footer.companyLinks[0], action: () => setView('about') },
              { label: tx.footer.companyLinks[1], action: () => setView('references') },
              { label: tx.footer.companyLinks[2], action: () => setView('contact') },
              { label: tx.footer.companyLinks[3], action: () => {} },
            ].map(({ label, action }) => (
              <li key={label}>
                <button onClick={action} className="text-sm text-white/55 hover:text-holon-teal transition-colors duration-150 text-left">
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://nl.linkedin.com/company/holon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-holon-teal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2 focus-visible:ring-offset-holon-dark rounded-sm"
              aria-label="Holon op LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/25">{tx.footer.legal}</p>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang('NL')} className={`text-xs font-semibold transition-colors duration-100 ${lang === 'NL' ? 'text-holon-teal' : 'text-white/25 hover:text-white/50'}`}>NL</button>
          <span className="text-white/15" aria-hidden="true">|</span>
          <button onClick={() => setLang('EN')} className={`text-xs font-semibold transition-colors duration-100 ${lang === 'EN' ? 'text-holon-teal' : 'text-white/25 hover:text-white/50'}`}>EN</button>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('NL');
  const tx = t[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <div className="min-h-screen selection:bg-holon-teal selection:text-white">
      <Navbar setView={setView} lang={lang} setLang={setLang} tx={tx} />

      <main id="main-content">
        {view === 'home' && (
          <>
            <Hero setView={setView} tx={tx} />
            <ClientLogos tx={tx} />
            <Services setView={setView} tx={tx} />
            <MarkSection setView={setView} tx={tx} />
            <CTASection setView={setView} tx={tx} />
          </>
        )}
        {view === 'service'     && <ServicePage lang={lang} setView={setView} />}
        {view === 'masterclass' && <MasterclassPage lang={lang} setView={setView} />}
        {view === 'audit'       && <AuditPage lang={lang} setView={setView} />}
        {view === 'pnl'         && <PnlPage lang={lang} setView={setView} />}
        {view === 'about'       && <AboutPage lang={lang} setView={setView} />}
        {view === 'contact'     && <Contact lang={lang} />}
        {view === 'references'  && <ReferencesPage lang={lang} setView={setView} />}
      </main>

      <Footer setView={setView} tx={tx} lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
