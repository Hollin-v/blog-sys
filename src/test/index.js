const fs= require("fs")
const path= require("path")


// function readFileContent(fileName,callback){  
//     const pathName=path.resolve(__dirname,fileName)
//     console.log(pathName) 
//     fs.readFile(pathName,(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         if(data){
//             callback(JSON.parse(data.toString()))
//         }
//     })
// }

// readFileContent('1.json',(data1)=>{
//     console.log(data1)
//     readFileContent(data1.next_file,(data2)=>{
//         console.log(data2)
//         readFileContent(data2.next_file,(data3)=>{
//             console.log(data3)
//         })
//     })
// })

function readFileContent(fileName){  
    const p= new Promise((resolve,reject)=>{
        const pathName=path.resolve(__dirname,fileName)
        fs.readFile(pathName,(err,data)=>{
            if(err){
                reject(err)
            }
            if(data){
                resolve(JSON.parse(data.toString())) 
            }
        })
    })
   return p 
}
// readFileContent('1.json').then(res=>{
//     console.log(res)
//     return readFileContent(res.next_file)
// }).then(res=>{
//     console.log(res)
//     return readFileContent(res.next_file)
// }).then(res=>{
//     console.log(res)  
// }).catch(err=>{
//     console.log(err)
// })

async function fn(){
    let res=await readFileContent('1.json') 
    console.log(res)  
    let res1=await readFileContent(res.next_file) 
    console.log(res1)
    let res2=await readFileContent(res1.next_file)  
    console.log(res2)      
}
fn()