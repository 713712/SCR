this.window = this;

for (let i = 0; i < 8; i++) {
	window["先驱者核心" + i] = new Block("先驱者核心" + i);
};
Vars.renderer.minZoom = 0.5,//最小缩放率(8/1)
Vars.renderer.maxZoom = 8000000,//最大缩放率（8/1）（这个是有上限的，只是能让手机放大到电脑大小，并不能无上限）

MapResizeDialog.minSize = 25,//最小地图大小
MapResizeDialog.maxSize = 800000000,//最大地图大小

require('开屏菜单');
require('tank');
require("起源");