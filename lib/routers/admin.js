var router = require('express').Router(),
    xml = require('xml'),
    parsers = require('../parsers');
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/login')
    .get(function(req, res, next) {
        // 渲染模版
        res.render('admin/login');
    });

module.exports = router;
