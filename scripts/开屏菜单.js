Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new BaseDialog("强化战役-再临［SCR］"); //新建一个显示窗口
        dialog.cont.image(Core.atlas.find("强化战役-再临-图片")).row();;
    dialog.buttons.button("@close", run(() => {
        dialog.hide(); //退出界面
    })).size(128, 64); //@close
    
    dialog.cont.button("加入晶体工业群", run(() => {
        Core.app.openURI("http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mq_AXhT-_V9XjFJ14YFghhabuavwHK3o&authKey=F%2Bz%2BnZw%2FhN3eVxRb%2BARpKFVbkowFMn%2Fuims2GUWHK1wJASvXBopmE54BWlZgocbi&noverify=0&group_code=2158027406");
    })).size(100, 70).pad(3);
        dialog.cont.button("加入强化战役群", run(() => {
        Core.app.openURI("https://qun.qq.com/universal-share/share?ac=1&authKey=s0fLKaIrYagHpxzEOmbifzDkTYr%2BS8%2BhbRqAo0F04Az845KvjEtS3yqEfK6dtEhd&busi_data=eyJncm91cENvZGUiOiI5MjczNjY0MDkiLCJ0b2tlbiI6ImFDczhPdGRRbTdEM0dtY24xUTFGRG9ZSlhNOVVkTng2VjM5QXJBSzVoNUY3eWpxdjF2ZzNXaEFhdFJ5bDVHUmYiLCJ1aW4iOiIzNjgzNjQ0MDEwIn0%3D&data=AaKc-YfxrzD6FwNBZ0yiXNWfa8_wAkGKARJx-2BG16A0KpcDRmlmjxBWgXgOCEv1SeMm5xaXoOTanLp5A44hrA&svctype=4&tempid=h5_group_info");
    })).size(50, 70).pad(3);
    
    dialog.cont.pane((() => {
        var table = new Table();
        table.add("模组作者:[yellow]鼠标");
        table.row();
        table.add("特别感谢:[green]花瓶星和爬爬还有?");
        table.row();
        table.add("更新:新增运输建筑").left().growX().wrap().width(200).maxWidth(300).pad(4).labelAlign(Align.left);
        table.row();
        return table;
    })()).grow().center().maxWidth(300);
    
    dialog.show();
}));