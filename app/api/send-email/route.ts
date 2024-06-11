import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import cors from "cors";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Cors middleware configuration
const corsMiddleware = cors({
  origin: "*", // Change this to your frontend URL in production
  methods: ["POST"],
});

export async function POST(req: NextRequest) {
  try {
    // await corsMiddleware(req.raw, req.res);

    const { name, email, country, category, state } = await req.json();

    await transporter.sendMail({
      from: '"Contact Form" <info@everywherewegoconsult.org>',
      to: "info@everywherewegoconsult.org",
      subject: "New Contact Form Submission",
      text: `
                Name: ${name}
                Email: ${email}
                Country: ${country}
                Category: ${category}
                State: ${state}
            `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
