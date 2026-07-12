import nodemailer from "nodemailer";

interface MailOptions {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(data: MailOptions) {
  const { name, email, subject, message } = data;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) return;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn(
      "SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local to receive email notifications."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
      <div style="background: linear-gradient(135deg, #8d54ff, #9810fa); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #475569; width: 100px;">Name</td>
          <td style="padding: 12px; color: #0f172a;">${name}</td>
        </tr>
        <tr style="background: #f1f5f9;">
          <td style="padding: 12px; font-weight: bold; color: #475569;">Email</td>
          <td style="padding: 12px; color: #0f172a;">
            <a href="mailto:${email}" style="color: #8d54ff;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #475569;">Subject</td>
          <td style="padding: 12px; color: #0f172a;">${subject}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">Message:</h3>
        <p style="margin: 0; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
      <p style="color: #94a3b8; font-size: 12px; text-align: center;">
        This notification was sent from your portfolio contact form.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    replyTo: email,
    to: contactEmail,
    subject: `Portfolio Contact: ${subject}`,
    html,
  });
}
