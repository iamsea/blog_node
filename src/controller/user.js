const login = (username, password) => {
    if (username === 'nana' && password === '123') {
        return true
    }
    return false
}

module.exports = {
    login
}
