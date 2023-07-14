const express=require('express');

// const app=express();
const app=express();

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

app.get("/",function(req,res){
    //res.send("<h1>Hello World</h1><br/><p style='color:red;'>This is a paragraph</p>");
    // res.send(./sample2.html);
    // console.log(__dirname);
    //res.sendFile("D:/Web_Development_Udemy/Back_End_Development/my-express-server/sample2.html");
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact Me at : mohitakhouri090301@gmail.com");
});

app.get("/about",function(req,res){
    res.send("My Name is Mohit Akhouri and my age is 22 and i study in LNMIIT as CCE for 4 years");
});