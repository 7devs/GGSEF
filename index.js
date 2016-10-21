var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    wechat = require('./lib/wechat.js'),
    conf = require('./lib/config.js'),
    path = require('path');

app.use(bodyParser.urlencoded({
    extended : false
}));

// 设置模版目录
app.set('views', path.join(__dirname, 'lib/views'));
// 设置模版引擎
app.set('view engine', 'ejs');

wechat(conf.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));
// 后台
app.use('/admin', require('./lib/routers/admin.js'));

app.listen(8103, function(err) {
    console.log('listen at 8103...');
});
