import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone, domain, webinarTitle } = await req.json()

    if (!name || !email || !phone || !domain) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Gmail transporter (same as your contact form)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    })

    // Email content
    const mailOptions = {
      from: `"TechZnanie Webinars" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO, // send to yourself or a specific admin email
      subject: `New Webinar Registration: ${webinarTitle || "Unknown Webinar"}`,
      html: `
        <h2>New Webinar Registration</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Domain:</b> ${domain}</p>
        <p><b>Webinar:</b> ${webinarTitle}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Registration email sent successfully" })
  } catch (error) {
    console.error("Error sending registration email:", error)
    return NextResponse.json({ error: "Failed to send registration email" }, { status: 500 })
  }
}
