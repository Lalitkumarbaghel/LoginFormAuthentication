const User = require('../modals/user') 
const getformpage =  (req,res)=>{
    return res.render("signup")
}
const postform =  (req,res)=>{
    const {fst_name, lst_name, email, mobile_n, password} = req.body;
    if(!fst_name || !lst_name || !email || !mobile_n || !password){
        req.flash('err', "All Fields are required")
        return res.redirect("/api")
    }
    
}

module.exports = {getformpage, postform};