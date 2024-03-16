const express = require('express');
const ejs = require('ejs');
const path = require('path');

const PORT = 3000; 

const app = express();
app.use(express.urlencoded());

app.set('view engine','ejs');

let todo_list = [];

app.post('/api/ToDo',(req,res)=>{
    const answer = req.body.todo_input;
    todo_list.push(answer);
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.render((path.join(__dirname,'public','index.ejs')) , {todos : todo_list});
});

app.listen(PORT , ()=>{
    console.log(`server is running on the port ${PORT}`);
});