var poop = require('./heap')
var next = require('./script2')

poop.laugh = 'papa'

setTimeout(() => {
	next()
}, 5000)