import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, company, service, message } = req.body;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // replace with your email
                pass: process.env.EMAIL_PASS,   // replace with your email password
            }
        });

        try {
            let info = await transporter.sendMail({
                from: 'New message from your Portfolio',
                to: 'dianefullstack@gmail.com',
                subject: 'New message from your Portfolio',
                text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`
            });

            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email: ', error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
