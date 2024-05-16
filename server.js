const app = require("./app.js");
const http = require("http");
require("dotenv").config();

const server = http.createServer(app);

const port = process.env.PORT || 3000;


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
