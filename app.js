const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000;
const userData = require('./data/user_data');

//get method
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', function(req, res){
    res.send(userData);
});

app.use(bodyParser.json());

//post method
app.post('/addUsers', function(req, res){
    const queryData = req.query;
    userData.push(req.body);
    res.status(200).send({status:true, message:"User Data Added", data:userData});
});

//delete method
app.delete('/deleteUsers', function (req, res){
   const queryData =req.query;
   res.status(200).send({status:true, message:"User Delete Successfull", data:queryData});
});

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`);
})