const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`Server is up and running ⚡ at ${PORT} port`);
});
