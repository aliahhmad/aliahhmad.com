import { MailtrapClient } from "mailtrap";

const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message, email } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    await mailtrapClient.send({
      from: { email: "noreply@aliahhmad.com", name: "Portfolio Contact Form" },
      to: [{ email: "aliahhmadp@gmail.com" }],
      subject: "New message from portfolio",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Reply to:</strong> ${email || "No email provided"}</p>
      `,
      text: `Message: ${message}\nReply to: ${email || "No email provided"}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Mailtrap error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
