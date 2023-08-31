class Command{
	constructor(core) {
		if (!Array.isArray(core.config.bannedHashs)) {
			core.config.bannedHashs = []
			core.configManager.save()
		}
	}
	get info() {
		return {
			name: 'listban',
			developer: 'ZhangSoft',
			level: 1,
			explain: '查看被封禁的hash',
			usage: '^listban',
		}
	}
	run(core, bot, user, args, payload){
		bot.reply(payload, `下面是被封禁的hash：\n- ${core.config.bannedHashs.join('\n- ')}`)
	}
}

module.exports = Command
