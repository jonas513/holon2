---
name: Holon
description: SAP Controlling specialist voor Belgische industrie
colors:
  primary: "#00A4C4"
  primary-deep: "#007A94"
  primary-light: "#E8F5F9"
  neutral-ink: "#1C1F24"
  neutral-dark: "#0A192F"
  neutral-mid: "#6B7280"
  neutral-subtle: "#D1D5DB"
  neutral-bg-warm: "#FAFAF8"
  neutral-bg-surface: "#F4F3F0"
  white-tinted: "#FDFCFB"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
  3xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-dark}"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  button-ghost-inverted:
    backgroundColor: "transparent"
    textColor: "{colors.white-tinted}"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  input-default:
    backgroundColor: "{colors.white-tinted}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
---

# Design System: Holon

## 1. Overview

**Creative North Star: "De Vertrouwde Expert"**

Een architect-studio website in dienst van een vakman. Het design spreekt niet over expertise, het demonstreert haar. Ruimte, typografische precisie, en de portretfoto van Mark als anker van vertrouwen: dit is een site die zijn persoonlijkheid laat zien, niet zijn PowerPoint-slides.

De esthetiek is editoriaal en licht. Warme off-white achtergronden, teal als een chirurgisch accent dat zelden en doelbewust wordt ingezet. Grote koppen met strakke letter-spacing, brede regelafstand in de body, en quote-blokken die ruimte krijgen om te resoneren. De hierarchie is duidelijk; er wordt nooit gevochten om aandacht.

Dit systeem verwerpt uitdrukkelijk: corporate SAP-partner grijsblauw, SaaS startup neon-gradients en hero-metrics, en Big Four navy-goud stijlkaarten met mensen in pak. Holon is geen Deloitte. Holon is één expert die zijn werk grondig kent.

**Key Characteristics:**
- Warm licht — off-white als canvas, niet klinisch wit
- Teal als accent, niet als thema: ≤10% van elke pagina
- Mark's portret is een eersterangselement, geen bijlage
- Quote-blokken krijgen typografische ruimte en gewicht
- Spacing varieert bewust voor ritme; identieke padding is monotonie
- Eén primaire actie per pagina; geen informatiedoolhof

## 2. Colors: Het Teal-Signaal Palet

Één accent, gebruikt met precisie. Teal is het herkenbare signaal van Holon; zijn zeldzaamheid is de kracht ervan.

### Primary
- **Holon Teal** (`#00A4C4` / `oklch(65% 0.135 203)`): Het handelsmerk. Gebruikt voor primaire knoppen, actieve navigatie-items, CTA-accenten, en inline links. Nooit als grote achtergrondvlakken.
- **Teal Diep** (`#007A94` / `oklch(53% 0.11 203)`): Hover-staat van primaire knoppen. Nooit als zelfstandige kleur.
- **Teal Waas** (`#E8F5F9` / `oklch(95% 0.025 203)`): Subtiele sectieachtergrond of icon-badge-achtergrond. Maximaal één sectie per pagina.

### Neutral
- **Inkt** (`#1C1F24` / `oklch(18% 0.01 255)`): Primaire tekstkleur. Geen koud of groen zwart; licht teal-getint voor harmonie.
- **Nacht Marine** (`#0A192F` / `oklch(17% 0.04 248)`): Hero-secties, footer achtergrond, grote donkere CTA-blokken.
- **Grijslaag** (`#6B7280` / `oklch(53% 0.01 264)`): Secundaire tekst, metadata, onderschriften.
- **Subtiel** (`#D1D5DB` / `oklch(83% 0.005 255)`): Scheidingslijnen, input-borders in rust.
- **Warm Canvas** (`#FAFAF8` / `oklch(97% 0.003 85)`): Paginaachtergrond en alt-secties. Licht warm getint, geen klinisch wit.
- **Warm Oppervlak** (`#F4F3F0` / `oklch(95% 0.006 75)`): Lichtgrijs voor secties als testimonials, klanten-stroken.
- **Wit Getint** (`#FDFCFB` / `oklch(98% 0.003 75)`): Kaartachtergronden, form-inputs, formuliervelden.

**De Eén-Signaal Regel.** Teal verschijnt op ≤10% van elke pagina. Elke keer dat het gebruikt wordt, trekt het de oogbal. Zijn zeldzaamheid is zijn kracht. Gebruik het nooit decoratief.

**De Warmte Regel.** Geen pure `#ffffff` of `#000000`. Elk neutraal is licht getint naar warm of naar het Holon-teal toe. Het verschil is subtiel; het effect is organisch.

## 3. Typography

**Body Font:** Inter (system-ui, sans-serif)

