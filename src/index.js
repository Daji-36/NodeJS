const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
// app.use(morgan('combined')) // Ghi lại log của các yêu cầu HTTP
app.use(express.urlencoded(
    { extended: true } // extended: true cho phép sử dụng các thư viện như qs
)) // Phân tích dữ liệu từ form
app.use(express.json()) // Phân tích dữ liệu JSON


// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
})) // Từ phiên bản express-handlebars mới, cần sử dụng handlebars.engine()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes
route(app)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))