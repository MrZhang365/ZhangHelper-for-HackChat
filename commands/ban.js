class Command{
	constructor(core) {
		if (!Array.isArray(core.config.bannedHashs)) {
			core.config.bannedHashs = []
			core.configManager.save()
		}
	}
	get info() {
		return {
			name: 'ban',
			developer: 'ZhangSoft',
			level: 2,
			explain: '从当前频道封禁一个或多个用户',
			usage: '^ban 昵称1 昵称2 昵称3 ...',
		}
	}
	run(core, bot, u, args, payload){
		if (args.length < 2) {
			return bot.reply(payload, '请告诉我谁即将被封禁')
		}
		const badUsers = args.slice(1).map(n => n.replaceAll('@', ''))
		var hashs = []
		for (let n of badUsers) {
			if (!n.trim()) continue
			let user = bot.users.get(n)
			if (!user) return bot.reply(payload, `找不到用户：${n}`)
			if (core.config.bannedHashs.includes(user.hash)) return bot.reply(payload, `${n} 已经被封禁了`)
			if (user.level >= u.level) return bot.reply(payload, `请勿自相残杀`)
			if (hashs.includes(user.hash)) continue
			hashs.push(user.hash)
		}

		core.config.bannedHashs = core.config.bannedHashs.concat(hashs)
		core.configManager.save()

		var toKick = []
		bot.users.users.forEach(u => {
			if (hashs.includes(u.hash)) toKick.push(u.nick)
		})

		bot.kick(toKick)
		bot.chat(`${u.nick} 封禁了以下hash：\n- ${hashs.join('\n- ')}`)
	}

	autoKick(core, bot, payload) {
		if (core.config.bannedHashs.includes(payload.hash)) {
			bot.kick([ payload.nick ])
			return false
		}
		return payload
	}

	initHooks(bot) {
		bot.regHook('onlineAdd', this.autoKick.bind(this), 0)
	}
}

module.exports = Command
