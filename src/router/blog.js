const { getList, getDetail, createBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handerBlogRouter = (req, res) => {
    const method = req.method
    const path = req.path
    const id = req.query.id

    // get blog list
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    // get blog detail
    if (method === 'GET' && path === '/api/blog/detail') {
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    // create a blog
    if (method === 'POST' && path === '/api/blog/create') {
        const data = createBlog(req.body)
        if (data) {
            return new SuccessModel(data)
        }
        return new ErrorModel('create blog fail')
    }

    // delete a blog
    if (method === 'POST' && path === '/api/blog/del') {
        const data = deleteBlog(id)
        if (data) {
            return new SuccessModel()
        }
        return new ErrorModel('delete blog fail')
    }
}

module.exports = handerBlogRouter
