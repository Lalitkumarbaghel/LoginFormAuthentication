const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path')
const PORT = 5000 || process.env.PORT
require('./db/DB')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
const formpages = require('./routes/web')
app.use(express.static(path.join(__dirname, '/[ublic')))
app.use(express.urlencoded({extended:true}));
app.use(express.json({}));
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
