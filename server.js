//dependencies
const http = require("http");
const colors = require("colors");
const env = require("dotenv").config();
//define port number
const port = process.env.PORT || 8000;
//crete server config
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const user = JSON.stringify([
        {
            name: "shahadat Hussain",
            age: 30,
            skills: "MERN Stack Developer",
        },
    ]);
    //conditionally
    if (req.url === "/user" && req.method === "GET") {
        res.write(user);
    } else {
        res.write("404 Bad Request");
    }
    res.end();
}).listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running at ${port} Thank You `.bgGreen.blue.bold);
    }
});
