import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email } = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: 'Unfold <onboarding@resend.dev>',
      to: ['knwankwu1@gmail.com'],
      subject: 'New Waitlist Signup',
      html: `<p>New signup from: ${email}</p>`
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}
