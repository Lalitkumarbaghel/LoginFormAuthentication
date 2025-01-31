const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT

app.listen(PORT, ()=>{
    try {
        console.log(`Port ${PORT} connection successfully`)    
    } catch (error) {
        console.log(error) 
    }
})
