class Command{
	constructor(core) {
		this.core = core
	}
	get info() {
		return {
			name: 'version',
			developer: 'ZhangSoft',
			level: 1,
			explain: '显示本机器人的版本信息',
			usage: '^version',
		}
	}
	run(core, bot, user, args, payload){
		const info = `\n# 关于 ZhangHelper365 For HackChat
内核：ZhangHelper Kernel
内核版本：1.1.0
内核发布日期：2023-08-03（UTC+08:00）
内核开发者：ZhangSoft（小张软件）
许可证：Apache-2.0
机器人名称：ZhangHelper365 For HackChat
机器人版本：1.2.0
机器人开发者：ZhangSoft（小张软件）`
		bot.reply(payload, info)
	}
}

module.exports = Command
