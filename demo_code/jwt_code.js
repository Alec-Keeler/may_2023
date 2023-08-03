const jwt = require('jsonwebtoken')

// parts of a jwt: header, payload, signature

const createToken = () => {
	const token = jwt.sign({
		username: 'Alec',
		userId: 123
	}, 'password123')
	console.log(token)
}
// createToken()

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZWMiLCJ1c2VySWQiOjEyMywiaWF0IjoxNjkxMDgxMzAwfQ.puDXLsz-wsBFBlYbuuVZGJqfkTQTJW7q1JuXLxjqw5c'

const verifyToken = (token) => {
	const isSecure =  jwt.verify(token, 'password123')
	console.log(isSecure)
}

verifyToken(token)