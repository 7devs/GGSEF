var router = require('express').Router();

router.route('/login')
    .get(function(req, res, next) {
        // 渲染模版
        res.render('one');
    });

// router.route('/two')
//     .get(function(req, res, next) {
//         res.render('two', {
//             title: 'Page Two',
//             name: 'Seven',
//             arr: [1,2,3],
//             works: {
//                 company: 'GeekPark'
//             }
//         });
//     });

module.exports = router;
