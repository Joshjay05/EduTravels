// app/api/send-email/route.ts

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.hostinger.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_USER, // Use environment variable
		pass: process.env.EMAIL_PASS, // Use environment variable
	},
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { name, email, country, category, state } = req.body;

		try {
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

			res.status(200).json({ message: "Email sent successfully" });
		} catch (error) {
			res.status(500).json({ message: "Failed to send email", error });
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
