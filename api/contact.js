import { MailtrapClient } from "mailtrap";
import demos, { demoRoles } from "../src/data/demos.js";

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

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

  const { type, projectId, name, role, message, email } = req.body || {};
  const isDemoRequest = type === "demo-request";
  const demo = demos.find((item) => item.id === projectId);

  if (typeof message !== "string" || !message.trim() || message.length > 1000) {
    return res.status(400).json({ error: "A message of up to 1,000 characters is required" });
  }
  if (isDemoRequest && (
    !demo ||
    typeof name !== "string" || !name.trim() || name.length > 100 ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !demoRoles.includes(role)
  )) {
    return res.status(400).json({ error: "A valid project, name, email, and visitor type are required" });
  }

  const submission = isDemoRequest
    ? `Project: ${demo.name}\nName: ${name.trim()}\nEmail: ${email}\nVisitor type: ${role}\n\nReason for requesting a demo:\n${message.trim()}`
    : `Message: ${message}\nReply to: ${email || "No email provided"}`;
  const title = isDemoRequest ? `Demo request: ${demo.name}` : "New Contact Form Submission";

  try {
    await mailtrapClient.send({
      // Keep the sender fixed to the domain mailbox while capturing the visitor's
      // email in the message body for follow-up.
      from: { email: "noreply@aliahhmad.com", name: "Portfolio Contact Form" },
      to: [{ email: "aliahhmadp@gmail.com" }],
      subject: isDemoRequest ? `Demo request: ${demo.name}` : "New message from portfolio",
      html: `
        <h3>${title}</h3>
        <p style="white-space: pre-wrap">${escapeHtml(submission)}</p>
      `,
      text: submission,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Mailtrap error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
