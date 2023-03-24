// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !values.subject || !values.message) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
        await transporter.sendMail({
          ...mailOptions,
          subject: data.subject,
          text:"This is test string",
          html: "<h1>Test Title</h1><p>Some body test</p>"
        })
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message});
    }
  }

  return res.status(400).json({ message: 'Bad Request' });
}

export default handler;