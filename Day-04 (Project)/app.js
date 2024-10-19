const http = require("http");
const path = require("path");
const fs = require("fs");
// let home = path.join(__dirname,"index.html")
// console.log(home)
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let a = fs.readFileSync("index.html",'utf-8')
    res.end(a);
  } else if (req.url == "/login") {
    let b = fs.readFileSync("Login.html",'utf-8')
    res.end(b);
  } else if (req.url == "/signup") {
    let c = fs.readFileSync("Signup.html",'utf-8')
    res.end(c);
  } else {
    let d = fs.readFileSync("Pagenotfound.html",'utf-8')
    res.end(d);
  }
})

server.listen(5000, () => {
  console.log("server running at 5000");
})
