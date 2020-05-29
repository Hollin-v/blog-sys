const http=require("http");
const blog=require("./src/blog")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    let url=req.url;
    console.log(url)
    console.log(__dirname,__filename)
    res.end("<h4>小静静</h4><input/>")


    blog()
})
if(server){
    console.log("服务正在运行中......")
}
server.listen(3000)