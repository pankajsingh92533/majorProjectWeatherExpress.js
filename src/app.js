const express=require('express');
const path=require('path');
const app=express();
//envioromental variable,basically kaha pe run krna hai
const port=process.env.PORT || 3000;
//public static path
const static_path=path.join(__dirname,"../public")
//view ,so use render inster of send
app.set("view engine","hbs");
// const template_path=path.join(__dirname,"../templates")
// //here using for partials in templets file=>views ke jagah template use kiya gya hai
// app.set('views',template_path);
//for static website
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: 'Oops! page not found'
    });
});
app.listen(port,()=>{
    console.log(`listening to the port${port}`);
})