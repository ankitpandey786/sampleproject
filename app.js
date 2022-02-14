const http = require('http');
const server = http.createServer();

console.log(server);
server.listen(3000,(req,res) => {
    console.log("sever is running at 3000 port");
})

http.get('http://localhost:3000',(req,res) => {
    res.write("hiiii");
})