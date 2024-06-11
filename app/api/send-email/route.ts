import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  function isValidEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  
  try {
    const { name, email, country, category, state } = await req.json();

    

    const emailResult = await transporter.sendMail({
      from: '"Contact Form" <info@everywherewegoconsult.org>',
      to: "info@everywherewegoconsult.org",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nCategory: ${category}\nState: ${state}`,
    });


    if (!name || !email || !country || !category || !state) {
      return new NextResponse(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!isValidEmail(email)) {
      return new NextResponse(JSON.stringify({ message: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }  catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(JSON.stringify({ message: "Failed to send email", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
