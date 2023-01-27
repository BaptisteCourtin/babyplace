require("dotenv").config();

const app = require("./src/app");

const port = process.env.SERVER;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
