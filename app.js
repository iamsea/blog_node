const querystring = require('querystring')
const handerBlogRouter = require('./src/router/blog')
const handerUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    req.path = req.url.split('?')[0]
    req.query = querystring.parse(req.url.split('?')[1])

    // deal blog router
    const blogData = handerBlogRouter(req, res);
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    // deal user router
    const userData = handerUserRouter(req, res);
    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }

    // not have hit router
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 Not Found\n' + req.url)
    res.end()
}

module.exports = serverHandle
