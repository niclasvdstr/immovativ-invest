import { NextRequest, NextResponse } from 'next/server'
import { getTransporter } from '@/lib/mailer'

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 12px;background:#f8f8f8;font-weight:600;color:#1e293b;width:160px;vertical-align:top;border-bottom:1px solid #e2e8f0;">${label}</td>
      <td style="padding:8px 12px;color:#475569;border-bottom:1px solid #e2e8f0;">${value}</td>
    </tr>`
}

function emailWrapper(title: string, badge: string, rows: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);padding:28px 32px;">
      <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 14px;font-size:12px;color:#fff;margin-bottom:10px;">${badge}</div>
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${title}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">immovativ<strong>Invest</strong> – Neue Website-Anfrage</p>
    </div>
    <!-- Content -->
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
        ${rows}
      </table>
      <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;text-align:center;">
        Diese E-Mail wurde automatisch von der Website immovativ-invest.de gesendet.
      </p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType } = body

    let subject = ''
    let html = ''

    if (formType === 'ankauf') {
      const { firstName, lastName, email, phone, propertyType, livingArea, plotArea, zip, city, message } = body
      subject = `🏠 Neue Ankauf-Anfrage – ${firstName} ${lastName} (${city || zip || 'k.A.'})`
      html = emailWrapper(
        `Ankauf-Anfrage von ${firstName} ${lastName}`,
        '🏠 Ankauf',
        row('Name', `${firstName} ${lastName}`) +
        row('Telefon', phone) +
        row('E-Mail', email) +
        row('Objektart', propertyType) +
        row('Wohnfläche', livingArea ? `${livingArea} m²` : '') +
        row('Grundstücksfläche', plotArea ? `${plotArea} m²` : '') +
        row('PLZ', zip) +
        row('Ort', city) +
        row('Nachricht', message)
      )
    } else if (formType === 'makler') {
      const { firstName, phone, email, availability, message } = body
      subject = `📞 Neue Makler-Anfrage – ${firstName}`
      html = emailWrapper(
        `Makler-Anfrage von ${firstName}`,
        '📞 Makler',
        row('Name', firstName) +
        row('Telefon', phone) +
        row('E-Mail', email) +
        row('Erreichbar', availability) +
        row('Nachricht', message)
      )
    } else if (formType === 'kontakt') {
      const { name, phone, email, availability, message } = body
      subject = `✉️ Neue Kontaktanfrage – ${name}`
      html = emailWrapper(
        `Kontaktanfrage von ${name}`,
        '✉️ Kontakt',
        row('Name', name) +
        row('Telefon', phone) +
        row('E-Mail', email) +
        row('Erreichbar', availability) +
        row('Nachricht', message)
      )
    } else if (formType === 'tippgeber') {
      const { firstName, lastName, email, phone, propertyType } = body
      subject = `💰 Neuer Tippgeber – ${firstName} ${lastName}`
      html = emailWrapper(
        `Tippgeber-Anfrage von ${firstName} ${lastName}`,
        '💰 Tippgeber',
        row('Name', `${firstName} ${lastName}`) +
        row('E-Mail', email) +
        row('Telefon', phone) +
        row('Immobilientyp', propertyType)
      )
    } else {
      return NextResponse.json({ error: 'Unbekannter Formulartyp' }, { status: 400 })
    }

    const transporter = getTransporter()
    await transporter.sendMail({
      from: `"immovativInvest Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('E-Mail Fehler:', error)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}
