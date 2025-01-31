const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DATA_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once('open', ()=>{
    try {
        console.log('Database connected...');
    } catch (error) {
        console.log('Database failed...'); 
    }
})
