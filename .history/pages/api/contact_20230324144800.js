// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {

  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => {
    (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val}} /n /n`)
  }, "");

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => 
    (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1>`),
   "");


  return {
    text: stringData,
    html
  }
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
        await transporter.sendMail({
          ...mailOptions,
          ...generateEmailContent(data),
          subject: data.subject,
          
        })
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message});
    }
  }

  return res.status(400).json({ message: 'Bad Request' });
}

export default handler;