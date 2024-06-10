// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
	host: "imap.hostinger.com",
	port: 993,
	secure: true,
	auth: {
		user: "info@everywherewegoconsult.org",
		pass: "Roselex95@",
	},
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { name, email, country, category, state } = req.body;

		try {
			await transporter.sendMail({
				from: '"Contact Form" <your-email@example.com>',
				to: "recipient-email@example.com",
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
};
