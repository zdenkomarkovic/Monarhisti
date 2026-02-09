import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      krsnaSlava,
      joinDate,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !address || !city || !krsnaSlava) {
      return NextResponse.json(
        { error: 'Сва поља су обавезна' },
        { status: 400 }
      );
    }

    // Initialize Mailjet
    const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY || '',
      apiSecret: process.env.MAILJET_SECRET_KEY || '',
    });

    // Send email using Mailjet
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER || '',
            Name: 'Српски покрет Монархиста',
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER || '',
              Name: 'Администратор',
            },
          ],
          Subject: 'Нови захтев за чланство',
          TextPart: `
Нови захтев за чланство:

Име: ${firstName}
Презиме: ${lastName}
Email: ${email}
Телефон: ${phone}
Адреса: ${address}
Град: ${city}
Крсна слава: ${krsnaSlava}
Datum učlanjivanja: ${joinDate}
          `,
          HTMLPart: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e3a8a; border-bottom: 3px solid #d4af37; padding-bottom: 10px;">
                Нови захтев за чланство
              </h2>
              <table style="width: 100%; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Име:</strong></td>
                  <td style="padding: 10px;">${firstName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Презиме:</strong></td>
                  <td style="padding: 10px;">${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Email:</strong></td>
                  <td style="padding: 10px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Телефон:</strong></td>
                  <td style="padding: 10px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Адреса:</strong></td>
                  <td style="padding: 10px;">${address}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Град:</strong></td>
                  <td style="padding: 10px;">${city}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Крсна слава:</strong></td>
                  <td style="padding: 10px;">${krsnaSlava}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f3f4f6;"><strong>Датум учлањивања:</strong></td>
                  <td style="padding: 10px;">${joinDate}</td>
                </tr>
              </table>
            </div>
          `,
        },
      ],
    });

    return NextResponse.json(
      { message: 'Захтев за чланство је успешно послат!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending membership request:', error);
    return NextResponse.json(
      { error: 'Грешка при слању захтева. Покушајте поново.' },
      { status: 500 }
    );
  }
}
