// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // Ensure that environment variables are defined
// const { EMAIL_USER, EMAIL_PASS } = process.env;

// if (!EMAIL_USER || !EMAIL_PASS) {
//   throw new Error("Email environment variables are not set.");
// }

// const transporter = nodemailer.createTransport({
//   host: "smtp.hostinger.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, country, category, state } = await req.json();

//     if (!name || !email || !country || !category || !state) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     await transporter.sendMail({
//       from: '"Contact Form" <info@everywherewegoconsult.org>',
//       to: "info@everywherewegoconsult.org",
//       subject: "New Contact Form Submission",
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Country: ${country}
//         Category: ${category}
//         State: ${state}
//       `,
//     });

//     return NextResponse.json(
//       { message: "Email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return NextResponse.json(
//       { message: "Failed to send email", error: error.message },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure environment variables are loaded
const { EMAIL_USER, EMAIL_PASS } = process.env;

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error("Email environment variables are not set.");
}

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Helper function to handle CORS
const handleCors = (req: NextRequest) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  headers.set("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers });
  }

  return headers;
};

export async function handler(req: NextRequest) {
  const corsHeaders = handleCors(req);

  // If handleCors returns a response (for OPTIONS), return it directly
  if (corsHeaders instanceof NextResponse) {
    return corsHeaders;
  }

  if (req.method === "POST") {
    try {
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

      return new NextResponse(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200, headers: corsHeaders }
      );
    } catch (error) {
      console.error("Failed to send email:", error);
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return new NextResponse(
        JSON.stringify({ message: "Failed to send email", error: errorMessage }),
        { status: 500, headers: corsHeaders }
      );
    }
  } else {
    // Return a 405 Method Not Allowed for other methods
    return new NextResponse(
      JSON.stringify({ message: "Method not allowed" }),
      { status: 405, headers: corsHeaders }
    );
  }
}

export { handler as POST, handler as OPTIONS };

