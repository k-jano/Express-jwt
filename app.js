const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

const dbURL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.un1f5.mongodb.net/${process.env.DB_NAME}`
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(app.listen(process.env.PORT))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.render('home'))
app.get('/content', (req, res) => res.render('content'))
