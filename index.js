var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    wechat = require('./lib/wechat.js'),
    conf = require('./lib/config.js'),
    path = require('path'),
    mongo = require('./lib/mongo'),
    $ = require('./lib/utils');

mongo.connect(conf.mongo, function(err) {
    if (err) {
        $.error(err);
        process.exit(0);
    } else {
        start();
    }
});

function start() {
    app.use(bodyParser.urlencoded({
        extended : false
    }));

    // 设置模版目录
    app.set('views', path.join(__dirname, 'lib/views'));
    // 设置模版引擎
    app.set('view engine', 'ejs');

    app.use(express.static('static', {
        index: false,
        maxAge: '7 days'
    }));

    wechat(conf.wechat);

    wechat.createMenu(require('./lib/config/menu.json'));

    app.use('/wxapi', require('./lib/routers/wxapi.js'));
    // 后台
    app.use('/admin', require('./lib/routers/admin.js'));

    app.listen(8103, function(err) {
        console.log('listen at 8103...');
    });
}
