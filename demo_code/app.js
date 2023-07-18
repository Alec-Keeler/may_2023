const express = require('express')
const app = express()

app.use(express.json())

app.use('/test', (req, res, next) => {
	console.log(`path: ${req.path}`)
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
		return res.send('please include a stuff property')
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

app.use((err, req, res, next) => {
	console.log(err)
	res.send(err)
})

app.listen(8000, () => console.log('Listening on port 8000...'))