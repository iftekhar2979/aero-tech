import nodemailer, { TransportOptions } from "nodemailer";

const email = process.env.SMTP_USER_MAIL as string;
const pass = process.env.SMTP_USER_PASSWORD as string;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
} as TransportOptions);

export const mailOptions = {
  from: email,
  to: email,
};
