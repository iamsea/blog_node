const handerUserRouter = (req, res) => {
    const method = req.method
    const path = req.path


    // login
    if (method === 'POST' && path === '/api/user/login') {
        return {
            'msg': 'this is get login api'
        }
    }
}

module.exports = handerUserRouter
