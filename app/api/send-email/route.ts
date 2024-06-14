// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";


// const transporter = nodemailer.createTransport({
//   host: "smtp.hostinger.com",
//   tls: {
//     ciphers: "SSLv3",
// },
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });




// export async function POST(req: NextRequest) {
//   try {

//     const { name, email, country, category, state } = await req.json();

//     await transporter.sendMail({
//       from: '"Contact Form" <info@everywherewegoconsult.org>',
//       to: "info@everywherewegoconsult.org",
//       subject: "New Contact Form Submission",
//       text: `
//                 Name: ${name}
//                 Email: ${email}
//                 Country: ${country}
//                 Category: ${category}
//                 State: ${state}
//             `,
//     });

//     return NextResponse.json(
//       { message: "Email sent successfully" },
//       { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
//     );
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return NextResponse.json(
//       { message: "Failed to send email", error },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Set up the transporter with the SMTP details
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

// The POST handler for the API endpoint
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, country, category, state } = await req.json();

    // Email content
    const mailOptions = {
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
    };

    // Send the email and wait for the promise to resolve
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    // Log the error and return a failure response
    console.error("Failed to send email:", error);

    return NextResponse.json(
      { message: "Failed to send email", error },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
