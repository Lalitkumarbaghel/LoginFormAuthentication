const getformpage =  (req,res)=>{
    return res.render("signup")
}
const postform =  (req,res)=>{
    console.log(req.body)
}

module.exports = {getformpage, postform};