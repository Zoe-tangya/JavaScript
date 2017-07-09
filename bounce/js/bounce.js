window.onload=function() {
	var myball = document.getElementById("ball");
	// 定义局部变量
	var speedX=10,speedY=10;//定义x轴Y轴方向的速度
	//浏览器窗口宽度减去小球宽度为x轴方向上的最大移动范围
	var xMax = document.documentElement.clientWidth - myball.clientWidth;
	//浏览器窗口高度减去小球高度为y轴方向上的最大移动范围
	var yMax = document.documentElement.clientHeight - myball.clientHeight;
	var num = 0;//计时
	// 实时获取浏览器窗口宽高
	window.onresize=function(){
		xMax = document.documentElement.clientWidth - myball.clientWidth;
		yMax = document.documentElement.clientHeight - myball.clientHeight;
	}
	// 小球运动
	function ballMove(){
		// 小球每次运动完之后距离起始点的距离
		Left = myball.offsetLeft + speedX;
		Top = myball.offsetTop + speedY;
		
		//改变div的left,top的值
		myball.style.left=Left+"px";
		myball.style.top=Top+"px";
		// 判断X轴上的速度方向
		if (Left >= xMax) {
			Left = xMax;
			speedX = -speedX;
			ballColor(myball);
			num ++;
		}
		else if (Left <= 0) {
			Left = 0;
			speedX = -speedX;
			ballColor(myball);
			num ++;
		}
		// 判断Y轴上的速度方向
		if (Top >= yMax) {
			Top = yMax;
			speedY = -speedY;
			ballColor(myball);
			num ++;
		}
		else if (Top <= 0) {
			Top = yMax;
			speedY = -speedY;
			ballColor(myball);
			num ++;
			// 小球运动停止
			if (num >10) {
				clearInterval(timer);
				num = 0;
			}
		}
	}
	// 设置间歇调用运动函数
	var timer = setInterval(ballMove,60);

	// 颜色随机改变函数
	function ballColor(obj) {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		obj.style.backgroundColor = 'rgb(' + r + ','+ g + ',' + b + ')';
	}
}