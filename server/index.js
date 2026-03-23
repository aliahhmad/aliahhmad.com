import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config();

const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  console.log("Health check endpoint hit");
  res.json({ message: "Server is running!" });
});

app.post("/api/contact", async (req, res) => {
  const { message, email } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const sender = {
    email: "noreply@aliahhmad.com",
    name: "Portfolio Contact Form",
  };

  const recipients = [{ email: "aliahhmadp@gmail.com" }];

  try {
    await mailtrapClient.send({
      from: sender,
      to: recipients,
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
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
