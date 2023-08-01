const express = require('express')
const app = express()
require('dotenv').config()

const groupsRouter = require('./routers/groups')

const {Album, Group} = require('./db/models')
const { Op } = require("sequelize");

app.use(express.json())

app.use('/groups', groupsRouter)

// should take in page and size query strings to determine pagination
	// if page or size are undefined, they should be set to defaults of 1 and 5 respectively
	// if page of size are less than one, add no pagination and return all results

// search parameters
	// should take in a title query string and match partial strings in the DB
	// should take in a maxLength query string to filter out longer albums
	// should take in a group query string to find all albums associated with the provided group
app.get('/search', async(req, res) => {
	let { page, size, title, maxLength, groupName } = req.query
	
	if (!size) size = 5
	if (!page) page = 1

	let pagination = {}
	
	if (page >= 1 && size >= 1) {
		pagination.limit = size
		pagination.offset = size * (page - 1)
	}
	let queryObj = {
		...pagination,
		where: {},
		include: []
	}

	if (title) {
		queryObj.where.title = {
			[Op.substring]: title
		}
	}

	if (maxLength) {
		queryObj.where.length = {
			[Op.lte]: maxLength
		}
	}

	if (groupName) {
		queryObj.include.push({
			model: Group,
			where: {
				name: {
					[Op.substring]: groupName
				}
			}
		})
	}
	
	const albums = await Album.findAll(queryObj)
	res.json(albums)

})

const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}...`))