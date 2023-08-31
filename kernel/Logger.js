const colors = require('colors')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

class Logger {
	constructor(dir) {
		this.dir = dir || path.resolve(__dirname, '..', 'logs')
	}
	save(text) {
		fs.appendFileSync(path.resolve(this.dir, moment().format('YYYY-MM-DD') + '.log'), text + '\n')
	}
	info(text) {
		const prefix = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] [INFO] `
		const txt = prefix.green + text.split('\n').join('\n' + prefix)
		console.log(txt)
		this.save(prefix + text.split('\n').join('\n' + prefix))
	}
	warn(text) {
		const prefix = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] [WARN] `
		const txt = prefix.yellow + text.split('\n').join('\n' + prefix)
		console.log(txt)
		this.save(prefix + text.split('\n').join('\n' + prefix))
	}
	error(text) {
		const prefix = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] [ERROR] `
		const txt = prefix.red + text.split('\n').join('\n' + prefix)
		console.log(txt)
		this.save(prefix + text.split('\n').join('\n' + prefix))
	}
}

module.exports = Logger
