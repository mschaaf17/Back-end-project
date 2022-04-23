const express = require('express')
const path = require('path')
const session = require('express-session')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection')
//add session store!
//set up express session


//set up helpers

//run handlebars
const hbs = exphbs.create({})
app.engine =('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//join the public folders
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'))
})