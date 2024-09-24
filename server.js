const http=require('http');

const server=http.createServer((req,res)=>
{
console.log(req.url);
if(req.url==='/about'){
    res.writehead(404);
}
}
)
server.listen(3003,()=>{
    console.log("hello world")
})
