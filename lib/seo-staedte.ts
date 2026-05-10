export interface SeoStadt {
  name: string
  slug: string
  region: string
}

export const seoStaedte: SeoStadt[] = [
  { name: 'Usingen', slug: 'usingen', region: 'Hochtaunuskreis' },
  { name: 'Neu-Anspach', slug: 'neu-anspach', region: 'Hochtaunuskreis' },
  { name: 'Wehrheim', slug: 'wehrheim', region: 'Hochtaunuskreis' },
  { name: 'Schmitten', slug: 'schmitten', region: 'Hochtaunuskreis' },
  { name: 'Bad Homburg', slug: 'bad-homburg', region: 'Hochtaunuskreis' },
  { name: 'Friedrichsdorf', slug: 'friedrichsdorf', region: 'Hochtaunuskreis' },
  { name: 'Oberursel', slug: 'oberursel', region: 'Hochtaunuskreis' },
  { name: 'Königstein', slug: 'koenigstein', region: 'Hochtaunuskreis' },
  { name: 'Kronberg', slug: 'kronberg', region: 'Hochtaunuskreis' },
  { name: 'Bad Nauheim', slug: 'bad-nauheim', region: 'Wetteraukreis' },
  { name: 'Butzbach', slug: 'butzbach', region: 'Wetteraukreis' },
  { name: 'Bad Vilbel', slug: 'bad-vilbel', region: 'Wetteraukreis' },
  { name: 'Karben', slug: 'karben', region: 'Wetteraukreis' },
  { name: 'Frankfurt', slug: 'frankfurt', region: 'Frankfurt am Main' },
  { name: 'Offenbach', slug: 'offenbach', region: 'Offenbach am Main' },
  { name: 'Hanau', slug: 'hanau', region: 'Main-Kinzig-Kreis' },
  { name: 'Maintal', slug: 'maintal', region: 'Main-Kinzig-Kreis' },
  { name: 'Mörfelden-Walldorf', slug: 'moerfelden-walldorf', region: 'Kreis Groß-Gerau' },
  { name: 'Rüsselsheim', slug: 'ruesselsheim', region: 'Kreis Groß-Gerau' },
  { name: 'Darmstadt', slug: 'darmstadt', region: 'Darmstadt' },
  { name: 'Wiesbaden', slug: 'wiesbaden', region: 'Wiesbaden' },
  { name: 'Hofheim', slug: 'hofheim', region: 'Main-Taunus-Kreis' },
  { name: 'Eschborn', slug: 'eschborn', region: 'Main-Taunus-Kreis' },
  { name: 'Kelkheim', slug: 'kelkheim', region: 'Main-Taunus-Kreis' },
  { name: 'Bad Soden', slug: 'bad-soden', region: 'Main-Taunus-Kreis' },
  { name: 'Bad Camberg', slug: 'bad-camberg', region: 'Landkreis Limburg-Weilburg' },
  { name: 'Limburg', slug: 'limburg', region: 'Landkreis Limburg-Weilburg' },
  { name: 'Gießen', slug: 'giessen', region: 'Landkreis Gießen' },
  { name: 'Idstein', slug: 'idstein', region: 'Rheingau-Taunus-Kreis' },
  { name: 'Eltville', slug: 'eltville', region: 'Rheingau-Taunus-Kreis' },
  { name: 'Mainz', slug: 'mainz', region: 'Mainz' },
  { name: 'Neu-Isenburg', slug: 'neu-isenburg', region: 'Landkreis Offenbach' },
  { name: 'Dreieich', slug: 'dreieich', region: 'Landkreis Offenbach' },
  { name: 'Langen', slug: 'langen', region: 'Landkreis Offenbach' },
  { name: 'Friedberg', slug: 'friedberg', region: 'Wetteraukreis' },
]

