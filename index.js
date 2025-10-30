const http = require("http");
const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routers/book-router");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use("/books", bookRouter);

const server = http.createServer(app);
server.listen(port, hostname, () =>{
console.log(`sever running at http://${hostname}:${port}`);

});