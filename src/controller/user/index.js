const adapter = require('../../adapter/user')

module.exports = {
	register: async (request, response) => {
		const { file } = request
		const result = await adapter.register(file)
	
		return response.json(result)
	}
}