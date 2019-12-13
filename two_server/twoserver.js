const http = require("http")

http.createServer((req,res)=>{
    console.log("Escutando na porta 8002!");
    res.write(`Two server`);
    res.end();
}).listen(8002)