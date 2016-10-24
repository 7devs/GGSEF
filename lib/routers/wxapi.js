var router = require('express').Router(),
<<<<<<< HEAD
    // 转换 js 对象为 XML 格式功能包，文档参考：https://www.npmjs.com/package/xml
    xml = require('xml'),
    // 微信消息解析包
    parser = require('../parsers'),
    // 解析 body 中的 xml 数据为 js 对象功能包
    xmlBodyParser = require('express-xml-bodyparser');

  router.route('/')
      // post 方法可以接受两个参数，第一个为中间件，第二个为处理方法
      .post(xmlBodyParser({
          explicitArray: false
      }), function(req, res, next) {
          // 获取微信消息数据
          var data = req.body.xml;
          //解析后返回文本消息内容
          var reContent = parser(data);
          console.log(reContent);
          // 返回消息
          res.append('Content-Type', 'text/xml');
          res.send(xml({
              xml: [
                  {ToUserName: {_cdata: data.fromusername}},
                  {FromUserName: {_cdata: data.tousername}},
                  {CreateTime: +new Date()},
                  {MsgType: {_cdata: 'text'}},
                  {Content: {_cdata: reContent}}
              ]
          }));
      })
      .get(function(req, res, next) {
          var str = req.query.echostr;
          res.send(str);
      });
=======
    xml = require('xml'),
    parsers = require('../parsers');
    xmlBodyParser = require('express-xml-bodyparser'),
    conf = require('../config');

router.route('/')
    .get(function(req, res, next) {
        var data = req.query;
        var tmpArr = [conf.wechat.token, data.timestamp, data.nonce];
        sort(tmpArr);
        if(tmpArr.join('') == data.signature) {
           res.send(str);
        }
    });
>>>>>>> a72c393ae6dc14afe37c5905a0fb1f52a921a1aa

module.exports = router;
