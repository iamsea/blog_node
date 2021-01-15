const querystring = require('querystring')
const handerBlogRouter = require('./src/router/blog')
const handerUserRouter = require('./src/router/user')

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    req.path = req.url.split('?')[0]
    req.query = querystring.parse(req.url.split('?')[1])

    getPostData(req).then(postData => {
        req.body = postData
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
    })
}

module.exports = serverHandle
