import { EmailTemplate } from '../../../app/components/EmailTemp';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json(); // Parse JSON body

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Your company email
      to: [email], // User's email entered in form
      subject: 'Thank you for reaching out!',
      react: EmailTemplate({ name, email, message }), // Using the React email template
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