export const nachbarStaedte: Record<string, string[]> = {
  'usingen':            ['neu-anspach', 'wehrheim', 'schmitten', 'bad-camberg'],
  'neu-anspach':        ['usingen', 'wehrheim', 'bad-homburg', 'friedrichsdorf'],
  'wehrheim':           ['usingen', 'neu-anspach', 'bad-homburg', 'oberursel'],
  'schmitten':          ['usingen', 'wehrheim', 'idstein', 'bad-camberg'],
  'bad-homburg':        ['oberursel', 'friedrichsdorf', 'bad-nauheim', 'frankfurt'],
  'friedrichsdorf':     ['bad-homburg', 'neu-anspach', 'karben', 'bad-nauheim'],
  'oberursel':          ['bad-homburg', 'eschborn', 'frankfurt', 'kronberg'],
  'koenigstein':        ['kronberg', 'bad-soden', 'kelkheim', 'oberursel'],
  'kronberg':           ['koenigstein', 'bad-soden', 'oberursel', 'eschborn'],
  'bad-nauheim':        ['bad-vilbel', 'karben', 'friedberg', 'butzbach'],
  'butzbach':           ['bad-nauheim', 'friedberg', 'giessen', 'karben'],
  'bad-vilbel':         ['frankfurt', 'karben', 'bad-nauheim', 'friedberg'],
  'karben':             ['bad-vilbel', 'bad-nauheim', 'friedberg', 'friedrichsdorf'],
  'frankfurt':          ['bad-vilbel', 'offenbach', 'eschborn', 'maintal'],
  'offenbach':          ['frankfurt', 'hanau', 'neu-isenburg', 'dreieich'],
  'hanau':              ['maintal', 'offenbach', 'frankfurt', 'bad-vilbel'],
  'maintal':            ['frankfurt', 'hanau', 'offenbach', 'bad-vilbel'],
  'moerfelden-walldorf':['langen', 'ruesselsheim', 'darmstadt', 'offenbach'],
  'ruesselsheim':       ['moerfelden-walldorf', 'frankfurt', 'darmstadt', 'wiesbaden'],
  'darmstadt':          ['moerfelden-walldorf', 'offenbach', 'frankfurt', 'ruesselsheim'],
  'wiesbaden':          ['frankfurt', 'hofheim', 'eltville', 'mainz'],
  'hofheim':            ['wiesbaden', 'eschborn', 'kelkheim', 'bad-soden'],
  'eschborn':           ['frankfurt', 'oberursel', 'kronberg', 'hofheim'],
  'kelkheim':           ['bad-soden', 'kronberg', 'hofheim', 'eschborn'],
  'bad-soden':          ['kelkheim', 'kronberg', 'eschborn', 'hofheim'],
  'bad-camberg':        ['limburg', 'idstein', 'wiesbaden', 'usingen'],
  'limburg':            ['bad-camberg', 'idstein', 'wiesbaden', 'bad-soden'],
  'giessen':            ['bad-nauheim', 'butzbach', 'friedberg', 'karben'],
  'idstein':            ['wiesbaden', 'bad-camberg', 'limburg', 'eltville'],
  'eltville':           ['wiesbaden', 'idstein', 'kronberg', 'hofheim'],
  'mainz':             ['wiesbaden', 'eltville', 'hofheim', 'bad-camberg'],
  'neu-isenburg':      ['frankfurt', 'offenbach', 'dreieich', 'langen'],
  'dreieich':          ['neu-isenburg', 'langen', 'offenbach', 'darmstadt'],
  'langen':            ['dreieich', 'neu-isenburg', 'darmstadt', 'moerfelden-walldorf'],
  'friedberg':         ['bad-nauheim', 'butzbach', 'bad-vilbel', 'karben'],
}

export function getNachbarn(slug: string): SeoStadt[] {
  const slugs = nachbarStaedte[slug] ?? []
  return slugs
    .map(s => seoStaedte.find(c => c.slug === s))
    .filter(Boolean) as SeoStadt[]
}
