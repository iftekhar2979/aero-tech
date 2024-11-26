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


// let transporter = nodemailer.createTransport({
//   host: 'smtp.ionos.co.uk',  // IONOS SMTP server
//   port: 587,                 // Use 465 for SSL or 587 for TLS
//   secure: false,             // true for SSL, false for TLS
//   auth: {
//       user: 'enquiries@aerotechuk.co.uk', // Your email address
//       pass: 'your-email-password'         // Use your regular email password here
//   }
// });



export const mailOptions = {
  from: email,
  to: email,
};
