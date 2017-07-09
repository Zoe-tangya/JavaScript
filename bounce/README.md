##### 这个小demo是小球运动碰壁后反弹并且颜色随机改变的效果

1、将速度分解成x轴方向的速度和y轴方向的速度，碰到浏览器窗口边缘速度反向。
2、获取浏览器窗口大小：
document.documentElement.clientWidth, document.documentElement.clientHeight计算小球最大活动范围。（实时获取窗口大小可用resize()函数）
3、if条件判断碰壁改变速度方向。
4、使用random函数随机设置小球背景颜色rgb。
5.以后再进行完善多个小球碰壁效果。
