import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { firstName, lastName, email, phone, comments, captchaToken } = req.body || {};
  if (!captchaToken) {
    return res.status(400).json({ error: "reCAPTCHA verification required" });
  }
  try {
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return res.status(500).json({ error: "reCAPTCHA verification error" });
  }

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      error: "Missing required fields: firstName, lastName, email",
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: (Number(process.env.SMTP_PORT) || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });


  const mailOptions = {
    from: `"Thinkerdyne Contact Form" <${process.env.SMTP_USER}>`,
    to: "info@thinkerdyne.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
            <td style="padding: 8px 12px;">${firstName} ${lastName}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 8px 12px;">${phone || "Not provided"}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Comments</td>
            <td style="padding: 8px 12px;">${comments || "No comments"}</td>
          </tr>
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          This email was sent from the Thinkerdyne website contact form.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
