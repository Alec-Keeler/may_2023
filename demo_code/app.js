const express = require('express')
const app = express()

app.use(express.json())

app.get('/test', (request, response) => {
	response.send('Hello from your first express API')
})

app.post('/create', (req, res) => {
	console.log(req.body)
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

app.listen(8000, () => console.log('Listening on port 8000...'))