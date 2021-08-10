const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

const users = [];

wsServer.on("connection", (newUser) => {
  users.push(newUser);

  newUser.on("message", (data) => {
    users.forEach((user) => {
      if (user !== newUser) {
        user.send(data);
      }
    });
  });
});

//__________ server web socket____________
// const ws = new require("ws");

// const WsServer = new ws.Server({ port: 5000 });

// WsServer.on("connection", (server) => {
//   setTimeout(() => {
//     server.send("Добро пожаловать в наш чат!");
//   }, 4000);

//   server.on("message", (message) => {
//     console.log(message);
//   });
// });

//_____ROSSYLKA MAIL nodemailer_____________________________
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const { EMAIL_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "kondysiuka@meta.ua",
//     pass: EMAIL_PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);

// const mail = {
//   from: "kondysiuka@meta.ua",
//   to: "kondysiuka@gmail.com",
//   subject: "Test",
//   text: "Test text",
// };

// transporter
//   .sendMail(mail)
//   .then((info) => console.log(info))
//   .catch((error) => console.log(error));
