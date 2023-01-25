const transporter = require('./transporteur.services');

const sendResponseByMail = async (objet, message, selectedMail, selectedNom, selectedPrenom) => {
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
                  padding: 20px 0px;
                  font-family: Arial, Helvetica, sans-serif;
              }
      
              .email-header {
                  background: linear-gradient(148.74deg,
                          rgb(71, 79, 255) 2.49%,
                          rgb(227, 122, 204) 99.05%);
                  color: #fff;
                  display: flex;
                  align-items: center;
                  padding: 20px 40px;
              }
      
              .email-body {
                display: flex;
                align-items: center;
                padding: 30px;
                font-size: 1.15em;
                     
              }

              .email-body-conatiner {
                margin-left: 40px;
              } 
                    
              .email-body-header {
                  margin-bottom: 30px;
                  font-size: 1.15em;
              }
      
              .email-body-header span {
                  color: #7e72f2;
                  font-size: 1.25em;
                  font-weight: 500;
              }
      
              .email-body-main {
                  color: #000;
                  margin-bottom: 30px;
              }
      
              .email-pre-footer {
                  border-top: solid 2px #7e72f2;
                  color: #000;
                  text-align: center;
                  padding: 10px 0px;
              }
      
              .email-footer {
                  color: #000;
                  text-align: center;
              }
      
              .logo {
                  width: 40px;
                  height: 40px;
                  margin-left: 40px;
              }
      
              .nomLogo {
                  margin-left: 10px;
                  height: 40px;
              }
      
              .img-woman {
                width: 200px;
                height: 200px;      
                padding-top:10%;
                margin-right: 20px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <div class="email">
                  <div class="email-header">
                      <img class="logo" src="https://i.ibb.co/QjzsPjn/logo5white.png" alt="logo" />
                      <img class="nomLogo" src="https://i.ibb.co/yP0y2Tg/babyplace-Txtwhite.png" alt="logo" />
                  </div>
                  <div class="email-body">
                      <img class="img-woman" src="https://i.ibb.co/DK8JB4W/img-woman.png" alt="logo" />
                      <div class="email-body-container">
                          <div class="email-body-header">
                              <p>Madame, Monsieur <span>${selectedPrenom} ${selectedNom}</span>,</p>
                          </div>
                          <div class="email-body-main">
                              <p>${message}</p>
                          </div>
                      </div>
                  </div>
                  <div class="email-pre-footer">
                      <p>Cet email à été envoyé par <b>Babyplace</b>, une société de DaveWarehouse, via nodemailer.</p>
                  </div>
                  <div class="email-footer">
                      <p>DaveWarehouse Society, 4 rue Baron 44100 NANTES</p>
                      <p>
                          info@davewarehouse.projet - 02.40.01.02.03</p>
                      <p>© DaveWarehouse™, 2020. All rights reserved. Company Registration
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