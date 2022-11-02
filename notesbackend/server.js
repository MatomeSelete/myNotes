const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const cors = require('cors')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())

var corsOptions = {
  origin: 'http://localhost/3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


// baseURL = `http://localhost:3000/api`
// app.use('/api',routes)