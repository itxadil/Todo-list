const express=require("express")
const app=express()
const bodyp=require("body-parser")
const https=require("https")
//const mydate=require(__dirname+"/date.js")
app.use(bodyp.urlencoded({extended:true}))
app.use(express.static("public"))
//const { send } = require("process")
//const { isTypedArray } = require("util/types")
app.set('view engine', 'ejs');
//setting route
let data="";
let arr=["Buy food","Cook Food","Eat food"]
let workitems=[];
app.get("/",function(req,res){
    //let day=mydate.getdate()
    let today1=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
let day=today1.toLocaleDateString("en-US",options)
    res.render("list",{daynum:day ,newitem:arr})
})
app.post("/",function(req,res){
    let item=req.body.added;
    
    if(req.body.list==="Work"){
    workitems.push(item)
    res.redirect("/work")
    }else{
        arr.push(item)
        res.redirect("/")
    }
})
app.get("/work",function(req,res){
    res.render("list",{daynum:"Work List" ,newitem:workitems})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("server is up and running ")
})