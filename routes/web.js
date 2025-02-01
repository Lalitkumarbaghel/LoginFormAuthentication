const authController = require('../app/controllers/auth')

function routeInit(app){
    //app.get('/', authController().home)
    app.get('/', authController().register)
    app.post('/', authController().postregister)
}


module.exports = routeInit;