const express = require("express");
const app = express();
const staffLogin = require("./data/staff_login.json");
const adminLogin = require("./data/admin_login.json");
const studentLogin = require("./data/student_login.json");
const url = require("url");

app.get("/login",(req,res) =>{
    const user = url.parse(req,url,true).query.user;
    if(user === 'admin'){
        res.send(adminLogin)
    }else if(user === 'staff'){
        res.send(staffLogin)
    }else{
        res.send(studentLogin)
    }

})

app.listen(3300,() =>{
    console.log("服务器运行在3300");
})