Inter is de enige font-stack. Humanistisch, uiterst leesbaar, gewichtig genoeg voor grote display-tekst. Geen display-serif toegevoegd: nuchterheid is het doel, niet grand cru typografie.

**Karakter:** Zakelijk en klaar. Inter op 700 voor koppen is zelfzeker; op 400 voor body is het uitnodigend. De schaal springt duidelijk: elke stap is minstens 1.25x de vorige.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 6vw, 4.5rem)`, lh 1.05, ls -0.02em): Homepage hero en primaire pagina-titels. Maximaal één per pagina.
- **Headline** (700, `clamp(1.75rem, 3vw, 2.5rem)`, lh 1.15, ls -0.015em): Sectie-koppen, service-titels, leidende quote-koppen.
- **Title** (600, `1.25rem`, lh 1.4, ls -0.01em): Card-titels, sub-sectie-koppen, nav-items.
- **Body** (400, `1.0625rem`, lh 1.7): Lopende tekst. Max 65–75ch regellengte. Nooit smaller dan 1rem.
- **Label** (600, `0.75rem`, lh 1.4, ls 0.08em, uppercase): Navigatie-labels, categorietaggen, overline-tekst boven koppen.

**De Ruimte Regel.** Body-tekst krijgt `line-height: 1.7` en een max-breedte van 65–75ch. Tekst die breder strekt wordt moeilijk te lezen; tekst die nauwer staat voelt claustrofobisch. Exact binnen het raam.

**De Gewicht Regel.** Twee gewichten in de hiërarchie: 400 (body/label) en 600–700 (alle koppen). Nooit 300 of lighter in UI-context; Holon is geen lifestyle merk.

## 4. Elevation

Holon gebruikt **flat-by-default** met doelbewuste schaduwen op interactieve elementen. Diepte wordt primair uitgedrukt via kleurcontrast (donkere secties, witte kaarten) en spacing, niet via permanente schaduwen.

### Shadow Vocabulary
- **Hover Lift** (`0 4px 20px rgba(28, 31, 36, 0.08)`): Verschijnt bij `:hover` op klikbare kaarten en call-to-action blokken. Signaleert interactiviteit.
- **CTA Ambient** (`0 8px 40px rgba(28, 31, 36, 0.12)`): Permanente schaduw op de primaire CTA-knop en grote CTA-secties. Benadrukt het primaire actie-element.
- **Input Focus** (`0 0 0 3px rgba(0, 164, 196, 0.2)`): Focus-ring op form-inputs. Teal-getint, geen blauw.

**De Flat-By-Default Regel.** Schaduwen zijn een staat, geen decoratie. Een kaart in rust is vlak. Alleen `:hover`, `:focus`, en primaire CTA-elementen mogen schaduwen dragen. Als je een schaduw overweegt als decoratief element, gebruik in plaats daarvan een lichtgrijs achtergrondverschil.

## 5. Components

### Buttons

Stevig en direct. Geen ronde pill-knoppen; de licht afgeronde rechthoek past bij de nuchterheid van het merk.

- **Shape:** Licht afgerond (8px radius)
- **Primary:** Holon Teal achtergrond, wit tekst, padding 14×36px. Inter 600, 0.9rem, letter-spacing 0.02em.
- **Primary Hover:** Teal Diep (`#007A94`), translate-Y -1px, CTA Ambient schaduw.
- **Ghost (licht):** Transparant, `#0A192F` border (1px), inkt tekst. Op witte achtergronden.
- **Ghost (donker/inverted):** Transparant, witte border (1.5px), wit tekst. Op donkere secties.
- **Geen:** pill-knoppen (border-radius >50%), gradient-fills op knoppen, of knoppen met border-left decoratieve strepen.

### Cards / Containers

Kaarten zijn het laatste redmiddel, niet de standaard. Gebruik ze alleen wanneer er echt een container-affordance nodig is (een klikbaar gesloten object).

- **Corner Style:** Gently curved (12px radius), nooit `rounded-full` of scherpe hoeken
- **Background:** Wit getint (`#FDFCFB`) op warme canvas-achtergrond
- **Shadow Strategy:** Vlak in rust; Hover Lift bij interactie
- **Border:** `1px solid #E5E7EB` in rust; `1px solid rgba(0,164,196,0.3)` bij hover. Nooit een border-left of border-top als decoratief teal-accent.
- **Internal Padding:** 32–40px (`spacing.lg` / `spacing.xl`)

### Inputs / Fields

