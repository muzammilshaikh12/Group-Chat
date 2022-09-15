const express = require('express')

const bodyParser = require('body-parser');


const app = express()

const cors =  require('cors')

app.use(cors())

app.use(bodyParser.json());

const sequelize = require('./util/database');

const Users = require('./models/user')

const userRoute = require('./routes/user')

app.use(userRoute)

sequelize.sync()
.then(user=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})