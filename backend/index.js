const app = require("./src/app");

const port = 5000;

const messages = require('./src/messagerie/messages')

const stockage = require('./src/messagerie/stockage')

const recup = require('./src/messagerie/getMessageFromStockage')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/messages', messages)

app.use('/messages/sauvegarde', stockage)

app.use('/messages/recup', recup)


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on port ${port}`);
  }
});