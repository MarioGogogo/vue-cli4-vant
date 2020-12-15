// 根据环境引入不同配置 process.env.NODE_ENV
const config = require('./env.' + process.env.VUE_APP_ENV)
console.log('%c 🥔 config: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', config)
module.exports = config
