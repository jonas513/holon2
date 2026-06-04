import React from 'react';

const PageHeader = ({ overline, title, intro, dark = true }) => (
  <section className={`pt-40 pb-20 ${dark ? 'bg-holon-dark text-white' : 'bg-holon-canvas text-holon-ink'}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {overline && (
        <p className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest mb-5">{overline}</p>
      )}
      <h1
        className={`font-bold mb-6 max-w-3xl ${dark ? 'text-white' : 'text-holon-ink'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {title}
      </h1>
      {intro && (
        <p className={`text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/65' : 'text-holon-mid'}`}>
          {intro}
        </p>
      )}
    </div>
  </section>
);

const SectionTitle = ({ children, className = '' }) => (
  <h2
    className={`font-bold text-holon-ink mb-8 ${className}`}
    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
  >
    {children}
  </h2>
);

const InlineCTA = ({ setView, label }) => (
  <section className="bg-holon-teal py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <p className="text-white text-xl font-semibold mb-6">{label}</p>
      <button
        onClick={() => setView('contact')}
        className="bg-holon-dark text-white px-10 py-4 rounded-lg font-semibold hover:bg-holon-dark/80 transition-all duration-150 shadow-cta"
      >
        {label.includes('contact') || label.includes('Contact') ? 'Contact opnemen' : 'Plan een gesprek'}
      </button>
    </div>
  </section>
);

export const ServicePage = ({ lang, setView }) => {
  const isNL = lang === 'NL';
  return (
    <div className="min-h-screen">
      <PageHeader
        overline="Consultancy"
        title={isNL ? 'SAP-CO Consultancy' : 'SAP-CO Consultancy'}
        intro={isNL
          ? 'Wij slaan de brug tussen financiële concepten en technische SAP-configuratie. Kwalitatief advies, bewezen aanpak.'
          : 'We bridge the gap between financial concepts and technical SAP configuration. Quality advice, proven approach.'}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle>{isNL ? 'Wat houdt de dienst in?' : 'What does the service entail?'}</SectionTitle>
              <div className="space-y-5 text-holon-mid text-[1.0625rem] leading-relaxed">
                <p>{isNL
                  ? 'Holon staat voor kwalitatieve adviesverlening in de controllingmodule van SAP. Door onze jarenlange ervaring bezitten we een sterke conceptuele kennis van controlling, financiële processen en rapporteringssystemen.'
                  : 'Holon stands for qualitative advisory services in the SAP controlling module. Through years of experience, we possess strong conceptual knowledge of controlling, financial processes, and reporting systems.'}</p>
                <p>{isNL
                  ? 'Wij helpen u nadenken over hoe u uw managementrapportering kan omvormen tot een échte tool voor het nemen van goede beleidsbeslissingen, en we leiden u doorheen het hele implementatieproces.'
                  : 'We help you think about how to transform your management reporting into a real tool for making sound policy decisions, and we lead you through the entire implementation process.'}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/masterclass-group.jpg"
                alt={isNL ? 'SAP-CO Masterclass sessie' : 'SAP-CO Masterclass session'}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle>{isNL ? 'Voor wie is dit?' : 'Who is this for?'}</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: isNL ? "CFO's" : "CFOs", desc: isNL ? "Die behoefte hebben aan betrouwbare managementrapportages en strategisch inzicht." : "Who need reliable management reports and strategic insight." },
              { role: isNL ? "Financial Controllers" : "Financial Controllers", desc: isNL ? "Die hun SAP-CO kennis willen verdiepen of processen willen optimaliseren." : "Who want to deepen their SAP-CO knowledge or optimize processes." },
              { role: isNL ? "SAP Projectleiders" : "SAP Project Leaders", desc: isNL ? "Die op zoek zijn naar diepgaande functionele expertise tijdens een implementatie." : "Who are looking for in-depth functional expertise during an implementation." },
            ].map((item, i) => (
              <div key={i} className="bg-holon-white rounded-2xl p-8 border border-holon-subtle/50">
                <h3 className="font-bold text-holon-ink text-lg mb-3">{item.role}</h3>
                <p className="text-holon-mid leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle>{isNL ? 'Wat levert het op?' : 'What are the benefits?'}</SectionTitle>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {(isNL
              ? ["Betrouwbare data voor beleidsbeslissingen", "Geoptimaliseerde financiële processen", "Diepgaand inzicht in kostenstromen en resultatenrekening", "Efficiënter gebruik van uw SAP-investering"]
              : ["Reliable data for policy decisions", "Optimized financial processes", "In-depth insight into cost flows and income statements", "More efficient use of your SAP investment"]
            ).map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 bg-holon-surface rounded-xl p-5">
                <span className="w-5 h-5 rounded-full bg-holon-teal-wash flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-holon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-holon-ink font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineCTA setView={setView} label={isNL ? 'Meer weten over onze consultancy?' : 'Want to know more about our consultancy?'} />
    </div>
  );
};

export const MasterclassPage = ({ lang, setView }) => {
  const isNL = lang === 'NL';
  return (
    <div className="min-h-screen">
      <PageHeader
        overline={isNL ? 'Opleiding' : 'Training'}
        title={isNL ? 'SAP-CO Masterclass' : 'SAP-CO Masterclass'}
        intro={isNL
          ? 'In één dag van nul naar zelfzeker in SAP Controlling. Geleid door Mark De Backer, 25 jaar SAP-CO expert.'
          : 'From zero to confident in SAP Controlling in one day. Led by Mark De Backer, 25-year SAP-CO expert.'}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle>{isNL ? 'Herkent u dit?' : 'Does this sound familiar?'}</SectionTitle>
              <ul className="space-y-4 text-holon-mid text-[1.0625rem]">
                {(isNL
                  ? ["Uw team werkt in SAP maar begrijpt de Controlling-logica niet volledig", "Rapporten kloppen technisch maar geven geen managementinzicht", "U weet niet waarom uw CO-configuratie zo is opgezet", "Maandafsluiting duurt te lang door fouten in de setup"]
                  : ["Your team works in SAP but doesn't fully understand the Controlling logic", "Reports are technically correct but provide no management insight", "You don't know why your CO configuration is set up this way", "Month-end closing takes too long due to setup errors"]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-holon-teal mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-hover-lift">
              <img
                src="/masterclass-classroom.jpg"
                alt={isNL ? 'Holon masterclass sessie' : 'Holon masterclass session'}
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/mark-instructor.jpg"
                alt="Mark De Backer"
                className="w-full h-80 object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <SectionTitle>{isNL ? 'Maak kennis met Mark' : 'Meet Mark'}</SectionTitle>
              <p className="text-holon-mid leading-relaxed mb-4 text-[1.0625rem]">
                {isNL
                  ? 'Mark De Backer heeft 25 jaar ervaring in SAP Controlling bij Belgische industriebedrijven. Als voormalig financieel controller weet hij exact welke vragen controllers stellen en wat ze nodig hebben.'
                  : 'Mark De Backer has 25 years of experience in SAP Controlling at Belgian industrial companies. As a former financial controller, he knows exactly what questions controllers ask and what they need.'}
              </p>
              <p className="text-holon-mid leading-relaxed text-[1.0625rem]">
                {isNL
                  ? 'Zijn aanpak: geen droge theorie, maar de SAP-CO kennis die u morgen kunt toepassen.'
                  : 'His approach: no dry theory, but SAP-CO knowledge you can apply tomorrow.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle>{isNL ? 'Prijzen en subsidies' : 'Pricing and subsidies'}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {[
              { label: isNL ? 'Open sessie' : 'Open session', price: '€ 1.390', note: isNL ? 'excl. BTW per persoon' : 'excl. VAT per person' },
              { label: isNL ? 'Bedrijfsmasterclass' : 'In-house masterclass', price: isNL ? 'Op maat' : 'Custom pricing', note: isNL ? 'voor uw team, bij u op locatie' : 'for your team, at your location' },
            ].map((item, i) => (
              <div key={i} className="bg-holon-white rounded-2xl p-8 border border-holon-subtle/50">
                <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-holon-mid mb-4">{item.label}</p>
                <p className="font-bold text-holon-ink text-3xl mb-2" style={{ letterSpacing: '-0.02em' }}>{item.price}</p>
                <p className="text-sm text-holon-mid">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-holon-mid max-w-xl">
            {isNL
              ? 'Sectorale subsidies zijn beschikbaar voor medewerkers van PC 116 en PC 207. Vraag ons naar de mogelijkheden.'
              : 'Sectoral subsidies are available for employees of PC 116 and PC 207. Ask us about the possibilities.'}
          </p>
        </div>
      </section>

      <InlineCTA setView={setView} label={isNL ? 'Inschrijven of meer info?' : 'Register or more info?'} />
    </div>
  );
};

export const AuditPage = ({ lang, setView }) => {
  const isNL = lang === 'NL';
  return (
    <div className="min-h-screen">
      <PageHeader
        overline="Audit"
        title={isNL ? 'SAP-CO Systeemaudit' : 'SAP-CO System Audit'}
        intro={isNL
          ? 'Zet alles eens op een rijtje. Een grondige analyse van uw SAP CO-configuratie met concrete aanbevelingen.'
          : 'Put everything in order. A thorough analysis of your SAP CO configuration with concrete recommendations.'}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: isNL ? 'Conceptuele audit' : 'Conceptual audit',
                desc: isNL ? 'Doorlichting van de conceptuele onderbouw van de CO-opzet. Klopt de logica? Stemt de configuratie overeen met de bedrijfsrealiteit?' : 'Review of the conceptual structure of the CO setup. Is the logic sound? Does the configuration match business reality?'
              },
              {
                num: '02',
                title: isNL ? 'Technische audit' : 'Technical audit',
                desc: isNL ? 'Analyse van de configuratie van de CO-opzet. Zijn er technische verbeterpunten? Ontbreken er instellingen die de werking beperken?' : 'Analysis of the CO configuration. Are there technical improvement points? Are there missing settings that limit functionality?'
              },
              {
                num: '03',
                title: isNL ? 'Organisatorische audit' : 'Organizational audit',
                desc: isNL ? 'Adviezen omtrent documentatie, organisatie en versnelling van de periodieke afsluitprocedure. Efficiëntie meten en verbeteren.' : 'Advice on documentation, organization and acceleration of the periodic closing procedure. Measuring and improving efficiency.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-holon-white rounded-2xl p-8 border border-holon-subtle/50">
                <span className="text-4xl font-bold text-holon-teal/20 block mb-6" style={{ letterSpacing: '-0.02em' }}>{item.num}</span>
                <h3 className="font-bold text-holon-ink text-lg mb-3">{item.title}</h3>
                <p className="text-holon-mid leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA setView={setView} label={isNL ? 'Interesse in een SAP-CO audit?' : 'Interested in a SAP-CO audit?'} />
    </div>
  );
};

export const PnlPage = ({ lang, setView }) => {
  const isNL = lang === 'NL';
  return (
    <div className="min-h-screen">
      <PageHeader
        overline={isNL ? 'Eigen methodologie' : 'Proprietary methodology'}
        title="P&L by Destination®"
        intro={isNL
          ? 'Managementrapportering die écht iets zegt. Resultatenrekening per afdeling op basis van Activity Based Costing.'
          : 'Management reporting that actually means something. Income statement by department based on Activity Based Costing.'}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTitle>{isNL ? 'Wat is P&L by Destination®?' : 'What is P&L by Destination®?'}</SectionTitle>
            <div className="space-y-5 text-holon-mid text-[1.0625rem] leading-relaxed">
              <p>{isNL
                ? 'P&L by Destination® is een door Holon ontwikkelde methodologie waarbij de resultatenrekening niet wordt opgebouwd per kostensoort (zoals lonen, afschrijvingen, materialen), maar per bestemming: welke afdeling, product of klant heeft die kosten veroorzaakt?'
                : 'P&L by Destination® is a methodology developed by Holon where the income statement is not built by cost type (such as wages, depreciation, materials), but by destination: which department, product or customer caused those costs?'}</p>
              <p>{isNL
                ? 'Het resultaat: management dat kan sturen op de juiste variabelen. Geen zwarte doos meer, maar een transparant instrument voor strategische beslissingen.'
                : 'The result: management that can steer on the right variables. No more black box, but a transparent instrument for strategic decisions.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <blockquote className="max-w-3xl">
            <p className="text-white/85 italic leading-relaxed mb-6" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: 1.6 }}>
              {isNL
                ? '"P&L by Destination is een uniek concept in de Belgische markt. Er zijn al meerdere grote bedrijven die met onze aanpak werken. Het maakt het verschil tussen rapporteren en sturen."'
                : '"P&L by Destination is a unique concept in the Belgian market. Several large companies are already working with our approach. It makes the difference between reporting and steering."'}
            </p>
            <cite className="text-holon-teal text-sm font-semibold uppercase tracking-widest not-italic">
              Mark De Backer — {isNL ? 'Oprichter, Holon' : 'Founder, Holon'}
            </cite>
          </blockquote>
        </div>
      </section>

      <InlineCTA setView={setView} label={isNL ? 'Meer weten over P&L by Destination®?' : 'Want to know more about P&L by Destination®?'} />
    </div>
  );
};

export const AboutPage = ({ lang, setView }) => {
  const isNL = lang === 'NL';
  return (
    <div className="min-h-screen">
      <PageHeader
        overline={isNL ? 'Over ons' : 'About us'}
        title={isNL ? 'Strong Concepts. Reliable Delivery.' : 'Strong Concepts. Reliable Delivery.'}
        intro={isNL
          ? 'Maak kennis met de drijvende kracht achter Holon en de filosofie die ons onderscheidt.'
          : 'Meet the driving force behind Holon and the philosophy that sets us apart.'}
      />

      <section className="bg-holon-canvas">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
          <div className="py-20 lg:py-28 px-6 lg:pr-16 lg:pl-8 flex flex-col justify-center">
            <SectionTitle>{isNL ? 'Mark De Backer' : 'Mark De Backer'}</SectionTitle>
            <p className="text-holon-teal text-sm font-semibold uppercase tracking-widest mb-6">
              {isNL ? 'Oprichter & SAP-CO Expert' : 'Founder & SAP-CO Expert'}
            </p>
            <div className="space-y-5 text-holon-mid text-[1.0625rem] leading-relaxed mb-8">
              <p>{isNL
                ? 'Holon, gevestigd in Bellem, is een expertgericht bedrijf dat zich volledig toelegt op de complexiteit van SAP Controlling. Wij geloven niet in oppervlakkige oplossingen, maar in diepgaande analyse en robuuste concepten.'
                : 'Holon, based in Bellem, is an expert-driven company fully dedicated to the complexity of SAP Controlling. We do not believe in superficial solutions, but in in-depth analysis and robust concepts.'}</p>
              <p>{isNL
                ? 'Onze aanpak combineert 25 jaar ervaring in de industrie met een passie voor het begrijpelijk maken van complexe financiële data.'
                : 'Our approach combines 25 years of industry experience with a passion for making complex financial data understandable.'}</p>
            </div>
            <blockquote className="border-t border-holon-subtle pt-8 mt-4">
              <p className="text-holon-ink italic text-lg leading-relaxed mb-4" style={{ letterSpacing: '-0.01em' }}>
                {isNL
                  ? '"Wij slaan de brug tussen wat de business nodig heeft en wat SAP kan leveren."'
                  : '"We bridge the gap between what the business needs and what SAP can deliver."'}
              </p>
              <cite className="text-holon-teal text-[0.75rem] font-semibold uppercase tracking-widest not-italic">
                Mark De Backer
              </cite>
            </blockquote>
          </div>

          <div className="h-80 lg:h-auto relative">
            <img
              src="/mark-instructor.jpg"
              alt="Mark De Backer — Oprichter Holon"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-holon-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-holon-mid mb-6">
            {isNL ? 'Onze missie' : 'Our mission'}
          </p>
          <p
            className="text-holon-ink font-light italic max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', lineHeight: 1.55 }}
          >
            {isNL
              ? '"Het empoweren van financiële teams door SAP-CO te transformeren van een \'black box\' naar een transparant en strategisch sturingsinstrument."'
              : '"Empowering financial teams by transforming SAP-CO from a \'black box\' into a transparent and strategic steering instrument."'}
          </p>
        </div>
      </section>
    </div>
  );
};

export const Contact = ({ lang }) => {
  const isNL = lang === 'NL';
  const [formData, setFormData] = React.useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        overline={isNL ? 'Contacteer ons' : 'Contact us'}
        title={isNL ? 'Plan een gesprek met Mark.' : 'Schedule a call with Mark.'}
        intro={isNL
          ? 'Vertel ons uw situatie. Wij vertellen u of en hoe wij kunnen helpen. Altijd vrijblijvend.'
          : "Tell us your situation. We'll tell you if and how we can help. No obligation."}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-bold text-holon-ink text-2xl mb-8" style={{ letterSpacing: '-0.015em' }}>
                {isNL ? 'Stuur ons een bericht' : 'Send us a message'}
              </h2>

              {sent ? (
                <div className="bg-holon-teal-wash border border-holon-teal/20 rounded-2xl p-8 text-center">
                  <svg className="w-10 h-10 text-holon-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-holon-teal text-lg mb-2">
                    {isNL ? 'Bericht verzonden!' : 'Message sent!'}
                  </p>
                  <p className="text-holon-mid text-sm">
                    {isNL ? 'Mark neemt zo snel mogelijk contact met u op.' : 'Mark will contact you as soon as possible.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[0.8125rem] font-semibold text-holon-ink mb-2">
                        {isNL ? 'Naam *' : 'Name *'}
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        className="w-full border-2 border-holon-subtle bg-holon-white rounded-xl px-4 py-3.5 text-holon-ink placeholder-holon-mid/50 focus:outline-none focus:border-holon-teal focus:ring-[3px] focus:ring-holon-teal/20 transition-all duration-150"
                        placeholder="Jan Janssens"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[0.8125rem] font-semibold text-holon-ink mb-2">
                        E-mail *
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        className="w-full border-2 border-holon-subtle bg-holon-white rounded-xl px-4 py-3.5 text-holon-ink placeholder-holon-mid/50 focus:outline-none focus:border-holon-teal focus:ring-[3px] focus:ring-holon-teal/20 transition-all duration-150"
                        placeholder="jan@bedrijf.be"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[0.8125rem] font-semibold text-holon-ink mb-2">
                      {isNL ? 'Bedrijf' : 'Company'}
                    </label>
                    <input
                      id="company" name="company" type="text"
                      className="w-full border-2 border-holon-subtle bg-holon-white rounded-xl px-4 py-3.5 text-holon-ink placeholder-holon-mid/50 focus:outline-none focus:border-holon-teal focus:ring-[3px] focus:ring-holon-teal/20 transition-all duration-150"
                      placeholder={isNL ? "Uw bedrijfsnaam" : "Your company name"}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[0.8125rem] font-semibold text-holon-ink mb-2">
                      {isNL ? 'Bericht *' : 'Message *'}
                    </label>
                    <textarea
                      id="message" name="message" rows={5} required
                      className="w-full border-2 border-holon-subtle bg-holon-white rounded-xl px-4 py-3.5 text-holon-ink placeholder-holon-mid/50 focus:outline-none focus:border-holon-teal focus:ring-[3px] focus:ring-holon-teal/20 transition-all duration-150 resize-none"
                      placeholder={isNL ? "Beschrijf uw situatie of vraag..." : "Describe your situation or question..."}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-holon-teal text-white px-10 py-4 rounded-xl font-semibold text-[0.9375rem] hover:bg-holon-teal-deep transition-all duration-150 shadow-cta hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-holon-teal focus-visible:ring-offset-2"
                  >
                    {isNL ? 'Bericht verzenden' : 'Send message'}
                  </button>
                </form>
              )}
            </div>

            <div className="bg-holon-surface rounded-3xl p-10 lg:p-12 h-fit">
              <h2 className="font-bold text-holon-ink text-xl mb-8" style={{ letterSpacing: '-0.015em' }}>
                {isNL ? 'Onze gegevens' : 'Our details'}
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: isNL ? 'Kantoor' : 'Office',
                    value: 'Vossestaart 1, 9881 Bellem',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: isNL ? 'Telefoon' : 'Phone',
                    value: '+32 476 42 11 46',
                    href: 'tel:+32476421146',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: 'E-mail',
                    value: 'info@holon.be',
                    href: 'mailto:info@holon.be',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-holon-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-holon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-holon-mid mb-1">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-holon-ink hover:text-holon-teal transition-colors duration-150 font-medium">{item.value}</a>
                        : <p className="text-holon-ink font-medium">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ReferencesPage = ({ lang }) => {
  const isNL = lang === 'NL';
  const allClients = [
    { name: 'AGC',             src: '/clients/agc.jpg' },
    { name: 'Alpro',           src: '/clients/alpro.jpg' },
    { name: 'Colruyt',         src: '/clients/colruyt.jpg' },
    { name: 'Delhaize',        src: '/clients/delhaize.jpg' },
    { name: 'Heinz',           src: '/clients/heinz.jpg' },
    { name: 'Honda',           src: '/clients/honda.jpg' },
    { name: 'McCain',          src: '/clients/mccain.jpg' },
    { name: 'Neuhaus',         src: '/clients/neuhaus.jpg' },
    { name: 'Ontex',           src: '/clients/ontex.jpg' },
    { name: 'Ravago',          src: '/clients/ravago.png' },
    { name: 'Milcobel',        src: '/clients/milcobel.jpg' },
    { name: 'Recticel',        src: '/clients/recticel.jpg' },
    { name: 'Lotus Biscoff',   src: '/clients/lotus.png' },
    { name: 'Nitto',           src: '/clients/nitto.jpg' },
    { name: 'Impextraco',      src: '/clients/impextraco.jpg' },
    { name: 'Imperial',        src: '/clients/imperial.jpg' },
    { name: 'Agristo',         src: '/clients/agristo.png' },
    { name: 'Ajinomoto',       src: '/clients/ajinomoto.jpg' },
    { name: 'Beaulieu',        src: '/clients/beaulieu.jpg' },
    { name: 'Base',            src: '/clients/base.jpg' },
    { name: 'Cras',            src: '/clients/cras.jpg' },
    { name: 'Dossche',         src: '/clients/dossche.jpg' },
    { name: 'Ecotone',         src: '/clients/ecotone.jpg' },
    { name: 'EOC',             src: '/clients/eoc.png' },
    { name: 'Lamb Weston',     src: '/clients/lambweston.jpg' },
    { name: 'Tate & Lyle',     src: '/clients/tatelyle.jpg' },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        overline={isNL ? 'Referenties' : 'References'}
        title={isNL ? 'Vertrouwd door de Belgische industrie.' : 'Trusted by Belgian industry.'}
        intro={isNL
          ? 'Van KMO\'s tot internationale multinationals. Langdurige relaties op basis van resultaten, niet beloftes.'
          : "From SMEs to international multinationals. Long-term relationships based on results, not promises."}
      />

      <section className="py-24 bg-holon-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allClients.map((client, i) => (
              <div
                key={i}
                className="bg-holon-white border border-holon-subtle/50 rounded-2xl p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-hover-lift hover:border-holon-teal/20"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-holon-mid text-sm mt-10">
            {isNL ? 'En meer dan 30 andere bedrijven.' : 'And more than 30 other companies.'}
          </p>
        </div>
      </section>
    </div>
  );
};
