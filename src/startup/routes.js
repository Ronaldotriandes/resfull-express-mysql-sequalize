const userRoute = require('../component/users/route')
module.exports = (app) => {
    app.use('/api/users', userRoute);
}