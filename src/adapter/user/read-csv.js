const csv = require('fast-csv');
const { Readable } = require('stream');

function prepareData(data) {
	return {
		name: data['Nome'],
		age: data['Idade'],
		email: data['Email'],
		address: data['endereço']
	}
}

function readStreamFile(fileStream) {
	const userData = [];

	return new Promise(resolve => {
		fileStream.pipe(csv.parse({
			headers: true
		}))
			.on('data', data => userData.push(prepareData(data)))
			.on('end', () => resolve(userData));
	})
}

function createReadStream(buffer) {
	const readableFile = new Readable()
	readableFile.push(buffer)
	readableFile.push(null)

	return readableFile
}

async function readFile(file) {
	const { buffer } = file
	const streamFile = createReadStream(buffer)
	return await readStreamFile(streamFile)
}


module.exports = { readFile }