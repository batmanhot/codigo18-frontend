const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "batmanponte@gmail.com, iss_soft@hotmail.com", // list of receivers
    subject: "Hola ✔", // Subject line
    text: "Hello Mundo, mi primer correo con JS", // plain text body
    html: "<b>Hola Mundo, aqui desde Peru!</b>", // html body
  });

  console.log("Mensaje enviado %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);