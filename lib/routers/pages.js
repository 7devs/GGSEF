var router = require('express').Router();

router.route('/introduction')
    .get(function(req, res, next) {
        // 渲染模版
        res.render('introduction');
    });

router.route('/programme')
    .get(function(req, res, next) {
        res.render('programme.ejs');
    });

module.exports = router;
