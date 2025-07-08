const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=> {
    res.send('Welcome to home');


});
app.get('/about',(req,res)=>{
        res.send('This is about page.');
    }
);
app.post('/contact',(req,res)=>{
    const name=req.body.name;
    console.log(name);
    res.send("Thankyou for contacting us "+ name+"!");
});
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});