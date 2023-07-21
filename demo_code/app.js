const express = require('express');
const app = express();
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('assets'))

app.set('view engine', 'pug')

app.use((req, res, next) => {
		console.log('!!!!!!')
		next()
	})

app.get('/', (req, res) => {
	res.render('index')
})


const albumsRouter = require('./routes/albums')
app.use('/albums', albumsRouter)



const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}...`))