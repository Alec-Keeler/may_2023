const express = require('express')
const router = express.Router()
const { Op } = require("sequelize");

const {Group, Album, Song, Genre, SongGenre} = require('../db/models')

router.get('/', async(req, res) => {
	const groups = await Group.findAll({
		attributes: ['name', 'numFollowers'],
		order: [['name', 'DESC'], ['numFollowers']]
	})

	res.json(groups)
})

router.get('/name', async(req, res) => {
	const {name, numFollowers} = req.query
	const group = await Group.findAll({
		where: {
			name: {
				[Op.substring]: name
			}
			// numFollowers
		},
		attributes: ['name', 'numFollowers']
	})
	res.json(group)
})

router.get('/:id(\\d+)', async(req, res) => {
	const group = await Group.findByPk(req.params.id, {
		attributes: ['name']
	})

	res.json(group)
})

router.post('/build', async(req, res) => {
	const {name, numFollowers} = req.body

	const group = Group.build({
		name,
		numFollowers
	})
	group.validate()
	await group.save()

	res.json({
		message: 'Successfully built a new Group',
		group
	})
})

router.post('/create', async(req, res) => {
	const { name, numFollowers } = req.body

	const group = await Group.create({
		name,
		numFollowers
	})

	res.json({
		message: 'Successfully created a new Group',
		group
	})
})

router.put('/:id', async(req, res) => {
	const {name, numFollowers} = req.body
	const group = await Group.findByPk(req.params.id)

	if (numFollowers !== undefined) {
		group.numFollowers = numFollowers
	}

	if (name) {
		group.name = name
	}

	await group.save()

	res.json({
		message: 'Successfully updated the following record',
		data: group
	})
})

router.delete('/:id', async(req, res) => {
	const group = await Group.findByPk(req.params.id)

	await group.destroy()

	res.json({
		message: 'Successfully destroyed the following record:',
		data: group
	})
})

router.get('/join', async(req, res) => {
	// const groups = await Group.findAll({
	// 	// include: Album
	// 	include: [Album]
	// })

	const albums = await Album.findByPk(1, {
		// include: [Group, Song]
		attributes: ['title'],
		include: [{
			model: Group,
			attributes: ['name']
		}, {
			model: Song,
			include: {
				model: Genre,
				through: {
					attributes: []
				}
			}
		}]
	})

	// const song = await Song.findByPk(1, {
	// 	include: Album
	// })
	res.json(albums)
})

module.exports = router