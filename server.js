const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path')
const session = require('express-session');
const flash = require('express-flash')
const PORT = 5000 || process.env.PORT
require('./db/DB')
app.use(session(
    {
        secret:"askajkasjdksajdsa",
        resave:false,
        saveUninitialized:false,
        cookie:{maxAge:1000*60*60*24}
    }
))
app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.json({}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))




require('./routes/web')(app);

// app.use('/api', formpages)

app.listen(PORT, ()=>{
    try {
        console.log(`Port ${PORT} connection successfully`)    
    } catch (error) {
        console.log(error) 
    }
})