- **Style:** Wit getint achtergrond (`#FDFCFB`), `2px solid #D1D5DB` border, 12px radius
- **Focus:** Border wordt `2px solid #00A4C4`; Input Focus ring `0 0 0 3px rgba(0,164,196,0.2)`. Geen achtergrondkleurwijziging.
- **Error:** Border `2px solid #EF4444`; fout-tekst in `#DC2626`, 0.875rem, onder het veld
- **Disabled:** Achtergrond `#F4F3F0`, tekst `#9CA3AF`, geen interactie-cursor

### Navigation

- **Style:** Witte sticky nav, `border-bottom: 1px solid #E5E7EB`
- **Hoogte:** 80px desktop, 64px mobiel
- **Items:** Inter 500, 0.9375rem, `#374151` in rust
- **Active / Hover:** `#00A4C4` tekstkleur, geen onderstreping
- **Logo:** "HOLON" in Inter 700, `#0A192F`, + `2px × 24px` teal verticale streep rechts van de tekst (dit is het logo-mark, geen decoratieve sidebar-rand)
- **Mobiel:** Hamburger menu, volledige breedte slide-down met dezelfde items

### Quote-blok (Handtekening Component)

Het merk heeft een duidelijke stem: Mark spreekt als een collega. Quote-blokken zijn eersteklas elementen.

- **Stijl:** Geen aanhalingstekens als decoratief element; gewoon grote Inter 400 italic tekst in `#374151`, `font-size: 1.375rem`, `line-height: 1.65`, max-width 640px
- **Attribuut:** Klein label (`0.75rem`, 600, uppercase, `#6B7280`) onder de quote
- **Achtergrond:** Warm Oppervlak (`#F4F3F0`) sectieachtergrond, geen border-left-streep

### Portret-sectie (Mark als het Merk)

- **Layout:** Portret links (40% breedte), tekst rechts — of omgekeerd voor ritmewisseling
- **Foto-behandeling:** Foto neemt volle sectie-hoogte, geen ronde clip (portret is autoritair, geen avatar)
- **Context:** Naam, titel, en 1–2 zinnen bio direct onder of naast de foto
- **Achtergrond:** Donkere sectie (`#0A192F`) met witte tekst, teal-accent op naam/functie

## 6. Do's and Don'ts

### Do:
- **Gebruik Mark's portretfoto** als primair visueel element op de homepage en de masterclass-pagina. Hij is het merk.
- **Laat de teal zeldzaam zijn.** Eén teal-element per schermgebied is sterk. Drie zijn zwak.
- **Varieer de sectie-achtergronden** voor ritme: warm canvas → wit → warm oppervlak → donker → warm canvas.
- **Gebruik grote Inter 700 koppen** met negatieve letter-spacing op display-formaat. De schaal vertelt de hiërarchie.
- **Laat quote-blokken ruimte ademen.** Minimaal 80px boven en onder. Ze zijn geen decoratie; ze zijn argumenten.
- **Toon de referentielijst prominent.** 30+ top-Belgische bedrijven is het sterkste bewijs. Klantlogo's krijgen een volwaardige sectie, geen voetnoot.
- **Gebruik `border-bottom: 1px` op kaarten** voor structuur, of subtiele achtergrond-tints. Nooit een gekleurde sidebar-streep als enige accent.

### Don't:
- **Geen generieke SAP-partner look:** corporate blauw-grijs, partner-badge-prominentie, "digital transformation"-beloftes zonder inhoud. Holon onderscheidt zich door niche en diepgang, niet door partner-status.
- **Geen SaaS-startup esthetiek:** hero-metrics met grote getallen, neon-gradients, "disruption"-taal, glassmorphism-kaarten. Financiële controllers geloven dit niet.
- **Geen Big Four-imitatie:** navy + goud kleurpalet, stockfoto's van mensen in pak die lachen naar laptops, "thought leadership" PDF-downloads als primaire CTA.
- **Geen side-stripe borders** (`border-left` of `border-right` groter dan 1px als kleuraccent op kaarten, lijstitems of callouts). Gebruik achtergrond-tints, volledige borders, of leading nummers/iconen.
- **Geen gradient-tekst** (`background-clip: text` met gradient). Gebruik één solide kleur voor nadruk.
- **Geen identieke kaart-grids.** Vier dezelfde kaarten met icoon + kop + tekst is het meest generieke layout-patroon op het web. Differentieer met grootte, oriëntatie, of context.
- **Geen slider/carousel op de homepage.** De huidige site heeft zeven wisselende banners; het nieuwe ontwerp heeft één sterke boodschap.
- **Nooit `#000000` of `#ffffff` puur** als achtergrond of tekst. Elk neutraal is licht getint.
- **Geen knoppen als pill** (border-radius groter dan 12px op knoppen). Niet het karakter van dit merk.
