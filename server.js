const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path')
const session = require('express-session');
var flash = require('express-flash')
const PORT = 5000 || process.env.PORT
require('./db/DB')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
const formpages = require('./routes/web')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(express.json({}));
app.use(flash());
// const msg = function(req,res,next){
//     res.locals.msg = req.msg
//     next()
// }
// app.use('/api', msg)
app.get('/', (req,res)=>{
    res.send('hello home pages')
})
app.use('/api', formpages)

app.listen(PORT, ()=>{
    try {
        console.log(`Port ${PORT} connection successfully`)    
    } catch (error) {
        console.log(error) 
    }
})
