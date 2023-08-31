# ZhangHelper365 for HackChat  
这是 ZhangHelper365 的 HackChat 适配版，基于 ZhangHelper Kernel  

# 如何使用  
1. 准备好 Node.js 环境
2. 克隆此仓库，并切换目录到仓库中
3. 执行 `npm i` 来安装依赖
4. 修改 `config/config.json.default` 里面的内容，按照里面的提示修改即可
5. 将 `config` 文件夹下所有的以 `.default` 结尾的文件的 `.default` 删掉
6. 执行 `node main.js` 来启动 ZhangHelper365

# 许可证  
本项目使用 Apache-2.0 许可证，请严格遵循它的要求  

# 注意  
ZhangHelper365 在运行时必须拥有协管权限（例如 mbot AfK_Bot），由于开发环境的限制，这里只做了 AfK_Bot 的适配，如需更改为适配 mbot，请修改 MainClient.js 的 kick 函数   