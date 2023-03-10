const express=require("express");
const app=express()
const path=require('path')
//for parsing the data
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view',path.join(__dirname,'view'))
app.set('view engine','ejs')
const comments=[
{
  username:'van',
  comment:'lol you are too funny'


},
{

  username:'deb',
  comment:'DAMN TRUE'

}

]
app.get('/comments',(req,res)=>{

  res.render('comments/index',{comments})

})
app.get('/tacos',(req,res)=>{

    res.send("GET")

})
 
app.post('/tacos',(req,res)=>{
 const {toy,qty}=req.body;
    res.send(`here your order ${qty}  ${toy} tacos`);
})
app.listen("8080",()=>{
   console.log("helo")


})