import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract fields
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const dob = formData.get("dob") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const college = formData.get("college") as string;
    const degree = formData.get("degree") as string;
    const graduationYear = formData.get("graduationYear") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const salary = formData.get("salary") as string;
    const coverLetter = formData.get("coverLetter") as string;

    // Resume File
    const resume = formData.get("resume") as File | null;
    let attachment: any = null;
    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachment = {
        filename: resume.name,
        content: buffer,
      };
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // Email options
    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO_CAREER, // your inbox
      subject: `New Career Application: ${firstName} ${lastName} - ${position}`,
      text: `
        New job application received:

        Name: ${firstName} ${lastName}
        DOB: ${dob}
        Phone: ${phone}
        Email: ${email}
        College: ${college}
        Degree: ${degree} (${graduationYear})
        Position Applied: ${position}
        Experience: ${experience}
        Expected Salary: ${salary}
        Cover Letter: ${coverLetter}
      `,
      attachments: attachment ? [attachment] : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application sent successfully!" });
  } catch (error: any) {
    console.error("Error sending application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application", error: error.message },
      { status: 500 }
    );
  }
}
