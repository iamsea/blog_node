const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handerUserRouter = (req, res) => {
    const method = req.method
    const path = req.path


    // login
    if (method === 'POST' && path === '/api/user/login') {
        const data = login(req.body.username, req.body.password)
        if (data) {
            return new SuccessModel(data)
        }
        return new ErrorModel('login fail')
    }
}

module.exports = handerUserRouter
