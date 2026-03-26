import { MailtrapClient } from "mailtrap";

// Create the Mailtrap client once per serverless instance so repeated requests
// can reuse it while the function stays warm.
const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

// Handles submissions from the contact modal and forwards them to Mailtrap.
export default async function handler(req, res) {
  // Allow the browser-based form to call this endpoint directly.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Respond to the browser's preflight check before the real POST request.
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message, email } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    await mailtrapClient.send({
      // Keep the sender fixed to the domain mailbox while capturing the visitor's
      // email in the message body for follow-up.
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
