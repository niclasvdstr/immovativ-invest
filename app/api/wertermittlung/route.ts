// ============================================================
// API-Route: Immobilien-Wertermittlung
// POST /api/wertermittlung
// ============================================================
// E-Mail-Konfiguration via .env.local:
//   SMTP_HOST=smtp.strato.de
//   SMTP_PORT=465
//   SMTP_USER=ihre@email.de
//   SMTP_PASS=ihr-passwort
//   SMTP_FROM=ihre@email.de
//   MAKLER_EMAIL=niclas@immovativinvest.de   ← Lead-Empfänger
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import { berechneWertspanne, formatPrice, BewertungsInput, Immobilienart } from '@/lib/wertermittlung'

// Einfaches In-Memory Rate-Limiting (per IP, max 3 Anfragen/Stunde)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (entry.count >= 3) return false
  entry.count++
  return true
}

function buildKundenEmail(input: BewertungsInput, wertspanne: { min: number; max: number; basis: number }): string {
  const isLand = input.immobilienart === 'Grundstück'
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre kostenlose Immobilienbewertung</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#0B1F3A;padding:40px 40px 32px;">
      <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;">
        immovativ<span style="color:#2563EB;">Invest</span>
      </div>
      <p style="color:#94a3b8;font-size:13px;margin:8px 0 0;">Ihr Immobilienpartner im Rhein-Main-Gebiet</p>
    </div>

    <!-- Body -->
    <div style="padding:40px;">
      <h1 style="font-size:26px;font-weight:700;color:#0B1F3A;margin:0 0 8px;letter-spacing:-0.02em;">
        Ihre Immobilienbewertung
      </h1>
      <p style="color:#6E6E73;font-size:15px;margin:0 0 32px;line-height:1.6;">
        Hallo ${input.name},<br><br>
        vielen Dank für Ihre Anfrage! Auf Basis der von Ihnen eingegebenen Daten haben wir eine erste
        Werteinschätzung für Ihre Immobilie erstellt.
      </p>

      <!-- Wertspanne -->
      <div style="background:#EFF6FF;border:1px solid #DBEAFE;border-radius:16px;padding:32px;text-align:center;margin-bottom:32px;">
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#2563EB;margin-bottom:12px;">
          Geschätzter Marktwert
        </div>
        <div style="font-size:36px;font-weight:800;color:#0B1F3A;letter-spacing:-0.02em;margin-bottom:8px;">
          ${formatPrice(wertspanne.min)} – ${formatPrice(wertspanne.max)}
        </div>
        <div style="font-size:13px;color:#6E6E73;">
          Unverbindliche Ersteinschätzung · Stand: ${new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
        </div>
      </div>

      <!-- Immobiliendaten -->
      <div style="background:#F5F5F7;border-radius:12px;padding:24px;margin-bottom:32px;">
        <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#6E6E73;margin-bottom:16px;">
          Grundlage der Berechnung
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#6E6E73;width:50%;">Immobilienart</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.immobilienart}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#6E6E73;">Lage</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.plz} ${input.wohnort}</td>
          </tr>
          ${!isLand ? `
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#6E6E73;">Wohnfläche</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.wohnflaeche} m²</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#6E6E73;">Zimmer</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.zimmer === 6 ? '6+' : input.zimmer}</td>
          </tr>
          ` : ''}
          ${input.grundstuecksflaeche > 0 ? `
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#6E6E73;">Grundstücksfläche</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.grundstuecksflaeche} m²</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <!-- Hinweis -->
      <div style="border-left:3px solid #2563EB;padding:16px 20px;background:#f8faff;border-radius:0 8px 8px 0;margin-bottom:32px;">
        <p style="font-size:13px;color:#6E6E73;margin:0;line-height:1.7;">
          <strong style="color:#0B1F3A;">Wichtiger Hinweis:</strong> Diese Wertermittlung ist eine
          unverbindliche Ersteinschätzung auf Basis statistischer Marktdaten und stellt kein offizielles
          Gutachten dar. Der tatsächliche Marktwert kann je nach Zustand, Ausstattung und aktueller
          Nachfrage abweichen. Für eine präzise Bewertung empfehlen wir einen persönlichen Vor-Ort-Termin.
        </p>
      </div>

      <!-- CTA -->
      <div style="text-align:center;margin-bottom:32px;">
        <p style="font-size:15px;color:#6E6E73;margin-bottom:20px;line-height:1.6;">
          Möchten Sie eine präzise, fundierte Bewertung Ihrer Immobilie?<br>
          Wir kommen kostenlos zu Ihnen – ganz ohne Verpflichtung.
        </p>
        <a href="tel:+4915129686979"
           style="display:inline-block;background:#2563EB;color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;letter-spacing:-0.01em;">
          Jetzt Termin vereinbaren →
        </a>
      </div>

      <!-- Team -->
      <div style="border-top:1px solid #E8E8ED;padding-top:24px;display:flex;align-items:center;gap:16px;">
        <div>
          <div style="font-size:14px;font-weight:700;color:#0B1F3A;">Niclas van der Straeten & Mazlum Selcuk</div>
          <div style="font-size:13px;color:#6E6E73;">Geschäftsführer · immovativInvest</div>
          <div style="font-size:13px;color:#2563EB;margin-top:4px;">+49 151 296 869 79</div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#F5F5F7;padding:24px 40px;border-top:1px solid #E8E8ED;">
      <p style="font-size:12px;color:#6E6E73;margin:0;line-height:1.6;">
        Diese E-Mail wurde an ${input.email} gesendet, da Sie eine Immobilienbewertung auf immovativ-invest.de angefordert haben.
        Ihre Daten werden gemäß unserer <a href="#" style="color:#2563EB;">Datenschutzerklärung</a> verarbeitet und nicht an Dritte weitergegeben.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

function buildMaklerEmail(input: BewertungsInput, wertspanne: { min: number; max: number }): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Neuer Lead – Wertermittlung</title></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#2563EB;padding:28px 32px;">
      <div style="font-size:18px;font-weight:700;color:#ffffff;">🏠 Neuer Lead – Wertermittlung</div>
      <div style="color:#DBEAFE;font-size:13px;margin-top:4px;">${new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td colspan="2" style="padding:0 0 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6E6E73;">Kontaktdaten</td></tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;width:45%;">Name</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.name}</td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">E-Mail</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#2563EB;"><a href="mailto:${input.email}" style="color:#2563EB;">${input.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Telefon</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.telefon || '—'}</td>
        </tr>
        <tr><td colspan="2" style="padding:24px 0 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6E6E73;">Immobiliendaten</td></tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Immobilienart</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.immobilienart}</td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Lage</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.plz} ${input.wohnort}</td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Wohnfläche</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.wohnflaeche > 0 ? input.wohnflaeche + ' m²' : '—'}</td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Zimmer</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.zimmer === 6 ? '6+' : input.zimmer}</td>
        </tr>
        <tr style="border-bottom:1px solid #E8E8ED;">
          <td style="padding:10px 0;font-size:14px;color:#6E6E73;">Grundstück</td>
          <td style="padding:10px 0;font-size:14px;font-weight:600;color:#0B1F3A;">${input.grundstuecksflaeche > 0 ? input.grundstuecksflaeche + ' m²' : '—'}</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:24px 0 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6E6E73;">Berechnete Wertspanne</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:16px;background:#EFF6FF;border-radius:12px;text-align:center;">
            <div style="font-size:26px;font-weight:800;color:#0B1F3A;">${formatPrice(wertspanne.min)} – ${formatPrice(wertspanne.max)}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: NextRequest) {
  // Rate Limiting
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' }, { status: 429 })
  }

  // Body parsen
  let body: Partial<BewertungsInput & { honeypot?: string }>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  // Honeypot check
  if ((body as { honeypot?: string }).honeypot) {
    return NextResponse.json({ ok: true }) // Bots bekommen eine Erfolgsantwort
  }

  // Pflichtfelder prüfen
  const { plz, wohnort, immobilienart, zimmer, wohnflaeche, grundstuecksflaeche, name, email } = body
  if (!plz || !wohnort || !immobilienart || !name || !email) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 })
  }

  const input: BewertungsInput = {
    plz,
    wohnort,
    immobilienart: immobilienart as Immobilienart,
    zimmer: Number(zimmer) || 3,
    wohnflaeche: Number(wohnflaeche) || 0,
    grundstuecksflaeche: Number(grundstuecksflaeche) || 0,
    name,
    email,
    telefon: body.telefon || '',
  }

  // Wertspanne berechnen
  const wertspanne = berechneWertspanne(input)

  // E-Mails versenden (wenn SMTP konfiguriert)
  const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS

  if (smtpConfigured) {
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) !== 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      // E-Mail an Kunden
      await transporter.sendMail({
        from: `"immovativInvest" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: email,
        subject: `Ihre kostenlose Immobilienbewertung – ${formatPrice(wertspanne.min)} bis ${formatPrice(wertspanne.max)}`,
        html: buildKundenEmail(input, wertspanne),
      })

      // Lead-Benachrichtigung an Makler
      const maklerEmail = process.env.MAKLER_EMAIL || process.env.SMTP_USER
      await transporter.sendMail({
        from: `"immovativInvest Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: maklerEmail,
        subject: `🏠 Neuer Lead: ${name} – ${immobilienart} in ${wohnort}`,
        html: buildMaklerEmail(input, wertspanne),
        replyTo: email,
      })
    } catch (err) {
      console.error('[Wertermittlung] E-Mail-Fehler:', err)
      // Trotzdem Erfolg zurückgeben – Lead wird unten geloggt
    }
  } else {
    // Kein SMTP konfiguriert → Lead in Konsole ausgeben (für Entwicklung)
    console.log('[Wertermittlung] SMTP nicht konfiguriert. Lead-Daten:')
    console.log(JSON.stringify({ input, wertspanne }, null, 2))
    console.log('[Wertermittlung] → .env.local anlegen mit SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM, MAKLER_EMAIL')
  }

  return NextResponse.json({ ok: true, wertspanne })
}
