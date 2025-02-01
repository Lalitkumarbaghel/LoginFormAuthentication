const user = require('../modals/user')

function authController(){
    return{
        register(req,res){
            res.render("signup")
        },
        postregister(req,res){
            const {fst_name, lst_name, email, mobile_n, password} =req.body
            if(!fst_name || !lst_name || !email || !mobile_n || !password){
                req.flash("err", "All Fields are required")
                req.flash('fst_name',fst_name)
                req.flash('lst_name',lst_name)
                req.flash('email',email)
                req.flash('mobile_n',mobile_n)
                return res.redirect('/')
            }
            // user.exists({email:email}, (err, result)=>{
            //     if (err){
            //         console.log(err)
            //     }else{
            //         console.log("Result :", result) // false
            //     }
            // })
            console.log(user.find())

            const User = new user({
                fst_name:fst_name,
                lst_name:lst_name,
                email:email,
                mobile_n:mobile_n,
                password:password
            })
            User.save().then((user)=>{
                return res.redirect("/")
            })
            .catch((err)=>{
                console.log(err)
            })
            
        }
    }
}


module.exports = authController;