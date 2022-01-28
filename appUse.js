// middleware is any function which has access to the req, res, next 
const express = require ('express');
const path = require('path');
const app = express ();

app.use(express.static('public'));

function validateUser (req, res, next){
    res.locals.validated = true; 
    console.log('Validated is running!')
    next();
}

//will run on all methods and paths
app.use(validateUser);
// will run on / only on get method
app.get('/', validateUser);

// will run only on /admin route
app.use('/admin', validateUser);

app.get('/', (req, res, next)=>{
    res.send('<h3> Hello, From Middleware in Express');
    console.log(res.locals.validated);
   
});

app.get('/admin', (req, res, next)=>{
    res.send('<h3> Hello, From Admin in Express');
    console.log(res.locals.validated);
   
});

//its another form of middleware!
app.get('/user', (req, res, next)=>{
    res.send('<h3> Hello, From User in Express');
    res.locals.validated = false; 
    console.log('Validated is running!')
    next();
    console.log(res.locals.validated);
   
});


app.listen(3000, ()=>{
    console.log(`http://localhost:3000`);
});

