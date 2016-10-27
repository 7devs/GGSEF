module.exprots = function(data) {
    var event = data.event.toLowCase(),
        eventKey = data.eventKey,
        reContent;
    switch (event) {
        // 处理菜单点击事件
        case 'click':
        // 根据不同的的 event key 给不同的返回值
        switch (eventKey) {
            case 'iAmStudent':
            reContent = '请输入您已登记的手机号码';
            break;
            case 'iAmSponsor':
            reContent = '请输入您已登记的手机号码';
            break;
            case 'toBeSponsor':
            reContent = '...待开发...';
            break;
            default:
            reContent = '...';
            break;
        }
        break;
        case 'pic_sysphoto':
        case 'scancode_push':
        default:
        //
        console.log(data);
        reContent = JSON.stringify(data);
        break;
    }
    return reContent;
}
