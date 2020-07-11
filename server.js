require('dotenv').config()
var bodyParser=require('body-parser');
const express = require('express')
const app = express()
var cors = require('cors')
const ibmdb = require('ibm_db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const port = 3000

let connStr = "DATABASE="+process.env.DB_DATABASE+";HOSTNAME="+process.env.DB_HOSTNAME+";PORT="+process.env.DB_PORT+";PROTOCOL=TCPIP;UID="+process.env.DB_UID+";PWD="+process.env.DB_PWD+";";

app.get('/',function(request, response){
  console.log('getmethod')
  return response.json({success:-1, message:''})
});

app.post('/getQuestions', function(request, response, next){
    console.log('hi')
     ibmdb.open(connStr, function (err,conn) {
       if (err){
         console.log(err)
         return response.json({success:-1, message:err});
       }
       conn.query("SELECT * FROM "+process.env.DB_SCHEMA+".QUESTIONS ORDER BY ID ASC;", function (err, data) {
         if (err){
           console.log(err)  
           return response.json({success:-1, message:err});
         }
         conn.close(function () {
           console.log(data)   
           return response.json({success:1, message:'Data Received!', data:data});
         });
       });
     });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))