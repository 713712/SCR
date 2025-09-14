Events.on(EventType.ClientLoadEvent, () => {
    // 创建主对话框
    const dialog = new BaseDialog("欢迎");

    // 添加图标
    //dialog.cont.image(Core.atlas.find("icon.png")).row();

    // 主内容区域：仅保留说明文字
    dialog.cont.pane(
        new Table(cons(t => {
            t.add("欢迎游玩强化战役\n模组作者:[yellow]鼠标\n特别感谢:[green]“花瓶星”、“爬爬”、“?”、癫狂的棕熊")
              .left()
              .growX()
              .wrap()
              .width(600)
              .maxWidth(1000)
              .pad(4)
              .labelAlign(Align.left);
            t.row();
        }))
    ).grow().center().maxWidth(600);

    // === 底部按钮栏：三个按钮居中排列 ===
    dialog.buttons.table(cons(buttonTable => {
        // 设置按钮大小
        const buttonWidth = 180;
        const buttonHeight = 64;

        // “测试页面”按钮
        buttonTable.button("[red]更新日志", () => {
            const dialog2 = new BaseDialog("[red]更新日志");
            const scrollContent = new Table(cons(st => {
                st.add("[white]0.3.1:地图全部更改完成\n0.2.0:新增灰尘和修复炮-更新新单位尘埃\n-更新新单位T2尘土\n-更新新建筑修复炮塔\n-更新新地图古老遗址\n-更新新物资记忆碎片，用来解锁B40版本的东西\n\n-Update new unit dust\n-Update new unit T2 dust\n-Update new building, repair turret\n-Update new map of ancient ruins\n-Update new material memory fragments to unlock B40 version items");
            }));
//byd这谁写的更新日志，以后就让我（?）来写            

            dialog2.cont.add(new ScrollPane(scrollContent)).size(500, 600).row();
            dialog2.buttons.defaults().size(500, 64);
            dialog2.buttons.button("@close", () => dialog2.hide());
            dialog2.show();
        }).size(buttonWidth, buttonHeight);

        // “加入QQ群”按钮
        buttonTable.button("加入QQ群", () => {
            Core.app.openURI("http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Z29-HwqOqCMqe_EHL7hHyoDT-qoW9lKY&authKey=BWXxrZo0cvCtGsgyNAXCFP9pPOp1mUBWA9PS4GbI9R4EKuwevQbkXo%2FCMJVHRCfE&noverify=0&group_code=927366409");
        }).size(buttonWidth, buttonHeight);

        // “关闭”按钮
        buttonTable.button("@close", () => {
            dialog.hide();
        }).size(buttonWidth, buttonHeight);
    })).center().grow(); // 整个按钮表格居中并拉伸

    // 显示对话框
    dialog.show();
});