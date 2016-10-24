var log4js = require('log4js');

module.exports = log4js.getLogger('debug');

module.exports.getTime = function(time) {
    var now = new Date(time),
        year = now.getFullYear(),
        month = now.getMonth()+1,
        date = now.getDate(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
        if(month<10) month = '0'+month;
        if(date<10) date = '0'+date;
        if(hour<10) hour = '0'+hour;
        if(minute<10) minute = '0'+minute;
        if(second<10) minute = '0'+second;
        return year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
}
