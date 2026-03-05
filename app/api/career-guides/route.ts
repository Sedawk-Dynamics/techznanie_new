import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, guideTitle } = await req.json();

    // ✅ Gmail SMTP setup (Google Workspace)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your info@ email
        pass: process.env.EMAIL_PASS, // App Password (NOT your login password)
      },
    });

    const mailOptions = {
      from: `"TechZnanie Career Guides" <${process.env.EMAIL_USER}>`,
      to: "info@techznanieinnoversity.com",
      subject: `New Career Guide Download Request - ${guideTitle}`,
      html: `
        <h2>New Career Guide Download</h2>
        <p><strong>Guide:</strong> ${guideTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
