const express = require('express');
const path = require('path');

const app = express();
const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next)=>{
    // res.json({name: 'Baktash', email: 'baktash@live.ca', phone: 9054431111})
    res.render('index')
});


app.listen(3000, ()=>console.log('http://localhost:3000'));