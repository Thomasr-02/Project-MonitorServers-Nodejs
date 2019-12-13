const http = require("http")

http.createServer((req,res)=>{
    console.log("Escutando na porta 8001!");
    res.write(`One server`);
    res.end();
}).listen(8001)