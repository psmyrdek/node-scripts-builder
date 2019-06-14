const express = require('express')
const path = require('path')

module.exports = () => {

    const app = express()

    app.set('view engine', 'pug')
    app.set('views', path.join(__dirname, './views'))

    app.get('/script', [
        require('./middlewares/bust-cache'),
        require('./controllers/script.controller')
    ])
    
    app.get('/demo', require('./controllers/demo.controller'))

    return app

}