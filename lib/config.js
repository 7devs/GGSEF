// 项目配置文件
module.exports = {
    wechat: {
        appid: 'wx88f6b78773f11040', //需要更换为项目的id
        secret: '8c4d38fe922d4103166bccc0dd37daec',
        // wechat API 地址，地址后需要连接相关功能地址，例如：https://api.weixin.qq.com/cgi-bin/user/get
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        template: {
            test: 'S27jjEYexdB3zhfx6prwHsZCQSLpWPPutTa9R2wjEoE' //模版id
        }
    }
}
