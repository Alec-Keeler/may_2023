const express = require('express')
const app = express()
require('dotenv').config()

const catsRouter = require('./routes/cats')

app.use(express.json())

// app.use(express.static('assets'))
// app.use(express.static('assets/css'))
app.use('/styling', express.static('assets/css'))
app.use('/otherStatic', express.static('assets/scripts'))

app.use('/cats', catsRouter)

app.use('/test', (req, res, next) => {
	console.log(`path: ${req.path}`)
	console.log(process.env.MESSAGE)
	next()
})

app.use((req, res, next) => {
	console.log(`path: ${req.path}`)
	next()
})

app.use((req, res, next) => {
	console.log('error test')
	const error = 'There was an error :('
	next()
})

const test = (req, res, next) => {
	res.send('Hello from your first express API')
	// next()
}

const checkUserInput = (req, res, next) => {
	if (!req.body.stuff) {
		// return res.send('please include a stuff property')
		const err = new Error('please include a stuff property')
		err.statusCode = 400
		return next(err)
	}
	console.log('check user input')
	next()
}

app.get('/test', checkUserInput, test)

app.post('/create', (req, res) => {
	console.log(req.body)
	res.json({
		bodyContent: req.body
	})
})

app.get('/request', (req, res) => {
	console.log(req)

	res.send('testing request object')
})

app.get('/actor/:actorId/movies/:movieId', (req, res) => {
	console.log(req.params)
	res.send('actor data')
})

app.get('/search', (req, res) => {
	console.log(req.query)
	res.send('search filters')
})

app.use((req, res, next) => {
	const err = new Error('Resource not found')
	err.statusCode = 404
	next(err)
})

app.use((err, req, res, next) => {
	console.log(err)
	const status = err.statusCode || 500
	res.status(status)
	res.json({
		message: err.message || 'Something went wrong',
		status
	})
})

app.listen(8000, () => console.log('Listening on port 8000...'))