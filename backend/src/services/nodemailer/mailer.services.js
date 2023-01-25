const transporter = require('./transporteur.services');

const sendResponseByMail = async (objet, message, selectedMail) => {
  transporter.sendMail(
    {
      from: `projet3babyplace@gmail.com`,
      to: selectedMail,
      subject: objet,
      text: message,
      html: `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Babyplace</title>
            <style>
              .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
              }
              .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
              }
              .email-header {
                background-color: #7e72f2;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
              .email-body {
                padding: 20px;
              }
              .email-footer {
                background-color: #7e72f2;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="email">
                <div class="email-header">
                  <h1>Babyplace</h1>
                </div>
                <div class="email-body">
                  <p>${message}</p>
                </div>
                <div class="email-footer">
                <p><b>Babyplace</b> © DaveWarehouse™, 2020. All rights reserved. Company Registration
                Number: 21479524.
              </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }, (err, info) => {
      if (err) console.log(err);
      else {
        console.log("Email sent successfully");
        console.log("Message ID : ", info.messageId);
      };
    });
};

module.exports = sendResponseByMail;