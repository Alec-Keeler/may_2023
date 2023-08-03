const bcrypt = require('bcryptjs')

const hashPass = async (password) => {
	const hash = await bcrypt.hash(password, 12)
	console.log(hash)
}

// hashPass('password123')

// $2a$12$.BylyBaX/x237dtjQln9U.4wF6J8C2./zSbR07sxq6xRJHZWaKqEO
// \__/\/ \____________________/\_____________________________/
// Alg Cost      Salt   (22)                     Hash


const testPass = async (password, hash) => {
	const isPass = await bcrypt.compare(password, hash)
	console.log(isPass)
}

testPass('password123', '$2a$12$.BylyBaX/x237dtjQln9U.4wF6J8C2./zSbR07sxq6xRJHZWaKqEO')