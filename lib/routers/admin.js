var router = require('express').Router(),
    student = require('../models/student'),
    admin = require('../models/admin'),
    crypto = require('crypto');

router.route('/login')
    .get(function(req, res, next) {
        // 渲染模版
        res.render('admin/login', {msg:''});
    })
    .post(function(req, res, next) {
        var data = req.body;
        if(data.username == '') {
            res.render('admin/login', {msg:'用户名不能为空'});
        };
        if(data.password == '') {
            res.render('admin/login', {msg:'密码不能为空'});
        }
        var md5 = crypto.createHash('md5');
        md5.update(data.password);
        var password = md5.digest('hex');

        admin.findOne(
            {
                username: data.username
            },
            function(err, result) {
                if(result) {
                    if(result.password == password) {
                        res.redirect('./index');
                    } else {
                        res.render('admin/login', {msg:'密码不正确'});
                    };
                } else {
                    res.render('admin/login', {msg:'用户名不存在'});
                }
            }
        );
    });

router.route('/index')
    .get(function(req, res, next) {
        res.render('admin/index',{layout: 'admin/layout'})
    });

module.exports = router;
