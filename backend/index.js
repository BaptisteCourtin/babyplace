const express = require("express");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const auth = require("./auth");

const structure = require("./structure");

const dashboard = require("./dashboard");

const messages = require("./messages");

app.use("/auth", auth);

app.use("/structure", structure);

app.use("/dashboard", dashboard);
app.use("/messages", messages);

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
