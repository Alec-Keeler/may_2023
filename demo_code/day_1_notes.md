Front end
	UI/UX, dealing with visuals, fetching (requests), requesting data from the server
	Develop requests, handle responses

Back end?
	Server sending data to client, data storage/handling, routing, efficiency, security, databases
	Handle requests, develop responses

What is an API?
	database data converter, tool for delivering data, creating a way for a user to interact with data

What is a framework?
	a structure around which we build something else

What is Express?
	A framework for building an API


Steps to start with Express
	initialize node
	Install packages
		express
		nodemon
	create an app.js file
		import express
		use express to instantiate app object
		listen to a port (start server)
			app.listen(portNum)

Route Handlers
	app object methods:
		get, post, delete, patch/put, use, all

	Request path:
		string, array of strings, regular expressions, array of RegEx, array of strings and RegEx

	Middleware:
		series of callback functions

	Response methods:
		send(plain text OR JSON)
		json(always sends JSON)
		--
		render(html templating)
		redirect


app.method(path, (middleware) => { response })

Important Request Object properties
	req.body
		Where request body content can be found
		Requires app.use(express.json()) global middleware
	req.params

	req.query