const express = require('express')
require('./config/database')
const router = require('./config/router')

const app = express()

app.use(express.json())
app.use(router)

app.listen(8080, (err) => {
	if (err) console.error(err)

	console.log('Server running')
})