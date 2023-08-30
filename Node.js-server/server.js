const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv").config(); //corrected in package.json file: problem is in install dotenv package

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // Corrected this line
    res.end("Hello sir, this is Uttam Roy. Please check your server.");
});
server.listen(PORT, () => {
    console.log(`Server is running on http://${hostname}:${PORT}`.bgBlack.red);
});
