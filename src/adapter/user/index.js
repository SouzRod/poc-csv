const { readFile } = require('./read-csv');
const User = require('../../model/user')

async function register(file) {
	const usersData = await readFile(file)

	return await User.insertMany(usersData)
}


module.exports = {
	register
}