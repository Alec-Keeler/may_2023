File types
	Migrations
		For making changes to the DB structure
		Table names - Capitalized and Plural
			Table: MusicianInstruments
		CLI Commands:
			npx dotenv sequelize db:migrate
			npx dotenv sequelize db:migrate:undo
			npx dotenv sequelize db:migrate:undo:all


	Models
		Class representations of each table, with built in query methods
		Model names - Capitalized and SINGULAR 
			Model: MusicianInstrument
		CLI Commands:
			npx sequelize model:generate --name Group --attributes name:string,numFollowers:integer

	Seeders
		For inserting data into tables
		CLI Commands:
			npx sequelize seed:generate --name group-data
			npx dotenv sequelize db:seed:all
			npx dotenv sequelize db:seed:undo
			npx dotenv sequelize db:seed:undo:all


Reset commands:
	npx dotenv sequelize db:seed:undo:all
	npx dotenv sequelize db:migrate:undo:all
	npx dotenv sequelize db:migrate
	npx dotenv sequelize db:seed:all
"dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"

Query methods
	findAll
	findOne
	findByPk

Creating records
	build
		(validate) optional
	save
	create
		build, validate, save

Update
	Model.update
		requries where
	object property assignment -Alec's recommendation
		save()
	instance.update()
	instance.set()
		save()

Delete
	Model.destroy() (don't use this D:)
	await instance.destroy()

Associations
	One to Many
		belongsTo
			side with foreign key
		hasMany
			requires onDelete: 'CASCADE' and hooks: true
	Many to Many
		belongsToMany