const express = require('express')
const app = express()

const errorHandler = (err, req, res, next) => {
    res.status(500).send('Something went wrong!');
};

app.get("/", (req, res)=>{
    res.send("home is her page")
})

app.use(errorHandler);

app.listen(3000, ()=>{
   console.log('App is listening on port 3000')
});