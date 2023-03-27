const http =require('http')
const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;

const server =http.createServer((req,res)=>{
  res.statusCode =200;
  res.setHeader("Access-Control-Allow-Origin","*");
});
    const passs = 'admin';
    const userr = 'admin';
server.post('/valPass' , (req, res) =>{
    const {user, pass} =req.body
        if(pass == '${passs}' && user=='${userr}'){
            throw err;
        }
        if(rows.length >0){
            res.send({validation:true})
        }else{
            res.send({validation:false})
        }
    })




server.listen(port, hostname, () => {
    console.log(`Server run at http://${hostname}:${port}/`)
})
