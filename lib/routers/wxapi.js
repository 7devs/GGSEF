var router = require('express').Router(),
    xml = require('xml'),
    parsers = require('../parsers');
    xmlBodyParser = require('express-xml-bodyparser'),
    conf = require('../config');

router.route('/')
    .get(function(req, res, next) {
        var data = req.query;
        var tmpArr = [conf.wechat.token, data.timestamp, data.nonce];
        sort(tmpArr);

        res.send(data.echostr);

    });

module.exports = router;
