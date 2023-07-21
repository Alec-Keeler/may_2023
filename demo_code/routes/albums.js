const express = require('express')
const router = express.Router()

const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE)

// /albums
router.get('/', (req, res) => {

	const sql = 'SELECT * FROM albums JOIN groups ON (albums.group_id = groups.id);'

	db.all(sql, [], (err, rows) => {
		if (err) {
			return res.json(err)
		}
		console.log(rows)
		res.render('albums', {albums: rows})
	})
})

router.get('/create-album', (req, res) => {
	db.all('SELECT * FROM groups', [], (err, rows) => {
		res.render('create_album', {groups: rows})
	})
})

router.get('/:id', (req, res) => {

	const sql = 'SELECT * FROM albums WHERE id = ?;'
	// const params = [req.params.id]

	db.get(sql, [req.params.id], (err, row) => {
		if (err) {
			return res.json(err)
		}
		res.json(row)
	})
})



router.post('/', (req, res) => {
	const { title, release_year, length, group_id} = req.body
	const sql = `INSERT INTO albums (title, release_year, length, group_id) VALUES (?, ?, ?, ?);`
	const params = [title, release_year, length, group_id]
	console.log(req.body)
	db.run(sql, params, (err) => {
		if (err) {
			res.json(err)
		}
		// res.send('Insert successful')
		db.all('SELECT * FROM albums;', [], (err, rows) => {
			if (err) {
				res.json(err)
			}
			res.redirect('/albums')
		})
	})
})

module.exports = router;