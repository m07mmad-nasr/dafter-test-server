const express =require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();


app.use(cors())
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin","*");
        next();
    })


app.use(express.json({limit:'10mb'}))
let db = new sqlite3.Database('data.db', (err)=>{
    if (err) { console.log(err.message)
        console.log('conected to the database ')
}})

app.post('/valPass' , (req, res) =>{
    const {user, pass} =req.body
    db.all(`SELECT * FROM login WHERE user='${user}' AND pass = '${pass}' `, (err, rows)=>{
        if(err){
            throw err;
        }
        if(rows.length >0){
            res.send({validation:true})
        }else{
            res.send({validation:false})
        }
    })
})



app.listen(5000, ()=> {console.log("server started in port 5000 ") })