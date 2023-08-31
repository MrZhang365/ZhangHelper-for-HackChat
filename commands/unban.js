class Command{
	constructor(core) {
		if (!Array.isArray(core.config.bannedHashs)) {
			core.config.bannedHashs = []
			core.configManager.save()
		}
	}
	get info() {
		return {
			name: 'unban',
			developer: 'ZhangSoft',
			level: 2,
			explain: '解除封禁一个或多个hash',
			usage: '^unban hash1 hash2 hash3 ...',
		}
	}
	run(core, bot, user, args, payload){
		if (args.length < 2) {
			return bot.reply(payload, '请告诉我你要解封哪个hash')
		}
		const hashs = args.slice(1).filter(h => !!h)
		for (let h of hashs) {
			if (!core.config.bannedHashs.includes(h)) return bot.reply(payload, `${h} 没有被封禁`)
		}

		core.config.bannedHashs = core.config.bannedHashs.filter(h => !hashs.includes(h))
		core.configManager.save()

		bot.chat(`${user.nick} 解封了以下hash：\n- ${hashs.join('\n- ')}`)
	}
}

module.exports = Command
