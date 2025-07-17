const express = require('express')
const app = express();

app.get('/', (req, res, next)=>{
    try{
        let result = someUndefinedFunc();
        res.send('This will not be reached');
    } catch (err){
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error('Caught Error:', err.message);
    res.status(500).send('Something went wrong!');
});