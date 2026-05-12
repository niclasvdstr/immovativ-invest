export type Category = 'Markt' | 'Verkaufen' | 'Bewertung' | 'Recht & Steuern' | 'Finanzierung' | 'Prozess' | 'Spezialfälle'

export interface Article {
  slug: string
  category: Category
  badge: string
  badgeColor: string
  title: string
  excerpt: string
  author: string
  authorImg: string
  authorRole: string
  date: string
  readTime: string
  img: string
  content: string
}

export const articles: Article[] = [
  {
    slug: 'immobilienmarkt-2025-rhein-main',
    category: 'Markt',
    badge: 'Aktuell',
    badgeColor: 'bg-brand-green text-white',
    title: 'Immobilienmarkt 2025: Was Eigentümer im Rhein-Main-Gebiet jetzt wissen müssen',
    excerpt: 'Nach den Zinsanstiegen der letzten Jahre stabilisiert sich der Markt. Was das für Verkäufer bedeutet und wie sich die Preise in Frankfurt, Wiesbaden und Offenbach entwickeln.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '02. Mai 2025',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop',
    content: `
## Der Markt hat sich verändert – aber nicht eingebrochen

Die letzten zwei Jahre haben den Immobilienmarkt in Deutschland stark verändert. Steigende Zinsen, unsichere Konjunktur und zurückhaltende Käufer führten zu einem spürbaren Preisrückgang – vor allem bei Objekten mit schlechter Energiebilanz oder überhöhten Angebotspreisen.

Doch 2025 zeigt ein anderes Bild: **Der Markt stabilisiert sich.** Besonders im Rhein-Main-Gebiet ist die Nachfrage nach qualitativ hochwertigen Immobilien wieder gestiegen.

## Was die Zahlen sagen

In Frankfurt liegen die Quadratmeterpreise für Eigentumswohnungen je nach Lage zwischen **5.500 und 7.500 €/m²** – ein leichter Rückgang gegenüber dem Rekordhoch 2022, aber deutlich über dem Niveau von 2019.

In Wiesbaden und Bad Homburg sind die Preise stabiler geblieben. Hier suchen vor allem Familien aus Frankfurt, die mehr Platz zum gleichen oder geringerem Preis wünschen.

Offenbach und der Main-Kinzig-Kreis verzeichnen eine steigende Nachfrage – getrieben durch die verbesserte Infrastruktur und das vergleichsweise günstigere Preisniveau.

## Was das für Verkäufer bedeutet

Wer 2025 verkaufen möchte, profitiert von einem Markt, der wieder Käufer anzieht. Entscheidend ist jedoch:

- **Realistischer Angebotspreis** – überhöhte Preise führen zu langen Standzeiten
- **Energetischer Zustand** – Käufer kalkulieren Sanierungskosten konsequent ein
- **Professionelle Präsentation** – professionelle Fotos und Exposés sind kein Luxus, sondern Standard

## Unsere Einschätzung

Der Markt belohnt gut vorbereitete Verkäufer. Wer seine Immobilie realistisch bewertet, gut präsentiert und mit einem erfahrenen Makler zusammenarbeitet, erzielt auch 2025 sehr gute Preise.

Hast du Fragen zum aktuellen Marktwert deiner Immobilie? Wir beraten dich kostenlos und unverbindlich.
    `,
  },
  {
    slug: 'home-staging-immobilien-wert-steigern',
    category: 'Verkaufen',
    badge: 'Tipp',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Home Staging: Warum die Präsentation deine Immobilie bis zu 15 % teurer macht',
    excerpt: 'Erste Eindrücke entscheiden. Wie professionelles Home Staging den Verkaufspreis steigert und welche Maßnahmen sich wirklich lohnen.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '24. April 2025',
    readTime: '4 Min.',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=600&fit=crop',
    content: `
## Der erste Eindruck entscheidet

Studien zeigen: Kaufinteressenten entscheiden in den ersten **90 Sekunden**, ob eine Immobilie für sie in Frage kommt. Was auf den ersten Blick überzeugt, wird besichtigt. Was auf den ersten Blick abschreckt, wird weggeklickt.

Home Staging bedeutet, eine Immobilie so zu präsentieren, dass sie ihr volles Potenzial entfaltet – durch gezielte Möblierung, neutrale Dekoration, optimale Beleuchtung und sorgfältige Reinigung.

## Was Home Staging konkret bringt

In Deutschland erzielen professionell gestagete Immobilien im Durchschnitt **8 bis 15 % höhere Verkaufspreise** und verkaufen sich deutlich schneller – oft innerhalb weniger Wochen statt Monate.

Die Kosten für professionelles Staging liegen je nach Größe bei **1.500 bis 5.000 €** – ein Bruchteil des potenziellen Mehrerlöses.

## Die wichtigsten Maßnahmen

**Entrümpeln und neutralisieren:** Persönliche Gegenstände, überladene Regale und alte Möbel schmälern die Wirkung. Käufer wollen sich vorstellen, selbst dort zu leben.

**Kleine Reparaturen:** Tropfende Wasserhähne, quietschende Türen, fleckige Wände – diese Kleinigkeiten signalisieren mangelnde Pflege und drücken den Preis.

**Professionelle Fotos:** Schlechte Fotos kosten mehr als gute Fotos. In einem Markt, der online entschieden wird, sind Profifotos Pflicht.

**Duft und Atmosphäre:** Frische Luft, dezenter Duft, warmes Licht – das klingt banal, macht aber einen messbaren Unterschied.

## Wann lohnt es sich besonders?

Home Staging lohnt sich besonders bei leerstehenden Immobilien, die ohne Möbel kalt und unpersönlich wirken – und bei Objekten, die länger am Markt sind und einen Impuls brauchen.

Wir beraten dich gerne, welche Maßnahmen für deine Immobilie sinnvoll sind.
    `,
  },
  {
    slug: 'immobilienbewertung-methoden-erklaert',
    category: 'Bewertung',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Wie wird meine Immobilie bewertet? Die 3 wichtigsten Methoden erklärt',
    excerpt: 'Vergleichswert, Ertragswert oder Sachwert? Wir erklären, welche Methode für welche Immobilie gilt und worauf Gutachter wirklich achten.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '15. April 2025',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    content: `
## Warum die Bewertungsmethode so wichtig ist

Die Wahl der Bewertungsmethode beeinflusst das Ergebnis erheblich. Ein falsches Verfahren kann dazu führen, dass deine Immobilie deutlich unter oder über Wert eingeschätzt wird.

Die ImmoWertV (Immobilienwertermittlungsverordnung) regelt in Deutschland drei anerkannte Verfahren.

## 1. Das Vergleichswertverfahren

**Für wen:** Eigentumswohnungen und Einfamilienhäuser in Lagen mit ausreichend Vergleichsdaten.

Das Vergleichswertverfahren orientiert sich an tatsächlich erzielten Kaufpreisen ähnlicher Immobilien. Gutachterausschüsse sammeln diese Daten und veröffentlichen sie als Bodenrichtwerte.

**Vorteil:** Sehr marktnahe Ergebnisse.
**Nachteil:** Schwierig in Lagen mit wenig Transaktionen.

## 2. Das Ertragswertverfahren

**Für wen:** Vermietete Immobilien, Mehrfamilienhäuser, Gewerbeimmobilien.

Hier steht die erzielte oder erzielbare Miete im Mittelpunkt. Der Wert ergibt sich aus dem Ertrag, den die Immobilie langfristig erwirtschaftet.

**Formel (vereinfacht):** Jahresreinertrag ÷ Liegenschaftszinssatz = Ertragswert

**Vorteil:** Sehr gut für renditeorientierte Käufer und Investoren.
**Nachteil:** Spiegelt nicht immer den Marktwert wider.

## 3. Das Sachwertverfahren

**Für wen:** Selbstgenutzte Einfamilienhäuser, wenn keine Vergleichswerte vorhanden sind.

Das Sachwertverfahren berechnet den Wert aus dem Bodenwert plus den Herstellungskosten des Gebäudes – abzüglich Altersabschreibung.

**Vorteil:** Unabhängig vom Markt.
**Nachteil:** Kann stark vom tatsächlichen Marktpreis abweichen.

## Was Gutachter und Makler darüber hinaus beachten

Neben dem Verfahren fließen viele weitere Faktoren ein: Lage (Mikro- und Makrolage), Zustand, Energieeffizienzklasse, Grundrissqualität, Ausrichtung, Lärmbelastung und aktuelle Nachfragesituation.

Eine professionelle Bewertung kombiniert immer Methode und Marktwissen. Wir führen kostenlose Bewertungen durch – persönlich, vor Ort und ohne Verpflichtung.
    `,
  },
  {
    slug: 'spekulationssteuer-immobilien-verkauf',
    category: 'Recht & Steuern',
    badge: 'Wichtig',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Spekulationssteuer beim Immobilienverkauf: Wann du zahlst – und wann nicht',
    excerpt: 'Wer innerhalb von 10 Jahren verkauft, kann steuerpflichtig werden. Wir erklären die Ausnahmen, die Selbstnutzungsregel und wie du legal sparst.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '08. April 2025',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
## Was ist die Spekulationssteuer?

Die umgangssprachlich genannte "Spekulationssteuer" ist keine eigene Steuerart, sondern Teil der Einkommensteuer. Sie greift, wenn du eine Immobilie innerhalb der **Spekulationsfrist von 10 Jahren** mit Gewinn verkaufst.

Der Gewinn wird dann als sonstiges Einkommen versteuert – zum persönlichen Einkommensteuersatz, der bei gut verdienenden Eigentümern schnell bei 42 % oder mehr liegt.

## Die 10-Jahres-Regel

Kaufst du eine Immobilie und verkaufst sie nach mehr als 10 Jahren: **kein Problem, keine Steuer.**

Kaufst du am 1. März 2015 und verkaufst am 2. März 2025: steuerfrei.
Kaufst du am 1. März 2015 und verkaufst am 28. Februar 2025: steuerpflichtig.

**Wichtig:** Es zählt das Datum des notariellen Kaufvertrags – nicht die Übergabe.

## Die Selbstnutzungsausnahme

Hier liegt die wichtigste Ausnahme: Wenn du die Immobilie **selbst bewohnt** hast, entfällt die Spekulationssteuer – unabhängig von der Haltedauer.

Konkret gilt: Selbstnutzung im **Verkaufsjahr und den beiden Vorjahren** reicht aus. Das bedeutet: Wer 2023 und 2024 selbst drin wohnt und 2025 verkauft, zahlt keine Steuer – auch bei kurzer Haltedauer.

## Was als Gewinn gilt

Gewinn = Verkaufspreis minus Anschaffungskosten minus Werbungskosten.

Zu den abzugsfähigen Kosten zählen:
- Maklergebühren beim Kauf
- Notarkosten und Grunderwerbsteuer
- Modernisierungskosten (sofern nicht schon steuerlich abgesetzt)
- Maklergebühren beim Verkauf

## Unser Rat

Steuerliche Fragen beim Immobilienverkauf sind komplex. Lass dich vor dem Verkauf von einem Steuerberater beraten – die Kosten rechnen sich fast immer.

Wir können dir erfahrene Steuerberater aus unserem Netzwerk empfehlen, die auf Immobilientransaktionen spezialisiert sind.

*Hinweis: Dieser Artikel ersetzt keine steuerrechtliche Beratung.*
    `,
  },
  {
    slug: 'zinswende-2025-kaufen-oder-warten',
    category: 'Finanzierung',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Zinswende 2025: Lohnt sich jetzt der Kauf oder besser noch warten?',
    excerpt: 'Die EZB hat die Zinsen mehrfach gesenkt. Was das für Käufer und Verkäufer im Rhein-Main-Gebiet bedeutet – und ob der richtige Zeitpunkt zum Handeln gekommen ist.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '01. April 2025',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    content: `
## Die Zinswende ist Realität

Nach dem rasanten Zinsanstieg von 2022 bis 2023 hat die Europäische Zentralbank (EZB) die Leitzinsen mehrfach gesenkt. Baugeldkonditionen für 10-jährige Zinsbindung liegen 2025 je nach Anbieter und Bonität zwischen **3,2 und 3,9 %** – ein spürbarer Rückgang gegenüber dem Hochpunkt von über 4,5 % im Jahr 2023.

## Was das für Käufer bedeutet

Die gesunkenen Zinsen verbessern die Finanzierbarkeit deutlich. Ein konkretes Beispiel:

**Darlehen 400.000 € bei 4,5 % Zinsen:** Monatliche Rate ca. 2.000 €
**Darlehen 400.000 € bei 3,5 % Zinsen:** Monatliche Rate ca. 1.667 €

Das sind **333 € weniger pro Monat** – oder knapp 4.000 € pro Jahr.

Diese verbesserte Erschwinglichkeit hat die Nachfrage im Rhein-Main-Gebiet bereits spürbar belebt. Wer im vergangenen Jahr noch gezögert hat, kommt jetzt wieder auf den Markt.

## Kaufen oder warten?

Eine pauschale Antwort gibt es nicht. Aber einige Faktoren sprechen für jetzt:

**Pro Kaufen:**
- Zinsen sind gesunken, könnten aber wieder steigen
- Preise im Rhein-Main-Gebiet stabilisieren sich
- Gute Objekte werden wieder schneller verkauft
- Mietpreise steigen weiter – Kaufen wird attraktiver

**Pro Warten:**
- Weitere Zinssenkungen möglich (aber nicht sicher)
- Konjunkturunsicherheit könnte Preise drücken
- Energetische Anforderungen steigen – ältere Objekte könnten günstiger werden

## Unsere Einschätzung

Wer eine Immobilie zur Eigennutzung sucht und langfristig plant, sollte nicht auf den "perfekten" Zeitpunkt warten. Den gibt es selten. Entscheidend ist ein fairer Preis, eine solide Finanzierung und ein Objekt, das zur eigenen Lebenssituation passt.

Sprich mit uns – wir helfen dir, die richtigen Fragen zu stellen, bevor du entscheidest.
    `,
  },
  {
    slug: 'makler-oder-privat-verkaufen',
    category: 'Verkaufen',
    badge: 'Tipp',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Makler oder privat verkaufen? Die ehrliche Kosten-Nutzen-Rechnung',
    excerpt: 'Viele Eigentümer denken, ohne Makler sparen sie Geld. Was die Statistiken wirklich zeigen und wann der Profi sich mehr als rechnet.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '22. März 2025',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    content: `
## Der verständliche Gedanke

"Wenn ich keinen Makler nehme, spare ich die Provision – und das sind oft 20.000 oder 30.000 €." Das klingt logisch. Aber stimmt es auch?

Wir zeigen, was Privatverkäufer wirklich bekommen – und was sie oft nicht bekommen.

## Was ein Privatverkauf kostet (und viele nicht einkalkulieren)

**Zeit:** Ein professioneller Verkauf dauert Wochen bis Monate. Besichtigungen, Anfragen beantworten, Bonität prüfen, Verhandlungen führen, Notartermin vorbereiten – das ist ein Teilzeitjob.

**Reichweite:** Makler haben Zugang zu Käufernetzwerken, vorgemerkten Interessenten und bezahlten Plattformplatzierungen. Ein Privatinserat auf ImmoScout konkurriert mit tausenden anderen.

**Verhandlung:** Professionelle Käufer und ihre Makler verhandeln täglich. Privatverkäufer tun das vielleicht einmal im Leben. Wer hat da den Vorteil?

**Fehler:** Falsche Angaben im Exposé, fehlende Unterlagen, rechtliche Fallstricke – Fehler im Verkaufsprozess können teuer werden.

## Was die Daten sagen

Studien des IVD (Immobilienverband Deutschland) zeigen: Professionell vermarktete Immobilien erzielen im Schnitt **5 bis 10 % höhere Verkaufspreise** als Privatverkäufe. Bei einer Immobilie im Wert von 500.000 € sind das 25.000 bis 50.000 € – deutlich mehr als eine typische Provision.

## Wann kann Privatverkauf sinnvoll sein?

Bei sehr einfachen Situationen: klare Eigentumsverhältnisse, bekannte Käuferseite (z.B. innerhalb der Familie), gute Marktkenntnisse des Verkäufers und ausreichend Zeit.

## Unser Fazit

Wir sind natürlich nicht neutral – wir sind Makler. Aber wir sagen dir ehrlich: In den meisten Fällen lohnt sich professionelle Unterstützung finanziell. Und wer sagt, dass Provision "gespart" wird, vergisst den Mehrerlös.

Lass dich unverbindlich beraten – wir zeigen dir, was realistisch für deine Immobilie drin ist.
    `,
  },
  {
    slug: 'energieausweis-pflicht-2026',
    category: 'Recht & Steuern',
    badge: 'Wichtig',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Energieausweis 2026: Was Eigentümer jetzt wissen müssen',
    excerpt: 'Neue Pflichten, strengere Anforderungen: Was sich 2026 beim Energieausweis geändert hat und welche Konsequenzen das für den Verkauf deiner Immobilie hat.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '14. April 2026',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    content: `
## Energieausweis – mehr als ein Pflichtdokument

Der Energieausweis ist seit Jahren Pflicht beim Immobilienverkauf. Doch 2026 gelten verschärfte Regelungen, die viele Eigentümer noch nicht auf dem Schirm haben.

## Was sich 2026 geändert hat

**Pflicht zur Vorlage:** Der Energieausweis muss potenziellen Käufern bereits beim ersten Besichtigungstermin unaufgefordert vorgelegt werden – nicht erst beim Notartermin.

**Energieeffizienzklassen:** Die Klassen A+ bis H sind jetzt in Inseraten verpflichtend anzugeben – auch bei Privatanzeigen. Verstöße können mit Bußgeldern bis zu 10.000 € geahndet werden.

**Gültigkeitsdauer:** Energieausweise sind 10 Jahre gültig. Ältere Ausweise müssen vor dem Verkauf erneuert werden.

## Welche Arten gibt es?

**Verbrauchsausweis:** Basiert auf dem tatsächlichen Energieverbrauch der letzten drei Jahre. Günstiger, aber weniger aussagekräftig.

**Bedarfsausweis:** Basiert auf einer technischen Analyse des Gebäudes. Teurer, aber objektiver – und für ältere Gebäude oft Pflicht.

## Was schlechte Energieklassen kosten

Immobilien mit Energieklasse F, G oder H werden von Käufern zunehmend mit Sanierungskosten gegengerechnet. Gutachter beobachten Preisabschläge von **5 bis 20 %** gegenüber vergleichbaren Objekten in besseren Klassen.

## Unser Rat

Prüfe vor dem Verkauf den Energieausweis deiner Immobilie. Oft lassen sich mit überschaubaren Maßnahmen (Dämmung, Heizungsoptimierung) die Klasse verbessern und der Verkaufspreis erhöhen.

Wir beraten dich, welche Maßnahmen sich vor dem Verkauf wirklich lohnen.
    `,
  },
  {
    slug: 'erbimmobilie-verkaufen-oder-behalten',
    category: 'Recht & Steuern',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Geerbte Immobilie: Verkaufen, vermieten oder selbst einziehen?',
    excerpt: 'Eine Erbschaft bringt oft schwierige Entscheidungen mit sich. Wir zeigen, welche Option sich wann lohnt – finanziell und emotional.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '28. März 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
    content: `
## Eine Erbschaft – drei Möglichkeiten

Wenn du eine Immobilie erbst, stehst du oft unter emotionalem Druck und zeitlicher Unsicherheit. Gleichzeitig sind die finanziellen Konsequenzen der Entscheidung erheblich.

## Option 1: Verkaufen

Verkaufen ist die häufigste Entscheidung bei Erbimmobilien – und oft die wirtschaftlich sinnvollste.

**Vorteile:**
- Sofortige Liquidität
- Keine laufenden Kosten (Instandhaltung, Nebenkosten, Verwaltung)
- Kein Verwaltungsaufwand

**Steuerlicher Hinweis:** Wird die Immobilie innerhalb von 10 Jahren nach dem ursprünglichen Kauf durch den Erblasser verkauft, kann Spekulationssteuer anfallen – es sei denn, der Erblasser oder die Erben haben sie selbst genutzt.

## Option 2: Vermieten

Vermietung lohnt sich, wenn die Lage gut ist und eine stabile Mietrendite erzielt werden kann.

**Vorteile:**
- Laufende Einnahmen
- Wertsteigerung langfristig möglich
- Steuerliche Absetzbarkeit von Kosten

**Nachteile:**
- Verwaltungsaufwand
- Mietrechtliche Risiken
- Instandhaltungskosten

## Option 3: Selbst einziehen

Wer selbst einzieht, spart Miete und nutzt die Immobilie direkt. Steuerlich kann das vorteilhaft sein (Selbstnutzungsregel bei der Spekulationssteuer).

**Aber:** Nur wenn Lage, Größe und Zustand zur eigenen Lebenssituation passen.

## Erbengemeinschaft – der häufigste Konfliktfall

Wenn mehrere Erben beteiligt sind, sind Einigkeit und klare Kommunikation entscheidend. Jeder Miterbe kann die Auseinandersetzung der Gemeinschaft verlangen – notfalls auch durch eine Teilungsversteigerung, die selten im Interesse aller ist.

## Unser Rat

Lass dich vor einer Entscheidung beraten – steuerrechtlich und immobilienwirtschaftlich. Wir können erste Orientierung geben und dich an die richtigen Experten vermitteln.
    `,
  },
  {
    slug: 'immobilienpreise-rhein-main-2026',
    category: 'Markt',
    badge: 'Aktuell',
    badgeColor: 'bg-brand-green text-white',
    title: 'Immobilienpreise im Rhein-Main-Gebiet: Wohin geht die Entwicklung 2026?',
    excerpt: 'Frankfurt, Wiesbaden, Offenbach, Bad Homburg: Wir analysieren die Preisentwicklung in den wichtigsten Märkten der Region – mit konkreten Zahlen.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '10. März 2026',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    content: `
## Der Markt 2026 im Überblick

Das Rhein-Main-Gebiet gehört zu den stabilsten Immobilienmärkten Deutschlands. Trotz der Verwerfungen der letzten Jahre zeigt die Region 2026 eine klare Tendenz: **moderates Wachstum bei gestiegener Nachfrage.**

## Frankfurt am Main

In Frankfurt liegen die Kaufpreise für Eigentumswohnungen 2026 je nach Lage zwischen **5.800 und 8.200 €/m²**. Besonders gefragt sind Sachsenhausen, Westend und Bornheim.

Das Angebot bleibt knapp – viele Verkäufer warten auf bessere Preise, was die Nachfrage unter qualitativ guten Angeboten konzentriert.

## Bad Homburg & Hochtaunus

Der Hochtaunus bleibt ein Premiummarkt. Einfamilienhäuser in Bad Homburg, Kronberg und Königstein werden 2026 zwischen **700.000 und 1,8 Mio. €** gehandelt.

Besonders gefragt: Objekte mit gutem Energiestandard und großem Garten.

## Wiesbaden

Wiesbaden profitiert von seiner Nähe zu Frankfurt und dem rheinland-pfälzischen Käufermarkt. Preise für Wohnungen liegen bei **4.200 bis 6.500 €/m²** – mit deutlichem Aufschlag in der Innenstadt.

## Offenbach & Dreieich

Diese Lagen bieten 2026 das beste Preis-Leistungs-Verhältnis für Käufer. Für Verkäufer bedeutet das: Nachfrage ist da, aber Käufer kalkulieren genauer.

## Unser Fazit

Der Markt belohnt gut vorbereitete Verkäufer. Realistischer Preis, professionelle Präsentation und schnelle Reaktion auf Anfragen sind 2026 entscheidender denn je.

Sprich uns an – wir kennen die aktuellen Preise in deiner Lage aus erster Hand.
    `,
  },
  {
    slug: 'wohnung-verkaufen-checkliste',
    category: 'Verkaufen',
    badge: 'Tipp',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Wohnung verkaufen 2026: Die komplette Checkliste für Eigentümer',
    excerpt: 'Von der Vorbereitung bis zum Notartermin – was du in welcher Reihenfolge erledigen musst, damit der Verkauf reibungslos läuft.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '18. Februar 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop',
    content: `
## Vorbereitung ist alles

Ein Wohnungsverkauf ist kein Spontankauf – er braucht Vorbereitung. Wer strukturiert vorgeht, spart Zeit, Nerven und bares Geld.

## Phase 1: Unterlagen zusammenstellen

Folgende Dokumente brauchst du vor dem Verkauf:

- **Grundbuchauszug** (nicht älter als 3 Monate)
- **Teilungserklärung und Gemeinschaftsordnung**
- **Energieausweis** (gültig, Bedarfs- oder Verbrauchsausweis)
- **Protokolle der letzten 3 Eigentümerversammlungen**
- **Aktuelle Hausgeldabrechnung und Wirtschaftsplan**
- **Grundriss** (möglichst maßstabsgetreu)
- **Nachweise über Renovierungen und Modernisierungen**

## Phase 2: Bewertung und Preisfindung

Hol eine professionelle Bewertung ein – nicht nur eine Online-Schätzung. Der richtige Angebotspreis ist der wichtigste Faktor für einen erfolgreichen Verkauf.

Zu hoch: lange Standzeit, sinkende Attraktivität.
Zu niedrig: verschenktes Geld.

## Phase 3: Vermarktung

- Professionelle Fotos beauftragen
- Exposé erstellen lassen
- Auf den richtigen Portalen inserieren
- Besichtigungen koordinieren und durchführen
- Interessenten auf Seriosität und Finanzierbarkeit prüfen

## Phase 4: Kaufvertrag und Notartermin

- Kaufvertragsentwurf vom Notar anfordern
- Prüfung durch Rechtsanwalt empfohlen
- Notartermin koordinieren
- Übergabe vorbereiten (Protokoll, Zähler, Schlüssel)

## Phase 5: Nach dem Verkauf

- Steuerliche Behandlung prüfen (Spekulationssteuer?)
- Ummeldungen und Versicherungsänderungen
- Erlös sichern oder reinvestieren

## Unser Angebot

Wir begleiten dich durch alle Phasen – von der Bewertung bis zum Notartermin. Kostenlos und unverbindlich.
    `,
  },
  {
    slug: 'nebenkosten-immobilienkauf-2026',
    category: 'Finanzierung',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Kaufnebenkosten 2026: Diese versteckten Kosten müssen Käufer einkalkulieren',
    excerpt: 'Grunderwerbsteuer, Notar, Makler – beim Immobilienkauf kommen schnell 10–15 % Nebenkosten obendrauf. Wir erklären jeden Posten.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '05. Januar 2026',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    content: `
## Warum Nebenkosten oft unterschätzt werden

Viele Käufer planen das Eigenkapital nur für den Kaufpreis ein – und werden von den Nebenkosten überrascht. Bei einer Immobilie für 500.000 € können das schnell **50.000 bis 75.000 €** zusätzlich sein.

## 1. Grunderwerbsteuer

Die größte Nebenkosten-Position. Sie variiert je nach Bundesland:

- **Hessen:** 6,0 %
- **Bayern:** 3,5 %
- **NRW:** 6,5 %
- **Berlin:** 6,0 %

Bei einem Kaufpreis von 500.000 € in Hessen: **30.000 €** Grunderwerbsteuer.

## 2. Notar- und Grundbuchkosten

Notar und Grundbuchamt sind gesetzlich geregelt und richten sich nach dem Kaufpreis. Rechne mit ca. **1,5 bis 2 %** des Kaufpreises.

Bei 500.000 €: ca. **7.500 bis 10.000 €**.

## 3. Maklerprovision

Seit der Maklerprovisionsreform 2020 gilt: Bei Wohnimmobilien wird die Provision geteilt. In der Regel zahlen Käufer **1,5 bis 3,57 %** (inkl. MwSt.).

Bei 500.000 € und 3,57 %: ca. **17.850 €**.

## 4. Weitere Kosten

- Gutachter (optional, aber empfehlenswert): 500 – 2.000 €
- Finanzierungsberatung: oft kostenlos über Vermittler
- Umzugskosten: je nach Aufwand 1.000 – 5.000 €
- Erste Renovierungen: individuell

## Die Gesamtrechnung

| Posten | Bei 500.000 € |
|--------|----------------|
| Grunderwerbsteuer (Hessen) | 30.000 € |
| Notar & Grundbuch | 8.500 € |
| Maklerprovision | 17.850 € |
| **Gesamt Nebenkosten** | **~56.000 €** |

## Unser Rat

Plane mindestens **10–12 % des Kaufpreises** als Nebenkosten ein – zusätzlich zum Eigenkapital für den Kaufpreis selbst. Wer das von Anfang an berücksichtigt, ist auf der sicheren Seite.
    `,
  },
  {
    slug: 'was-kostet-der-verkauf-mit-immovativinvest',
    category: 'Verkaufen',
    badge: 'Ratgeber',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Was kostet der Immobilienverkauf mit immovativInvest? Alle Kosten ehrlich erklärt',
    excerpt: 'Keine Vorabkosten, keine versteckten Gebühren. Wir erklären transparent, was du beim Verkauf mit uns zahlst – und was wir für dich übernehmen.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '10 Min.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
## Was du beim Verkauf mit uns zahlst – und was du nicht zahlst

Wir sind eine Maklerfirma. Wir haben also ein offensichtliches Interesse daran, dir unsere Dienstleistung zu empfehlen. Genau deshalb möchten wir an dieser Stelle vollständig transparent sein: Wir zeigen dir alle Kosten, die beim Verkauf entstehen – damit du selbst beurteilen kannst, ob ein Makler für dich sinnvoll ist oder nicht.

**Die kurze Antwort:** Du zahlst bei uns ausschließlich eine Provision im Erfolgsfall. Keine Vorabkosten, keine versteckten Posten, keine Überraschungen.

## Was du als Verkäufer zahlst

In Hessen gilt seit 2020 das sogenannte **Halbteilungsprinzip**: Käufer und Verkäufer teilen sich die Maklerprovision. Die ortsübliche Gesamtprovision in der Rhein-Main-Region liegt bei ca. 5,95 % inkl. MwSt. – aufgeteilt je zur Hälfte.

Als Verkäufer zahlst du also typischerweise **ca. 2,975 % des Kaufpreises** – ausschließlich im Erfolgsfall, nach Notartermin.

Neben der Provision kann noch ein weiterer Posten anfallen: die **Löschung bestehender Grundpfandrechte** (z. B. alte Grundschuld aus der ursprünglichen Finanzierung). Diese Notargebühr beträgt in der Regel nur einige hundert Euro – wir koordinieren die gesamte Abwicklung für dich.

**Beispielrechnung bei einem Verkaufspreis von 500.000 €:**

- Maklerprovision (Ihr Anteil, ca. 2,975 %): **ca. 14.875 €**
- Energie­ausweis und Unterlagen: **0 € – übernehmen wir**
- Löschung alte Grundschuld: **ca. 300–500 €**
- Ihr Netto-Erlös: **ca. 484.625 €** – also rund **96,9 % des Kaufpreises**

Diese Rechnung berücksichtigt keine individuelle Restschuld, etwaige Vorfälligkeitsentschädigungen oder Spekulationssteuer. Dazu kommen wir weiter unten.

## Was du nicht zahlst

Das überrascht viele Verkäufer: Als Käufer trägt der Erwerber die Grunderwerbsteuer (in Hessen 6 %), die Notarkosten für den Kaufvertrag sowie die Grundbuchgebühren für die Eigentumsumschreibung. Das sind in der Regel weitere 7–9 % des Kaufpreises – aber eben auf Käuferseite.

Als Verkäufer zahlst du bei uns außerdem **nicht**:

- Energieausweis (wir beschaffen ihn)
- Grundbuchauszug, Flurkarte, Baupläne (wir kümmern uns darum)
- Professionelle Fotos und Exposé-Erstellung
- Portalinserierung auf ImmoScout24, Immowelt und Co.
- Besichtigungskoordination und Käuferqualifikation

All das ist in unserem Service enthalten – unabhängig davon, ob der Verkauf erfolgreich abgeschlossen wird oder nicht. Wir tragen das Risiko.

## Wann du keinen Makler brauchst

Wir sagen dir ehrlich, wann unsere Dienstleistung keinen Mehrwert bringt:

- **Kaufinteressent bereits bekannt:** Wenn du innerhalb der Familie oder im Freundeskreis verkaufst, reicht oft ein direkter Notartermin.
- **Eigene Markterfahrung vorhanden:** Wer mehrfach verkauft hat und den Markt kennt, kann eine Standardimmobilie in gefragter Lage auch selbst vermarkten.
- **Sehr standardisiertes Objekt in sehr gefragter Lage:** Eine 2-Zimmer-Wohnung in Top-Frankfurter-Lage findet auch ohne Makler Interessenten.

In diesen Fällen lohnt es sich, über einen Privatverkauf nachzudenken – und dabei die tatsächlichen Kosten im Blick zu behalten.

## Was ein Privatverkauf wirklich kostet

Wer ohne Makler verkauft, spart die Provision – investiert aber Zeit und Geld anderswo. Hier sind die typischen Direktkosten:

- **Energieausweis:** 100–500 €
- **Professionelle Fotos:** 300–1.500 €
- **Grundriss-Aufbereitung:** 300–1.000 €
- **Portalinserierung:** 100–1.000 €
- **Dokumentenbeschaffung:** 50–300 €
- **Wohnflächenberechnung:** 200–800 €

Das ergibt direkte Kosten von **1.000 bis 4.000 €** – plus ein erheblicher Zeitaufwand für Anfragenbearbeitung, Besichtigungen, Käuferprüfung, Verhandlung und Notarkoordination.

**Was die Daten zeigen:** Professionell vermarktete Immobilien erzielen laut Studien des IVD im Schnitt 5–10 % höhere Verkaufspreise. Bei einer Immobilie im Wert von 500.000 € entspricht das 25.000–50.000 € Mehrerlös – weit mehr als eine Provision.

## Nur 6 Wochen Vertragslaufzeit – kein Risiko

Ein häufiger Kritikpunkt an Maklern: Vertragslaufzeiten von 6 bis 12 Monaten, die dich auch dann binden, wenn der Makler nicht liefert.

**Wir machen das anders.** Unser Alleinauftrag läuft standardmäßig **6 Wochen**. Danach endet er automatisch – keine Kündigung nötig. Wir überzeugen durch Leistung, nicht durch Vertragsdauer.

**„Wenn wir in 6 Wochen keinen Käufer finden, solltest du den Auftrag auch nicht verlängern müssen. Unser Modell funktioniert nur, wenn wir wirklich liefern."** – Niclas van der Straeten, Geschäftsführer immovativInvest

## Was du bei uns bekommst

### 1. Bewertung und Preisstrategie

Wir analysieren deine Immobilie auf Basis aktueller Transaktionsdaten aus Frankfurt und der Rhein-Main-Region. Das Ergebnis: ein realistischer Angebotspreis, der weder Käufer abschreckt noch Geld auf dem Tisch lässt. Wir zeigen dir mehrere Preisszenarien und erklären, was in welchem Zeitrahmen realistisch erzielbar ist.

### 2. Professionelle Aufbereitung

Wir beauftragen professionelle Fotografen, erstellen ein hochwertiges Exposé und überprüfen alle Unterlagen auf Vollständigkeit. Dabei schauen wir auch auf die **Wohnflächenberechnung**: Ältere Berechnungen weichen von aktuellen DIN-Normen oft ab – häufig zulasten der Verkäufer. Wir korrigieren das vor dem Verkaufsstart.

### 3. Reichweite und echte Nachfrage

Deine Immobilie erscheint auf allen relevanten Portalen, in unserem Käufernetzwerk und über gezielte Social-Media-Kampagnen. Vorgemerkte Käufer aus unserer Datenbank erhalten direkten Hinweis – das verkürzt die Vermarktungszeit erheblich.

### 4. Käuferqualifikation und Verhandlung

Wir prüfen die Bonität jedes Interessenten, bevor wir einen Besichtigungstermin vereinbaren. Du empfängst nur ernsthafte, finanzierungsfähige Käufer. In der Verhandlung optimieren wir nicht nur den Preis, sondern auch Übergabezeitpunkt, mitverkauftes Inventar und Vertragsdetails.

### 5. Sichere Abwicklung bis zur Übergabe

Wir koordinieren den Notar, prüfen den Kaufvertragsentwurf und begleiten dich bis zur Schlüsselübergabe – inklusive Übergabeprotokoll, Zählerstandserfassung und Nachweisen für deine Steuerberatung.

**„Viele Verkäufer denken, mit dem Notartermin ist es erledigt. Aber das Übergabeprotokoll ist genauso wichtig – es schützt dich vor Nachforderungen, die Wochen später kommen."** – Mazlum Selcuk, Immobilienmakler immovativInvest

## Versteckte Kosten, die viele Verkäufer übersehen

Der Kaufpreis ist die eine Zahl. Was am Ende auf deinem Konto landet, kann deutlich abweichen. Diese Kostenpositionen werden oft erst spät erkannt:

**Vorfälligkeitsentschädigung:** Wenn du ein laufendes Darlehen vor Ende der Zinsbindung ablöst, verlangt die Bank eine Entschädigungszahlung. Diese kann im vier- bis fünfstelligen Bereich liegen. Wir klären frühzeitig mit deiner Bank, ob und wie hoch diese ausfällt – und prüfen Alternativen (z. B. Darlehensportierung).

**Spekulationssteuer:** Wer innerhalb von 10 Jahren verkauft und die Immobilie nicht selbst bewohnt hat, zahlt auf den Gewinn Einkommensteuer (bis zu 45 %). Wir überprüfen deine Situation und geben eine erste Einschätzung – empfehlen aber immer einen Steuerberater für die verbindliche Berechnung.

**WEG-Sonderumlagen:** Bei Eigentumswohnungen können Beschlüsse der Eigentümerversammlung (z. B. Dachsanierung, neue Heizungsanlage) zu Nachzahlungen führen – auch für Verkäufer, wenn der Beschluss vor dem Verkauf gefasst wurde. Wir lesen alle Protokolle und machen dieses Risiko transparent.

**Flächenabweichungen:** Ältere Wohnflächenberechnungen können von aktuellen Messungen abweichen. Käuferbanken prüfen das. Abweichungen nach unten können zur Preisreduktion oder zum Finanzierungsausfall führen. Wir messen nach und korrigieren, bevor das zum Problem wird.

**Erbbaurecht:** Verkaufst du eine Immobilie auf Erbbaurechtsgrundstück, schränkt das den Käufermarkt stark ein. Wir erklären die Auswirkungen und richten die Vermarktung an den richtigen Käufersegmenten aus.

**Erschließungskosten:** Rückwirkende Bescheide der Gemeinde für Straßen- oder Kanalausbau können nach dem Verkauf zu unerwarteten Forderungen führen – wenn der Vertrag das nicht regelt. Wir fragen vor Verkaufsstart bei der Gemeinde an.

## Unsere ehrliche Netto-Kalkulation für dich

Bevor wir beginnen, rechnen wir gemeinsam durch, was nach dem Verkauf tatsächlich übrig bleibt. Kaufpreis minus Restschuld, minus Vorfälligkeitsentschädigung (falls zutreffend), minus Provision, minus Spekulationssteuer (falls zutreffend) – das ergibt deinen realen Netto-Erlös.

Diese Transparenz kostet uns manchmal Aufträge. Weil manche Verkäufer erst dann merken, dass der Zeitpunkt noch nicht optimal ist. Aber wir glauben: Wer gut beraten wird, kommt wieder – oder empfiehlt uns weiter.

Möchtest du wissen, was deine Immobilie heute wert ist und was nach dem Verkauf wirklich bei dir ankommt? Wir ermitteln den Wert kostenlos und unverbindlich – persönlich vor Ort im Rhein-Main-Gebiet.
    `,
  },
  {
    slug: 'maklervertrag-erklaert',
    category: 'Verkaufen',
    badge: 'Ratgeber',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Maklervertrag einfach erklärt: Inhalt, Arten, Laufzeit und Kündigung',
    excerpt: 'Was steht in einem Maklervertrag, welche Arten gibt es – und wie kündigt man ihn? Alles, was Eigentümer vor der Unterschrift wissen sollten.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '9 Min.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    content: `
## Was ist ein Maklervertrag – und was steht drin?

Ein Maklervertrag regelt die Zusammenarbeit zwischen Eigentümer und Makler beim Verkauf einer Immobilie. Er legt fest, was der Makler tut, was er dafür bekommt und wie lange die Vereinbarung gilt.

Die wichtigsten Inhalte:

- Art der Beauftragung (einfacher Auftrag, Alleinauftrag oder qualifizierter Alleinauftrag)
- Provision: Höhe, Fälligkeit und wer zahlt
- Maklerleistungen: Was konkret übernommen wird
- Laufzeit und Kündigungsbedingungen
- Pflichten des Auftraggebers

**Die gesetzliche Grundlage** liefert das BGB: § 652 BGB regelt, dass die Provision ausschließlich im Erfolgsfall fällig wird – also erst dann, wenn der Kaufvertrag notariell beurkundet ist. Kein Verkauf, keine Zahlung. Dieses Erfolgsprinzip ist für Verkäufer eine wichtige Absicherung.

Seit 2020 gilt außerdem: Bei Einfamilienhäusern und Eigentumswohnungen muss die Maklerprovision zwischen Käufer und Verkäufer zu gleichen Teilen aufgeteilt werden (§ 656c BGB). In Hessen bedeutet das in der Praxis: ca. 2,975 % für jede Seite.

## Die drei Vertragsarten – und was sie bedeuten

### Einfacher Maklerauftrag

Der Eigentümer kann gleichzeitig mehrere Makler beauftragen und darf selbst einen Käufer suchen. Findet er selbst einen Käufer, entfällt die Provision.

**Der Haken:** Wenn der Makler weiß, dass drei Kollegen dasselbe Objekt vermarkten, investiert er in der Regel weniger Zeit und Geld. Keine exklusive Beziehung, kein exklusives Engagement.

### Einfacher Alleinauftrag

Der Eigentümer beauftragt nur einen Makler. Er darf aber selbst weiterhin einen Käufer finden – ohne Provision. Der Makler hat also ein Exklusivrecht, aber kein vollständiges.

Dieser Vertragstyp bietet dem Makler mehr Planungssicherheit, ohne den Eigentümer vollständig einzuschränken.

### Qualifizierter Alleinauftrag

Der Eigentümer verpflichtet sich, alle Kaufinteressenten – auch jene, die sich direkt an ihn wenden – an den Makler zu verweisen. Kein Eigenverkauf, kein zweiter Makler.

**Vorteil für den Eigentümer:** Der Makler investiert deutlich mehr: professionelle Fotos, hochwertige Exposés, breite Portalschaltung, aktive Käuferansprache. Er hat die Sicherheit, dass sich sein Aufwand lohnt.

**„Ein qualifizierter Alleinauftrag ist keine Einschränkung für den Verkäufer – er ist die Voraussetzung dafür, dass wir wirklich alles geben. Wer uns das Vertrauen schenkt, bekommt von uns den vollen Einsatz."** – Mazlum Selcuk, Immobilienmakler immovativInvest

## Wie lange läuft ein Maklervertrag?

Das ist einer der wichtigsten Punkte – und einer, bei dem sich Makler erheblich unterscheiden.

Ein einfacher Maklerauftrag ist jederzeit kündbar. Bei Alleinaufträgen sind Laufzeiten von 3 bis 12 Monaten üblich. Viele Makler setzen auf lange Laufzeiten, um sich abzusichern – unabhängig davon, ob sie liefern oder nicht.

**Bei immovativInvest gilt:** Unser Alleinauftrag läuft standardmäßig **6 Wochen**. Danach endet er automatisch – keine Verlängerungsklausel, keine Kündigung nötig. Wenn wir in 6 Wochen keinen Käufer finden, bist du frei.

Warum 6 Wochen? Weil das ausreicht, wenn man es richtig macht – und weil wir nicht glauben, dass ein Makler, der in sechs Wochen keinen Erfolg hat, in sechs Monaten besser wird.

**„Lange Vertragslaufzeiten schützen den Makler, nicht den Eigentümer. Wir arbeiten lieber mit kurzen Fristen und überzeugen durch Ergebnisse."** – Niclas van der Straeten, Geschäftsführer immovativInvest

## Maklervertrag kündigen – so geht es

### 1. Widerrufsrecht bei Fernabsatzverträgen

Wurde der Vertrag online, telefonisch oder per E-Mail abgeschlossen, hast du als Verbraucher **14 Tage Widerrufsrecht** – ohne Angabe von Gründen. Eine formlose E-Mail mit Datum des Vertragsschlusses und dem Wunsch, den Vertrag zu widerrufen, genügt.

**Achtung:** Hat der Makler in dieser Zeit bereits Leistungen erbracht (z. B. Fotos, Exposé) und hast du dem ausdrücklich zugestimmt, kann er für diese Leistungen anteilig abrechnen.

### 2. Kündigung je nach Vertragstyp

**Einfacher Maklerauftrag:** Jederzeit ohne Frist kündbar.

**Einfacher Alleinauftrag:** In der Regel nur zum Ende der vereinbarten Laufzeit. Vorzeitige Kündigung ist möglich, wenn der Makler seine Pflichten verletzt (z. B. keine Aktivität, keine Kommunikation).

**Qualifizierter Alleinauftrag:** Kündigung meist nur zum Laufzeitende oder aus wichtigem Grund. Prüfe den Vertrag auf Schadensersatz- oder Provisionsklauseln für den Fall eines Eigenverkaufs.

### Musterschreiben Kündigung

Wenn du einen Maklervertrag kündigen möchtest, reicht dieses einfache Schreiben per E-Mail oder Einschreiben:

**Betreff:** Kündigung Maklervertrag

*Sehr geehrte Damen und Herren, hiermit kündige ich den am [Datum] geschlossenen Maklervertrag über die Vermarktung meiner Immobilie [Adresse] zum nächstmöglichen Zeitpunkt. Bitte bestätigen Sie die Kündigung schriftlich.*

Versende das Schreiben immer nachweisbar – per E-Mail mit Lesebestätigung oder per Einschreiben.

## Was der Makler laut Vertrag leisten muss

Ein seriöser Maklervertrag beschreibt die Leistungen konkret. Bei immovativInvest umfasst das:

- Fundierte Markt- und Preisanalyse mit aktuellen Transaktionsdaten
- Professionelle Fotos und Exposé-Erstellung (freigegeben vom Eigentümer)
- Schaltung auf allen relevanten Portalen (ImmoScout24, Immowelt, eigene Kanäle)
- Direktansprache vorgemerkter Käufer aus unserem Netzwerk
- Bonitätsprüfung vor jeder Besichtigung
- Verhandlungsführung mit qualifizierten Interessenten
- Koordination von Notar, Bank und allen Beteiligten bis zur Übergabe

Was nicht drinsteht, kannst du nicht einfordern. Prüfe bei jedem Makler, ob die Leistungen konkret beschrieben sind – oder ob es bei unverbindlichen Formulierungen bleibt.

## Schriftform – was ist Pflicht?

Seit 2020 gilt für Maklerverträge über Einfamilienhäuser und Eigentumswohnungen: mindestens **Textform** ist Pflicht (§ 656a BGB). Das bedeutet: Ein mündlicher Vertrag ist in diesen Fällen nicht mehr ausreichend. Eine E-Mail, ein PDF oder sogar eine WhatsApp-Nachricht reichen aus.

Empfehlenswert ist trotzdem ein schriftlicher Vertrag mit Unterschriften – besonders bei Alleinaufträgen, um Laufzeit und Konditionen eindeutig festzuhalten.

## Was passiert nach Ende des Maklervertrags?

Wenn der Vertrag abgelaufen ist und der Eigentümer danach an jemanden verkauft, den der Makler nachweislich benannt hat, kann der Makler Schadensersatzansprüche geltend machen. Wie lange diese Nachweispflicht gilt, regelt der Vertrag – üblicherweise 6 bis 12 Monate.

Verkaufst du an einen Interessenten, den du selbst gefunden hast und den der Makler nie kontaktiert hat, schuldest du nach Vertragsende keine Provision.

Prüfe deinen Vertrag auf diese Klauseln, bevor du nach Laufzeitende eigenständig aktiv wirst.

## Neues 2026: Was Maklerverträge heute enthalten sollten

Die rechtlichen Anforderungen an Maklerverträge sind in den letzten Jahren gestiegen. Was 2026 in einem guten Vertrag stehen sollte:

- Konkrete Leistungsbeschreibung (nicht: "Wir kümmern uns" – sondern: welche Kanäle, welcher Zeitrahmen, welche Berichte)
- Klare Provisionsregelung mit Hinweis auf Halbteilungsprinzip (§ 656c BGB)
- Dokumentationspflichten: Wer beschafft Energieausweis, Grundbuchauszug, Wohnflächenberechnung?
- Regelung für den Fall, dass ein Käufer nach Vertragsende gefunden wird
- Transparenz bei etwaigen Aufwandsentschädigungen (bei uns: keine)

Fehlen diese Punkte, ist das ein Warnsignal. Frag nach – oder wähle einen anderen Makler.

Möchtest du wissen, wie ein Verkauf mit immovativInvest konkret abläuft und was deine Immobilie heute wert ist? Wir beraten dich kostenlos und unverbindlich – persönlich im Rhein-Main-Gebiet.
    `,
  },
  {
    slug: 'haus-schnell-verkaufen',
    category: 'Verkaufen',
    badge: 'Tipp',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Haus schnell verkaufen: 10 Tipps für einen zügigen Abschluss zum guten Preis',
    excerpt: 'Schnell verkaufen und trotzdem den richtigen Preis erzielen – das ist kein Widerspruch. Mit der richtigen Strategie ist beides möglich.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    content: `
## Schnell und gut – das ist kein Widerspruch

Viele Eigentümer glauben, sie müssen sich zwischen Tempo und Preis entscheiden. Entweder schnell verkaufen – oder gut verkaufen. Beides zusammen soll nicht funktionieren.

Das stimmt nicht. Wer die richtigen Hebel kennt, kann sein Haus innerhalb weniger Wochen zum Marktpreis verkaufen. Bei immovativInvest liegt unsere durchschnittliche Vermarktungszeit bei **6–8 Wochen** – von der ersten Anfrage bis zur notariellen Beurkundung.

Hier sind die 10 entscheidenden Faktoren.

## 1. Den richtigen Angebotspreis setzen

Das ist der wichtigste Hebel – und gleichzeitig der häufigste Fehler. Ein überhöhter Preis schreckt Käufer ab, bevor sie sich auch nur mit dem Objekt beschäftigt haben. Das Ergebnis: Die Immobilie steht wochenlang online, der Markt verliert das Interesse – und am Ende wird sie für weniger verkauft, als von Anfang an möglich gewesen wäre.

**„Die meisten langen Standzeiten, die wir analysieren, haben eine gemeinsame Ursache: ein Angebotspreis, der nicht auf Marktdaten, sondern auf Wunschdenken basiert."** – Niclas van der Straeten, Geschäftsführer immovativInvest

Ein realistischer Einstiegspreis auf Basis aktueller Transaktionsdaten aus der Rhein-Main-Region ist die Grundlage für alles weitere.

## 2. Professionelle Bewertung vor dem Start

Eine fundierte Wertermittlung ist kein Luxus – sie ist die Voraussetzung für einen erfolgreichen Verkauf. Online-Rechner geben einen ersten Eindruck, können aber Zustand, Grundrissqualität, Lärmbelastung und Mikrolage nicht abbilden.

Wir kommen zu dir, schauen uns die Immobilie an und geben dir eine realistische Einschätzung des Marktwertes – kostenlos, persönlich, ohne Verpflichtung.

## 3. Professionelle Fotos – kein Kompromiss

In einem Markt, der online entschieden wird, sind Fotos das wichtigste Verkaufsargument. Schlechte Fotos kosten mehr als gute Fotos – nämlich Interessenten, Besichtigungen und am Ende Preis.

Professionell fotografierte Immobilien erzielen messbar mehr Anfragen und verkaufen sich schneller. Wir beauftragen für jedes Objekt professionelle Fotografen – das ist bei uns kein Extra, sondern Standard.

2026 sind zudem 360°-Rundgänge und bei geeigneten Objekten Drohnenaufnahmen zum Standard geworden. Käufer wollen vorab echte Eindrücke – wer das bietet, filtert Besichtigungen auf wirklich Interessierte.

## 4. Unterlagen frühzeitig zusammenstellen

Fehlende Unterlagen bremsen jeden Verkauf. Käufer brauchen sie zur Entscheidung, Banken zur Finanzierungszusage, der Notar zur Beurkundung. Wer erst nach einem Kaufinteressenten mit der Dokumentenbeschaffung beginnt, verliert Wochen.

Was du frühzeitig brauchst:

- Grundbuchauszug (nicht älter als 3 Monate)
- Energieausweis (Pflicht vor der Inserierung)
- Grundriss mit Wohnflächenberechnung
- Baupläne und Baugenehmigung
- Bei ETW: Teilungserklärung, WEG-Protokolle, Hausgeldabrechnungen

Wir beschaffen alle fehlenden Unterlagen für dich – das ist Teil unseres Services und kostet dich nichts.

## 5. Home Staging: Dezent, aber wirkungsvoll

Käufer entscheiden emotional. Eine Immobilie, die einladend wirkt und Raum zum Vorstellen lässt, überzeugt schneller als ein vollgeräumtes oder leerstehendes Objekt.

Das bedeutet nicht: teure Möblierung kaufen. Es bedeutet: entrümpeln, neutralisieren, kleine Mängel beheben, frische Luft, gutes Licht. Die Wirkung ist messbar – gestagete Immobilien erzielen höhere Preise und verkaufen sich schneller.

## 6. Kleine Mängel beheben – große Investitionen meiden

Tropfende Wasserhähne, quietschende Türen, abgeplatzte Farbe – das sind keine Kleinigkeiten für Käufer. Sie signalisieren: hier wurde nicht gepflegt. Und Käufer rechnen Sanierungskosten immer ein – meist mehr, als sie tatsächlich kosten würden.

Was sich dagegen nicht lohnt: Großinvestitionen in neue Küchen oder Bäder kurz vor dem Verkauf. Käufer haben eigene Vorstellungen und wählen ohnehin selten dieselbe Ausstattung. Den Mehrerlös rechtfertigt das fast nie.

## 7. Flexible Besichtigungszeiten

Wer nur werktags zwischen 10 und 16 Uhr besichtigen lässt, verliert Berufstätige – und das ist der größte Teil der Käufergruppe. Abendtermine und Wochenenden sind kein Zugeständnis, sondern selbstverständlich.

Wir koordinieren alle Besichtigungen und filtern vorab: Nur Interessenten mit ernsthaftem Kaufinteresse und nachgewiesener Finanzierbarkeit kommen zu dir.

## 8. Zielgruppenorientierte Vermarktung

Nicht jede Immobilie spricht dieselben Käufer an. Ein Einfamilienhaus in Kronberg interessiert andere Menschen als eine Kapitalanlage in Frankfurt-Bornheim. Die Vermarktung muss die richtige Zielgruppe erreichen – auf den richtigen Kanälen, mit den richtigen Argumenten.

Bei immovativInvest kombinieren wir Portalschaltungen (ImmoScout24, Immowelt), gezielte Social-Media-Kampagnen und die direkte Ansprache vorgemerkter Käufer aus unserem Netzwerk. Das verkürzt die Vermarktungszeit erheblich.

## 9. Käuferqualität vor Käuferanzahl

Viele Besichtigungen sind kein Erfolgsindikator – sie sind ein Zeichen, dass der Preis stimmt, aber die Qualifizierung fehlt. Was zählt: ernsthafte Interessenten mit gesicherter Finanzierung.

Wir prüfen die Bonität jedes Interessenten, bevor ein Termin stattfindet. Das spart deine Zeit und verhindert, dass ein Notartermin platzt, weil die Finanzierung nicht steht.

## 10. Energiestandard transparent kommunizieren

2026 ist der energetische Zustand einer Immobilie für Käufer und ihre Banken wichtiger denn je. CO₂-Kosten, EU-Sanierungsvorgaben und steigende Energiepreise sind Themen, die jeder Käufer kennt.

Wer seinen Energieausweis aktiv kommuniziert – und dokumentierte Sanierungsmaßnahmen (neue Heizung, Dämmung, Fenster) transparent darstellt – baut Vertrauen auf und verhindert, dass dieser Punkt in der Verhandlung gegen ihn verwendet wird.

Möchtest du wissen, was deine Immobilie heute wert ist und wie schnell ein realistischer Verkauf möglich wäre? Wir analysieren deine Situation kostenlos und unverbindlich – persönlich vor Ort im Rhein-Main-Gebiet.
    `,
  },
  {
    slug: 'masterplan-immobilien-verkauf-2026',
    category: 'Verkaufen',
    badge: 'Guide',
    badgeColor: 'bg-brand-green text-white',
    title: 'Der Masterplan für deinen Immobilienverkauf 2026: 12 Schritte zum Erfolg',
    excerpt: 'Vom ersten Gedanken bis zur Schlüsselübergabe – was in welcher Reihenfolge zu tun ist und welche Fehler dich Zehntausende Euro kosten können.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '11 Min.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop',
    content: `
## Erfolg beim Immobilienverkauf ist kein Zufall

Kleine Fehler beim Immobilienverkauf können fünf- bis sechsstellige Beträge kosten. Der falsche Angebotspreis, ein zu früh unterschriebener Maklervertrag, ein Käufer ohne Finanzierungsbestätigung – diese Fehler passieren täglich. Und sie sind vermeidbar.

**„Beim Immobilienverkauf entscheidet sich der Erfolg nicht beim Inserat, sondern lange davor – bei Preis, Unterlagen und Strategie."** – Niclas van der Straeten, Geschäftsführer immovativInvest

Hier ist der vollständige Masterplan – 12 Schritte, in der richtigen Reihenfolge.

## Schritt 1: Unterlagen vollständig zusammenstellen

Bevor Fotos gemacht werden, bevor ein Preis festgelegt wird, bevor irgendjemand die Immobilie sieht – brauchst du vollständige Unterlagen. Warum? Weil fehlende Dokumente jeden Prozess verzögern und Käufer verunsichern.

Was du vor dem Start brauchst:

- Grundriss mit verifizierter Wohnflächenberechnung (DIN 277)
- Grundbuchauszug und Flurkarte (nicht älter als 3 Monate)
- Energieausweis (gesetzlich Pflicht vor Inserierung)
- Bauakte / Baupläne
- Bei ETW: Teilungserklärung, WEG-Protokolle der letzten 3 Jahre, Hausgeldabrechnungen, Wirtschaftsplan
- Nachweise über Modernisierungsmaßnahmen

Wer mit vollständigen Unterlagen in den Verkauf geht, wirkt souverän – und beschleunigt alle folgenden Schritte erheblich. Wir beschaffen alle fehlenden Unterlagen für unsere Kunden – kostenlos.

## Schritt 2: Marktgerechten Preis ermitteln

Das ist der größte Hebel – und gleichzeitig der häufigste Fehler. Zu hoch: Käufer kommen nicht. Zu niedrig: Geld bleibt auf dem Tisch.

Der richtige Angebotspreis basiert auf:

- Aktuellen Vergleichstransaktionen in der Mikrolage
- Zustand, Grundrissqualität, Energiestandard
- Aktuelle Nachfragesituation für diese Immobilientyp
- Realistischer Einschätzung der Sanierungskosten aus Käuferperspektive

Online-Tools geben einen ersten Eindruck. Eine professionelle, persönliche Einwertung ist präziser und damit wertvoller. Wir führen diese kostenlos und unverbindlich durch.

## Schritt 3: Energieausweis klären

Der Energieausweis ist seit 2014 Pflicht beim Verkauf – aber 2026 ist er mehr als ein Pflichtdokument. Käufer und ihre Banken prüfen ihn genau. Schlechte Energieklassen (F, G, H) führen zu Preisabschlägen und können die Finanzierung des Käufers erschweren.

Wer Modernisierungsmaßnahmen dokumentiert hat (neue Heizung, Dämmung, Fenster), sollte diese aktiv kommunizieren – das stärkt die Verhandlungsposition.

## Schritt 4: Professionelle Präsentation erstellen

Fotos entscheiden vor dem Text. Käufer sehen täglich hunderte Immobilien online – was nicht sofort überzeugt, wird weggeklickt.

Professionelle Fotos, ein strukturiertes Exposé und ein ehrlicher, vollständiger Beschreibungstext sind Pflicht. Aufwendiges Home Staging ist selten nötig – aber Entrümpeln, Neutralisieren und kleine Reparaturen machen einen messbaren Unterschied.

2026 sind 360°-Rundgänge für viele Käufer ein Entscheidungskriterium. Sie reduzieren unnötige Besichtigungen und konzentrieren das Interesse auf ernsthafte Interessenten.

## Schritt 5: Besichtigungen richtig strukturieren

Nicht jeder, der besichtigen will, ist ein ernsthafter Käufer. Wer jeden Interessenten direkt zur Besichtigung einlädt, verschwendet Zeit – und öffnet die Immobilie für Menschen, die nie kaufen werden.

Unsere Vorgehensweise: Vorabgespräch per Telefon, Klärung des Kaufinteresses und der Finanzierungssituation, dann Terminvereinbarung. Bei sehr hoher Nachfrage kann auch eine schriftliche Finanzierungsbestätigung als Voraussetzung verlangt werden.

Flexible Zeiten – abends und am Wochenende – sind kein Zugeständnis, sondern Standard.

## Schritt 6: Verhandlung aus einer starken Position heraus

Wer realistisch bewertet hat und echte Nachfrage erzeugt, verhandelt aus einer Position der Stärke. Wer überteuert inseriert und monatelang wartet, gerät unter Druck.

Die Stärke in der Verhandlung kommt nicht aus harter Rhetorik, sondern aus Vorbereitung: fundierter Preiseinschätzung, transparenter Dokumentation und echten Angeboten im Hintergrund.

Preisnachlässe ohne klare Begründung untergraben die eigene Verhandlungsposition. Wer nachgibt, sollte einen Gegenwert einfordern – kürzeren Übergabetermin, weniger Inventar, schnelleren Abschluss.

## Schritt 7: Bonität des Käufers rechtzeitig prüfen

Das ist einer der teuersten Fehler beim Privatverkauf: Der Notartermin ist vereinbart, der Kaufvertrag liegt vor – und dann stellt sich heraus, dass die Bank des Käufers die Finanzierung nicht freigibt.

Ein geplatzter Notartermin kostet Wochen. Ein Alternativkäufer muss gefunden werden. Der Markt bemerkt die Verzögerung.

**„Wir prüfen die Finanzierbarkeit jedes Interessenten, bevor wir einen Notartermin vereinbaren. Das schützt unsere Kunden vor der häufigsten und teuersten Überraschung im Verkaufsprozess."** – Mazlum Selcuk, Immobilienmakler immovativInvest

Eine Finanzierungsbestätigung der Bank oder ein detailliertes Gespräch über den Finanzierungsstand ist Pflicht, bevor der Notar beauftragt wird.

## Schritt 8: Notartermin vorbereiten und begleiten

Der Kaufvertragsentwurf kommt vom Notar – in der Regel beauftragt durch den Käufer. Als Verkäufer hast du das Recht, den Entwurf zu prüfen. Achte auf:

- Korrekte Angaben zur Immobilie (Größe, Zustand, Inventar)
- Zahlungsfristen und Bedingungen
- Regelungen zu bekannten Mängeln
- Übergabetermin und -modalitäten

Wir begleiten den gesamten Notarprozess und koordinieren alle Beteiligten.

## Schritt 9: Steuerliche Situation klären

Vor dem Verkauf – nicht danach. Die wichtigsten Fragen:

**Spekulationssteuer:** Wer innerhalb von 10 Jahren nach dem Kauf verkauft und die Immobilie nicht selbst bewohnt hat, zahlt auf den Gewinn Einkommensteuer. Bei selbst genutzten Immobilien entfällt die Steuer, wenn du im Verkaufsjahr und den beiden Vorjahren darin gewohnt hast.

**Gewerblicher Grundstückshandel:** Wer innerhalb von 5 Jahren mehr als 3 Immobilien verkauft, kann als gewerblicher Händler eingestuft werden – mit erheblichen steuerlichen Konsequenzen.

Kläre das vorab mit einem Steuerberater. Wir können erfahrene Steuerberater aus unserem Netzwerk empfehlen.

## Schritt 10: Richtigen Zeitpunkt wählen

Der perfekte Zeitpunkt existiert nicht. Aber es gibt Tendenzen: Frühjahr und Frühsommer sind erfahrungsgemäß die aktivsten Phasen – mehr Interessenten, kürzere Vermarktungszeiten. Die Zeit kurz vor Jahresende ist für manche Käufergruppen ebenfalls interessant.

Was stärker zählt als die Jahreszeit: ob die Immobilie leersteht (attraktiver für Käufer) oder noch bewohnt ist, ob der Markt gerade Käufer- oder Verkäufermarkt ist, und ob der Preis stimmt.

## Schritt 11: Wenn die Immobilie zu lange online ist

Jede Immobilie hat die höchste Aufmerksamkeit in den ersten zwei bis vier Wochen nach Erscheinen. Danach nimmt das Interesse ab – der Markt fragt sich, warum niemand gekauft hat.

Nach drei Monaten ohne ernsthaftes Angebot braucht es eine ehrliche Analyse:

- Stimmt der Preis?
- Stimmt die Qualität der Präsentation?
- Werden die richtigen Käufer erreicht?
- Gibt es strukturelle Probleme mit der Immobilie?

Ein sauberer Neustart mit überarbeiteter Strategie ist oft wirkungsvoller als weiteres Warten.

## Schritt 12: Übergabe sorgfältig vorbereiten

Mit dem Notartermin ist es nicht erledigt. Zwischen Beurkundung und Kaufpreiszahlung vergehen typischerweise 4–8 Wochen. Danach folgt die Übergabe.

Was das Übergabeprotokoll enthalten muss:

- Datum und Uhrzeit der Übergabe
- Alle Schlüssel (Haus, Briefkasten, Keller, Garage)
- Alle Zählerstände (Strom, Gas, Wasser, Fernwärme)
- Zustand aller Räume – bekannte Mängel dokumentiert
- Mitverkauftes Inventar

Ein vollständiges Protokoll schützt dich vor Nachforderungen, die Wochen oder Monate später kommen. Wir begleiten die Übergabe und erstellen das Protokoll für unsere Kunden.

Möchtest du deine Immobilie strukturiert und mit einer klaren Strategie verkaufen? Wir gehen den Masterplan gemeinsam mit dir durch – kostenlos, persönlich, ohne Verpflichtung.
    `,
  },
  {
    slug: 'wie-lange-dauert-immobilienverkauf',
    category: 'Prozess',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Wie lange dauert ein Immobilienverkauf wirklich? Der realistische Zeitplan',
    excerpt: 'Von der Entscheidung bis zur Schlüsselübergabe – was wie lange dauert, was Verzögerungen verursacht und wann das Geld wirklich auf dem Konto ist.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
    content: `
## Eine Frage, keine pauschale Antwort

"Wie lange dauert das?" ist die häufigste Frage, die uns Eigentümer beim ersten Gespräch stellen. Die ehrliche Antwort: Es kommt darauf an. Wer dir eine genaue Zahl nennt, ohne deine Immobilie gesehen zu haben, lügt dich an.

Was wir sagen können: Bei immovativInvest liegt unsere durchschnittliche Vermarktungszeit bei **6–8 Wochen**. Bis das Geld auf deinem Konto ist, kommen noch einmal 4–8 Wochen dazu. Realistisch musst du für den gesamten Prozess **3–5 Monate** einplanen.

Was die Dauer beeinflusst und wie du sie aktiv verkürzen kannst – das erklären wir hier.

## Typische Zeitrahmen nach Immobilientyp

Die Art der Immobilie beeinflusst die Vermarktungsdauer erheblich:

- **Eigentumswohnungen:** 4–12 Wochen – breite Käufergruppe, einfachere Finanzierung
- **Einfamilienhäuser und Doppelhaushälften:** 8–16 Wochen – engere Zielgruppe (hauptsächlich Familien), aufwendigere Bankprüfung
- **Mehrfamilienhäuser:** 12–20 Wochen – institutionelle Käufer, komplexe Due Diligence
- **Hochpreisige Objekte über 1 Mio. €:** 16–26+ Wochen – exklusiver Käuferkreis, aufwendige Finanzierung

**Wichtig:** Diese Zeitrahmen gelten bei realistischer Preissetzung. Ein überhöhter Angebotspreis kann jeden dieser Werte verdoppeln oder verdreifachen.

## Phase 1: Vorbereitung (2–4 Wochen)

Bevor ein Inserat erscheint, braucht es vollständige Unterlagen, professionelle Fotos, ein hochwertiges Exposé und einen realistischen Preis. Wer diese Phase überspringt, zahlt später.

Häufige Zeitfresser in dieser Phase: fehlende Dokumente (Energieausweis, Grundbuchauszug, Grundriss), veraltete Wohnflächenberechnungen, schlechte oder fehlende Fotos. Wir kümmern uns darum – damit Phase 1 nicht zur Bremse wird.

## Phase 2: Vermarktung und Besichtigungen (3–8 Wochen)

Mit dem Inserat beginnt die Uhr zu laufen. In den ersten zwei Wochen ist die Aufmerksamkeit am höchsten – dann nimmt das Interesse ab. Wer in dieser Zeit einen qualifizierten Käufer findet, hat gewonnen.

Entscheidend für die Geschwindigkeit:

- Richtiger Angebotspreis (überhöhte Preise verlängern diese Phase um Monate)
- Qualität der Präsentation (schlechte Fotos = weniger Anfragen = weniger Besichtigungen)
- Vorgemerktes Käufernetzwerk (wir sprechen bereits beim Inserieren aktiv potenzielle Käufer an)
- Sorgfältige Vorfilterung der Interessenten

**„Der häufigste Grund für lange Vermarktungszeiten ist nicht der Markt – es ist der Preis. Ein realistisch bewertetes Objekt in guter Lage findet seinen Käufer."** – Mazlum Selcuk, Immobilienmakler immovativInvest

## Phase 3: Verhandlung und Kaufvertrag (1–2 Wochen)

Wenn ein ernsthafter Käufer identifiziert ist, folgt die Verhandlung – dann die Beauftragung des Notars. Der Notarvertragsentwurf braucht typischerweise 1–2 Wochen. Beide Seiten prüfen den Entwurf, Änderungswünsche werden eingearbeitet.

## Phase 4: Notartermin bis Kaufpreiszahlung (4–8 Wochen)

Hier überrascht es viele Verkäufer: Der Notartermin bedeutet nicht, dass das Geld fließt. Was danach passiert:

- Eintragung der **Auflassungsvormerkung** im Grundbuch (Schutz des Käufers – dauert 1–3 Wochen)
- Genehmigung der Gemeinde (Vorkaufsrecht – falls zutreffend)
- **Grunderwerbsteuerbescheid** durch das Finanzamt (2–6 Wochen)
- **Löschungsbewilligung** der Verkäuferbank (falls bestehende Grundschuld vorhanden)
- Erst dann: Freigabe der Bank und **Kaufpreiszahlung**

Realistisch solltest du mit 4–8 Wochen zwischen Notartermin und Geldeingang rechnen. In Ausnahmefällen kann es länger dauern.

## Was Verkäufe verzögert – und wie man es verhindert

**Falscher Preis:** Der häufigste und teuerste Fehler. Wir sehen regelmäßig Objekte, die 6–12 Monate auf dem Markt sind, weil der Einstiegspreis nicht zur Marktlage gepasst hat.

**Fehlende Unterlagen:** Wer erst nach Kaufinteresse anfängt, den Grundbuchauszug zu beantragen, verliert unnötig Zeit. Unterlagen gehören in Phase 1.

**Finanzierung des Käufers:** Ein Käufer ohne gesicherte Finanzierungszusage kann den Prozess um Wochen zurückwerfen – oder ihn zum Scheitern bringen. Wir klären die Finanzierungssituation vor jedem Notartermin.

**Offene Grundpfandrechte:** Wenn die Verkäuferbank nicht schnell genug die Löschungsbewilligung erteilt, verzögert sich die Zahlung. Frühzeitige Kommunikation mit der Bank hilft.

## Was tun, wenn die Immobilie zu lange online ist?

Nach drei Monaten ohne ernsthaftes Angebot braucht es eine ehrliche Analyse. Wir haben bereits mehrfach Immobilien übernommen, die bei anderen Maklern jahrelang ohne Erfolg vermarktet wurden – und sie innerhalb von 6 Wochen verkauft.

Was in solchen Fällen meist hilft: ein sauberer Neustart mit überarbeitetem Preis, neuer Präsentation und gezielter Ansprache der richtigen Käufergruppe. Manchmal ist auch ein temporäres Zurückziehen vom Markt sinnvoll, um die "Altlast" einer langen Onlinezeit zu überwinden.

Möchtest du eine realistische Einschätzung, wie lange der Verkauf deiner Immobilie dauern würde – und was du tun kannst, um ihn zu beschleunigen? Wir analysieren deine Situation kostenlos und unverbindlich.
    `,
  },
  {
    slug: 'wie-viele-besichtigungen-bis-verkauf',
    category: 'Prozess',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Wie viele Besichtigungen braucht man, um eine Immobilie zu verkaufen?',
    excerpt: 'Manchmal reicht eine einzige Besichtigung – manchmal sind es zwanzig ohne Ergebnis. Was die Zahl wirklich aussagt und wie man qualifizierte Interessenten von Schaulustigen trennt.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    content: `
## Die Zahl sagt wenig – die Qualität alles

Viele Eigentümer messen den Erfolg ihrer Vermarktung an der Anzahl der Besichtigungen. Zehn Besichtigungen ohne Angebot fühlen sich wie Erfolg an. Drei Besichtigungen mit einem notariellen Abschluss sind in Wirklichkeit das bessere Ergebnis.

Die Anzahl der Besichtigungen ist kein Qualitätsindikator. Was zählt: Kommen die richtigen Interessenten?

## Woran liegt die Anzahl der Besichtigungen?

Die Zahl hängt von drei Faktoren ab: der Immobilie selbst, der Vermarktungsqualität und dem Marktumfeld.

**Zur Immobilie:** Lage, Zustand, Grundrissqualität, Energiestandard und Größe bestimmen, wie viele Menschen sich überhaupt für das Objekt interessieren. Eine 3-Zimmer-Wohnung in Frankfurt-Sachsenhausen zieht deutlich mehr potenzielle Käufer an als ein sanierungsbedürftiges Einfamilienhaus in der Peripherie.

**Zur Vermarktung:** Schlechte Fotos erzeugen wenige Anfragen. Gute Fotos und ein ehrliches, vollständiges Exposé ziehen ernsthafte Interessenten an – und halten Schaulustige fern.

**Zum Markt:** In einem Verkäufermarkt (mehr Nachfrage als Angebot) reichen oft 3–5 Besichtigungen für ein ernsthaftes Angebot. In einem ausgeglichenen Markt sind es 8–15. In einem Käufermarkt mit wenig Nachfrage können es 20–30 sein – ohne Garantie.

## Typische Zahlen nach Marktlage

- **Nachfragestarker Markt (Frankfurt Innenstadt, Hochtaunus):** 3–8 Besichtigungen bis zum Kaufangebot
- **Ausgeglichener Markt (Rhein-Main-Speckgürtel):** 8–15 Besichtigungen
- **Weniger gefragte Lagen:** 15–25+ Besichtigungen

Diese Zahlen gelten bei realistischer Preissetzung. Ein zu hoher Preis erhöht die Besichtigungszahl – aber nicht die Abschlusswahrscheinlichkeit.

## Wann ist die Besichtigungszahl ein Warnsignal?

Nach 10–15 Besichtigungen ohne ernsthaftes Angebot solltest du die Strategie überdenken. Die häufigsten Ursachen:

- **Preis zu hoch:** Interessenten kommen, überzeugen sich vor Ort – und kaufen dann woanders günstiger.
- **Präsentation optimierbar:** Fotos, Grundriss oder Beschreibung wecken Interesse, aber die Realität enttäuscht.
- **Falsche Zielgruppe:** Die Vermarktung erreicht Käufer, die nicht zur Immobilie passen.
- **Strukturelle Mängel:** Zustand oder Grundriss schrecken Kaufinteressenten ab.

**„Zehn Besichtigungen ohne Angebot sind kein Pech – das ist ein Signal. Wir analysieren nach jeder Vermarktungsphase, was die Rückmeldungen der Interessenten wirklich bedeuten."** – Niclas van der Straeten, Geschäftsführer immovativInvest

Nach spätestens 3 Monaten ohne Kaufangebot braucht es eine ehrliche Analyse und – wenn nötig – eine angepasste Strategie.

## Wie wir Besichtigungen organisieren

**Schritt 1 – Vorfilterung:** Bevor ein Termin vereinbart wird, sprechen wir mit jedem Interessenten. Wir klären Kaufmotiv, Finanzierungsstand und Zeitplanung. Wer keine Antworten geben kann oder will, kommt nicht zur Besichtigung.

**Schritt 2 – Terminstruktur:** Wir bieten flexible Zeiten an – Abendtermine und Wochenenden selbstverständlich. Gleichzeitig begrenzen wir die Anzahl der Besichtigungen pro Tag auf 4–6, damit jede Führung die nötige Sorgfalt bekommt.

**Schritt 3 – Während der Besichtigung:** Wir führen die Besichtigung professionell durch, beantworten Fragen kompetent und lenken den Blick auf die Stärken des Objekts.

**Schritt 4 – Nach der Besichtigung:** Wir holen Feedback ein – nicht nur ob jemand Interesse hat, sondern warum nicht. Diese Rückmeldungen sind wertvoll für die Anpassung der Strategie.

## Virtuelle Besichtigungen als Vorfilter

2026 sind 360°-Rundgänge bei vielen Käufern ein Entscheidungskriterium geworden. Wer virtuell bereits durch die Immobilie gegangen ist, kommt zur physischen Besichtigung mit einer klareren Vorstellung – und meist mit ernsthafterem Interesse.

Das reduziert die Gesamtzahl der Besichtigungen und erhöht die Qualität der verbleibenden. Wir setzen 360°-Rundgänge standardmäßig ein.

## Was eine Besichtigung dauern sollte

- **1–2-Zimmer-Wohnung:** 15–20 Minuten reichen für eine vollständige Besichtigung
- **3–5-Zimmer-Wohnung oder Doppelhaushälfte:** 30–45 Minuten
- **Einfamilienhaus mit Garten:** 45–60 Minuten

Deutlich kürzere Besichtigungen sind ein Zeichen, dass der Käufer kein ernsthaftes Interesse hat. Deutlich längere können bedeuten, dass er sehr interessiert ist – oder sehr kritisch.

Möchtest du wissen, wie viele Interessenten für deine Immobilie realistisch zu erwarten sind und wie wir die richtigen herausfiltern? Sprich uns an – wir geben dir eine ehrliche Einschätzung.
    `,
  },
  {
    slug: 'welche-dokumente-immobilienverkauf',
    category: 'Prozess',
    badge: 'Checkliste',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Welche Dokumente brauche ich beim Immobilienverkauf? Die vollständige Checkliste',
    excerpt: 'Fehlende Unterlagen verzögern jeden Verkauf – und können ihn sogar scheitern lassen. Hier ist die vollständige Liste für Haus, Wohnung und Mehrfamilienhaus.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    content: `
## Warum Unterlagen über den Erfolg des Verkaufs entscheiden

Fehlende oder fehlerhafte Unterlagen sind einer der häufigsten Gründe, warum Immobilienverkäufe scheitern oder sich um Monate verzögern. Käufer brauchen sie für ihre Entscheidung. Ihre Banken brauchen sie für die Finanzierungszusage. Der Notar braucht sie für die Beurkundung.

Wer erst nach dem ersten Kaufinteressenten mit der Dokumentenbeschaffung beginnt, verliert wertvolle Wochen – oder den Käufer.

**„Mit einer einfachen Vollmacht kümmern wir uns um alle nötigen Unterlagen für unsere Kunden. Das ist Teil unseres Services – und kostet dich nichts."** – Mazlum Selcuk, Immobilienmakler immovativInvest

Hier ist die vollständige Checkliste – aufgeteilt nach Immobilientyp.

## Für alle Immobilien: die Pflichtdokumente

Diese Unterlagen brauchst du unabhängig davon, ob du ein Haus, eine Wohnung oder ein Mehrfamilienhaus verkaufst:

- **Grundbuchauszug** – nicht älter als 3 Monate; zeigt Eigentümer, Lasten und Rechte Dritter
- **Flurkarte / Lageplan** – amtliches Dokument zu Grundstücksgrenzen und Lage
- **Energieausweis** – gesetzlich Pflicht vor Inserierung; Gültigkeit 10 Jahre
- **Grundriss mit Wohnflächenberechnung** – idealerweise nach DIN 277; ältere Berechnungen können von aktuellen Standards abweichen
- **Nachweis über Modernisierungen** – Heizungstausch, Dämmung, Fenstertausch etc.
- **Gebäudeversicherungspolice** – der Käufer tritt automatisch in den Vertrag ein
- **Kopie des Personalausweises** – für den Notar
- **Mietvertrag** – falls die Immobilie vermietet ist

## Zusätzlich beim Hausverkauf

- **Baupläne und Baugenehmigung** – besonders bei Umbauten oder Anbauten wichtig
- **Baubeschreibung** – technische Spezifikationen des Gebäudes
- **Altlastenauskunft** – gibt es bekannte Bodenverunreinigungen auf dem Grundstück?
- **Nachweis Abwasser- und Wasseranschlüsse** – bei älteren Gebäuden relevant
- **Bebauungsplan** – was darf auf dem Grundstück gebaut werden?

## Zusätzlich beim Eigentumswohnungsverkauf

- **Teilungserklärung und Gemeinschaftsordnung** – das rechtliche Grunddokument der WEG
- **Aufteilungsplan** – zeigt, welche Flächen dem Sondereigentum und welche dem Gemeinschaftseigentum zuzurechnen sind
- **Protokolle der letzten 3 Eigentümerversammlungen** – zeigen geplante Maßnahmen und Beschlüsse
- **Aktuelle Hausgeldabrechnung** – letzte Jahresabrechnung
- **Wirtschaftsplan des laufenden Jahres** – monatliches Hausgeld und Rücklagenstand
- **Höhe der Instandhaltungsrücklage** – wie gut ist die WEG finanziell aufgestellt?

Fehlende WEG-Protokolle sind besonders riskant: Sie können geplante Sanierungen (Dach, Heizung, Fassade) verbergen, die nach dem Verkauf auf den neuen Eigentümer zukommen.

## Wo bekommt man die Dokumente?

| Dokument | Stelle | Kosten |
|---|---|---|
| Grundbuchauszug | Grundbuchamt | ca. 10–20 € |
| Flurkarte | Katasteramt | ca. 10–30 € |
| Energieausweis | Energieberater / Architekt | ca. 100–300 € |
| Baupläne | Bauamt | ca. 50–200 € |
| Altlastenauskunft | Umweltamt / Bauamt | ca. 50–100 € |
| Teilungserklärung | Grundbuchamt oder Hausverwaltung | ca. 50–150 € |
| WEG-Protokolle | Hausverwaltung | meist kostenfrei |

Die Gesamtkosten für die Selbstbeschaffung liegen typischerweise bei **500–1.500 €** – zuzüglich erheblichem Zeitaufwand. Bei immovativInvest ist die Beschaffung aller fehlenden Unterlagen im Service enthalten.

## Was fehlerhafte Dokumente kosten können

Fehlerhafte Unterlagen sind kein Kavaliersdelikt. Die Risiken:

- **Haftung für verschwiegene Mängel** – wer bekannte Mängel nicht offenlegt, haftet auch nach dem Verkauf
- **Finanzierungsausfall des Käufers** – Banken verweigern Finanzierungen bei unvollständiger Dokumentation
- **Verzögerung beim Notar** – fehlende Dokumente blockieren die Beurkundung
- **Preisminderung in der Verhandlung** – Käufer nutzen Unsicherheiten als Argument für niedrigere Preise
- **Stornierung des Kaufvertrags** – in extremen Fällen kann eine Seite vom Vertrag zurücktreten

## Wohnflächenberechnung: ein unterschätztes Thema

Ältere Wohnflächenberechnungen basieren oft auf veralteten Normen. Die aktuelle DIN 277 berücksichtigt Dachschrägen, Balkone und Nebenräume anders als frühere Standards. Das Ergebnis: Die tatsächliche Wohnfläche ist häufig größer als in alten Unterlagen angegeben.

Das ist für Verkäufer vorteilhaft – aber nur, wenn die Zahl korrekt und belegt ist. Eine vom Käufer oder seiner Bank in Auftrag gegebene Nachmessung, die eine kleinere Fläche ergibt, kann zu Preisverhandlungen oder Finanzierungsproblemen führen.

Wir prüfen die Wohnflächenberechnung vor Verkaufsstart und lassen bei Bedarf neu berechnen.

## Rechtliche Neuerungen 2026

**Neue Grundsteuer:** Seit Januar 2025 gelten neue Grundsteuermessbescheide. Den aktuellen Bescheid solltest du in den Verkaufsunterlagen haben.

**Verschärfte Geldwäscheregeln:** Seit Februar 2025 gelten strengere Anforderungen für Immobilientransaktionen. Notare verlangen erweiterte Herkunftsnachweise für Kaufpreiszahlungen.

**Energieausweis:** Ab Mai 2026 gilt EU-weit eine vereinheitlichte A–G-Skala (statt der bisherigen A+–H-Klassifizierung). Bestehende Ausweise bleiben bis zu ihrem Ablaufdatum gültig.

Möchtest du eine kostenlose Prüfung deiner vorhandenen Unterlagen? Wir analysieren, was fehlt, was veraltet ist – und kümmern uns um alles, was du noch brauchst.
    `,
  },
  {
    slug: 'verkaufspreis-richtig-bestimmen',
    category: 'Bewertung',
    badge: 'Bewertung',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Wie bestimmen wir den richtigen Verkaufspreis für deine Immobilie?',
    excerpt: 'Der Angebotspreis entscheidet über Erfolg oder Misserfolg des Verkaufs. Zu hoch, und die Immobilie "verbrennt". Zu niedrig, und Geld bleibt liegen. So gehen wir bei immovativInvest vor.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    content: `
Der Angebotspreis ist die wichtigste Entscheidung beim Immobilienverkauf – und gleichzeitig die, die am häufigsten falsch getroffen wird. Zu hoch ansetzen klingt verlockend ("kann man ja noch runterverhandeln"), führt aber fast immer zu schlechteren Ergebnissen als ein realistischer Startpreis.

Wir erklären, wie wir bei immovativInvest den Verkaufspreis bestimmen – und warum unser datenbasierter Ansatz systematisch bessere Ergebnisse liefert als eine Bauchgefühl-Einschätzung.

## Das Problem mit dem "Wunschpreis"

Viele Eigentümer haben eine Zahl im Kopf – manchmal basierend auf dem, was der Nachbar angeblich erzielt hat, manchmal basierend auf dem eigenen Kaufpreis plus gefühlter Wertsteigerung. Das Problem: Beide Quellen sind unzuverlässig.

Der Nachbar erinnert sich möglicherweise an den Angebotspreis, nicht an den tatsächlichen Kaufpreis. Und der eigene Kaufpreis vor 15 Jahren sagt nichts über den heutigen Marktwert aus – weder über Lageentwicklung noch über Modernisierungsstand noch über die aktuelle Zinssituation der Käufer.

Ein zu hoher Angebotspreis führt zu einer "verbrannten" Immobilie: Sie bleibt lange im Portal, wird zunehmend ignoriert und landet schließlich zu einem niedrigeren Preis als ein realistischer Startpreis es ermöglicht hätte.

## Unsere Methode: Daten statt Bauchgefühl

**Vergleichbare Verkäufe – echte Preise, nicht Angebotspreise**

Der wichtigste Datenpunkt ist: Was wurden ähnliche Immobilien in den letzten 12–24 Monaten tatsächlich verkauft? Nicht was sie angeboten wurden – sondern was Käufer am Ende wirklich gezahlt haben.

Wir analysieren alle verfügbaren Transaktionsdaten im Radius von maximal einem Kilometer um deine Immobilie. Dabei unterscheiden wir sorgfältig zwischen Angebots- und Kaufpreisen – die Differenz beträgt in Frankfurt je nach Lage und Marktphase zwischen 2 und 8 Prozent.

**Marktreaktionsdaten als Preisfeedback**

Wie lange stand eine vergleichbare Immobilie im Portal? Wie viele Anfragen kamen in der ersten Woche? Wurde der Preis gesenkt – und wenn ja, wie oft? Diese Daten zeigen, was der Markt tatsächlich akzeptiert, nicht nur was Verkäufer sich erhoffen.

Wir sehen auch sogenannte Reinserierungsmuster: Immobilien, die als "neu" wieder eingestellt werden, obwohl sie bereits Wochen zuvor schon einmal angeboten wurden. Das ist ein zuverlässiges Signal dafür, wo der Markt die Preisgrenze zieht.

**Lagequalität im Detail**

Nicht alle 500-Quadratmeter-Grundstücke in Sachsenhausen sind gleich viel wert. Wir bewerten:

- Straßenlärm und Exposition (Hauptstraße vs. ruhige Seitenstraße)
- Sonneneinstrahlung und Ausrichtung
- Nähe zu U-Bahn, S-Bahn, Schulen, Grünflächen
- Mikrolagebewertung: nicht nur der Stadtteil, sondern die genaue Straße

**Objektmerkmale im aktuellen Standard**

Die Wohnfläche wird nach aktuellen Normen berechnet – ältere Berechnungen unterschätzen häufig die tatsächliche Fläche. Wir bewerten außerdem:

- Grundrisseffizienz (gleiche Fläche, aber schlechter geschnitten = weniger wert)
- Modernisierungsstand der letzten 15 Jahre
- Energieklasse und voraussichtliche Sanierungspflichten
- Außenflächen, Stellplatz, Kellerausbau

**Finanzierungsperspektive: Was würde ein Bankgutachter sagen?**

Ein oft übersehener Faktor: Wenn der Angebotspreis deutlich über dem liegt, was eine Bank als Beleihungswert akzeptiert, schränkt das den Käuferkreis dramatisch ein. Käufer, die auf Finanzierung angewiesen sind (also die überwiegende Mehrheit), können dann nicht mitbieten – selbst wenn sie den Preis grundsätzlich akzeptieren würden.

Wir prüfen deshalb immer die Bankwertperspektive und stellen sicher, dass der Angebotspreis finanzierbar ist.

## Ein konkretes Beispiel

Eine Eigentümerin in Niederrad wollte ihr Einfamilienhaus für 780.000 € anbieten. Die Begründung: ein Nachbar hatte nach eigener Aussage einen ähnlichen Preis erzielt.

Unsere Analyse ergab: Vergleichbare Objekte in derselben Straße wurden in den letzten 18 Monaten zwischen 695.000 und 730.000 € verkauft. Die Differenz zum Nachbarpreis erklärt sich durch einen größeren Grundriss und einen frisch sanierten Keller.

Wir empfahlen einen Angebotspreis von 720.000 €. Das Ergebnis: starke Resonanz in der ersten Woche, mehrere ernsthafte Interessenten, Abschluss bei 735.000 € – wahrscheinlich mehr als bei einem überhöhten Einstiegspreis, der zur Stagnation geführt hätte.

## Was klassische Makler anders machen

Viele Makler orientieren sich primär an aktuellen Portalangeboten – also daran, was andere gerade anbieten. Das Problem: Angebotspreise spiegeln Wünsche, keine Marktpreise.

Wir gehen darüber hinaus: Transaktionsdaten, Marktreaktionsanalyse, historische Reinserierungsdaten, Finanzierungsperspektive. Das ist aufwendiger – aber es ist der Unterschied zwischen einem Preis, der gut klingt, und einem Preis, der tatsächlich funktioniert.

## Was du selbst tun kannst

Als Eigentümer hast du keinen Zugang zu Transaktionsdaten. Aber du kannst prüfen:

- Welche Immobilien in deiner Straße stehen gerade im Angebot – und wie lange schon?
- Gibt es Objekte, die schon mehrfach neu inseriert wurden?
- Was sagen Online-Bewertungstools? (Als Orientierung nützlich, aber nicht für die finale Preisfindung geeignet)

Am verlässlichsten ist ein persönliches Vor-Ort-Gespräch. Wir kommen zu dir, schauen uns die Immobilie an und geben dir eine fundierte Einschätzung – kostenlos und unverbindlich.
    `,
  },
  {
    slug: 'uebergabeprotokoll-immobilien',
    category: 'Prozess',
    badge: 'Checkliste',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Übergabeprotokoll beim Hausverkauf: Was rein muss – und was dich schützt',
    excerpt: 'Das Übergabeprotokoll ist das letzte Dokument beim Immobilienverkauf – und eines der wichtigsten. Wer es falsch ausfüllt oder ganz weglässt, riskiert jahrelangen Streit mit dem Käufer.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop',
    content: `
Der Schlüssel liegt auf dem Tisch, beide Parteien stehen in der Wohnung – und dann? In diesem Moment entscheidet sich, ob der Verkauf wirklich sauber abgeschlossen wird. Das Übergabeprotokoll ist kein bürokratisches Anhängsel, sondern das einzige Dokument, das beide Seiten rechtssicher vor späteren Streitigkeiten schützt.

## Was ist das Übergabeprotokoll – und was ist es nicht?

Das Übergabeprotokoll dokumentiert den **Zustand der Immobilie am Tag der Schlüsselübergabe**. Es hält fest, was übergeben wird, in welchem Zustand, welche Zählerstände abgelesen wurden und welche offenen Punkte (falls vorhanden) noch bestehen.

Es ist kein zweiter Kaufvertrag. Die rechtlichen Rahmenbedingungen – Preis, Haftungsausschlüsse, Fristen – regelt der Notarvertrag. Das Protokoll ergänzt ihn um den tatsächlichen Übergabezustand.

## Wann findet die Übergabe statt?

Die Übergabe erfolgt erst, wenn drei Bedingungen erfüllt sind:

- Der Kaufpreis ist vollständig auf dem Konto des Verkäufers eingegangen
- Alle vereinbarten Belastungen sind aus dem Grundbuch gelöscht
- Käufer und Verkäufer (oder Bevollmächtigte) sind persönlich vor Ort

Nicht früher. Wer Schlüssel vor Zahlungseingang übergibt, handelt auf eigenes Risiko.

## Was muss ins Protokoll – Schritt für Schritt

**Allgemeine Angaben**
- Datum und genaue Uhrzeit der Übergabe
- Vollständige Adresse der Immobilie
- Namen beider Parteien (Käufer und Verkäufer)
- Bezug zum Notarvertrag (Datum, Urkundennummer)

**Zählerstände – das Wichtigste für die Abrechnung**
- Stromzähler (Zählernummer notieren)
- Gaszähler (falls vorhanden)
- Wasserzähler (Kalt- und Warmwasser separat)
- Heizöltank-Füllstand (falls relevant)

Die Zählerstände sind entscheidend: Sie bestimmen, ab wann der Käufer für Nebenkosten verantwortlich ist. Fehler hier führen zu Nachforderungen von Versorgern.

**Schlüsselübergabe**
- Anzahl Haustürschlüssel
- Anzahl Wohnungsschlüssel
- Briefkastenschlüssel
- Garagenschlüssel / Tiefgaragenchip
- Kellerschlüssel
- Schlüssel für Nebengebäude

Halten Sie fest, wie viele Schlüssel es ursprünglich gab und wie viele davon übergeben werden. Fehlende Schlüssel können der Käufer in Rechnung stellen.

**Zustand der Immobilie**
Geh Raum für Raum und dokumentiere vorhandene Mängel – nicht um sie zu verbergen, sondern um klarzustellen, was beim Übergang bekannt und akzeptiert war. Was im Protokoll steht, kann der Käufer nicht nachträglich als versteckten Mangel geltend machen.

**Übergabe von Unterlagen**
- Bedienungsanleitungen für Geräte und Heizung
- Wartungsverträge und -nachweise
- Schornsteinfegerprotokoll
- Baupläne und Baugenehmigungen
- Bei Eigentumswohnungen: letzter Hausgeldabrechnung, aktuelle Jahresabrechnung

**Offene Vereinbarungen**
Falls im Kaufvertrag Sondervereinbarungen getroffen wurden (z. B. Verkäufer führt noch eine Reparatur durch), halte hier den aktuellen Stand fest.

## Der Ablauf der Übergabe

1. **Gemeinsame Begehung** – alle Räume, Keller, Dachboden, Garage, Außenanlagen
2. **Zählerstände ablesen** und eintragen
3. **Schlüsselübergabe** mit Zählung
4. **Unterlagen übergeben** und abhaken
5. **Protokoll ausfüllen** – ruhig und vollständig, kein Zeitdruck
6. **Unterschriften beider Parteien** – ohne Unterschrift ist das Protokoll nicht rechtswirksam

Plane mindestens 45 Minuten ein. Für größere Häuser oder Immobilien mit vielen technischen Anlagen auch 90 Minuten.

## Was passiert, wenn kein Protokoll erstellt wird?

Ohne Protokoll gibt es keinen dokumentierten Übergabezustand. Das bedeutet:

- Käufer können behaupten, Mängel seien beim Einzug bereits vorhanden gewesen
- Verkäufer können nicht belegen, in welchem Zustand sie übergeben haben
- Zählerstände sind unklar → Streit mit Versorgern
- Schlüsselanzahl ist nicht dokumentiert → Käufer können Schlösser austauschen lassen und Rechnung schicken

In der Praxis endet das fast immer im Streit. Ein sauber ausgefülltes Protokoll kostet 20 Minuten – ein fehlender Nachweis kann Monate Ärger bedeuten.

## Mängel, die nach der Übergabe auftauchen

**Mängel, die beim Übergabetag sichtbar waren und dokumentiert wurden:** Diese sind mit der Unterschrift des Käufers akzeptiert. Kein Nachforderungsrecht.

**Mängel, die nicht erkennbar waren (versteckte Mängel):** Hier kommt es auf den Notarvertrag an. In den meisten Kaufverträgen wird die Gewährleistung weitgehend ausgeschlossen – Ausnahme: arglistig verschwiegene Mängel. Wenn du einen bekannten Mangel verschwiegen hast, haftest du auch nach der Übergabe.

**Mängel, die nach der Übergabe entstanden sind:** Vollständig der Käufer. Deshalb ist der genaue Übergabezeitpunkt so wichtig.

## Checkliste für Verkäufer vor der Übergabe

- Alle vereinbarten Ausstattungen sind vorhanden (oder Änderungen sind notiert)
- Technische Anlagen wurden geprüft und funktionieren
- Die Immobilie ist vollständig geräumt (außer was explizit vereinbart ist)
- Alle Schlüssel sind zusammengestellt und gezählt
- Alle Unterlagen sind zusammengestellt
- Zählerstände wurden vorab notiert
- Die Immobilie ist besenrein übergeben

## Wie viele Exemplare brauche ich?

Mindestens zwei Ausfertigungen – eine für Käufer, eine für Verkäufer. Als Makler behalten wir immer eine dritte Kopie in der Verkaufsakte, die wir für mehrere Jahre aufbewahren.

## Rechtliche Neuerungen ab 2026

Ab dem 1. Januar 2025 gilt die neue Grundsteuer. Der aktuelle Messbescheid sollte beim Übergabetermin vorliegen, damit der Käufer die Informationen für seine Ummeldung bei der Gemeinde hat.

Außerdem: Seit 2025 gelten verschärfte Geldwäschepflichten. Notare müssen bestimmte Herkunftsnachweise für Kaufpreiszahlungen dokumentieren. Das betrifft zwar primär den Notartermin, kann aber bei Protokollgesprächen eine Rolle spielen, wenn Letztklärungen ausstehen.

Bei immovativInvest begleiten wir die Übergabe persönlich, füllen das Protokoll gemeinsam aus und sorgen dafür, dass beide Seiten mit einer rechtssicheren Dokumentation nach Hause gehen.
    `,
  },
  {
    slug: 'dauer-notar-kaufpreiszahlung',
    category: 'Prozess',
    badge: 'Prozess',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Wie lange dauert es vom Notartermin bis zur Kaufpreiszahlung?',
    excerpt: 'Der Notartermin ist nicht das Ende – sondern der Beginn des letzten Abschnitts. Bis das Geld tatsächlich fließt, vergehen in der Regel 4 bis 8 Wochen. Warum – und was in dieser Zeit passiert.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    content: `
Viele Verkäufer sind überrascht: Der Notartermin fühlt sich wie der Abschluss an – Vertragsunterschrift, Händeschütteln, fertig. Aber das Geld kommt erst Wochen später. Wir erklären, was in dieser Zeit passiert, warum es dauert und welche Stolpersteine es geben kann.

## Die kurze Antwort

Vom Notartermin bis zur Kaufpreiszahlung dauert es typischerweise **4 bis 6 Wochen**. In manchen Fällen – besonders in Städten mit überlasteten Grundbuchämtern wie Frankfurt – kann es bis zu 8 Wochen dauern. Nach Erhalt der sogenannten Fälligkeitsmitteilung durch den Notar hat der Käufer dann noch **10 bis 14 Tage** Zeit für die Überweisung.

## Was passiert zwischen Notartermin und Geldeingang?

### Schritt 1: Auflassungsvormerkung (1–3 Tage)

Unmittelbar nach dem Notartermin beantragt der Notar die Eintragung der Auflassungsvormerkung im Grundbuch. Diese Vormerkung schützt den Käufer: Die Immobilie kann ab diesem Moment weder doppelt verkauft noch mit neuen Belastungen versehen werden.

Für den Verkäufer bedeutet das: Bis die Vormerkung eingetragen ist, passiert noch nichts mit dem Geld.

### Schritt 2: Grundbucheintragung der Vormerkung (2–8 Wochen)

Das Grundbuchamt trägt die Auflassungsvormerkung ein. In Frankfurt und dem Rhein-Main-Gebiet sind die Grundbuchämter gut ausgelastet – in Spitzenzeiten kann dieser Schritt 4–6 Wochen dauern. Das ist ein bekannter Engpass, den weder Verkäufer noch Makler beschleunigen können.

### Schritt 3: Behördliche Freigaben (parallel, 2–6 Wochen)

Gleichzeitig klärt der Notar, ob Gemeinden oder andere Stellen ein Vorkaufsrecht an der Immobilie haben. In Frankfurt ist das bei normalen Wohnimmobilien selten der Fall – bei bestimmten Lagen oder Grundstücken kann es aber relevant werden.

### Schritt 4: Löschungsbewilligungen (parallel, 1–4 Wochen)

Falls auf der Immobilie noch eine Grundschuld der Verkäuferbank eingetragen ist (z. B. aus einem laufenden Kredit), muss die Bank eine Löschungsbewilligung ausstellen. Das setzt in der Regel voraus, dass der ausstehende Kredit aus dem Kaufpreis abgelöst wird – was erst nach Kaufpreiszahlung geschieht. Der Notar koordiniert hier einen abgestimmten Ablauf.

### Schritt 5: Zustimmung der Hausverwaltung (bei ETW, 1–3 Wochen)

Bei Eigentumswohnungen ist manchmal die Zustimmung der Hausverwaltung zur Eigentumsübertragung erforderlich. Das ist formal und dauert in der Praxis meist 1–2 Wochen.

### Schritt 6: Fälligkeitsmitteilung des Notars (3–7 Tage nach Erfüllung aller Voraussetzungen)

Sobald alle oben genannten Bedingungen erfüllt sind, stellt der Notar die sogenannte **Fälligkeitsmitteilung** aus. Diese geht gleichzeitig an Käufer und Verkäufer. Erst jetzt ist der Kaufpreis fällig.

### Schritt 7: Kaufpreiszahlung (10–14 Tage nach Fälligkeitsmitteilung)

Der Käufer überweist den Kaufpreis direkt auf das Konto des Verkäufers – bei finanziertem Kauf oft über die finanzierende Bank. Ab Erhalt der Fälligkeitsmitteilung hat der Käufer typischerweise 10–14 Tage Zeit. Danach fallen Verzugszinsen an.

## Die Auflassungsvormerkung: Ihr wichtigstes Sicherheitsnetz

Während der Käufer Wochen wartet, bis er zahlen darf, kann dem Verkäufer theoretisch etwas passieren – Insolvenz, weiterer Verkauf, neue Belastungen. Die Auflassungsvormerkung schützt den Käufer vor genau diesen Szenarien:

- **Kein Doppelverkauf möglich** – ein später eingetragenes Recht hat keine Priorität gegenüber der Vormerkung
- **Keine neuen Grundschulden** – neue Belastungen nach Eintragung der Vormerkung sind dem Käufer gegenüber unwirksam
- **Schutz vor Gläubigern des Verkäufers** – auch bei Insolvenz des Verkäufers ist der Käufer abgesichert

## Was kann den Prozess verzögern?

**Überlastetes Grundbuchamt:** In Frankfurt ist das der häufigste Grund für Verzögerungen. Wir informieren unsere Kunden realistisch, was in ihrer Region zu erwarten ist.

**Geplatzte Finanzierung:** Wenn die Bank des Käufers die Finanzierungszusage zurückzieht, verzögert sich alles. Bei immovativInvest prüfen wir die Bonität der Käufer vor dem Notartermin – das ist kein Nice-to-have, sondern Standard.

**Langsame Bankenreaktion bei Löschungsbewilligungen:** Manche Banken brauchen länger als angekündigt. Bei bekannten Instituten haben wir Erfahrungswerte und können realistisch einschätzen.

**Fehlende Unterlagen:** Fehlen beim Notartermin Dokumente (z. B. aktuelle Grundbuchauszüge), muss nachgeliefert werden – das kostet Zeit. Wir stellen sicher, dass vor dem Notartermin alles vollständig ist.

## Gesamtüberblick: Vom Erstkontakt bis zum Geldeingang

Zur Einordnung: Bei immovativInvest betragen die Durchschnittswerte für den gesamten Verkaufsprozess:

- **Vorbereitung** (Bewertung, Unterlagen, Exposé): 1–2 Wochen
- **Vermarktung bis unterschriebener Reservierungsvereinbarung**: 2–4 Wochen
- **Notartermin bis Kaufpreiszahlung**: 4–8 Wochen

**Gesamter Zeitraum:** typischerweise 7–14 Wochen von der Beauftragung bis zum Geldeingang.

## Was du als Verkäufer in dieser Zeit tun solltest

- Halt deine Kontodaten bereit und stell sicher, dass der Notar das richtige Konto hat
- Plane den Auszug so, dass du nach Kaufpreiszahlung übergeben kannst (nicht vorher)
- Beantworte Rückfragen des Notars schnell – jede Verzögerung deiner Antwort verlängert den Prozess
- Koordiniere mit deiner Bank (falls noch ein Kredit auf der Immobilie läuft) frühzeitig die Löschungsbewilligung

Bei immovativInvest begleiten wir den gesamten Prozess vom Notartermin bis zur Übergabe und halten dich jederzeit auf dem Laufenden – damit du nicht wochenlang im Dunkeln wartest.
    `,
  },
  {
    slug: 'erbengemeinschaft-immobilie-verkaufen',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Erbengemeinschaft: Wie verkaufst du ein geerbtes Haus, wenn mehrere Erben beteiligt sind?',
    excerpt: 'Eine Erbschaft klingt zunächst nach einem Glücksfall. Aber wenn mehrere Erben beteiligt sind, wird die Immobilie schnell zur Belastungsprobe. Wie der Verkauf trotzdem funktioniert.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '9 Min.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop',
    content: `
Der Vater verstirbt, hinterlässt ein Haus und drei Kinder. Was zunächst wie ein gemeinsamer Neustart klingt, entwickelt sich oft zum Familienkonflikt: Einer will verkaufen, einer will vermieten, einer will einziehen. Keiner kann alleine entscheiden – und die Immobilie wird zur Blockade.

Wir erklären, wie eine Erbengemeinschaft funktioniert, welche Optionen du hast und wie der Verkauf gelingen kann.

## Was ist eine Erbengemeinschaft?

Eine Erbengemeinschaft entsteht automatisch, wenn eine Immobilie an mehrere Personen vererbt wird – egal ob durch Testament oder gesetzliche Erbfolge. Die Immobilie gehört allen Erben gemeinsam als **Gesamthandseigentum**.

Das bedeutet: Kein Erbe kann einen bestimmten Raum oder eine bestimmte Etage für sich beanspruchen. Die Immobilie ist unteilbar – jeder Erbe hat einen ideellen Anteil (z. B. ein Drittel), aber keine konkreten Quadratmeter.

Für alle wesentlichen Entscheidungen – Verkauf, Vermietung, Sanierung – ist grundsätzlich **Einstimmigkeit** erforderlich.

## Was Erben dürfen und müssen

**Erben dürfen:**

- Gemeinsam über die Zukunft der Immobilie entscheiden (verkaufen, vermieten, selbst nutzen)
- Die Immobilie vermieten und Mieteinnahmen anteilig aufteilen
- Deinen eigenen Erbanteil an Dritte verkaufen (die Miterben haben dann ein Vorkaufsrecht)
- Die Auflösung der Erbengemeinschaft verlangen

**Erben müssen:**

- Kosten für Instandhaltung, Steuern und Versicherungen anteilig tragen
- Entscheidungen gemeinsam treffen – auch wenn das mühsam ist
- Den übrigen Erben im Falle eines Anteilsverkaufs ein Vorkaufsrecht einräumen

## Die vier Möglichkeiten für eine Erbengemeinschaft

### Option 1: Einvernehmlicher Verkauf

Alle Erben sind sich einig und beauftragen gemeinsam einen Makler. Beim Notartermin müssen alle Erben anwesend sein oder durch notarielle Vollmacht vertreten werden. Der Erlös wird nach Erbquoten aufgeteilt.

Das ist die einfachste und finanziell beste Lösung – vorausgesetzt, alle ziehen mit.

### Option 2: Auszahlung – ein Erbe kauft die anderen aus

Ein Erbe möchte die Immobilie behalten, die anderen wollen ihr Geld. Dann kauft der verbleibende Erbe die Anteile der anderen zum Marktwert aus.

Voraussetzung: Der verbleibende Erbe kann die Auszahlung finanzieren. Oft ist dafür ein Kredit notwendig. Außerdem fällt bei diesem Vorgang Grunderwerbsteuer an – der Freibetrag gilt nur für direkte Vererbung, nicht für den Kauf von Geschwisteranteilen.

### Option 3: Gemeinsame Vermietung

Alle Erben sind sich einig, die Immobilie zu vermieten. Mieteinnahmen werden anteilig ausgeschüttet. Diese Lösung ist sinnvoll, wenn niemand akut verkaufen muss und die Immobilie attraktive Mieteinnahmen abwirft.

Nachteil: Die Erbengemeinschaft bleibt bestehen – mit allen Entscheidungspflichten für Reparaturen, Mietverträge, Neuvermietung etc. Langfristig ist das oft keine dauerhafte Lösung.

### Option 4: Teilungsversteigerung (letztes Mittel)

Wenn kein Einvernehmen erzielt werden kann, kann ein Erbe beim Amtsgericht die Teilungsversteigerung beantragen. Das Gericht versteigert die Immobilie – und teilt den Erlös auf.

Das Problem: Immobilien erzielen bei Zwangsversteigerungen meist deutlich unter Marktwert. Häufig 20–30 % weniger. Es ist das teuerste Ergebnis für alle Beteiligten – ein echter Verlust für jede Partei.

Wir empfehlen die Teilungsversteigerung nur als Drohkulisse, nicht als ersten Schritt. In den meisten Fällen führt allein die Ankündigung dazu, dass die Parteien doch noch zu einer Einigung kommen.

## Steuerliche Besonderheiten bei Erbengemeinschaften

**Erbschaftsteuer**

Jeder Erbe versteuert seinen Anteil separat. Freibeträge gelten pro Person und Verwandtschaftsgrad:

- Kinder: 400.000 € Freibetrag pro Elternteil
- Geschwister, Nichten/Neffen: nur 20.000 €
- Nicht-Verwandte: ebenfalls 20.000 €

Bei einem Haus im Wert von 600.000 € und drei Kindern als Erben fällt typischerweise keine Erbschaftsteuer an (je 200.000 € Anteil, weit unter dem Freibetrag). Bei entfernteren Verwandten sieht das ganz anders aus.

**Spekulationssteuer beim Verkauf**

Wenn die geerbte Immobilie innerhalb von 10 Jahren nach dem ursprünglichen Kauf durch den Erblasser verkauft wird, kann Einkommensteuer anfallen – die sogenannte Spekulationssteuer. Entscheidend ist das Kaufdatum des Erblassers, nicht das Erbschaftsdatum.

Ausnahmen: Wenn der Erblasser in den letzten zwei Kalenderjahren selbst in der Immobilie gewohnt hat, entfällt die Steuerpflicht – auch beim Verkauf durch die Erben.

**Grunderwerbsteuer beim Anteilsverkauf**

Kauft ein Erbe die Anteile seiner Miterben, fällt Grunderwerbsteuer in Hessen (6 %) auf den Transaktionswert an. Das reduziert die Attraktivität des Auskaufs erheblich.

## Der Notartermin bei einer Erbengemeinschaft

Beim Notartermin müssen alle Erben unterschreiben. Wenn ein Erbe nicht persönlich erscheinen kann, ist eine **notarielle Vollmacht** möglich – diese muss jedoch vorher beim Notar beglaubigt worden sein. Eine einfache schriftliche Vollmacht reicht nicht.

Für den Notartermin benötigst du außerdem:

- Den **Erbschein** (beim Nachlassgericht zu beantragen) oder ein eröffnetes, beglaubigtes Testament
- Personalausweise aller erscheinenden Erben
- Alle relevanten Grundbuchangaben

## Wenn sich die Erben nicht einigen können

Blockaden in Erbengemeinschaften haben meist drei Ursachen:

- **Unterschiedliche finanzielle Situationen** – einer braucht das Geld sofort, ein anderer kann warten
- **Emotionale Bindung** – einer hat in dem Haus gelebt oder möchte es erhalten
- **Streit um die Werteinschätzung** – uneinigkeit darüber, was die Immobilie wert ist

In all diesen Situationen hilft eine neutrale, professionelle Bewertung. Wenn sich alle Erben auf einen gemeinsamen Marktwert einigen können, lösen sich viele Blockaden auf.

Bei immovativInvest übernehmen wir gerne die Kommunikation mit allen Beteiligten – neutral, transparent und ohne Partei zu ergreifen. Wir haben Erfahrung mit Erbengemeinschaften und wissen, dass diese Situationen fingerspitzengefühl erfordern.

## Was du als nächstes tun solltest

- Beantrage den Erbschein beim zuständigen Nachlassgericht – das dauert in Hessen derzeit 4–8 Wochen
- Hol eine professionelle Bewertung ein – als gemeinsame Grundlage für alle Erben
- Klär steuerliche Fragen mit einem Steuerberater (wann ist die 10-Jahres-Frist abgelaufen? Wohnte der Erblasser selbst dort?)
- Sprich offen über die Ziele aller Beteiligten, bevor du mit dem Verkauf beginnst

Gerne kommen wir zum gemeinsamen Erstgespräch mit allen Erben – auch per Videokonferenz, wenn nicht alle in der Region leben. Kostenlos und unverbindlich.
    `,
  },
  {
    slug: 'haus-verkaufen-nach-scheidung',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Haus verkaufen nach der Scheidung: Was Eigentümer im Rhein-Main-Gebiet wissen müssen',
    excerpt: 'Trennung und Immobilie – eine Kombination, die schnell eskaliert. Wer muss zustimmen? Wer bekommt was? Und was passiert, wenn sich die Parteien nicht einigen können? Ein klarer Überblick.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
Ein Haus ist oft das größte gemeinsame Vermögensgut eines Paares. Wenn die Beziehung endet, wird aus dem Zuhause schnell ein Konfliktpunkt. Wer darf bleiben? Wer muss zahlen? Muss das Haus zwingend verkauft werden? Diese Fragen lassen sich nicht immer einvernehmlich beantworten – aber mit klaren Fakten lässt sich die Situation strukturieren.

## Die rechtliche Ausgangslage: Wem gehört das Haus?

Nicht jede Scheidung ist gleich – die entscheidende Frage ist, wer im Grundbuch steht.

**Nur ein Partner ist im Grundbuch eingetragen**

Wenn die Immobilie vor der Ehe von einem Partner alleine gekauft wurde und nur dieser im Grundbuch steht, gehört sie rechtlich allein dieser Person. Der andere Partner hat grundsätzlich keinen Anspruch auf Miteigentum. Allerdings: Wenn während der Ehe gemeinsam Vermögen in die Immobilie geflossen ist (Tilgung, Renovierung), kann das beim Zugewinnausgleich berücksichtigt werden.

**Beide Partner sind im Grundbuch eingetragen**

Das ist der häufigste Fall bei Immobilien, die während der Ehe gekauft wurden. Beide Parteien sind Miteigentümer – typischerweise je zur Hälfte. Verkauf, Vermietung oder wesentliche Entscheidungen erfordern die Zustimmung beider. Verweigert eine Seite die Mitwirkung, kann die andere die sogenannte Teilungsversteigerung beantragen – mit erheblichen Preisabschlägen gegenüber einem freihändigen Verkauf.

**Die Immobilie wurde während der Ehe gekauft, steht aber nur auf einem Namen**

Das kommt vor. In diesem Fall ist zwar nur eine Person Eigentümer, aber die andere hat unter Umständen Ansprüche aus dem Zugewinnausgleich. Ein Anwalt für Familienrecht sollte hier unbedingt einbezogen werden.

## Verkaufen oder vermieten – was ist sinnvoller?

**Argumente für den Verkauf**

- Laufende Kosten (Kredit, Instandhaltung, Versicherung, Grundsteuer) entfallen
- Beide Parteien bekommen ihren Anteil am Erlös und können neu starten
- Emotional sauber – kein gemeinsames Eigentum mehr, das zu Streit führt
- Besonders sinnvoll, wenn der verbleibende Partner die monatliche Rate alleine nicht tragen kann

**Argumente für die Vermietung**

- Mieteinnahmen fließen beiden zu, Vermögen bleibt erhalten
- Sinnvoll, wenn die Immobilie langfristig stark an Wert gewinnen wird
- Problematisch: Beide bleiben wirtschaftlich aneinander gekettet – für unbestimmte Zeit

In der Praxis entscheiden sich die meisten Paare für den Verkauf. Gemeinsame Vermietung funktioniert nur, wenn die Kommunikation nach der Trennung wirklich gut ist – und das ist selten.

## Die finanzielle Rechnung: Was bleibt am Ende übrig?

Bevor man sich auf einen Verkaufspreis einigt, müssen folgende Positionen geklärt werden:

- **Aktueller Marktwert der Immobilie** (durch professionelle Bewertung, nicht durch Portale)
- **Restschuld des Kredits** – welcher Betrag wird beim Notartermin an die Bank überwiesen?
- **Vorfälligkeitsentschädigung** – wenn der Kredit vorzeitig aufgelöst wird, kann die Bank eine Gebühr verlangen. Diese kann bei 0 € liegen (nach 10 Jahren Laufzeit und gesetzlicher Kündigungsfrist) oder mehrere Tausend Euro betragen
- **Verkaufskosten** – Maklerprovision (in Hessen nach Halbteilungsprinzip), Notarkosten trägt der Käufer
- **Steuerliche Prüfung** – ist die Spekulationsfrist von 10 Jahren abgelaufen?

Was übrig bleibt, wird nach Eigentumsanteilen aufgeteilt – bei hälftigem Miteigentum also je 50 Prozent.

## Häufige Fehler bei der Scheidungsimmobilie

**Emotionale Preisfindung**

Einer der Partner hält emotional an einem zu hohen Preis fest ("das Haus ist mindestens X wert") – oft als verdeckte Blockadestrategie. Eine neutrale professionelle Bewertung schafft eine akzeptierte Grundlage für beide Seiten.

**Ungeklärter Eigentumsstatus**

Ohne Grundbuchauszug und rechtliche Prüfung weiß man oft nicht genau, welche Ansprüche bestehen. Das klärt man vor dem ersten Maklertermin – nicht danach.

**Zu langes Warten**

Je länger das Haus ungeklärt bleibt, desto mehr Kosten laufen auf: Kredit, Nebenkosten, Instandhaltung. Manchmal ist ein schneller sauberer Schnitt wirtschaftlich sinnvoller als monatelange Verhandlungen.

**Steuern ignorieren**

Wenn die Immobilie in den letzten zwei Jahren selbst genutzt wurde, entfällt die Spekulationssteuer – auch wenn die 10-Jahres-Frist noch nicht abgelaufen ist. Umgekehrt: Wer zu früh verkauft ohne das zu prüfen, zahlt unnötig Steuern.

## Wenn eine Seite nicht verkaufen will

Das ist die schwierigste Situation. Rechtlich gibt es zwei Wege:

**Auskauf eines Partners:** Der verbleibende Partner kauft den Anteil des anderen zum Marktwert. Voraussetzung: Finanzierungsmöglichkeit. Vorteil: kein Verkauf, keine Maklergebühr. Nachteil: Grunderwerbsteuer fällt beim Anteilskauf an (in Hessen 6 %).

**Teilungsversteigerung:** Als letztes Mittel kann ein Partner beim Amtsgericht die Versteigerung beantragen. Die Immobilie wird dann zwangsversteigert – typischerweise zu 70–80 % des Marktwerts. Verlust für beide Seiten, aber manchmal der einzige Ausweg.

Wir empfehlen: Nutze die Drohkulisse der Teilungsversteigerung, um eine einvernehmliche Lösung zu beschleunigen – aber geh diesen Weg nicht unnötig.

## Wie wir bei immovativInvest helfen

Wir sind neutral. Wir vertreten nicht die eine oder andere Seite – unser Auftrag ist der Verkauf der Immobilie zu einem bestmöglichen Preis, von dem am Ende beide Parteien profitieren. Wenn nötig, kommunizieren wir mit beiden Parteien separat und koordinieren die Termine so, dass kein persönlicher Kontakt notwendig ist.

Die Bewertung der Immobilie übernehmen wir kostenlos und unverbindlich – und geben damit beiden Seiten eine gemeinsame Zahlenbasis an die Hand.
    `,
  },
  {
    slug: 'haus-verkaufen-trotz-kredit',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Haus verkaufen trotz laufendem Kredit – so funktioniert es',
    excerpt: 'Viele Eigentümer glauben, sie können erst verkaufen, wenn der Kredit abbezahlt ist. Das stimmt nicht. Wie ein Verkauf mit bestehender Hypothek abläuft – und was die Vorfälligkeitsentschädigung kostet.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    content: `
Ein laufender Kredit ist kein Verkaufshindernis. In Deutschland werden täglich Immobilien verkauft, auf denen noch Hypotheken oder Grundschulden lasten. Der Prozess ist klar geregelt – und in den meisten Fällen reibungsloser als Eigentümer erwarten.

## Ja, ein Verkauf ist immer möglich

Eine im Grundbuch eingetragene Grundschuld der Bank verhindert den Verkauf nicht. Sie wird beim Notartermin oder kurz danach aus dem erlösten Kaufpreis abgelöst. Die Bank erhält ihren Anteil direkt, bevor der Restbetrag an dich ausgezahlt wird.

Der Ablauf in der Praxis:

- Käufer und Verkäufer einigen sich auf einen Kaufpreis
- Beim Notartermin werden alle Konditionen beurkundet
- Die finanzierende Bank des Verkäufers stellt eine Löschungsbewilligung aus – gegen Zahlung der Restschuld
- Der Kaufpreis wird überwiesen: Restschuld geht an die Bank des Verkäufers, Differenz geht an den Verkäufer
- Die Grundschuld wird aus dem Grundbuch gelöscht

Für den Käufer ändert sich dadurch nichts – er bekommt eine lastenfreie Immobilie.

## Was ist die Vorfälligkeitsentschädigung?

Das ist die entscheidende Kostenfrage beim Verkauf mit laufendem Kredit.

Wenn du deinen Kredit vorzeitig ablöst, entgehen der Bank zukünftige Zinserträge. Dafür darf sie eine Entschädigung verlangen – die sogenannte **Vorfälligkeitsentschädigung** (VFE).

Die Höhe hängt ab von:
- Restlaufzeit des Kredits
- Aktuell vereinbartem Zinssatz vs. aktuellem Marktzinsniveau
- Verbleibender Restschuld

**Wann entfällt die Vorfälligkeitsentschädigung?**

Nach 10 Jahren Laufzeit haben Sie ein gesetzliches Sonderkündigungsrecht (§ 489 BGB) mit 6 Monaten Kündigungsfrist – ohne Entschädigungspflicht. Wenn Ihr Kredit also seit mehr als 10 Jahren läuft, können Sie kostenlos kündigen.

Bei kürzeren Laufzeiten gilt: Die Entschädigung kann sich auf mehrere Tausend Euro belaufen – in Einzelfällen auch auf fünfstellige Beträge bei großen Restschulden und hohen Zinssätzen.

## Strategien zur Minimierung der VFE

**Zeitpunkt optimieren**

Wenn der Zinsbindungsauslauf absehbar ist, kann sich Warten lohnen. Auch reguläre Sondertilgungsrechte (die viele Kreditverträge einräumen) können vor dem Verkauf genutzt werden, um die Restschuld zu reduzieren und damit die VFE zu senken.

**Mit der Bank verhandeln**

Banken sind manchmal bereit, auf einen Teil der VFE zu verzichten – besonders wenn sie dem Käufer die Anschlussfinanzierung verkaufen können. Das lohnt sich zu fragen.

**VFE in den Kaufpreis einrechnen**

In manchen Fällen lässt sich die VFE in die Preisgestaltung integrieren – besonders wenn der Markt gut läuft und der Erlös ohnehin über der Summe aus Restschuld + VFE + Transaktionskosten liegt.

**Kredit auf neue Immobilie übertragen**

Wenn Sie nach dem Verkauf eine neue Immobilie kaufen, kann der bestehende Kredit unter Umständen auf das neue Objekt übertragen werden ("Pfandtausch"). Das setzt die Zustimmung der Bank voraus und ist nicht immer möglich – aber wenn es funktioniert, entfällt die VFE komplett.

## Was passiert, wenn der Erlös nicht die Restschuld deckt?

Dieser Fall – "Under Water" oder "Negative Equity" – tritt auf, wenn der aktuelle Marktwert der Immobilie unter der Restschuld liegt. Das ist in Frankfurt und dem Rhein-Main-Gebiet aktuell die absolute Ausnahme, kann aber bei Immobilien mit strukturellen Mängeln oder in ungünstigen Lagen vorkommen.

In diesem Fall:
- Sprechen Sie mit Ihrer Bank offen über die Situation
- Banken können einer Freigabe des Grundpfandrechts zustimmen, wenn der Verkäufer die Differenz anderweitig ausgleicht
- Eine Privatinsolvenz ist der schlechteste Ausweg – fast immer gibt es bessere Lösungen

## Die Rechnung: Was bleibt nach dem Verkauf übrig?

Verkaufserlös
− Restschuld des Kredits
− Vorfälligkeitsentschädigung (falls anfällt)
− Grundbuchlöschungsgebühr (ca. 0,2 % der Grundschuld)
= **Nettoerlös für den Verkäufer**

In Frankfurt mit einem durchschnittlichen Eigentumsgewinn der letzten 10–15 Jahre ist dieser Nettoerlös in den meisten Fällen erheblich positiv. Die VFE ist ein Kostenpunkt – aber kein Grund, nicht zu verkaufen.

## Was wir für Sie tun

Wir klären mit Ihnen vorab die Gesamtrechnung: Wie hoch ist der realistische Verkaufserlös? Was kostet die Ablösung Ihres Kredits? Was bleibt am Ende übrig? Diese Zahlen kennen Sie, bevor Sie mit dem Verkauf beginnen – damit Sie sicher entscheiden können.
    `,
  },
  {
    slug: 'hausverkauf-bei-pflegebeduerftigkeit',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Hausverkauf bei Pflegebedürftigkeit: Was Sie wissen müssen, bevor Sie entscheiden',
    excerpt: 'Ein Pflegeheimplatz kostet zwischen 2.000 und 5.000 Euro im Monat. Oft reicht die Rente nicht – und das Haus muss verkauft werden. Was ist Schonvermögen? Wann greift das Sozialamt? Was droht beim Verkauf an Kinder?',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '9 Min.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    content: `
Niemand denkt gerne darüber nach – aber der Zeitpunkt, in dem Pflege nötig wird, kommt für viele Familien schneller als erwartet. Die Kosten für stationäre Pflege liegen in der Rhein-Main-Region zwischen 2.500 und 4.500 Euro pro Monat. Was die gesetzliche Pflegeversicherung nicht abdeckt, müssen Betroffene und ihre Familien selbst tragen. Und das größte Vermögen ist häufig die eigene Immobilie.

## Muss das Haus verkauft werden?

Nicht automatisch – aber unter bestimmten Umständen ja. Entscheidend ist:

**Solange die Person noch in der Immobilie lebt**, gilt das selbstgenutzte Haus als sogenanntes **Schonvermögen** und wird beim Sozialamt nicht berücksichtigt. Das Sozialamt kann keinen Verkauf verlangen, solange jemand im Haus wohnt.

**Sobald die Person dauerhaft ins Pflegeheim zieht** und die Immobilie leersteht, ändert sich das. Das Sozialamt kann jetzt prüfen, ob das Vermögen zur Deckung der Pflegekosten herangezogen werden muss.

**Ausnahme:** Wenn ein Ehepartner oder eine Person mit Pflegeanspruch noch in der Immobilie wohnt, bleibt der Schutz bestehen – auch wenn die andere Person im Heim ist.

## Die 10-Jahres-Frist – das Wichtigste zuerst

Das Sozialamt kann Schenkungen rückwirkend für bis zu 10 Jahre anfechten. Wer das Haus kurz vor dem Pflegeheimeinzug an Kinder überträgt oder deutlich unter Marktwert verkauft, riskiert, dass das Sozialamt die Transaktion als Schenkung wertet und Rückforderungen stellt.

Konkret bedeutet das: Eine Immobilienübertragung an Kinder schützt das Vermögen nur, wenn sie mehr als 10 Jahre vor dem Pflegefall stattgefunden hat. Alles innerhalb dieser Frist kann rechtlich rückgängig gemacht werden – zu Lasten der Kinder.

## Pflegekosten im Überblick

Zur Einordnung der Dimension:
- **Ambulante Pflege zu Hause:** 800–3.500 € pro Monat
- **Teilstationäre Tagespflege:** 1.000–2.000 € pro Monat
- **Vollstationäre Pflegeheim:** 2.500–5.000 € pro Monat

Die gesetzliche Pflegeversicherung übernimmt je nach Pflegegrad einen festen Betrag. Was darüber hinausgeht – der sogenannte Eigenanteil – muss selbst oder durch Angehörige getragen werden.

## Das Haus an Kinder verkaufen: Wann ist das sinnvoll?

Wenn die 10-Jahres-Frist bereits abgelaufen ist oder die Pflege noch nicht unmittelbar bevorsteht, kann ein Verkauf der Immobilie an die eigenen Kinder eine sinnvolle Lösung sein.

**Voraussetzungen für einen sinnvollen Familienverkauf:**

- Verkauf zum tatsächlichen Marktwert (nicht unter Wert – das gilt als Schenkung)
- Professionelle Wertermittlung als Basis
- Notarielle Beurkundung wie jeder andere Verkauf
- Steuerliche und rechtliche Beratung vorab

**Was Eltern beim Familienverkauf absichern können:**

- Ein lebenslanges Wohnrecht im Grundbuch (kostenfrei im eigenen Zuhause bleiben)
- Einen Nießbrauch (auch Vermietung durch die Eltern möglich)
- Eine Leibrente (monatliche Zahlung der Kinder statt einmaliger Kaufpreis)

**Achtung Schenkungssteuer:** Wenn der Kaufpreis unter dem Marktwert liegt, wird die Differenz als Schenkung gewertet. Der Freibetrag für Kinder liegt bei 400.000 € pro Elternteil – darüber hinaus fallen je nach Betrag 7–30 % Schenkungssteuer an.

## Spekulationssteuer im Pflegefall

Wenn die Immobilie innerhalb von 10 Jahren nach dem ursprünglichen Kauf verkauft wird, kann Einkommensteuer auf den Gewinn anfallen – es sei denn:

- Die Immobilie wurde in den letzten zwei Kalenderjahren und im Jahr des Verkaufs selbst genutzt
- Die 10-Jahres-Frist ist abgelaufen

Im Pflegefall ist besondere Vorsicht geboten: Wenn jemand ins Heim zieht und die Immobilie sofort verkauft wird, gilt sie ggf. nicht mehr als "selbst genutzt" – mit steuerlichen Konsequenzen. Ein Steuerberater sollte diese Frage vor dem Verkauf klären.

## Unterhaltspflicht der Kinder

Können Eltern die Pflegekosten nicht selbst tragen, können Kinder ab einem bestimmten Eigeneinkommen zum Unterhalt herangezogen werden. Die Freibeträge sind zwar seit 2020 erhöht worden (Angehörigen-Entlastungsgesetz), aber völlig außen vor sind Kinder mit höherem Einkommen nicht.

Wenn das Haus verkauft und der Erlös für Pflege aufgebraucht wurde, reduziert sich der Druck auf die Kinder – das ist ein prakischer Vorteil des Immobilienverkaufs.

## Warum eine professionelle Bewertung so wichtig ist

Im Pflegefall ist der Immobilienwert in mehrfacher Hinsicht relevant:

- Als Grundlage für den Verkauf (zu niedrig = Steuerverlust, zu niedrig gegenüber Sozialamt = mögliche Nachforderungen)
- Als Basis für die Schenkungssteuerberechnung beim Familienverkauf
- Als Beleihungsgrundlage, wenn stattdessen ein Kredit aufgenommen werden soll

Online-Bewertungen reichen hier nicht aus. Wir erstellen eine fundierte Marktbewertung – kostenlos, persönlich vor Ort – und vermitteln bei Bedarf Kontakte zu Steuerberatern und Rechtsanwälten, die auf Pflegefälle spezialisiert sind.

## Unser Rat: Früh handeln

Wer erst aktiv wird, wenn die Pflege bereits begonnen hat, hat weniger Optionen. Die beste Zeit für eine Immobilienstrategie im Alter ist, bevor der Pflegefall eintritt. Dann lassen sich alle Modelle (Verkauf, Schenkung, Wohnrecht, Leibrente) noch ruhig abwägen – ohne Zeitdruck und mit allen steuerlichen Gestaltungsmöglichkeiten.
    `,
  },
  {
    slug: 'vermietete-wohnung-verkaufen',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Vermietete Wohnung verkaufen: Was Vermieter in Frankfurt wissen müssen',
    excerpt: 'Kauf bricht nicht Miete – das gilt auch beim Verkauf. Aber was bedeutet das konkret für den Preis, den Prozess und die Rechte des Mieters? Ein praxisnaher Überblick für Vermieter im Rhein-Main-Gebiet.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop',
    content: `
Eine vermietete Wohnung lässt sich jederzeit verkaufen – das ist das Recht des Eigentümers. Aber es gelten besondere Spielregeln: Der Mieter hat Rechte, der Preis ist anders als bei leerstehenden Objekten, und die Käufergruppe ist eine andere. Wer das kennt, kann eine vermietete Wohnung erfolgreich und konfliktfrei verkaufen.

## Der Grundsatz: Kauf bricht nicht Miete (§ 566 BGB)

Das ist das wichtigste Prinzip beim Verkauf einer vermieteten Immobilie. Der bestehende Mietvertrag geht automatisch auf den neuen Eigentümer über – mit allen Konditionen: Miethöhe, Kündigungsschutz, Mietdauer. Der Käufer wird also zum neuen Vermieter unter denselben Bedingungen.

Das bedeutet für Sie als Verkäufer: Der Mieter kann den Verkauf nicht verhindern, muss dem nicht zustimmen und muss auch nicht ausziehen – zumindest nicht allein aufgrund des Eigentümerwechsels.

## Das Vorkaufsrecht des Mieters (§ 577 BGB)

Ein wichtiger Sonderfall: Wenn eine bislang vermietete Wohnung **erstmals in eine Eigentumswohnung umgewandelt** und dann verkauft werden soll, hat der Mieter ein gesetzliches **Vorkaufsrecht**. Er darf die Wohnung zu denselben Konditionen kaufen wie der externe Käufer.

Das gilt nicht bei einem normalen Verkauf einer bereits bestehenden Eigentumswohnung. Wenn Ihre Wohnung schon als Eigentumswohnung im Grundbuch eingetragen ist und Sie sie einfach verkaufen wollen, entsteht kein Vorkaufsrecht.

Wichtig: Wenn das Vorkaufsrecht besteht und Sie es nicht ordnungsgemäß mitteilen, kann der Mieter den Kauf nachträglich anfechten – selbst nach dem Notartermin.

## Besichtigungen – die größte Herausforderung im Alltag

Der Mieter wohnt in der Wohnung. Sie brauchen aber potenzielle Käufer, die sich die Wohnung ansehen. Das ist der häufigste Konfliktpunkt.

Was rechtlich gilt:

- Der Mieter muss Besichtigungen in "zumutbarem Umfang" dulden – üblicherweise 1–2 Termine pro Woche, 2–3 Stunden, mit mindestens 24–48 Stunden Voranmeldung
- Der Vermieter darf nicht einfach mit Käufern auftauchen
- Der Mieter darf die Wohnung nicht verschmutzen oder beschädigen lassen, aber er muss nicht aufräumen oder besonders kooperativ sein

**Unser Rat:** Sprechen Sie früh und offen mit Ihrem Mieter. Erklären Sie, dass der Verkauf keine Kündigung bedeutet. Ein kooperativer Mieter ermöglicht professionelle Fotos und gute Besichtigungen – und damit einen besseren Preis.

## Preisabschlag: Wie viel weniger kostet eine vermietete Wohnung?

Eine vermietete Wohnung erzielt in der Regel weniger als eine leerstehende. Der Grund: Der Käufer kann sie nicht sofort selbst nutzen. Der Abschlag hängt von mehreren Faktoren ab:

- **Mietrendite:** Ist die aktuelle Miete nah am Marktniveau, ist der Abschlag gering
- **Miethöhe vs. Marktmiete:** Bei einer Miete weit unter Marktniveau ist der Abschlag höher, weil der Käufer lange warten muss, bis er marktgerecht vermieten kann
- **Mieterdauer und Kündigung:** Ein langjähriger Mieter mit starkem Kündigungsschutz reduziert den Wert für Eigennutzer erheblich
- **Lage:** In Frankfurt und starken Lagen wie Sachsenhausen, Nordend oder Westend ist der Abschlag geringer, da Investoren gezielt diese Märkte suchen

In der Praxis sind Abschläge von 5–20 % gegenüber einem leerstehenden Verkauf üblich.

## Eigenbedarfskündigung – wann ist das möglich?

Wenn der neue Eigentümer oder ein naher Angehöriger die Wohnung selbst nutzen will, kann er Eigenbedarf anmelden. Die Fristen sind je nach Mietdauer:

- Bis 5 Jahre Mietdauer: 3 Monate Kündigungsfrist
- 5–8 Jahre: 6 Monate Kündigungsfrist
- Über 8 Jahre: 9 Monate Kündigungsfrist

Eigenbedarfskündigung ist kein schnelles Instrument – und sie muss ernstgemeint und nachweisbar sein. Fingierter Eigenbedarf ist rechtlich riskant für den neuen Eigentümer.

## Welche Käufer kommen infrage?

Vermietete Wohnungen sprechen primär **Kapitalanleger** an:

- Privatanleger, die stabile Mietrenditen suchen
- Institutionelle Investoren (bei mehreren Einheiten)
- Käufer, die in Frankfurt investieren, aber nicht selbst dort wohnen wollen

Eigennutzer kommen seltener in Frage – aber sie kommen vor, wenn sie langfristig planen und bereit sind, auf den Auszug des Mieters zu warten.

Bei immovativInvest sprechen wir gezielt das Investorennetzwerk im Rhein-Main-Gebiet an und vermarkten vermietete Objekte mit den richtigen Kennzahlen: Mietrendite, Leerstandsrisiko, Mietentwicklungspotenzial.

## Strategischer Tipp: Leerstand vs. Verkauf mit Mieter

Manchmal lohnt sich die Überlegung: Können Sie einen Mietaufhebungsvertrag aushandeln? Wenn der Mieter gegen eine Abstandszahlung auszieht und die Wohnung dann leer verkauft werden kann, ist das für beide Seiten oft besser:

- Verkäufer: höherer Verkaufspreis, breitere Käuferbasis (auch Eigennutzer)
- Mieter: finanzielle Absicherung beim Umzug

Das klappt nicht immer – aber es ist immer einen Versuch wert, den Mieter offen anzusprechen.

## Unser Service

Wir bewerten vermietete Objekte realistisch – unter Berücksichtigung der aktuellen Miethöhe, der Marktmiete, des Mieter-Profils und der Lageentwicklung in Frankfurt. Wir organisieren Besichtigungen diskret und mieterfreundlich und haben ein aktives Netzwerk von Kapitalanlegern im Rhein-Main-Gebiet, die gezielt nach solchen Objekten suchen.
    `,
  },
  {
    slug: 'sanierungsbeduerftiges-haus-verkaufen',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Sanierungsbedürftiges Haus verkaufen: Erst renovieren oder so verkaufen?',
    excerpt: 'Ein Haus mit Sanierungsstau zu verkaufen klingt nach Wertverlust. Aber oft ist die Renovierung vor dem Verkauf keine gute Idee. Wie Sie ein sanierungsbedürftiges Haus richtig positionieren – und welche Käufer Sie suchen sollten.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    content: `
Viele Eigentümer mit einem renovierungsbedürftigen Haus stehen vor der gleichen Frage: Soll ich erst sanieren und dann mehr Geld erzielen – oder verkaufe ich lieber jetzt, wie es ist? Die Antwort hängt von Lage, Zustand und Ihrer persönlichen Situation ab. Aber in den meisten Fällen ist die Antwort überraschend eindeutig.

## Erst sanieren – oder nicht?

Die intuitive Annahme: Wer saniert, bekommt mehr. Das stimmt – aber nur selten mehr als die Sanierung gekostet hat. Der Grund: Käufer wollen einen Aufschlag für das Risiko, das Sie mit der Sanierung getragen haben. Sie zahlen nicht den vollen Marktwert einer frisch renovierten Immobilie, wenn die Arbeiten gerade erst fertig sind.

**Wann eine Renovierung vor dem Verkauf sinnvoll ist:**

- Kleine, günstige Maßnahmen mit großer optischer Wirkung (Streichen, neue Armaturen, Bodenbelag)
- Mängel, die die Finanzierbarkeit für Käufer blockieren (z. B. gravierender Schimmel, defekte Heizung)
- Wenn Sie Zeit haben und der Markt in einer Aufwärtsbewegung ist

**Wann eine Renovierung vor dem Verkauf nicht sinnvoll ist:**

- Große Sanierungen (Dach, Elektrik, Fenster, Heizung): Der Wertzuwachs deckt die Kosten selten vollständig
- Wenn Sie schnell verkaufen müssen
- Wenn der Zuschnitt oder die Lage das eigentliche Problem ist (dann hilft auch Renovierung nicht)
- Wenn Sie nicht wissen, was Käufer wirklich wollen

## Die richtige Käufergruppe für sanierungsbedürftige Häuser

Ein renovierungsbedürftiges Haus ist nicht für jeden Käufer interessant – aber für die richtigen Käufer ist es genau das richtige Objekt.

**Handwerker mit Eigennutz:** Handwerkermeister, Bauingenieure oder Elektriker, die selbst einziehen wollen und die Arbeiten teilweise selbst erledigen können. Der Sanierungsstau ist für sie Ersparnis, kein Problem.

**Junge Familien mit kleinerem Budget:** Wer 450.000 € zur Verfügung hat und eine frisch sanierte Wohnung für 550.000 € sucht, findet im sanierungsbedürftigen Objekt einen möglichen Einstieg – wenn sie bereit sind, Zeit und Energie zu investieren.

**Investoren und Projektentwickler:** Professionelle Käufer, die das Objekt selbst sanieren, anschließend vermieten oder verkaufen. Diese Käufer sind am effizientesten zu finden – sie kaufen schnell, finanzieren sicher und verhandeln hart.

**Bauträger:** Bei größeren Grundstücken oder Abriss-Neubaupotenzial kommen auch Bauträger in Frage, die das Grundstück mehr schätzen als die Bestandsimmobilie.

## Transparenz als Verkaufsstrategie

Der häufigste Fehler beim Verkauf eines sanierungsbedürftigen Hauses: Mängel verschweigen oder beschönigen. Das ist nicht nur rechtlich riskant (arglistige Täuschung ist auch nach dem Verkauf klagbar), sondern strategisch kontraproduktiv.

Käufer, die ein sanierungsbedürftiges Haus suchen, wissen das. Sie machen eine gründliche Besichtigung. Wer Mängel versteckt, verliert das Vertrauen – und den Käufer. Wer Mängel offen kommuniziert, schafft eine Vertrauensgrundlage und erhält ernsthafte Angebote von Käufern, die genau wissen, worauf sie sich einlassen.

Das bedeutet: Alle bekannten Mängel müssen dokumentiert und offengelegt werden. Dazu gehören strukturelle Schäden, Feuchtigkeit, veraltete Elektrik, Heizungsalter, Asbest (falls bekannt) und ähnliche Themen.

## Die richtige Preisfindung

Ein sanierungsbedürftiges Haus wird nicht nach dem Vergleichswert für renovierte Objekte bewertet. Stattdessen gilt:

**Marktwert = Wert renoviert − Sanierungskosten − Risikoaufschlag des Käufers**

Der Risikoaufschlag ist der Betrag, den Käufer verlangen, um das Risiko unbekannter Mehrkosten zu übernehmen. In der Praxis beträgt dieser 10–20 % der geschätzten Sanierungskosten.

Das bedeutet: Wenn die Sanierungskosten bei 150.000 € liegen, ist der Preis nicht einfach "Neuwertig minus 150.000 €", sondern "Neuwertig minus 150.000 € minus 15.000–30.000 € Risikoaufschlag".

Wir kennen den Markt für sanierungsbedürftige Objekte im Rhein-Main-Gebiet genau – und können einschätzen, welcher Preis realistisch ist und welche Käufer Sie ansprechen sollten.

## Checkliste: Was Sie vor dem Verkauf klären sollten

- **Alle Mängel dokumentieren** – was ist bekannt, was ist sichtbar?
- **Energieausweis beschaffen** – auch für sanierungsbedürftige Objekte Pflicht
- **Kostenschätzung einholen** – mindestens eine grobe Einschätzung der Sanierungskosten hilft Käufern bei der Entscheidung
- **Grundbuchauszug aktualisieren** – keine Überraschungen beim Notar
- **Baupläne zusammenstellen** – besonders wichtig für Umbaupotenziale
- **Rechtliche Besonderheiten prüfen** – Denkmalschutz? Nachbarrechte? Bebauungsplan?

## Was immovativInvest für Sie übernimmt

Wir beschaffen alle fehlenden Unterlagen kostenlos, erstellen ein professionelles Exposé, das den Zustand der Immobilie korrekt und verkaufsfördernd kommuniziert, und sprechen gezielt Käufergruppen an, die sanierungsbedürftige Objekte suchen. Wir filtern Interessenten vor und stellen sicher, dass Sie nur Besichtigungen mit ernst gemeintem Kaufinteresse haben.
    `,
  },
  {
    slug: 'mehrfamilienhaus-verkaufen-rhein-main',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Mehrfamilienhaus verkaufen im Rhein-Main-Gebiet: Alles was Eigentümer wissen müssen',
    excerpt: 'Ein Mehrfamilienhaus verkaufen ist komplexer als eine Eigentumswohnung. Andere Bewertungsmethoden, andere Käufer, andere Steuern – und andere Maklerkosten. Der vollständige Leitfaden für Frankfurt und Umgebung.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '9 Min.',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
    content: `
Der Verkauf eines Mehrfamilienhauses folgt anderen Gesetzmäßigkeiten als der Verkauf einer Eigentumswohnung oder eines Einfamilienhauses. Die Bewertung ist komplexer, die Käufer sind professioneller, die steuerlichen Fragen sind vielschichtiger – und die Maklerprovision funktioniert anders. Wer das weiß, ist besser vorbereitet.

## Wie wird ein Mehrfamilienhaus bewertet?

Bei Wohnhäusern und Eigentumswohnungen dominiert das **Vergleichswertverfahren**: Was wurde für ähnliche Objekte in der Nähe gezahlt? Bei Mehrfamilienhäusern gilt dagegen fast ausschließlich das **Ertragswertverfahren**.

**Das Ertragswertverfahren vereinfacht:**

Ertragswert = (Jahresrohertrag − Bewirtschaftungskosten) ÷ Liegenschaftszinssatz + Bodenwert

Der **Jahresrohertrag** sind alle Mieteinnahmen im Jahr – Ist-Mieten, nicht Marktmieten. Wenn Einheiten unter Marktniveau vermietet sind, reduziert das den Wert.

Die **Bewirtschaftungskosten** umfassen Instandhaltungskosten, Verwaltungskosten, Mietausfallwagnis und ggf. Abschreibungen.

Der **Liegenschaftszinssatz** ist der entscheidende Faktor: Er bestimmt, wie stark der Ertrag kapitalisiert wird. In Frankfurt liegen die Liegenschaftszinssätze für Mehrfamilienhäuser aktuell je nach Lage bei ca. 2,5–4,5 %. Je niedriger der Zinssatz, desto höher der errechnete Wert.

**Was das bedeutet:** Wer seine Immobilien dauerhaft unter Marktmiete vermietet hat, erzielt beim Verkauf einen niedrigeren Preis – auch wenn das Haus strukturell in gutem Zustand ist. Potenzielle Mietsteigerungen werden vom Markt nur teilweise anerkannt.

## Besonderheiten im Rhein-Main-Gebiet

**Keine Milieuschutz-Gebiete wie in Berlin**

Im Gegensatz zu München und Berlin gibt es in Frankfurt und dem Rhein-Main-Gebiet deutlich weniger Gebiete mit besonderen Erhaltungssatzungen. Das bedeutet: Modernisierungen und Mietanpassungen sind hier rechtlich einfacher umzusetzen – ein Vorteil für Käufer und damit für den Verkaufspreis.

**Starke Investorennachfrage**

Frankfurt als Finanzstandort zieht institutionelle und private Kapitalanleger an. Die Nachfrage nach vermieteten Mehrfamilienhäusern in guten Lagen (Sachsenhausen, Nordend, Bornheim, Westend, Ostend, Bockenheim) ist stabil – auch wenn die Zinsen gestiegen sind.

**Steigende Mieten als Werttreiber**

Die Nettokaltmieten in Frankfurt sind 2024/2025 weiter gestiegen. Wer jetzt verkauft, profitiert davon, dass Käufer mit höheren zukünftigen Mieteinnahmen rechnen und entsprechend höhere Preise akzeptieren.

## Die Maklerkosten beim Mehrfamilienhaus

Das ist ein wichtiger Unterschied zum Wohnungskauf: Das **Halbteilungsprinzip** (Käufer und Verkäufer teilen sich die Provision), das seit 2020 für den Verkauf von Einfamilienhäusern und Eigentumswohnungen gilt, **gilt nicht für Mehrfamilienhäuser**.

Beim Mehrfamilienhaus können Käufer und Verkäufer die Provisionsteilung frei verhandeln. In der Praxis trägt beim gewerblichen Verkauf häufig der Käufer einen größeren Teil oder sogar die gesamte Provision. Wir besprechen die Konditionen vor der Beauftragung transparent mit Ihnen.

## Welche Unterlagen Sie brauchen

Für den Verkauf eines Mehrfamilienhauses sind deutlich mehr Dokumente notwendig als beim Einfamilienhausverkauf:

- Grundbuchauszug (alle Abteilungen)
- Flurkarte und Lageplan
- Mietverträge aller Einheiten (aktuell und vollständig)
- Mieterliste mit aktuellen Nettokaltmieten und Nebenkosten
- Betriebskostenabrechnungen der letzten 3 Jahre
- Energieausweis (Verbrauchsausweis oder Bedarfsausweis)
- Baupläne und Grundrisse aller Einheiten
- Baugenehmigungen und Abnahmebescheinigungen
- Nachweise über Instandhaltungen und Modernisierungen
- Auflistung laufender Wartungsverträge

Ohne vollständige Mietunterlagen verzögert sich der Notartermin – und professionelle Käufer machen die Unterlagenprüfung (Due Diligence) zur Bedingung.

Bei immovativInvest übernehmen wir die Beschaffung fehlender Unterlagen kostenlos.

## Steuerliche Besonderheiten beim MFH-Verkauf

**Spekulationssteuer**

Wie bei anderen Immobilien: Bei Verkauf innerhalb von 10 Jahren nach Kauf fällt Einkommensteuer auf den Gewinn an. Bei Mehrfamilienhäusern, die vermietet waren, gibt es keine Eigennutzungs-Ausnahme.

**Gewerblicher Grundstückshandel**

Wenn Sie innerhalb von 5 Jahren mehr als 3 Immobilien verkaufen (die sogenannte "Drei-Objekt-Grenze"), gilt das Finanzamt das als gewerblichen Grundstückshandel. Die Folge: Einkommensteuer statt Abgeltungssteuer, und der Verkaufserlös unterliegt der Gewerbesteuer. Das kann bei mehreren Objekten erhebliche Konsequenzen haben – ein Steuerberater sollte hier frühzeitig einbezogen werden.

## Die 4 Phasen des Verkaufs

**Phase 1: Vorbereitung (2–4 Wochen)**
Bewertung nach Ertragswertverfahren, Unterlagen zusammenstellen, Exposé erstellen mit Renditekennzahlen

**Phase 2: Vermarktung (4–8 Wochen)**
Gezieltes Ansprechen von Investoren – nicht nur Portale, sondern aktives Netzwerk. Mehrfamilienhäuser werden häufig "off-market" verkauft

**Phase 3: Verhandlung und Due Diligence (2–4 Wochen)**
Professionelle Käufer führen detaillierte Prüfungen durch. Unterlagen müssen vollständig und korrekt sein

**Phase 4: Notartermin und Abwicklung (4–8 Wochen)**
Wie beim normalen Verkauf: Auflassungsvormerkung, Kaufpreiszahlung, Eigentumsumschreibung, Übergabe

## Was immovativInvest für Sie tut

Wir bewerten Ihr Mehrfamilienhaus nach dem Ertragswertverfahren und erstellen eine professionelle Investoren-Präsentation mit allen relevanten Renditekennzahlen. Wir sprechen unser Netzwerk von Kapitalanlegern und Investoren im Rhein-Main-Gebiet direkt an – ohne dass Ihr Objekt öffentlich sichtbar sein muss, wenn Sie das bevorzugen.
    `,
  },
  {
    slug: 'haus-verkaufen-wohnen-bleiben',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Haus verkaufen und wohnen bleiben: 4 Modelle im Vergleich',
    excerpt: 'Das Haus verkaufen, aber weiter im eigenen Zuhause wohnen – das ist möglich. Wohnrecht, Nießbrauch, Leibrente oder Sale-and-Rent-Back: Welches Modell passt zu Ihnen? Und wie viel weniger Geld bekommen Sie dafür?',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=600&fit=crop',
    content: `
Das eigene Haus ist das größte Kapitalanlage der meisten Menschen – aber man kommt nicht einfach dran, solange man darin wohnt. Das Konzept "Haus verkaufen und wohnen bleiben" löst genau dieses Problem: Sie erschließen das gebundene Kapital, ohne Ihr Zuhause aufgeben zu müssen.

Es gibt vier rechtlich anerkannte Modelle – mit sehr unterschiedlichen Vor- und Nachteilen.

## Modell 1: Wohnrecht oder Nießbrauch

Das ist die klassische Variante. Sie verkaufen die Immobilie, lassen sich aber ein lebenslanges Wohnrecht oder einen Nießbrauch im Grundbuch eintragen.

**Wohnrecht (§ 1093 BGB):** Sie dürfen die Immobilie weiterhin selbst bewohnen – lebenslang, notariell gesichert. Sie dürfen sie aber nicht vermieten.

**Nießbrauch (§ 1030 BGB):** Umfangreicher als das Wohnrecht. Sie dürfen die Immobilie selbst nutzen oder vermieten und die Mieteinnahmen behalten. Sie tragen aber auch die laufenden Kosten.

**Der Preis:**
Wohnrecht und Nießbrauch reduzieren den Kaufpreis erheblich – weil der Käufer die Immobilie nicht sofort nutzen kann. Die Berechnung erfolgt auf Basis des jährlichen Mietwerts und der statistischen Lebenserwartung.

Vereinfachtes Beispiel:
- Immobilienwert: 600.000 €
- Ortsübliche Jahresmiete: 18.000 €
- Statistisch verbleibende Lebenserwartung bei 72 Jahren: ca. 16 Jahre
- Kapitalwert des Wohnrechts: ca. 18.000 € × 11,5 (Vervielfältiger) = ca. 207.000 €
- Kaufpreis: 600.000 − 207.000 = ca. 393.000 €

Der Abschlag liegt in der Praxis bei **20–40 %** des Verkehrswerts, je nach Alter und lokalem Mietwert.

**Vorteile:**
- Lebenslanges Wohnrecht notariell gesichert
- Einmaliger Kapitalzufluss
- Keine Abhängigkeit von monatlichen Zahlungen

**Nachteile:**
- Deutlich niedrigerer Kaufpreis als beim normalen Verkauf
- Wer jung ist und lange lebt, "verliert" viel gegenüber einem späteren normalen Verkauf
- Instandhaltungspflichten müssen klar geregelt sein

## Modell 2: Leibrente (Immobilienverrentung)

Statt eines Einmalbetrags erhalten Sie eine monatliche Rente – lebenslang. Der Käufer "kauft" die Immobilie, zahlt aber in Raten bis zu Ihrem Tod.

Die Leibrentenhöhe hängt ab von:
- Aktueller Verkehrswert der Immobilie
- Ihrem Alter (Lebenserwartung laut Sterbetafel)
- Ob ein Wohnrecht eingetragen wird oder nicht

**Steuer auf die Leibrente:**
Leibrenten sind nicht vollständig steuerfrei. Der sogenannte **Ertragsanteil** wird besteuert – bei einem 70-jährigen Verkäufer beträgt er ca. 15 % der monatlichen Zahlung. Dieser Anteil fließt in die Einkommensteuerberechnung ein.

**Risiko:** Sie bekommen nur Geld, solange Sie leben. Wer früh stirbt, hat insgesamt weniger erhalten als beim Einmalverkauf. Wer lange lebt, erhält mehr.

**Vorteile:**
- Monatliches Zusatzeinkommen für Lebenshaltungskosten, Pflege etc.
- Keine Sorge um die Verwaltung des Verkaufserlöses
- Kombinierbar mit Wohnrecht im Grundbuch

**Nachteile:**
- Abhängigkeit vom Käufer (Zahlungsrisiko)
- Keine großen Beträge für größere Ausgaben
- Steuerpflichtiger Ertragsanteil

## Modell 3: Sale-and-Rent-Back

Sie verkaufen die Immobilie zum vollen Marktpreis – ohne Abschlag für Wohnrecht – und mieten sie anschließend als normaler Mieter zurück.

**Vorteil:** Sie erhalten den vollen Verkaufspreis. Kein Abschlag, kein Wohnrechtskalkulat.

**Nachteil:** Sie sind ab sofort Mieter – mit allen Risiken des Mietrechts. Eigenbedarfskündigung, Mieterhöhungen, Modernisierungsmaßnahmen. Zwar schützt das Mietrecht Sie umfassend – aber Sie haben keine grundbuchlich gesicherte Position mehr.

**Wichtig:** Manche Anbieter dieses Modells haben AGB, die nach einer Anzahl von Jahren ein Kündigungsrecht vorsehen. Lassen Sie jeden Mietvertrag bei diesem Modell anwaltlich prüfen.

**Steuerlich:** Normaler Kaufvorgang – Spekulationssteuer-Prüfung wie immer. Die Mietzahlungen, die Sie anschließend leisten, sind nicht steuerlich absetzbar.

## Modell 4: Teilverkauf

Sie verkaufen nur einen Teil der Immobilie – beispielsweise 50 % – an einen Investor und erhalten dafür einen einmaligen Betrag. Sie bleiben Miteigentümer der anderen 50 % und zahlen dem Käufer eine monatliche Nutzungsgebühr.

**Beispiel:**
- Immobilienwert: 800.000 €
- Verkaufter Anteil: 50 % = 400.000 €
- Monatliche Nutzungsgebühr (ca. 5–6 % p.a. auf den verkauften Anteil): ca. 1.667–2.000 €/Monat

**Problem:** Die monatliche Nutzungsgebühr frisst einen erheblichen Teil des erzielten Kapitalertrags auf. Und beim späteren Gesamtverkauf (z. B. durch Ihre Erben) hat der Investor mitzureden.

Teilverkaufsmodelle wurden in den letzten Jahren von bestimmten Anbietern aggressiv vermarktet – mit zum Teil intransparenten Konditionen. Lassen Sie solche Angebote unbedingt von einem unabhängigen Finanzberater oder Notar prüfen, bevor Sie unterschreiben.

## Für wen lohnt sich welches Modell?

**Wohnrecht/Nießbrauch:** Geeignet, wenn Sie einen einmaligen Kapitalbedarf haben (z. B. Pflegekosten, Schulden), sicher im Eigenheim wohnen wollen und mit dem Preisabschlag leben können.

**Leibrente:** Geeignet, wenn Sie monatliches Zusatzeinkommen brauchen und kein großes Kapitalpolster benötigen.

**Sale-and-Rent-Back:** Geeignet, wenn Sie den vollen Marktwert realisieren wollen und das Mietrecht als ausreichende Absicherung akzeptieren.

**Teilverkauf:** In den wenigsten Fällen die beste Option – oft teuer durch Nutzungsgebühren und intransparent in den Konditionen.

## Unser Rat

Diese Modelle sind komplex – und jede Entscheidung hat langfristige finanzielle und rechtliche Konsequenzen. Wir besprechen alle Optionen mit Ihnen offen und vermitteln unabhängige Berater für steuerliche und rechtliche Fragen. Wir selbst haben kein Interesse daran, ein bestimmtes Modell zu empfehlen – unser Ziel ist Ihr bestmögliches Ergebnis.
    `,
  },
  {
    slug: 'steuern-beim-immobilienverkauf',
    category: 'Recht & Steuern',
    badge: 'Steuern',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Welche Steuern fallen beim Immobilienverkauf an? Der Überblick für Hessen',
    excerpt: 'Spekulationssteuer, Gewerbesteuer, Grunderwerbsteuer – beim Immobilienverkauf lauern steuerliche Fallstricke. Welche Steuern wann anfallen und wie Sie sie legal vermeiden.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
Beim Immobilienverkauf denken die meisten zuerst an den Erlös – aber für viele Eigentümer ist die wichtigere Frage: Was bleibt davon nach Steuern übrig? Zwei Steuerarten sind entscheidend: die Spekulationssteuer und – in bestimmten Fällen – die Gewerbesteuer. Wer beides kennt, kann legal planen und oft Tausende Euro sparen.

## Steuer 1: Die Spekulationssteuer

Die Spekulationssteuer ist keine eigene Steuerart, sondern die Einkommensteuer auf den Veräußerungsgewinn aus privaten Immobilienverkäufen. Der offizielle Begriff lautet "privates Veräußerungsgeschäft" nach § 23 EStG.

**Wann fällt sie an?**

Die Spekulationssteuer greift, wenn Sie eine Immobilie innerhalb von 10 Jahren nach dem Kauf verkaufen – und dabei einen Gewinn erzielen. Maßgeblich ist das Datum des jeweiligen notariellen Kaufvertrags (nicht der Eigentumsübergang im Grundbuch).

**Wie hoch ist sie?**

Die Steuer entspricht Ihrem persönlichen Einkommensteuersatz. Der liegt je nach Jahreseinkommen zwischen 14 % und 45 %. Dazu kommt ggf. der Solidaritätszuschlag (für höhere Einkommen) und Kirchensteuer.

Beispiel: Kaufpreis 2016 für 280.000 €, Verkauf 2023 für 420.000 €, Gewinn 140.000 €, persönlicher Steuersatz 35 % → Spekulationssteuer ca. 49.000 €.

**Was ist abziehbar?**

Der steuerpflichtige Gewinn ist nicht der Bruttogewinn. Sie dürfen abziehen:

- Anschaffungskosten (Kaufpreis + Nebenkosten beim ursprünglichen Kauf)
- Kosten für wertsteigernde Modernisierungen und Renovierungen
- Maklerprovision beim Verkauf
- Notarkosten des Verkaufsvertrags
- Kosten für Grundbuchlöschung
- Gutachterkosten, Vermarktungskosten

Je mehr abzugsfähige Kosten, desto geringer der steuerpflichtige Gewinn.

**Wann entfällt die Spekulationssteuer?**

Zwei Ausnahmen – beide sehr bedeutsam:

**Ausnahme 1: 10-Jahres-Frist**
Wenn zwischen Kauf und Verkauf mehr als 10 Jahre liegen, ist der Gewinn vollständig steuerfrei. Kein Antrag, keine Bedingungen. Diese Frist ist der wichtigste Planungsparameter für Immobilieninvestoren.

**Ausnahme 2: Eigennutzung**
Wenn Sie die Immobilie im Verkaufsjahr und in den beiden vorangegangenen Kalenderjahren selbst genutzt haben, entfällt die Spekulationssteuer – auch wenn die 10-Jahres-Frist noch nicht abgelaufen ist. "Selbst genutzt" bedeutet: ausschließlich zu eigenen Wohnzwecken (nicht vermietet, nicht gewerblich genutzt).

Wichtig: Es gilt das Kalenderjahr. Wenn Sie zum 31. Dezember eines Jahres eingezogen sind, zählt dieses Jahr bereits als volles Nutzungsjahr.

**Freigrenze: 1.000 Euro**
Liegt der gesamte Gewinn aus privaten Veräußerungsgeschäften eines Jahres unter 1.000 €, bleibt er steuerfrei.

## Steuer 2: Die Gewerbesteuer (gewerblicher Grundstückshandel)

Wer innerhalb von 5 Jahren mehr als 3 Immobilien kauft und verkauft, überschreitet die sogenannte Drei-Objekt-Grenze und wird vom Finanzamt als gewerblicher Grundstückshändler eingestuft.

Die Konsequenz ist erheblich:

- Der Gewinn unterliegt nicht der günstigen Abgeltungssteuer, sondern der regulären Einkommensteuer
- Zusätzlich fällt Gewerbesteuer an (in Frankfurt liegt der Hebesatz bei ca. 460 %, was eine effektive Gewerbesteuerbelastung von ca. 16 % ergibt)
- Die 10-Jahres-Freistellung gilt nicht mehr
- Alle Immobilienverkäufe – auch ältere – können rückwirkend als gewerblich eingestuft werden

**Was zählt zur Drei-Objekt-Grenze?**

Gezählt werden Immobilien, die innerhalb von 5 Jahren gekauft und verkauft werden – unabhängig von der Art (Wohnung, Haus, Grundstück). Immobilien, die Sie mehr als 10 Jahre halten, zählen nicht mit.

**Tipp:** Wenn Sie mehrere Objekte besitzen, sprechen Sie mit einem Steuerberater, bevor Sie verkaufen. Die Reihenfolge und der Zeitpunkt der Verkäufe können erheblichen Einfluss auf die Steuerlast haben.

## Was zahlt der Käufer? Die Grunderwerbsteuer in Hessen

Das ist keine Steuer für den Verkäufer – aber wichtig für die Preisfindung. In Hessen beträgt die Grunderwerbsteuer **6 %** des Kaufpreises. Das ist einer der höchsten Sätze in Deutschland (Bayern: 3,5 %, Hamburg: 5,5 %).

Bei einem Kaufpreis von 500.000 € zahlt der Käufer in Hessen 30.000 € Grunderwerbsteuer – allein für diesen Posten. Das beeinflusst die Finanzierbarkeit und damit die Zahlungsbereitschaft von Käufern.

## Geerbte Immobilien: Besonderheiten

Wenn Sie eine geerbte Immobilie verkaufen, übernehmen Sie die Spekulationsfrist des Erblassers. Hatte der Erblasser die Immobilie bereits seit mehr als 10 Jahren, ist Ihr Verkauf steuerfrei – auch wenn die Erbschaft erst letztes Jahr stattgefunden hat.

Wenn der Erblasser die Immobilie selbst bewohnt hat, gilt ebenfalls die Eigennutzungsausnahme – für das Todesjahr und die zwei Vorjahre.

## Unser Rat: Immer einen Steuerberater einbeziehen

Die steuerlichen Auswirkungen eines Immobilienverkaufs können je nach Situation viele Tausend Euro ausmachen – in beide Richtungen. Wir empfehlen, vor jedem Verkauf mit einem Steuerberater zu sprechen. Wir vermitteln bei Bedarf gerne Kontakte zu auf Immobilien spezialisierten Steuerberatern im Rhein-Main-Gebiet.
    `,
  },
  {
    slug: 'spekulationsfrist-immobilien',
    category: 'Recht & Steuern',
    badge: 'Steuern',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Spekulationsfrist bei Immobilien: Alles zur 10-Jahres-Regel',
    excerpt: 'Wer seine Immobilie innerhalb von 10 Jahren verkauft, zahlt Steuern auf den Gewinn. Wer länger wartet, nicht. Was genau die Spekulationsfrist bedeutet, wie sie berechnet wird – und wann Ausnahmen gelten.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    content: `
Die Spekulationsfrist ist eines der wichtigsten steuerlichen Konzepte beim Immobilienverkauf – und gleichzeitig eines der am häufigsten missverstandenen. Wer es kennt und beachtet, kann Tausende Euro Steuern sparen. Wer es ignoriert, zahlt manchmal mehr Steuern als erwartet.

## Was ist die Spekulationsfrist?

Die Spekulationsfrist bezeichnet den Zeitraum, innerhalb dessen ein Immobilienverkauf steuerpflichtig ist. In Deutschland beträgt sie **10 Jahre** für Immobilien.

Das Prinzip:
- Verkauf innerhalb von 10 Jahren nach Kauf → Gewinn ist steuerpflichtig (Spekulationssteuer = Einkommensteuer auf den Gewinn)
- Verkauf nach Ablauf von 10 Jahren → Gewinn ist vollständig steuerfrei

Die 10-Jahres-Frist gilt für alle privat gehaltenen Immobilien – Eigentumswohnungen, Einfamilienhäuser, Mehrfamilienhäuser, unbebaute Grundstücke.

## Wie wird die Frist berechnet?

Maßgeblich ist das Datum des **notariellen Kaufvertrags** – sowohl beim Kauf als auch beim Verkauf. Nicht das Datum der Grundbucheintragung, nicht das Datum der Zahlung.

**Beispiel:**
- Kaufvertrag: 15. März 2015
- Verkaufsvertrag: 20. April 2025
- Zeitraum: 10 Jahre und 36 Tage → steuerfrei ✓

- Kaufvertrag: 15. März 2015
- Verkaufsvertrag: 10. Februar 2025
- Zeitraum: 9 Jahre und 11 Monate → steuerpflichtig ✗

Der Unterschied von wenigen Wochen kann Tausende Euro kosten.

## Die Berechnung der Spekulationssteuer

Wenn die Frist noch läuft, wird der Gewinn mit dem persönlichen Einkommensteuersatz besteuert. Der Steuersatz hängt von Ihrem Jahreseinkommen ab:

- Bis ca. 11.784 € Jahreseinkommen: 0 % (Grundfreibetrag)
- Darüber: 14–45 % (progressiv)
- Für die meisten Berufstätigen mit mittlerem bis höherem Einkommen: 30–45 %

**Formel:**

Steuerpflichtiger Gewinn = Verkaufspreis − Kaufpreis − Anschaffungsnebenkosten − abzugsfähige Kosten

Abzugsfähige Kosten:
- Notarkosten und Grundbuchkosten beim ursprünglichen Kauf
- Maklerprovision beim ursprünglichen Kauf
- Wertsteigernde Renovierungen und Modernisierungen (Herstellungskosten)
- Kosten des Verkaufs (Maklerprovision, Notar, Inserate)

**Nicht abzugsfähig:**
- Erhaltungsaufwand (Reparaturen, die den ursprünglichen Zustand erhalten)
- Kosten des laufenden Betriebs

**Rechenbeispiel:**
- Kaufpreis 2018: 350.000 €
- Kaufnebenkosten: 25.000 €
- Modernisierung Küche und Bad: 40.000 €
- Verkaufspreis 2024: 520.000 €
- Makler- und Notarkosten Verkauf: 12.000 €
- Steuerpflichtiger Gewinn: 520.000 − 350.000 − 25.000 − 40.000 − 12.000 = **93.000 €**
- Bei 35 % Steuersatz: ca. **32.550 € Spekulationssteuer**

## Die Eigennutzungsausnahme – der häufigste Ausweg

Selbst wenn die 10-Jahres-Frist noch nicht abgelaufen ist, bleibt der Verkauf steuerfrei, wenn Sie die Immobilie selbst genutzt haben.

Die Bedingung: Die Immobilie muss im **Verkaufsjahr** und in den **zwei vorangegangenen Kalenderjahren** ausschließlich zu eigenen Wohnzwecken genutzt worden sein.

Entscheidend: Es gilt das Kalenderjahr, nicht 24 volle Monate. Wer am 15. Dezember 2022 eingezogen ist, nutzt die Wohnung für 2022, 2023 und kann schon ab Januar 2024 steuerfrei verkaufen – obwohl erst ca. 13 Monate vergangen sind.

**Was zählt als "Selbstnutzung"?**
- Hauptwohnsitz der Eigentümer
- Auch Ferienwohnungen, die ausschließlich selbst genutzt werden (keine Vermietung)
- Auch wenn Kinder (ohne Miete) in der Immobilie leben

**Was zählt nicht:**
- Teilweise Vermietung einer Wohnung
- Vermietung an Dritte, auch vorübergehend

## Geerbte Immobilien: günstige Sonderregel

Bei Erbschaften gilt eine für Erben vorteilhafte Regelung: Die Spekulationsfrist des Erblassers wird fortgeführt. Wenn der Erblasser die Immobilie vor mehr als 10 Jahren gekauft hat, ist der Verkauf durch den Erben sofort steuerfrei – unabhängig davon, wann die Erbschaft stattgefunden hat.

Hatte der Erblasser die Immobilie selbst bewohnt, gilt auch die Eigennutzungsausnahme weiter – für das Todesjahr und die zwei Vorjahre.

## Freigrenze: 1.000 Euro

Liegt der gesamte Gewinn aus privaten Veräußerungsgeschäften eines Jahres (also auch andere Wertpapiere etc.) unter 1.000 €, bleibt er steuerfrei. Diese Grenze ist bei Immobilien mit signifikantem Wertzuwachs selten relevant, aber es gibt sie.

## Was sich 2026 ändert – nichts

Die 10-Jahres-Spekulationsfrist und die Eigennutzungsausnahme bleiben 2026 unverändert. Es gibt Diskussionen über eine mögliche Reform, aber zum aktuellen Stand gilt das bestehende Recht.

## Unser Rat

Wenn Sie über einen Verkauf nachdenken und die 10-Jahres-Frist in absehbarer Zeit abläuft: Warten kann sich lohnen. Ein Verkauf drei Monate zu früh kann bei einem Gewinn von 100.000 € und 35 % Steuersatz 35.000 € kosten – die man durch kurzes Warten hätte vermeiden können.

Wir helfen Ihnen, den optimalen Zeitpunkt zu finden – und empfehlen bei Bedarf einen auf Immobilien spezialisierten Steuerberater im Rhein-Main-Gebiet.
    `,
  },
  {
    slug: 'immobilienverkauf-steuerfrei',
    category: 'Recht & Steuern',
    badge: 'Steuern',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Wann ist der Verkauf einer Immobilie steuerfrei? Die drei Wege',
    excerpt: 'Immobiliengewinne müssen nicht versteuert werden – wenn man die Regeln kennt. Drei Szenarien, in denen Sie Ihre Immobilie legal steuerfrei verkaufen können.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    content: `
Der Gewinn aus dem Verkauf einer Immobilie kann vollständig steuerfrei sein. Das ist kein Steuertrick, kein Graubereich – sondern das geltende deutsche Steuerrecht. Drei klare Szenarien machen einen steuerfreien Verkauf möglich.

## Szenario 1: Die 10-Jahres-Frist ist abgelaufen

Das ist die einfachste und verlässlichste Route zur Steuerfreiheit: Wenn zwischen dem notariellen Kaufvertrag und dem notariellen Verkaufsvertrag mehr als 10 Jahre liegen, ist der gesamte Gewinn steuerfrei.

Keine Anträge, keine Bedingungen, keine Nachweise. Die Frist läuft automatisch.

**Was zählt:** Das Datum des Kaufvertrags beim Erwerb – nicht die Grundbucheintragung, nicht die Übergabe, nicht die Zahlung. Gleiches gilt für den Verkauf: maßgeblich ist das Datum der Beurkundung.

**Tipp für die Praxis:** Wenn Ihre 10-Jahres-Frist in den nächsten 6–12 Monaten ausläuft, lohnt es sich fast immer zu warten. Der Zeitverlust ist gering – der Steuervorteil kann je nach Gewinn fünfstellig sein.

## Szenario 2: Eigennutzung in den letzten drei Jahren

Wer seine Immobilie im Verkaufsjahr und in den beiden vorangegangenen Kalenderjahren selbst genutzt hat, kann sie steuerfrei verkaufen – unabhängig davon, wie lange er sie bereits besitzt.

**Wichtig:** Es gilt das Kalenderjahr, nicht 24 volle Monate. Wer am 20. November 2023 eingezogen ist, nutzt die Immobilie für:
- 2023 (Einzugsjahr)
- 2024
- 2025

Und könnte sie bereits ab dem 1. Januar 2025 steuerfrei verkaufen – obwohl er erst ca. 14 Monate darin gewohnt hat.

**Was gilt als Selbstnutzung?**
- Ausschließliche Eigennutzung als Hauptwohnsitz
- Auch: Ferienwohnung, die nur selbst genutzt und nie vermietet wurde
- Auch: Kinder wohnen mietfrei darin (nicht dauerhaft Dritte)

**Was gilt nicht:**
- Vermietung, auch nur vorübergehend
- Gewerbliche Nutzung, auch teilweise
- Leerstand

**Wichtige Falle:** Wer eine Immobilie jahre lang vermietet hat und kurz vor dem Verkauf selbst einzieht, muss volle drei Kalenderjahre Eigennutzung nachweisen, um steuerfrei zu verkaufen.

## Szenario 3: Geerbte oder geschenkte Immobilien – mit Übernahme der Frist

Bei Erbschaften und Schenkungen wird die Spekulationsfrist des Vorbesitzers fortgeführt.

**Bei Erbschaften:** Hatte der Erblasser die Immobilie bereits länger als 10 Jahre, ist der Verkauf durch den Erben sofort steuerfrei – auch wenn der Erbe sie erst kürzlich geerbt hat. Hat der Erblasser sie erst seit 5 Jahren besessen, hat der Erbe noch 5 Jahre Restfrist.

**Bei Schenkungen:** Gleiches gilt. Die Frist des Schenkenden wird übernommen.

**Eigennutzung des Erblassers:** Hatte der Erblasser die Immobilie im Todesjahr und in den zwei Vorjahren selbst genutzt, gilt diese Eigennutzung für die Steuerbefreiung weiter.

**Hinweis zur Erbschaftsteuer:** Die Steuerfreiheit beim Verkauf (Spekulationssteuer) ist unabhängig von der Erbschaftsteuer. Beides sind separate steuerliche Fragen. Die Erbschaftsteuer-Freibeträge sind großzügig: Kinder 400.000 € pro Elternteil, Ehepartner 500.000 €. Viele Erbschaften bleiben daher erbschaftsteuerfrei – auch wenn die Immobilie werthaltig ist.

## Was trotzdem immer anfallen kann

Auch bei steuerfreiem Verkauf gibt es Kosten, die Sie kennen sollten:

**Vorfälligkeitsentschädigung:** Wenn noch ein Kredit auf der Immobilie läuft und Sie ihn vorzeitig ablösen müssen, kann die Bank eine Entschädigung verlangen. Das ist keine Steuer, aber ein realer Kostenpunkt.

**Grunderwerbsteuer für den Käufer:** In Hessen zahlt der Käufer 6 % Grunderwerbsteuer. Das ist keine Belastung für Sie als Verkäufer, beeinflusst aber die Gesamtkosten des Käufers und damit seine Zahlungsbereitschaft.

## Drei-Objekt-Grenze: Steuerfrei nur im Privatbereich

Die Steuerfreiheit gilt nur für private Verkäufe. Wer innerhalb von 5 Jahren mehr als 3 Immobilien kauft und verkauft, wird als gewerblicher Grundstückshändler eingestuft – mit erheblichen steuerlichen Konsequenzen. Die Drei-Objekt-Grenze ist eine der wichtigsten Grenzen im deutschen Immobiliensteuerrecht.

## Unser Rat

Wenn Sie unsicher sind, ob Ihr Verkauf steuerfrei ist: Sprechen Sie mit einem Steuerberater, bevor Sie den Makler beauftragen. Die Antwort auf diese Frage beeinflusst möglicherweise den Zeitpunkt Ihres Verkaufs – und damit Zehntausende Euro.

Wir bei immovativInvest beantworten Ihnen gerne erste Fragen und vermitteln bei Bedarf Steuerberater-Kontakte, die auf Immobilienverkäufe im Rhein-Main-Gebiet spezialisiert sind.
    `,
  },
  {
    slug: 'notarkosten-grundbuchkosten-hessen',
    category: 'Recht & Steuern',
    badge: 'Kosten',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Notarkosten & Grundbuchkosten in Hessen: Was kostet der Immobilienverkauf wirklich?',
    excerpt: 'Notarkosten sind bundesweit geregelt – aber die Grunderwerbsteuer variiert stark. In Hessen zahlen Käufer 6 %. Was Käufer und Verkäufer in Frankfurt wirklich zahlen und wie man Kosten spart.',
    author: 'Mazlum Külahci',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    content: `
Beim Immobilienkauf in Hessen kommen auf Käufer und Verkäufer Nebenkosten zu, die oft unterschätzt werden. Der größte Posten ist die Grunderwerbsteuer – und Hessen gehört hier zu den teuersten Bundesländern. Wir erklären alle Kostenblöcke und zeigen, wo sich sparen lässt.

## Die Grunderwerbsteuer in Hessen: 6 %

Das ist der größte Kostenpunkt für Käufer – und ein entscheidender Faktor für die Finanzierbarkeit von Immobilien im Rhein-Main-Gebiet.

In Hessen beträgt die Grunderwerbsteuer **6 % des Kaufpreises**. Das ist einer der höchsten Sätze in Deutschland:

| Bundesland | Grunderwerbsteuer |
|---|---|
| Bayern | 3,5 % |
| Hamburg | 5,5 % |
| Baden-Württemberg | 5,0 % |
| **Hessen** | **6,0 %** |
| Nordrhein-Westfalen | 6,5 % |
| Brandenburg | 6,5 % |

Bei einem Kaufpreis von 500.000 € zahlt ein Käufer in Hessen **30.000 €** Grunderwerbsteuer – im Vergleich zu nur 17.500 € in Bayern. Das sind 12.500 € mehr allein durch den Bundeslandunterschied.

Die Grunderwerbsteuer zahlt ausschließlich der Käufer. Als Verkäufer sind Sie davon nicht betroffen – aber sie beeinflusst, wie viel Käufer insgesamt aufbringen müssen, und damit ihre Zahlungsbereitschaft.

## Notarkosten: Bundesweit einheitlich geregelt

Anders als die Grunderwerbsteuer sind Notarkosten nicht verhandelbar. Sie sind im Gerichts- und Notarkostengesetz (GNotKG) bundesweit einheitlich geregelt. In Hessen, Bayern oder Hamburg zahlen Sie beim selben Kaufpreis identische Notargebühren.

**Typische Notarkosten beim Kauf:**
- Beurkundung des Kaufvertrags: ca. 0,4–0,8 % des Kaufpreises
- Auflassungsvormerkung und Eigentumsumschreibung: ca. 0,3–0,5 %
- Gesamt Notar: ca. **0,8–1,5 % des Kaufpreises**

**Beispiel bei 500.000 € Kaufpreis:**
- Notargebühren: ca. 4.000–7.500 €

Notarkosten trägt üblicherweise der Käufer – außer für spezielle Leistungen, die der Verkäufer veranlasst (z. B. Löschung einer Grundschuld).

## Grundbuchkosten: Separat vom Notar

Das Grundbuchamt erhebt eigene Gebühren für Eintragungen und Löschungen. Diese sind ebenfalls nach GNotKG bundesweit einheitlich.

**Typische Grundbuchkosten:**
- Eintragung der Auflassungsvormerkung
- Eigentumsumschreibung auf den Käufer
- Eintragung der neuen Grundschuld (falls Käufer finanziert)

Gesamt Grundbuchkosten: ca. **0,3–0,5 % des Kaufpreises**

**Beispiel bei 500.000 € Kaufpreis:**
- Grundbuchkosten: ca. 1.500–2.500 €

## Gesamtüberblick: Kaufnebenkosten in Hessen

Für Käufer in Frankfurt und Hessen ergibt sich folgendes Gesamtbild:

| Kostenart | Prozent | Bei 500.000 € |
|---|---|---|
| Grunderwerbsteuer (Hessen) | 6,0 % | 30.000 € |
| Notarkosten | ca. 1,0–1,5 % | ca. 5.000–7.500 € |
| Grundbuchkosten | ca. 0,3–0,5 % | ca. 1.500–2.500 € |
| Maklerprovision Käufer | ca. 2,975 % | ca. 14.875 € |
| **Gesamt Nebenkosten** | **ca. 10–11 %** | **ca. 51.375–54.875 €** |

Das bedeutet: Wer in Frankfurt eine Immobilie für 500.000 € kauft, braucht tatsächlich rund 550.000–555.000 €. Diese Zahl sollte in jede Finanzierungsplanung eingerechnet sein.

## Was der Verkäufer zahlt

Als Verkäufer zahlen Sie deutlich weniger:

- **Grundschuldlöschung:** Falls noch eine Grundschuld im Grundbuch eingetragen ist, muss diese gelöscht werden. Kosten: ca. 0,4 % des Grundschuldbetrags (Notar + Grundbuchamt zusammen). Beispiel: Grundschuld 200.000 € → ca. 800 €.
- **Notarkosten für Vollmachten oder Sonderklauseln:** Je nach Situation, meist gering.
- **Vorfälligkeitsentschädigung:** Nicht an den Notar, sondern an die Bank, falls der Kredit vorzeitig abgelöst wird.

## Wie Verkäufer Kosten sparen können

**1. Alte Grundschulden direkt löschen**
Manchmal sind alte, bereits zurückgezahlte Kredite noch als Grundschuld im Grundbuch eingetragen. Lassen Sie diese vor dem Verkauf löschen – das kostet deutlich weniger als eine aufwändige notarielle Behandlung im Kaufprozess.

**2. Vollständige Unterlagen liefern**
Je mehr der Notar selbst beschaffen oder prüfen muss, desto mehr Nebengebühren entstehen. Wir sorgen dafür, dass alle Unterlagen vor dem Notartermin vollständig vorliegen – kostenlos für Sie.

**3. Keine unnötigen Vertragsklauseln**
Komplexe Kaufverträge mit vielen Sonderregelungen, Optionen und Bedingungen kosten mehr in der Beurkundung. Einfach und klar ist günstiger.

## Das Grundbuch Hessen: Zuständige Ämter

In Hessen sind die Grundbuchämter bei den Amtsgerichten angesiedelt. Für Frankfurt ist das Amtsgericht Frankfurt am Main zuständig, für Wiesbaden das Amtsgericht Wiesbaden etc. Die Bearbeitungszeiten variieren – in Frankfurt kann die Grundbuchumschreibung nach dem Notartermin 4–8 Wochen dauern. Das ist normal und sollte in die Verkaufsplanung einbezogen werden.
    `,
  },
  {
    slug: 'kosten-immobilienverkauf-hessen',
    category: 'Recht & Steuern',
    badge: 'Kosten',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Gesamtkosten beim Immobilienverkauf in Hessen: Was bleibt wirklich übrig?',
    excerpt: 'Maklerprovision, Notarkosten, Vorfälligkeitsentschädigung, Steuern – der Verkauf einer Immobilie kostet mehr als die meisten denken. Eine vollständige Kostenaufstellung für Verkäufer in Frankfurt und Hessen.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop',
    content: `
Der Kaufpreis, den ein Käufer zahlt, ist nicht das, was der Verkäufer am Ende bekommt. Zwischen Verkaufspreis und Nettobetrag liegen Kosten – manche erwartet, manche überraschend. Wir zeigen alle Kostenpositionen für Immobilienverkäufer in Hessen und erklären, welche sich vermeiden lassen.

## Die Kosten auf einen Blick

Für Verkäufer in Frankfurt und Hessen entstehen folgende typische Kostenpositionen:

| Kostenart | Typische Höhe |
|---|---|
| Maklerprovision | ca. 2,975 % des Kaufpreises (Verkäuferanteil) |
| Grundschuldlöschung | ca. 0,4 % des Grundschuldbetrags |
| Energieausweis (falls fehlend) | 50–300 € |
| Vorfälligkeitsentschädigung | individuell (0–mehrere Tausend €) |
| Spekulationssteuer | 14–45 % des Gewinns (falls fällig) |

## Kostenblock 1: Maklerprovision in Hessen

In Hessen gilt seit dem 23. Dezember 2020 das Halbteilungsprinzip nach § 656c BGB. Käufer und Verkäufer teilen sich die Maklerprovision zu gleichen Teilen. Der Anteil des Verkäufers liegt bei immovativInvest bei **2,975 % inkl. MwSt.** des Kaufpreises.

**Beispielrechnung bei 480.000 € Kaufpreis:**
- Gesamtprovision: 5,95 % = 28.560 €
- Verkäuferanteil: 2,975 % = **14.280 €**
- Käuferanteil: 2,975 % = 14.280 €

Was dafür geleistet wird: professionelle Bewertung, Exposé, Fotos, Vermarktung, Käuferprüfung, Verhandlung, Vorbereitung des Notartermins, alle erforderlichen Unterlagen (kostenlos für Sie) und Begleitung bis zur Schlüsselübergabe.

**Steuertipp:** Wenn Sie die Spekulationssteuer zahlen müssen, ist die Maklerprovision als Werbungskosten abzugsfähig – sie reduziert den steuerpflichtigen Gewinn.

## Kostenblock 2: Grundschuldlöschung

Wenn noch eine Grundschuld aus einem früheren oder laufenden Kredit im Grundbuch eingetragen ist, muss diese beim Verkauf gelöscht werden. Die Bank stellt eine Löschungsbewilligung aus, der Notar beantragt die Löschung beim Grundbuchamt.

Die Kosten: ca. 0,4 % des Grundschuldbetrags (Notar + Grundbuchamt zusammen).

Beispiel: Grundschuld 150.000 € → ca. 600 € Löschungskosten.

Oft sind im Grundbuch alte Grundschulden eingetragen, für die der Kredit schon längst zurückgezahlt wurde. Lassen Sie diese vorab löschen – das ist günstiger als im Zuge des Verkaufs.

## Kostenblock 3: Vorfälligkeitsentschädigung

Wenn Sie bei dem Verkauf einen laufenden Kredit vorzeitig ablösen, kann die Bank eine Vorfälligkeitsentschädigung (VFE) verlangen. Die Höhe hängt ab von:

- Restlaufzeit des Kredits
- Differenz zwischen vereinbartem Zinssatz und aktuellem Marktniveau
- Restschuld

**Nach 10 Jahren Kreditlaufzeit:** gesetzliches Sonderkündigungsrecht (§ 489 BGB) – keine VFE.

**Bei jüngeren Krediten mit hohem Zinssatz:** kann die VFE mehrere Tausend bis fünfstellig sein.

Fragen Sie Ihre Bank vorab nach der VFE-Berechnung. Dieser Wert ist ein wichtiger Bestandteil Ihrer Nettoerlösrechnung.

## Kostenblock 4: Energieausweis

Jede Immobilie, die verkauft wird, braucht einen gültigen Energieausweis. Fehlt er oder ist er abgelaufen, muss er neu erstellt werden.

Kosten: 50–300 € je nach Gebäudegröße und Ausweisart (Verbrauchsausweis günstiger, Bedarfsausweis teurer).

Bei immovativInvest ist die Beschaffung des Energieausweises im Service enthalten – Sie zahlen dafür nichts extra.

## Kostenblock 5: Spekulationssteuer

Die mit Abstand größte potenzielle Kostenposition – aber eine, die sich oft vermeiden lässt.

Wenn Sie die Immobilie innerhalb von 10 Jahren nach dem Kauf verkaufen und während dieser Zeit nicht selbst darin gewohnt haben, fällt Einkommensteuer auf den Gewinn an. Der Steuersatz entspricht Ihrem persönlichen Einkommensteuersatz (14–45 %).

**Vermeidungsstrategien:**
- Warten, bis die 10-Jahres-Frist abgelaufen ist
- Eigennutzung in den letzten drei Kalenderjahren vor dem Verkauf
- Lassen Sie prüfen, ob Sie geerbte Frist übernehmen konnten

Bei der Steuerberechnung sind abziehbar: Kaufpreis, Kaufnebenkosten, Modernisierungskosten, Verkaufskosten (inkl. Maklerprovision). Das reduziert den steuerpflichtigen Gewinn erheblich.

## Unterschätzte Nebenkosten

**Dokumente:** Grundbuchauszug, Flurkarte, Teilungserklärung (bei WEG) usw. müssen für den Verkauf vorliegen. Kosten bei Selbstbeschaffung: typischerweise 200–600 €. Bei immovativInvest: kostenlos inklusive.

**Möblierungskosten / Entrümpelung:** Falls die Immobilie vor dem Verkauf geräumt werden muss, entstehen Kosten für Transport und Entsorgung. Schwer pauschal zu beziffern, aber oft unterschätzt.

**Hobbykeller oder Anbau ohne Baugenehmigung:** Falls nachträglich Baumaßnahmen ohne Genehmigung stattgefunden haben, kann der Käufer Preisabschläge fordern oder der Notar Nachweise verlangen.

## Was bleibt übrig? Nettoerlösrechnung

**Beispiel: Einfamilienhaus Frankfurt, Verkaufspreis 650.000 €**

| Position | Betrag |
|---|---|
| Verkaufspreis | 650.000 € |
| − Maklerprovision Verkäufer (2,975 %) | − 19.338 € |
| − Grundschuldlöschung (Grundschuld 200.000 €) | − 800 € |
| − Vorfälligkeitsentschädigung (Schätzung) | − 4.000 € |
| − Restschuld des Kredits | − 180.000 € |
| − Spekulationssteuer (entfällt, >10 Jahre) | 0 € |
| **Nettobetrag** | **ca. 445.862 €** |

In diesem Beispiel erhält der Verkäufer rund 445.000 € netto – deutlich weniger als die 650.000 € Kaufpreis, aber ein erheblicher Betrag für einen Neustart.

## Kosten, die der Käufer zahlt (nicht Sie)

Zur Vollständigkeit: Der Käufer trägt in Hessen:
- Grunderwerbsteuer: **6 %** = 39.000 € bei 650.000 €
- Notarkosten: ca. 1–1,5 % = ca. 6.500–9.750 €
- Grundbuchkosten: ca. 0,3–0,5 % = ca. 1.950–3.250 €
- Maklerprovision Käufer: 2,975 % = 19.338 €

Gesamtnebenkosten Käufer: ca. 10–11 % des Kaufpreises. Das ist wichtig zu wissen, wenn Sie den Zielpreis festlegen – ein Käufer, der 650.000 € bietet, zahlt insgesamt ca. 715.000–720.000 €.

## Unser Rat

Bevor Sie den Verkauf starten, sollten Sie Ihre persönliche Nettoerlösrechnung kennen. Wir erstellen diese gemeinsam mit Ihnen im Erstgespräch – kostenlos und unverbindlich – damit Sie von Anfang an wissen, was Sie erwarten können.
    `,
  },
  {
    slug: 'immobilie-verkaufen-frankfurt-steuern-2025',
    category: 'Recht & Steuern',
    badge: 'Steuern',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Immobilie verkaufen Frankfurt: Welche Steuern fallen 2025 an?',
    excerpt: 'Spekulationssteuer, Schenkungsteuer, Erbschaftsteuer – beim Immobilienverkauf in Frankfurt lauern steuerliche Fallstricke. Wir erklären, wann du steuerfrei verkaufen kannst.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '10. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
## Wann ist der Verkauf steuerfrei?

Viele Eigentümer in Frankfurt gehen davon aus, dass der Verkauf ihrer Immobilie automatisch steuerfrei ist. Das stimmt – aber nur unter bestimmten Bedingungen. Die entscheidenden Faktoren sind: Wie lange hast du die Immobilie gehalten? Hast du sie selbst bewohnt? Und wie bist du in den Besitz der Immobilie gelangt?

Grundsätzlich gilt: Wer eine Immobilie **länger als zehn Jahre** besitzt, kann sie steuerfrei verkaufen. Alternativ ist der Verkauf auch dann steuerfrei, wenn du die Immobilie **selbst genutzt** hast – und zwar im Verkaufsjahr und in den beiden Vorjahren.

## Die Spekulationssteuer: 10-Jahres-Frist

Der Begriff "Spekulationssteuer" klingt nach Börsenzockerei, trifft aber ganz normale Immobilieneigentümer in Frankfurt. Technisch korrekt heißt sie **privates Veräußerungsgeschäft** nach § 23 EStG. Sie greift immer dann, wenn du eine Immobilie innerhalb von zehn Jahren nach dem Kauf mit Gewinn verkaufst – und dabei keinen Anspruch auf die Selbstnutzungsausnahme hast.

**Konkretes Beispiel aus Frankfurt:** Du kaufst im Januar 2018 eine Eigentumswohnung in Bornheim für 350.000 €. Im März 2027 verkaufst du sie für 520.000 €. Da du die Wohnung mehr als zehn Jahre gehalten hast (Kauf 2018, Verkauf 2027 – über zehn Jahre), ist der Verkauf steuerfrei. Hättest du schon im Dezember 2026 verkauft, wäre die Frist noch nicht abgelaufen – der Gewinn von 170.000 € wäre voll zu versteuern.

Die Zehnjahresfrist beginnt am **Tag des notariellen Kaufvertrags** – nicht am Tag der Schlüsselübergabe oder Grundbucheintragung. Das ist ein häufiger Irrtum, der teuer werden kann.

## Ausnahme: Selbstgenutzte Immobilien

Wer seine Immobilie selbst bewohnt, genießt einen bedeutenden steuerlichen Vorteil: Der Verkauf ist steuerfrei, wenn du die Immobilie **im Jahr des Verkaufs und in den beiden unmittelbar vorangegangenen Jahren** selbst genutzt hast.

Das bedeutet: Auch wenn du die Immobilie erst drei Jahre besitzt, kannst du steuerfrei verkaufen – sofern du in dieser Zeit drin gewohnt hast. Kurze Leerstandszeiten oder vorübergehende Vermietung können diese Ausnahme aber gefährden.

**Wichtig für Frankfurt:** Viele Eigentümer in Frankfurt nutzen ihre Wohnung einige Jahre selbst und vermieten sie dann – zum Beispiel, wenn sie berufsbedingt umziehen. Hier lauert die Falle: Wer mehr als drei Jahre vermietet und dann verkauft, verliert die Steuerfreiheit.

## Erbschaft und Schenkung – besondere Regeln

Wer eine Immobilie geerbt oder geschenkt bekommen hat, steht steuerlich in den Fußstapfen des Erblassers oder Schenkers. Das heißt: Die **Haltedauer des Vorbesitzers** zählt mit. Hast du eine Wohnung in Sachsenhausen geerbt, die deine Eltern 2012 gekauft haben, ist der Verkauf 2025 steuerfrei – denn die Zehnjahresfrist ist aus Sicht des ursprünglichen Erwerbs längst abgelaufen.

Bei Schenkungen gilt dasselbe Prinzip: Die Haltedauer wird übertragen. Allerdings greift hier zusätzlich die **Schenkungsteuer** – abhängig vom Verwandtschaftsgrad und dem Wert der Immobilie. Zwischen Eltern und Kindern gilt ein Freibetrag von 400.000 € je Elternteil. Immobilien in Frankfurt können diesen Betrag schnell übersteigen.

Zusätzlich können Erbschaftsteuern anfallen, die sich ebenfalls nach dem Verkehrswert der Immobilie und dem Verwandtschaftsgrad richten. Ein Steuerberater kann hier erhebliche Summen sparen.

## Wie hoch ist die Spekulationssteuer konkret?

Die Spekulationssteuer ist keine Pauschalsteuer – sie wird mit deinem **persönlichen Einkommensteuersatz** berechnet. Der liegt je nach Einkommen zwischen 14 % und 45 %.

**Rechenbeispiel Frankfurt:** Du verkaufst eine Eigentumswohnung in Nordend mit einem Gewinn von 120.000 €. Dein persönlicher Steuersatz beträgt 35 %. Du zahlst also 42.000 € Spekulationssteuer – zusätzlich zum Solidaritätszuschlag.

Vom Gewinn abziehen kannst du dabei:
- **Anschaffungsnebenkosten** (Notar, Grunderwerbsteuer, Maklercourtage beim Kauf)
- **Herstellungskosten und Modernisierungsaufwand** (z. B. Badsanierung, neue Heizung)
- **Werbungskosten** (z. B. Maklercourtage beim Verkauf)

Das senkt den steuerpflichtigen Gewinn erheblich – eine sorgfältige Dokumentation aller Ausgaben ist daher Gold wert.

## Tipps zur Steueroptimierung beim Verkauf

**1. Zeitpunkt prüfen:** Liegt das Kaufdatum kurz vor dem Ende der Zehnjahresfrist? Dann kann wenige Monate Geduld Zehntausende Euro sparen.

**2. Selbstnutzung dokumentieren:** Wer seine Immobilie selbst genutzt hat, sollte das lückenlos nachweisen können – durch Ummeldung, Nebenkostenabrechnungen oder ähnliche Dokumente.

**3. Kosten sammeln:** Alle Ausgaben rund um Kauf, Modernisierung und Verkauf reduzieren den steuerpflichtigen Gewinn. Quittungen und Rechnungen sollten sorgfältig aufbewahrt werden.

**4. Aufteilung bei gemischt genutzten Objekten:** Hast du die Immobilie teils selbst genutzt, teils vermietet, wird der Gewinn anteilig aufgeteilt – nur der vermietete Anteil unterliegt der Spekulationssteuer.

**5. Verluste verrechnen:** Spekulationsverluste aus Immobilienverkäufen können mit Spekulationsgewinnen aus dem gleichen Jahr verrechnet werden. Das ist besonders relevant, wenn du mehrere Objekte hast.

## Fazit: Steuerberatung lohnt sich

Die steuerlichen Fragen rund um den Immobilienverkauf in Frankfurt sind komplex – und die Unterschiede zwischen steuerfrei und steuerpflichtig können im sechsstelligen Bereich liegen. Ein erfahrener Steuerberater, der auf Immobilien spezialisiert ist, kann hier die richtige Strategie entwickeln.

**immovativInvest** begleitet Immobilieneigentümer in Frankfurt und im Rhein-Main-Gebiet durch den gesamten Verkaufsprozess – von der ersten Bewertung bis zur Schlüsselübergabe. Im kostenlosen Erstgespräch klären wir gemeinsam alle relevanten Fragen und vermitteln dir bei Bedarf erfahrene Steuerexperten aus unserem Netzwerk. Melde dich jetzt für ein unverbindliches Erstgespräch.
    `,
  },
  {
    slug: 'makler-frankfurt-kosten-provision',
    category: 'Verkaufen',
    badge: 'Kosten',
    badgeColor: 'bg-blue-600 text-white',
    title: 'Makler Frankfurt: Was kostet ein Immobilienmakler wirklich?',
    excerpt: 'Maklerprovision, Vermarktungskosten, versteckte Gebühren – wir erklären transparent, was ein guter Immobilienmakler in Frankfurt kostet und wann er sich lohnt.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '09. Mai 2026',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop',
    content: `
## Die gesetzliche Regelung seit 2020

Seit dem 23. Dezember 2020 gilt in Deutschland das **Gesetz zur Verteilung der Maklerkosten beim Kauf von Wohnungen und Einfamilienhäusern**. Es brachte eine entscheidende Änderung: Die Maklerprovision muss zwischen Käufer und Verkäufer geteilt werden. Wer den Makler beauftragt, zahlt mindestens die Hälfte – die andere Seite darf nicht mehr zahlen als der Auftraggeber.

In der Praxis bedeutet das im Frankfurter Markt: Verkäufer und Käufer teilen sich die Provision in der Regel je hälftig.

## Was kostet ein Makler in Frankfurt konkret?

In Frankfurt und dem Rhein-Main-Gebiet liegt die übliche Gesamtprovision bei **7,14 % inkl. Mehrwertsteuer** des Kaufpreises – aufgeteilt auf **3,57 % inkl. MwSt. für den Käufer** und **3,57 % inkl. MwSt. für den Verkäufer**.

**Beispielrechnung Frankfurt:**
- Verkaufspreis Eigentumswohnung Sachsenhausen: **520.000 €**
- Provision Verkäufer (3,57 %): **18.564 €**
- Provision Käufer (3,57 %): **18.564 €**
- Gesamtprovision: **37.128 €**

Beim Verkauf eines Einfamilienhauses in Bad Homburg für 850.000 € würden entsprechend 30.345 € je Seite anfallen.

Wichtig zu wissen: Die Provision ist **erfolgsabhängig**. Sie wird nur fällig, wenn der Makler tatsächlich einen Käufer vermittelt und der Kaufvertrag notariell beurkundet wird. Kommt kein Verkauf zustande, erhältst du als Verkäufer keine Rechnung.

## Was ist in der Provision enthalten?

Ein guter Makler in Frankfurt bietet für seine Provision weit mehr als das Einstellen einer Anzeige auf Immobilienscout. Was du erwarten kannst und solltest:

- **Professionelle Immobilienbewertung** auf Basis aktueller Marktdaten
- **Professionelle Fotografie** und ggf. virtuelle 3D-Touren
- **Hochwertiges Exposé** für digitale und Print-Vermarktung
- **Bewerbung auf allen relevanten Portalen** (Immoscout24, Immowelt, Kleinanzeigen etc.)
- **Käufervorauswahl und Bonitätsprüfung** – spart dir Zeit und Frust
- **Durchführung und Organisation aller Besichtigungen**
- **Verhandlungsführung** im Interesse des Verkäufers
- **Begleitung bis zum Notartermin** und Koordination aller Beteiligten
- **Haftung und Rechtssicherheit** – professionelle Makler haften für ihre Angaben

Viele dieser Leistungen sind für Privatverkäufer schwer oder gar nicht zu replizieren – besonders die Bonitätsprüfung der Kaufinteressenten und die Verhandlungsführung.

## Wann lohnt sich ein Makler?

Die ehrliche Antwort: Fast immer. Studien zeigen, dass Immobilien, die über professionelle Makler verkauft werden, **im Schnitt 5 bis 10 % höhere Verkaufspreise** erzielen als vergleichbare Objekte im Privatverkauf. Setzt man das ins Verhältnis zur Provision, zeigt sich: Der Makler zahlt sich in den meisten Fällen selbst.

Besonders lohnenswert ist ein Makler bei:
- **Komplexen Immobilien** (denkmalgeschützt, bebaubare Grundstücke, Gewerbeanteil)
- **Erbimmobilien** mit mehreren Erben und unklarer Rechtslage
- **Zeitdruck** – wenn du schnell verkaufen musst und nicht monatelang auf Käufersuche gehen kannst
- **Fehlender lokaler Marktkenntnis** – gerade wenn du nicht vor Ort wohnst

## Privat verkaufen vs. mit Makler – ein Vergleich

| Kriterium | Privat | Mit Makler |
|---|---|---|
| Kosten | Keine Provision | 3,57 % vom Kaufpreis |
| Zeitaufwand | Sehr hoch | Gering |
| Reichweite | Begrenzt | Groß |
| Käuferqualität | Unkontrolliert | Vorgeprüft |
| Erzielter Preis | Oft unter Marktwert | Meist am oder über Marktwert |
| Rechtssicherheit | Eigenes Risiko | Makler haftet mit |

Der private Verkaufsweg lohnt sich vor allem dann, wenn du bereits einen konkreten Käufer kennst – zum Beispiel aus dem Familienkreis oder dem Bekanntenumfeld.

## Worauf du bei der Maklerwahl achten solltest

Nicht alle Makler in Frankfurt sind gleich. Diese Kriterien helfen dir bei der Auswahl des richtigen Partners:

**Lokale Marktkenntnis:** Ein Makler, der ausschließlich in Frankfurt und dem Rhein-Main-Gebiet arbeitet, kennt die Mikrolagen, die Preisentwicklung und die Käuferklientel besser als jemand, der bundesweit tätig ist.

**Nachgewiesene Referenzen:** Frag nach konkreten, vergleichbaren Verkäufen in deiner Lage. Seriöse Makler können das belegen.

**Transparente Kommunikation:** Du solltest jederzeit wissen, was mit deiner Immobilie passiert – welche Anfragen eingegangen sind, wie Besichtigungen verlaufen sind, warum ggf. der Preis angepasst werden sollte.

**Keine versteckten Kosten:** Seriöse Makler verlangen keine Vorkosten für Fotos, Exposés oder Vermarktung. Alles ist durch die Erfolgsprovision abgedeckt.

**immovativInvest** arbeitet ausschließlich im Frankfurter Raum und Rhein-Main-Gebiet – mit Ortskenntnis, Markttransparenz und einem klaren Kostenmodell. Dein kostenloses Erstgespräch vereinbarst du direkt über unsere Website.
    `,
  },
  {
    slug: 'wohnung-verkaufen-frankfurt-erfahrungen',
    category: 'Verkaufen',
    badge: 'Erfahrungen',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Wohnung verkaufen Frankfurt: Erfahrungen & was du wissen musst',
    excerpt: 'Was erwartet dich beim Wohnungsverkauf in Frankfurt wirklich? Unsere Erfahrungen aus über 100 Verkäufen im Rhein-Main-Gebiet – von der Bewertung bis zur Schlüsselübergabe.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '08. Mai 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=600&fit=crop',
    content: `
## Der Frankfurter Wohnungsmarkt 2025/2026

Frankfurt ist und bleibt einer der dynamischsten Immobilienmärkte Deutschlands. Als Finanzmetropole mit internationalem Flair, starkem Arbeitsmarkt und begrenztem Wohnraum zieht die Stadt kontinuierlich Nachfrage an – von Berufseinsteigern über Familien bis hin zu Kapitalanlegern.

Nach dem Preisrückgang in den Jahren 2022 und 2023 hat sich der Markt 2025 und 2026 spürbar stabilisiert. In begehrten Lagen wie Sachsenhausen, Bornheim und dem Nordend liegen die Quadratmeterpreise für Eigentumswohnungen wieder bei **6.000 bis 8.000 €/m²** – in Toplagen sogar darüber. Wer jetzt verkauft, trifft auf eine Käuferschaft, die gezielter sucht, aber gut finanziert ist.

## Schritt 1: Realistische Preisermittlung

Der häufigste Fehler beim Wohnungsverkauf in Frankfurt ist ein zu hoher Angebotspreis. In unserer Erfahrung aus über 100 Verkäufen im Rhein-Main-Gebiet erleben wir immer wieder: Wohnungen, die überteuert angeboten werden, entwickeln eine "Marktgeschichte" – sie bleiben lange stehen, werden mehrfach reduziert, und Käufer fragen sich, was nicht stimmt.

Eine fundierte Bewertung berücksichtigt:
- **Lage und Mikrolage** (Straßenseite, Etage, Ausblick, Lärm)
- **Baujahr und Zustand** des Gebäudes
- **Energetischer Standard** und Modernisierungsstand der Wohnung
- **Wohnungsgrundriss** und Raumaufteilung
- **Aktuelle Vergleichsverkäufe** in der unmittelbaren Umgebung

Ein professionell ermittelter Preis schützt dich vor zwei Risiken: zu wenig zu erlösen oder das Objekt zu verbrennen.

## Schritt 2: Unterlagen beschaffen

Bevor du deine Wohnung in Frankfurt vermarkten kannst, brauchst du vollständige Unterlagen. Das dauert oft länger als erwartet – wir empfehlen, frühzeitig damit zu beginnen.

**Notwendige Unterlagen für den Verkauf:**
- Aktueller Grundbuchauszug (beim Grundbuchamt Frankfurt)
- Teilungserklärung und Gemeinschaftsordnung
- Protokolle der letzten drei Eigentümerversammlungen
- Aktuelle Hausgeldabrechnung und Wirtschaftsplan
- Energieausweis (Pflicht beim Verkauf)
- Grundriss und ggf. Baupläne
- Nachweise über Modernisierungen und Reparaturen

Gerade bei älteren Gebäuden in Bornheim oder dem Nordend sind Grundrisse manchmal nicht mehr vorhanden – dann muss ein Aufmaß gemacht werden. Das kostet Zeit und Geld, ist aber unverzichtbar.

## Schritt 3: Exposé und Vermarktung

Ein gutes Exposé ist mehr als eine Auflistung von Fakten. Es erzählt die Geschichte der Wohnung – die Lage, die Atmosphäre, das Potenzial. In Frankfurt konkurriert deine Wohnung mit Dutzenden ähnlicher Objekte. Was sie heraushebt, muss sofort erkennbar sein.

Was wir für jede Wohnung erstellen:
- **Professionelle Fotos** bei gutem Tageslicht, ggf. mit virtuellem Rundgang
- **Ansprechendes PDF-Exposé** mit vollständigen Angaben
- **Vermarktung auf allen relevanten Portalen** (Immoscout24, Immowelt, Kleinanzeigen, eigene Interessentendatenbank)
- **Social-Media-Präsenz** bei besonders attraktiven Objekten

Der erste Eindruck entscheidet online – und der entsteht innerhalb von Sekunden. Schlechte Fotos sind keine Option.

## Schritt 4: Besichtigungen und Käuferauswahl

Viele Eigentümer unterschätzen den Aufwand von Besichtigungen. Eine Frankfurter Wohnung in guter Lage kann innerhalb weniger Tage 20, 30 oder mehr Anfragen generieren. Nicht jeder Interessent ist auch ein ernsthafter Käufer.

Unsere Aufgabe ist es, vorab zu filtern: Ist die Finanzierung gesichert? Stimmt das Nutzungskonzept? Entspricht das Budget dem Kaufpreis? Diese Vorauswahl spart dir als Verkäufer Zeit und unnötige Besichtigungstermine.

Bei Besichtigungen selbst zeigen wir die Stärken der Wohnung, beantwortet Fragen kompetent und erzeugen keine künstliche Dringlichkeit – Käufer merken das sofort. Vertrauen und Transparenz führen schneller zum Abschluss als Druckverkauf.

## Schritt 5: Notartermin und Übergabe

Ist der Käufer gefunden und der Preis verhandelt, beginnt die formale Phase. Der Kaufvertrag wird vom Notar entworfen – in Frankfurt gibt es gut vernetzte Notare, die routiniert mit Immobilienverkäufen umgehen. Wir koordinieren Termine und prüfen den Vertragsentwurf gemeinsam mit dir.

Nach der notariellen Beurkundung folgt die Kaufpreiszahlung und schließlich die Schlüsselübergabe. Auch beim Übergabeprotokoll sind wir dabei – um spätere Streitigkeiten zu vermeiden.

## Typische Fehler beim Wohnungsverkauf

Aus unserer Praxis kennen wir die häufigsten Stolpersteine:

**Überhöhter Einstiegspreis:** Führt zu langen Standzeiten und erzwungenen Preissenkungen – oft schlechter als ein marktgerechter Startpreis.

**Unvollständige Unterlagen:** Käufer und deren Banken brauchen alle Dokumente. Fehlende Unterlagen verzögern den Prozess oder lassen Käufer abspringen.

**Schlechte Fotos:** Der erste Eindruck auf dem Portal ist oft der letzte. Handy-Fotos reichen nicht.

**Falsche Zielgruppe ansprechen:** Eine Vier-Zimmer-Wohnung in Bornheim wird von Familien gesucht – keine WGs. Das beeinflusst die Vermarktungsstrategie.

**Emotional verhandeln:** Der Verkauf des Elternhauses oder der ersten eigenen Wohnung ist emotional. Trotzdem muss sachlich verhandelt werden.

## Unsere Erfahrungen: Was Käufer in Frankfurt wirklich wollen

Nach über 100 abgeschlossenen Verkäufen wissen wir: Frankfurter Käufer legen heute mehr Wert auf **Energieeffizienz und Modernisierungsstand** als früher. Eine unsanierte Altbauwohnung in Sachsenhausen mit Gründerzeit-Charme ist nach wie vor gefragt – aber Käufer rechnen den Sanierungsbedarf konsequent ein.

Sehr gefragt sind außerdem: **Balkone oder Terrassen**, **Tiefgaragenstellplätze**, **aufgeteilte Grundrisse** mit Homeoffice-Möglichkeit, und **gute ÖPNV-Anbindung**. Wer diese Merkmale hat, profitiert – wer sie hervorhebt, profitiert noch mehr.

Hast du Fragen zu deiner Wohnung in Frankfurt? Ruf uns an oder schreib uns – wir beraten dich kostenlos und unverbindlich, welcher Preis realistisch ist und wie wir den Verkauf gemeinsam angehen können.
    `,
  },
  {
    slug: 'mietpreise-frankfurt-rhein-main-2026',
    category: 'Markt',
    badge: 'Aktuell',
    badgeColor: 'bg-brand-green text-white',
    title: 'Mietpreise Frankfurt & Rhein-Main 2026: Was Eigentümer jetzt wissen müssen',
    excerpt: 'Mieten in Frankfurt sind auf Rekordniveau. Wie das die Kaufentscheidung beeinflusst, was Vermieter beachten müssen – und welche Stadtteile besonders gefragt sind.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '05. Mai 2026',
    readTime: '6 Min.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    content: `
## Mietmarkt Frankfurt 2026 – ein Markt unter Druck

Frankfurt am Main gehört 2026 zu den teuersten Mietstädten Deutschlands. Die Durchschnittsmiete für eine Neuvertragsmiete liegt je nach Stadtbezirk zwischen **14 und 22 €/m²** – Tendenz weiter steigend. Das Rhein-Main-Gebiet folgt diesem Trend, bleibt aber günstiger.

## Die Zahlen im Überblick

**Frankfurt Innenstadt & Westend:** 18–22 €/m² Kaltmiete für Neuverträge. Gesucht sind vor allem 2–3-Zimmer-Wohnungen für Berufstätige und Paare.

**Sachsenhausen, Bornheim, Nordend:** 15–19 €/m². Sehr beliebt bei Familien und gut verdienenden Singles. Wer hier eine Wohnung vermietet, findet in der Regel innerhalb von Tagen qualifizierte Interessenten.

**Höchst, Griesheim, Sossenheim:** 11–14 €/m². Steigende Nachfrage durch Preisentwicklung in der Innenstadt. Preiswachstum hier besonders dynamisch.

**Rhein-Main-Umland (Wiesbaden, Offenbach, Darmstadt):** 10–15 €/m². Pendler aus Frankfurt treiben die Nachfrage – insbesondere in gut angebundenen Stadtteilen.

## Was das für Eigentümer bedeutet

**Hohe Mieten = hohe Kaufpreise:** Der Zusammenhang ist direkt. Wer als Investor eine Renditeimmobilie kauft, rechnet mit der erzielbaren Miete. Hohe Mietpreise in Frankfurt stützen die Kaufpreise auf einem historisch hohen Niveau.

**Mieter bleiben länger:** In einem angespannten Mietmarkt kündigen Mieter seltener. Das ist gut für stabile Mieteinnahmen, kann aber die Vermarktung einer vermieteten Wohnung erschweren – denn Käufer, die selbst einziehen wollen, schreckt das ab.

**Mietpreisbremse gilt:** In Frankfurt gilt die Mietpreisbremse. Bei Neuvermietungen darf die Miete maximal 10 % über der ortsüblichen Vergleichsmiete liegen – Ausnahmen: Neubau nach 2014 und umfassend sanierte Wohnungen.

## Welche Stadtteile sind besonders gefragt?

Unsere Erfahrung aus über 125 Verkäufen zeigt: Die Nachfrage nach Mietobjekten ist in diesen Frankfurter Stadtteilen am stärksten:

- **Nordend & Bornheim** – klassische Altbaulagen, stabile Mieter, sehr gute Infrastruktur
- **Sachsenhausen** – Apfelweinviertel trifft Gründerzeit, hohe Kaufpreise, loyale Mieter
- **Bockenheim** – studierendenaffin, aber zunehmend auch Familien durch Westend-Nähe
- **Niederrad & Gutleutviertel** – aufstrebende Viertel mit Entwicklungspotenzial

## Was Verkäufer von vermieteten Wohnungen wissen sollten

Eine vermietete Wohnung verkauft sich an einen anderen Käuferkreis als eine leerstehende. Renditeorientierte Investoren bezahlen gute Preise – wenn die Miete stimmt und der Mieter bonitätsstark ist.

Wir haben ein aktives Netzwerk von Immobilieninvestoren im Rhein-Main-Gebiet, die gezielt nach vermieteten Objekten suchen. Kostenlose Bewertung auf Anfrage.
    `,
  },
  {
    slug: 'wohnrecht-niessbrauch-immobilienverkauf',
    category: 'Recht & Steuern',
    badge: 'Ratgeber',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Wohnrecht & Nießbrauch beim Immobilienverkauf: Was Eigentümer wissen müssen',
    excerpt: 'Wer eine Immobilie mit eingetragenem Wohnrecht oder Nießbrauch verkauft, steht vor besonderen Herausforderungen. Wir erklären die Unterschiede, die steuerlichen Folgen und was das für den Verkaufspreis bedeutet.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '28. April 2026',
    readTime: '7 Min.',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop',
    content: `
## Was ist der Unterschied zwischen Wohnrecht und Nießbrauch?

Beide Rechte sichern einer Person das Recht, eine Immobilie zu nutzen – obwohl sie nicht Eigentümer ist. Der Unterschied liegt im Umfang:

**Wohnrecht (§ 1093 BGB):** Der Berechtigte darf die Immobilie bewohnen – und sonst nichts. Er darf sie nicht vermieten. Das Recht ist höchstpersönlich und nicht übertragbar.

**Nießbrauch (§ 1030 BGB):** Der Berechtigte darf die Immobilie nicht nur bewohnen, sondern auch vermieten und die Mieteinnahmen behalten. Außerdem trägt er die laufenden Kosten (Grundsteuer, Instandhaltung). Der Nießbrauch ist wirtschaftlich deutlich stärker als das Wohnrecht.

Beide Rechte werden ins Grundbuch eingetragen – sie bleiben auch bei einem Eigentümerwechsel bestehen.

## Wie beeinflusst das den Verkaufspreis?

Ein eingetragenes Wohnrecht oder ein Nießbrauch reduziert den Verkaufspreis erheblich. Der Käufer erwirbt eine Immobilie, die er weder selbst nutzen noch vermieten kann – zumindest nicht sofort.

**Wertabschlag beim Wohnrecht:**

Der Wert des Wohnrechts wird nach dem Jahreswert der Nutzung multipliziert mit einem Kapitalisierungsfaktor berechnet. Der Kapitalisierungsfaktor hängt vom Alter des Berechtigten ab (Lebenserwartung laut Sterbetafel).

Beispiel: Berechtigte Person, 75 Jahre alt, Wohnwert 1.200 €/Monat.
- Jahreswert: 14.400 €
- Kapitalisierungsfaktor (ca.): 9,5
- Wert des Wohnrechts: ca. 136.800 €

Dieser Betrag wird vom Verkehrswert abgezogen. Eine Immobilie im Wert von 500.000 € erzielt dann nur noch ca. 363.000 € am Markt.

**Wertabschlag beim Nießbrauch:**

Noch höher, da der Nießbrauch umfassender ist. Die Berechnung ist identisch – allerdings wird zusätzlich die Pflicht zur Kostentragung berücksichtigt.

## Steuerliche Aspekte

**Beim Schenken:** Wenn Eltern eine Immobilie an Kinder schenken und sich gleichzeitig ein Wohnrecht oder Nießbrauch vorbehalten, reduziert das den schenkungsteuerlichen Wert erheblich. Nur der Nettowert (Immobilienwert minus Wert des Rechts) ist schenkungsteuerpflichtig.

**Beim Verkauf:** Wird eine Immobilie mit eingetragenem Nießbrauch oder Wohnrecht verkauft, sind nur die Gegenansprüche des Verkäufers steuerlich relevant. Der Berechtigte hat davon getrennte Einkünfte (z. B. ersparte Miete oder Mieteinnahmen bei Nießbrauch).

**Spekulationssteuer:** Die 10-Jahres-Frist beginnt mit dem ursprünglichen Kaufdatum, nicht mit dem Datum der Rechtseinräumung.

## Welche Käufer kommen in Frage?

Mit eingetragenem Wohnrecht oder Nießbrauch kommen nur bestimmte Käufergruppen in Frage:

- **Investoren mit langem Anlagehorizont**, die den späteren Wert sichern wollen
- **Familienangehörige**, die das Objekt innerhalb der Familie halten möchten
- **Direkte Investoren**, die einen niedrigeren Einstiegspreis akzeptieren und auf den Wegfall des Rechts warten

Die Vermarktung muss gezielt auf diese Gruppen ausgerichtet werden – breite Portalwerbung erzeugt hier oft wenig qualifizierte Anfragen.

## Unser Rat

Immobilien mit Wohnrecht oder Nießbrauch sind keine Problemimmobilien – sie brauchen aber eine spezifische Vermarktungsstrategie. Wir haben Erfahrung in diesem Bereich und ein Netzwerk von Investoren, die solche Objekte gezielt suchen.

Lassen Sie uns gemeinsam prüfen, ob ein Verkauf zum jetzigen Zeitpunkt sinnvoll ist – oder ob eine andere Lösung mehr Sinn macht. Kostenlos und unverbindlich.

*Hinweis: Dieser Artikel ersetzt keine rechtliche oder steuerliche Beratung.*
    `,
  },
  {
    slug: 'zwangsversteigerung-kaufen-als-kaeufer',
    category: 'Spezialfälle',
    badge: 'Spezialfall',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Zwangsversteigerung kaufen: Was Käufer wissen müssen – Chancen & Risiken',
    excerpt: 'Eine Immobilie bei der Zwangsversteigerung kaufen klingt nach Schnäppchen. Aber wer unvorbereitet bietet, erlebt böse Überraschungen. Was wirklich hinter dem Verfahren steckt – und wie Sie es richtig angehen.',
    author: 'Mazlum Selcuk',
    authorImg: '/mazlum.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '20. April 2026',
    readTime: '8 Min.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop',
    content: `
## Was ist eine Zwangsversteigerung?

Eine Zwangsversteigerung findet statt, wenn ein Eigentümer seine Schulden nicht mehr bedienen kann und ein Gläubiger (meist eine Bank) die Verwertung der Immobilie beantragt. Das Amtsgericht führt das Verfahren durch, ein Rechtspfleger leitet die Versteigerung.

Das Ziel des Verfahrens ist nicht, der günstigste Weg zum Immobilienerwerb zu sein – sondern die Schulden des Eigentümers zu begleichen. Für Käufer entstehen dabei jedoch oft Möglichkeiten, die sie auf dem freien Markt nicht finden.

## Die Chancen beim Kauf einer Zwangsversteigerung

**Günstigerer Preis:** In vielen Fällen liegt der Zuschlagspreis unter dem Marktwert. Besonders bei Immobilien in schwierigen Situationen (schlechter Zustand, belastete Lage, emotionale Rahmenbedingungen) können Käufer profitieren.

**Keine Maklerprovision:** Eine Zwangsversteigerung läuft ohne Makler. Käufer sparen die Provision – das sind im Rhein-Main-Gebiet typischerweise 3–4 % des Kaufpreises.

**Klare Verfahrensregeln:** Der Prozess ist gesetzlich geregelt und transparent. Es gibt kein Bieterverfahren im Dunkeln – alles ist öffentlich.

## Die Risiken – und warum sie oft unterschätzt werden

**Keine Besichtigung vor dem Kauf (meist):** In den meisten Fällen hat der Käufer vor dem Zuschlag keine Möglichkeit, die Immobilie von innen zu besichtigen. Was er bekommt, sieht er erst nach dem Zuschlag – und das kann böse Überraschungen bergen.

**Verkehrswertgutachten ≠ Marktwert:** Das Gutachten, das dem Verfahren zugrunde liegt, kann veraltet sein oder wesentliche Mängel nicht erfassen. Es ist eine Pflichtlektüre – aber kein Ersatz für eine unabhängige Einschätzung.

**Versteckte Belastungen:** Nicht alle Belastungen im Grundbuch erlöschen mit dem Zuschlag. Wohnrechte und Nießbrauch, die vor der Grundschuld der Bank eingetragen wurden, bleiben bestehen. Genau lesen, was im Grundbuchauszug steht.

**Barzahlungspflicht (praktisch):** Nach dem Zuschlag muss der Kaufpreis innerhalb von 6–8 Wochen gezahlt werden. Eine Finanzierungszusage sollte vorher vorliegen – nicht danach.

**Räumung ist Käufersache:** Wenn der Vorbesitzer nicht auszieht, muss der neue Eigentümer die Räumung selbst durchsetzen. Das kostet Zeit und Nerven.

## Der Ablauf im Überblick

1. **Terminermittlung:** Versteigerungstermine sind öffentlich einsehbar – beim Amtsgericht oder auf zvg-portal.de
2. **Unterlagen studieren:** Grundbuchauszug, Verkehrswertgutachten, Verfahrensakte (einsehbar beim Amtsgericht)
3. **Sicherheitsleistung vorbereiten:** Beim Termin ist eine Sicherheitsleistung von 10 % des Verkehrswertes zu hinterlegen – meist als Bankbürgschaft oder Bundesbanküberweisung
4. **Bieten:** Das Mindestgebot liegt bei 50 % des Verkehrswertes (5/10-Grenze). Das Gericht kann bei weniger als 70 % den Zuschlag verweigern (7/10-Grenze im ersten Termin)
5. **Zuschlag:** Wer beim Hammerfall das höchste Gebot hat, erhält den Zuschlag
6. **Kaufpreiszahlung:** Innerhalb der Frist zahlen oder mit Zinsen in Verzug geraten
7. **Eintragung:** Das Gericht überträgt das Eigentum im Grundbuch

## Was Sie vorher prüfen sollten

- **Grundbuchauszug vollständig lesen** – welche Belastungen erlöschen, welche bleiben?
- **Verkehrswertgutachten kritisch analysieren** – wie alt ist es? Was wurde vor Ort geprüft?
- **Finanzierung sichern** – Vorgespräch mit der Bank führen, Finanzierungszusage einholen
- **Gericht kontaktieren** – Akteneinsicht beantragen, ggf. Besichtigungsmöglichkeit erfragen
- **Experten hinzuziehen** – Makler, Gutachter oder Rechtsanwalt mit Erfahrung in Zwangsversteigerungen

## Wann ist eine Zwangsversteigerung eine gute Gelegenheit?

Für erfahrene Käufer oder Investoren mit solider Finanzierung kann eine Zwangsversteigerung eine attraktive Option sein – insbesondere wenn:

- Die Immobilie in einer guten Lage liegt und der Zustand kalkulierbar ist
- Das Gutachten einen realistischen Wert zeigt und keine versteckten Belastungen existieren
- Die Finanzierung gesichert ist und Zeit für das Verfahren eingeplant wurde
- Der Käufer bereit ist, ggf. eine Räumung durchzuführen

Für Erstkäufer ohne Erfahrung und ohne Begleitung ist die Zwangsversteigerung riskanter als ein Kauf auf dem freien Markt.

## Wie wir Ihnen helfen können

Als Immobilienmakler im Rhein-Main-Gebiet beraten wir Käufer vor Zwangsversteigerungen – von der Analyse der Unterlagen bis zur Einschätzung des Marktwertes. Wir helfen Ihnen zu beurteilen, ob ein konkretes Objekt eine echte Chance ist oder ob versteckte Risiken das Schnäppchen zunichte machen.

*Hinweis: Dieser Artikel ersetzt keine Rechtsberatung. Ziehen Sie bei konkreten Fragen einen auf Zwangsversteigerungen spezialisierten Anwalt hinzu.*
    `,
  },
  {
    slug: 'immobilienmakler-frankfurt-bewertungen-vergleich',
    category: 'Markt',
    badge: 'Vergleich',
    badgeColor: 'bg-brand-green text-white',
    title: 'Immobilienmakler Frankfurt: Bewertungen & Auswahlkriterien 2026',
    excerpt: 'Wie findest du den besten Immobilienmakler in Frankfurt? Worauf du bei Bewertungen achten solltest und welche Fragen du beim Erstgespräch stellen musst.',
    author: 'Niclas van der Straeten',
    authorImg: '/hero-niclas-2.png',
    authorRole: 'Immobilienmakler · immovativInvest',
    date: '07. Mai 2026',
    readTime: '5 Min.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    content: `
## Warum Makler-Bewertungen wichtig sind

Der Immobilienmarkt in Frankfurt ist groß – und die Zahl der aktiven Makler ebenso. Zwischen seriösen, erfahrenen Fachleuten und solchen, die lediglich Anzeigen schalten, liegen Welten. Für Eigentümer, die ihre Wohnung oder ihr Haus verkaufen möchten, ist die Wahl des richtigen Maklers eine der wichtigsten Entscheidungen im gesamten Prozess.

Online-Bewertungen sind dabei ein wichtiger – aber nicht der einzige – Anhaltspunkt. Sie geben dir einen ersten Eindruck von der Arbeitsweise, der Kommunikation und der Zuverlässigkeit eines Maklers. Richtig gelesen, können sie Stunden frustrierender Erstgespräche ersparen.

## Wo findet man seriöse Bewertungen?

Nicht alle Bewertungsplattformen sind gleich. Hier ein Überblick der relevantesten Quellen:

**Google Maps / Google Business:** Die wichtigste und meistgenutzte Plattform. Jeder Google-Nutzer kann bewerten – das führt zu einer breiten, ehrlichen Datenbasis. Achte auf Bewertungen mit ausführlichem Text, nicht nur auf Sternchen-Klicks.

**Immobilienscout24:** Makler mit aktiven Profilen werden dort bewertet. Die Basis ist kleiner, aber die Klientel ist immobilienspezifisch.

**ProvenExpert und Trustpilot:** Auf diesen Plattformen können Unternehmen aktiv Bewertungen einsammeln. Das ist legitim, aber schau genau hin, ob Bewertungen verifiziert sind.

**Empfehlungen im Umfeld:** Die verlässlichste Informationsquelle bleibt die persönliche Empfehlung. Wer im Freundes- oder Kollegenkreis bereits gute Erfahrungen mit einem Frankfurter Makler gemacht hat, hat oft den besten Tipp.

## Was sagen gute Bewertungen aus?

Viele Bewertungen und hohe Sternzahl sind ein guter Anfang – aber nicht ausreichend. Lese Bewertungen qualitativ:

**Positive Signale:**
- Konkrete Schilderungen des Verkaufsprozesses ("Wir haben unsere Wohnung in Bornheim in drei Wochen verkauft...")
- Lob für Kommunikation und Erreichbarkeit
- Erwähnung von realistischer Preisberatung und Marktkenntnis
- Wiederkehrende Kunden oder Weiterempfehlung

**Warnsignale:**
- Sehr kurze, generische Bewertungen ohne konkreten Bezug
- Plötzlicher Anstieg von Bewertungen innerhalb kurzer Zeit
- Ausschließlich Fünf-Sterne-Bewertungen ohne eine einzige kritische Anmerkung
- Antworten des Maklers auf negative Bewertungen, die aggressiv oder abwehrend wirken

Ein guter Makler hat keine Angst vor ein oder zwei negativen Bewertungen – er antwortet professionell und sachlich darauf.

## 5 Fragen, die du jedem Makler stellen solltest

Beim Erstgespräch mit einem potenziellen Makler in Frankfurt solltest du gezielte Fragen stellen. Die Antworten verraten mehr als jede Bewertung:

**1. Wie viele vergleichbare Objekte haben Sie in den letzten zwölf Monaten in meiner Lage verkauft?**
Ein lokaler Spezialist kann konkrete Referenzen nennen – Lage, Größenordnung, Zeitraum. Ausweichende Antworten sind ein schlechtes Zeichen.

**2. Wie ermitteln Sie den Angebotspreis?**
Die Antwort sollte mehr sein als "Marktgefühl". Seriöse Makler arbeiten mit Vergleichspreisen, Gutachten und lokalen Marktdaten. Ein Makler, der sofort einen sehr hohen Preis verspricht, ohne die Wohnung gesehen zu haben, betreibt möglicherweise "Schaufensterpreispolitik".

**3. Was passiert, wenn sich die Immobilie nicht innerhalb von X Wochen verkauft?**
Die Antwort gibt Aufschluss über die Verkaufsstrategie und die Bereitschaft, offen über Misserfolge zu sprechen.

**4. Welche Leistungen sind in Ihrer Provision enthalten – und was kostet extra?**
Gute Makler sind hier transparent. Fotos, Exposé, Vermarktung, Besichtigungen – all das sollte im Honorar enthalten sein.

**5. Wie oft und wie kommunizieren Sie mit mir während des Verkaufs?**
Du hast ein Recht darauf, regelmäßig informiert zu werden. Klare Absprachen über Kommunikationsrhythmus und -kanal vermeiden Frustration.

## Warnsignale: Diese Makler solltest du meiden

Nicht jeder, der sich Immobilienmakler nennt, ist einer. Die Berufsbezeichnung ist in Deutschland nicht geschützt – jeder kann theoretisch als Makler tätig werden. Folgende Warnsignale sollten dich vorsichtig machen:

- **Überhöhte Preisversprechen** ohne nachvollziehbare Begründung
- **Kein schriftlicher Maklervertrag** oder sehr unklare Vertragsbedingungen
- **Keine eigene Website** oder professionelle Online-Präsenz
- **Druck zum schnellen Unterzeichnen** von Verträgen
- **Keine nachweisbare Berufshaftpflichtversicherung**
- **Schlechte oder keine Erreichbarkeit** bereits vor Vertragsschluss

Ein Makler, der dir nicht zuhört, wird auch deinen Käufern nicht zuhören.

## Was immovativInvest auszeichnet

Wir bei immovativInvest sind ausschließlich im Frankfurter Raum und Rhein-Main-Gebiet tätig. Das ist bewusste Entscheidung: Lokale Expertise lässt sich nicht aufteilen. Wir kennen die Mikrolagen, die Preisentwicklung der letzten Jahre und die Käuferprofile der einzelnen Stadtteile – von Sachsenhausen über Bornheim bis nach Offenbach und Bad Homburg.

Was uns von größeren Maklerhäusern unterscheidet: Du arbeitest direkt mit dem Makler, der dich berät – nicht mit wechselnden Mitarbeitern. Du erreichst uns wirklich, wenn du Fragen hast. Und wir sagen dir auch, wenn ein Verkauf gerade nicht der richtige Zeitpunkt ist.

Unsere Bewertungen auf Google sprechen für sich – aber noch lieber hören wir von dir direkt. Vereinbare ein kostenloses Erstgespräch, lern uns kennen, und dann entscheide, ob wir der richtige Partner für deinen Verkauf in Frankfurt sind.
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'Alle') return articles
  return articles.filter(a => a.category === category)
}
