
//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints
const {getTemplate, editTemplate} = require('./controller')

app.get('/template', getTemplate)

app.post('/madLib', editTemplate)


//Start server with app.listen
app.listen(6789, () => console.log('Server is up on port 6789'))