class Command {
	constructor(core) {
		if (typeof core.config.gptID !== 'object') {
			core.config.gptID = {}
			core.configManager.save()
		}
	}
	get info() {
		return {
			name: 'gptcmd',
			developer: 'ZhangSoft',
			level: 1,
			explain: '设置ChatGPT',
			usage: '^gptcmd commands',
		}
	}
	async run(core, bot, user, args, payload){
		if (!user.trip) return bot.reply(payload, `我是不会为一个没有识别码的用户服务的`)
		if (args.length < 2) return bot.reply(payload, `你想干嘛？`)

		if (typeof core.config.gptID[user.trip] !== 'object') {
			core.config.gptID[user.trip] = {
				id: `#/chat/${(Date.now() / 1000).toFixed()}`
			}
			core.configManager.save()
		}
		const cmd = args[1]
		if (cmd === 'reset') {
			core.config.gptID[user.trip].id = `#/chat/${(Date.now() / 1000).toFixed()}`
			core.configManager.save()
			bot.reply(payload, '已重置对话')
		} else {
			bot.reply(payload, '暂不支持哦')
		}
	}
}

module.exports = Command
