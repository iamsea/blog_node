const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: 'this is a title',
            content: 'this is a content',
            createTime: 1610469988954
        },
        {
            id: 2,
            title: 'this is another title',
            content: 'this is another content',
            createTime: 1610469988955
        }
    ]
}

const getDetail = id => {
    return {
        id: 1,
        title: 'this is a title',
        content: 'this is a content',
        createTime: 1610469988954
    }
}

const createBlog = body => {
    console.log('create blog, body=', body)
    return {
        id: 3
    }
}

const deleteBlog = id => {
    return true
}

module.exports = {
    getList,
    getDetail,
    createBlog,
    deleteBlog,
}
