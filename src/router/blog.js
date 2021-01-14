const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handerBlogRouter = (req, res) => {
    const method = req.method
    const path = req.path

    // get blog list
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    // get blog detail
    if (method === 'GET' && path === '/api/blog/detail') {
        const id = req.query.id
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    // create a blog
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            'msg': 'this is create blog api'
        }
    }

    // delete a blog
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            'msg': 'this is delete blog api'
        }
    }
}

module.exports = handerBlogRouter
