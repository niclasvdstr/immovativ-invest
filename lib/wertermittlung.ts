// ============================================================
// Immobilien-Wertermittlungsrechner – Berechnungslogik
// ============================================================
// Diese Datei enthält die Berechnungslogik für die unverbindliche
// Wertspanne. Sie kann später durch echte Marktdaten-APIs ersetzt werden:
//   - Sprengnetter API (https://www.sprengnetter.de)
//   - Geoox API (https://www.geoox.de)
//   - Boris-Daten der Bundesländer
//   - ImmobilienScout24 Marktdaten-API
// ============================================================

export type Immobilienart =
  | 'Wohnung'
  | 'Einfamilienhaus'
  | 'Mehrfamilienhaus'
  | 'Reihenhaus'
  | 'Doppelhaushälfte'
  | 'Grundstück'

export interface BewertungsInput {
  plz: string
  wohnort: string
  immobilienart: Immobilienart
  zimmer: number
  wohnflaeche: number
  grundstuecksflaeche: number
  name: string
  email: string
  telefon?: string
}

export interface Wertspanne {
  min: number
  max: number
  basis: number
}

// ============================================================
// TODO: Ersetzen durch echte API oder Bodenrichtwert-Datenbank
// Preise in €/m² Wohnfläche nach PLZ-Prefix (Stand: Beispieldaten 2024)
// ============================================================
const plzPriceMap: Record<string, number> = {
  // Frankfurt am Main (60xxx)
  '600': 6800, '601': 6500, '602': 6200, '603': 6400, '604': 6000,
  '605': 5800, '606': 5900, '607': 5600, '608': 6100, '609': 5900,
  // Hochtaunus / Bad Homburg / Kronberg (610–613)
  '610': 5400, '611': 5600, '612': 5000, '613': 4800,
  // Main-Taunus / Hofheim (652–654)
  '652': 4600, '653': 4400, '654': 4200,
  // Offenbach / Dreieich / Neu-Isenburg (630–636)
  '630': 4200, '631': 4000, '632': 3900, '633': 3700, '634': 3600,
  '635': 3500, '636': 3400,
  // Wiesbaden (650–651, 655–659)
  '650': 5200, '651': 5000, '655': 4000, '656': 3800, '657': 3600,
  // Hanau / Main-Kinzig (635–637)
  '637': 3300, '638': 3200,
  // Darmstadt (641–642)
  '641': 3900, '642': 3700,
  // Mainz (551–553)
  '551': 4600, '552': 4400, '553': 4200,
  // Rhein-Main allgemein (65xxx)
  '65': 4400,
  // Mannheim / Heidelberg (68–69)
  '68': 3800, '69': 4200,
  // München (80–81)
  '80': 9500, '81': 9000,
  // Hamburg (20–22)
  '20': 7200, '21': 6000, '22': 6500,
  // Berlin (10–14)
  '10': 5800, '11': 5500, '12': 5200, '13': 4800, '14': 4400,
  // Düsseldorf / Köln (40–51)
  '40': 4800, '41': 4200, '42': 3800, '50': 4000, '51': 3600,
  // Stuttgart (70–71)
  '70': 5500, '71': 4800,
}

const DEFAULT_PRICE_PER_SQM = 3500

function getBasePricePerSqm(plz: string): number {
  if (plz.length >= 3 && plzPriceMap[plz.substring(0, 3)]) {
    return plzPriceMap[plz.substring(0, 3)]
  }
  if (plz.length >= 2 && plzPriceMap[plz.substring(0, 2)]) {
    return plzPriceMap[plz.substring(0, 2)]
  }
  return DEFAULT_PRICE_PER_SQM
}

// Multiplikatoren je Immobilientyp
const TYPE_MULTIPLIER: Record<Immobilienart, number> = {
  Wohnung: 1.0,
  Einfamilienhaus: 1.28,
  Mehrfamilienhaus: 0.82,
  Reihenhaus: 1.08,
  Doppelhaushälfte: 1.18,
  Grundstück: 0.38, // separat berechnet
}

// Zimmer-Korrekturfaktor: Mehr Zimmer = leichter Aufschlag
function roomFactor(zimmer: number): number {
  const raw = 1 + (zimmer - 3) * 0.018
  return Math.max(0.91, Math.min(1.14, raw))
}

export function berechneWertspanne(input: BewertungsInput): Wertspanne {
  const pricePerSqm = getBasePricePerSqm(input.plz)
  const multiplier = TYPE_MULTIPLIER[input.immobilienart]

  let base: number

  if (input.immobilienart === 'Grundstück') {
    // Grundstücke: Bodenrichtwert × Fläche
    const bodenrichtwert = pricePerSqm * 0.32
    base = (input.grundstuecksflaeche || 500) * bodenrichtwert
  } else {
    // Wohngebäude: Wohnfläche × €/m² × Typfaktor
    const livingValue = input.wohnflaeche * pricePerSqm * multiplier

    // Grundstücksbonus für Häuser
    const hasGarden = ['Einfamilienhaus', 'Mehrfamilienhaus', 'Reihenhaus', 'Doppelhaushälfte'].includes(input.immobilienart)
    const landBonus = hasGarden && input.grundstuecksflaeche > 0
      ? input.grundstuecksflaeche * pricePerSqm * 0.11
      : 0

    base = (livingValue + landBonus) * roomFactor(input.zimmer)
  }

  // Auf 5.000 € runden für realistische Darstellung
  const rounded = Math.round(base / 5000) * 5000

  return {
    basis: rounded,
    min: Math.round((rounded * 0.91) / 5000) * 5000,
    max: Math.round((rounded * 1.09) / 5000) * 5000,
  }
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
