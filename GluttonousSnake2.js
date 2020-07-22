var count = 0; //统计分数
window.onload = function() {

	//入场动画
	var menu = function() {
		this.x = 0,
			this.y = -400,
			this.width = 700,
			this.height = 400,
			this.change = function() {
				this.y += 3;
			}
	}
	var Snake = function() {
		// 设置蛇的宽、高、默认走的方向
		this.width = 20,
			this.height = 20,
			this.r = 5,
			this.direction = 'RIGHT',
			this.body = [{
				x: 0,
				y: 0
			}, {
				x: 1,
				y: 0
			}, {
				x: 2,
				y: 0
			}]
	}
	Snake.prototype.displaySnake = function() {

		// clearArcFun((this.body[0].x * this.r * 2 + (25 + this.r)), (this.body[0].y * this.r*2 + (25 + this.r)),this.r,ctxGamein);

		for (let i = 0; i < this.body.length - 1; i++) {
			ctxGamein.beginPath();
			ctxGamein.arc((this.body[i].x * this.r * 2 + 27 + this.r), (this.body[i].y * this.r * 2 + 27 + this.r), 5, 0, 2 * Math.PI);
			ctxGamein.fillStyle = "green";
			ctxGamein.fill();
			ctxGamein.stroke();
		}
		ctxGamein.beginPath();
		ctxGamein.arc((this.body[this.body.length - 1].x * this.r * 2 + 27 + this.r), (this.body[this.body.length - 1].y * this.r * 2 + 27 + this.r), 5, 0, 2 * Math.PI);
		ctxGamein.fillStyle = "red";
		ctxGamein.fill();
		ctxGamein.stroke();
	}
	Snake.prototype.runSnake = function(food) {

		if (checkBegin == true) {
			for (let i = 0; i < this.body.length; i++) {
				ctxGamein.clearRect((this.body[i].x * this.r * 2 + 26), (this.body[i].y * this.r * 2 + 26), 11.8, 11.8);
			}
			// 后一个元素到前一个元素的位置
			for (let i = 0; i < this.body.length - 1; i++) {
				this.body[i].x = this.body[i + 1].x;
				this.body[i].y = this.body[i + 1].y;
			}
			if (this.direction == 'RIGHT') {
				if (this.body[this.body.length - 1].x < 64) {
					this.body[this.body.length - 1].x++;
					for (let i = 0; i < this.body.length - 1; i++) {

						if (this.body[this.body.length - 1].y == this.body[i].y && this.body[this.body.length - 1].x == this.body[i].x) {
							alert("你撞死了,得分是" + count);
							checkBegin = false;
							this.body = this.body = [{
								x: 0,
								y: 0
							}, {
								x: 1,
								y: 0
							}, {
								x: 2,
								y: 0
							}];
							this.displaySnake();
							break;
						}

					}
					if (this.body[this.body.length - 2].x == food.body[0].x && this.body[this.body.length - 2].y == food.body[0].y) {


						count++;
						this.changeLong(food);
						;

					}
				} else {
					alert("你撞死了,得分是" + count);
					checkBegin = false;
					this.body = this.body = [{
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: 2,
						y: 0
					}];
					this.displaySnake();
				}
			}
			if (this.direction == 'LEFT') {
				if (this.body[this.body.length - 1].x > 0) {
					this.body[this.body.length - 1].x--;
					for (let i = 0; i < this.body.length - 1; i++) {

						if (this.body[this.body.length - 1].y == this.body[i].y && this.body[this.body.length - 1].x == this.body[i].x) {
							alert("你撞死了,得分是" + count);
							checkBegin = false;
							this.body = this.body = [{
								x: 0,
								y: 0
							}, {
								x: 1,
								y: 0
							}, {
								x: 2,
								y: 0
							}];
							this.displaySnake();
							break;
						}

					}
					if (this.body[this.body.length - 2].x == food.body[0].x && this.body[this.body.length - 2].y == food.body[0].y) {


						count++;
						this.changeLong(food);
						;

					}
				} else {
					alert("你撞死了,得分是" + count);
					checkBegin = false;
					this.body = this.body = [{
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: 2,
						y: 0
					}];
					this.displaySnake();
				}
			}
			if (this.direction == 'UP') {
				if (this.body[this.body.length - 1].y > 0) {
					this.body[this.body.length - 1].y--;
					for (let i = 0; i < this.body.length - 1; i++) {

						if (this.body[this.body.length - 1].y == this.body[i].y && this.body[this.body.length - 1].x == this.body[i].x) {
							alert("你撞死了,得分是" + count);
							checkBegin = false;
							this.body = this.body = [{
								x: 0,
								y: 0
							}, {
								x: 1,
								y: 0
							}, {
								x: 2,
								y: 0
							}];
							this.displaySnake();
							break;
						}

					}
					if (this.body[this.body.length - 2].x == food.body[0].x && this.body[this.body.length - 2].y == food.body[0].y) {
						count++;
						this.changeLong(food);

						;
					}

				} else {
					alert("你撞死了,得分是" + count);
					checkBegin = false;
					this.body = this.body = [{
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: 2,
						y: 0
					}];
					this.displaySnake();
				}
			}
			if (this.direction == 'DOWN') {
				if (this.body[this.body.length - 1].y < 34) {
					this.body[this.body.length - 1].y++;
					for (let i = 0; i < this.body.length - 1; i++) {

						if (this.body[this.body.length - 1].y == this.body[i].y && this.body[this.body.length - 1].x == this.body[i].x) {
							alert("你撞死了,得分是" + count);
							checkBegin = false;
							this.body = this.body = [{
								x: 0,
								y: 0
							}, {
								x: 1,
								y: 0
							}, {
								x: 2,
								y: 0
							}];
							this.displaySnake();
							break;
						}

					}
					if (this.body[this.body.length - 2].x == food.body[0].x && this.body[this.body.length - 2].y == food.body[0].y) {
						count++;
						this.changeLong(food);
						;
					}


				} else {
					alert("你撞死了,得分是" + count);
					checkBegin = false;
					this.body = this.body = [{
						x: 0,
						y: 0
					}, {
						x: 1,
						y: 0
					}, {
						x: 2,
						y: 0
					}];
					this.displaySnake();
				}
			}

			this.displaySnake();
			console.dir(snake.body);
		}
	}
	Snake.prototype.changeLong = function(food) {

		this.body.unshift({
			x: this.body[0].x,
			y: this.body[0].y
		});
		var m, n; //食物不能生成在蛇身上
		m = Random(2, 20);
		n = Random(2, 20);
		for (let i = 0; i < this.body.length; i++) {
			if (m == this.body[i].x) {
				m = Random(1, 50);
			}
			if (n == this.body[i].y) {
				n = Random(1, 30);
			}
		}
		food.body[0].x = m = Random(2, 20);
		food.body[0].y = n = Random(2, 20);
		food.displayFood();
	}
	var snake = new Snake();
	var Food = function() {
		this.width = 20,
			this.height = 20,
			this.r = 5,
			this.body = [{
				x: 45,
				y: 17
			}]

	}
	Food.prototype.displayFood = function() {
		ctxGamein.beginPath();
		ctxGamein.arc(this.body[0].x * this.r * 2 + 27 + this.r, this.body[0].y * this.r * 2 + 27 + this.r, this.r, 0, 2 * Math.PI);
		ctxGamein.fillStyle = "orange";
		ctxGamein.fill();
		ctxGamein.stroke();
	}
	var food = new Food();
	var Keyboard = function() {
		this.UP = 38;
		this.DOWN = 40;
		this.RIGHT = 39;
		this.LEFT = 37;
		this.SPACE = 32;
		this.TAB = 9;
		this.ENTER = 13;
		this.CTRL = 17;
		this.ALT = 18;
		this.Num0 = 48;
		this.Num1 = 49;
		this.Num2 = 50;
		this.Num3 = 51;
		this.Num4 = 52;
		this.Num5 = 53;
		this.Num6 = 54;
		this.Num7 = 55;
		this.Num8 = 56;
		this.Num9 = 57;
		this.A = 65;
		this.B = 66;
		this.C = 67;
		this.D = 68;
		this.E = 69;
		this.F = 70;
		this.G = 71;
		this.H = 72;
		this.I = 73;
		this.J = 74;
		this.K = 75;
		this.L = 76;
		this.M = 77;
		this.N = 78;
		this.O = 79;
		this.P = 80;
		this.Q = 81;
		this.R = 82;
		this.S = 83;
		this.T = 84;
		this.U = 85;
		this.V = 86;
		this.W = 87;
		this.X = 88;
		this.Y = 89;
		this.Z = 90;
	};
	var keyboard = new Keyboard();
	var menu1 = new menu();
	var inItimg = new Image();
	var snakeImg = new Image();
	inItimg.src = "picture/start.jpg";
	// snakeImg.src = "picture/snake.jpg";
	var canvas = $('canvas');
	var ctxStart = canvas[0].getContext("2d"); //开始界面画笔
	var ctxGamename = canvas[1].getContext("2d");
	var ctxGamein = canvas[2].getContext("2d");
	var gameBegin = false;
	var viewLoad = false;
	// var flag = true;//后续删掉了
	var signLoad = false;
	var checkBegin = false;

	function inIt() {
		ctxStart.drawImage(inItimg, menu1.x, menu1.y, menu1.width, menu1.height);
		menu1.change();
		if (menu1.y < 3) {
			setTimeout(function() {
				inIt();
			}, 10);
		};
		if (signLoad == false) {
			setTimeout(function() {
				ctxGamename.font = "lighter 40px '字体','字体','微软雅黑','宋体'";
				ctxGamename.fillText("贪   吃   蛇", 255, 180);
				setTimeout(function() {
					ctxGamename.font = "lighter 20px '字体','字体','微软雅黑','宋体'";
					ctxGamename.fillText("回车进入界面", 290, 225);
					viewLoad = true;
				}, 100);
			}, 2000);
			signLoad = true;
		}
	}

	function Random(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	// var gameInterface = function() {
	// 	this.startPlay = false,
	// 		this.sore = 0,
	// 		this.existingCheckpoint = 1,
	// 		this.allSore = 10,
	// 		this.remaining = this.allSore - this.sore
	// }//得分面板

	function getEventPosition(ev) {
		var x, y;
		if (ev.layerX || ev.layerX == 0) {
			x = ev.layerX;
			y = ev.layerY;
		} else if (ev.offsetX || ev.offsetX == 0) { // Opera
			x = ev.offsetX;
			y = ev.offsetY;
		}
		return {
			x: x,
			y: y
		};
	}
	//注：使用上面这个函数，需要给Canvas元素的position设为absolute。
				var timer;
	canvas[2].addEventListener('click', function(e) {
		if (gameBegin == true ) {
			var x = getEventPosition(e);

			ctxGamein.rect(5, 0, 80, 22);
			ctxGamein.stroke();
			checkBegin = ctxGamein.isPointInPath(x.x, x.y); //true 这里不写var是为了把checkBegin挂载到全局
			console.log(checkBegin);
			if (checkBegin) { //此次判断是为了点击周围后开始游戏的点击还有效
				snake.direction = "RIGHT";
				count=0;
				// flag = false; //点了开始就不能再次点击了，避免重绘
				// alert();测试
				if(timer){
					clearInterval(timer);
				}
				
				timer=setInterval(function() {
					snake.runSnake(food);
				}.bind(snake), 100);
			}
		}
	}, false);


	$(function() {
		inIt();
	});

	$(document).keydown(function(event) {
		if (event.keyCode == 13 && gameBegin == false && viewLoad == true) {
			viewLoad = false; //回车只有一次
			ctxGamename.clearRect(0, 0, 700, 400);
			ctxStart.clearRect(0, 0, 700, 400);
			setTimeout(function() {
				ctxGamein.font = "lighter 20px '字体','字体','微软雅黑','宋体'";
				ctxGamein.fillText("开始游戏", 5, 18);
				ctxGamein.beginPath();
				//定义直线的起点坐标为(10,10)
				ctxGamein.moveTo(25, 25);
				//定义直线的终点坐标为(50,10)
				ctxGamein.lineTo(675, 25);

				ctxGamein.moveTo(675, 25);
				ctxGamein.lineTo(675, 375);

				ctxGamein.moveTo(675, 375);
				ctxGamein.lineTo(25, 375);

				ctxGamein.moveTo(25, 375);
				ctxGamein.lineTo(25, 25);
				//沿着坐标点顺序的路径绘制直线
				ctxGamein.stroke();
				//关闭当前的绘制路径
				ctxGamein.closePath();


				//绘制初始化的蛇和食物
				snake.displaySnake();
				food.displayFood();
			}, 100);
			gameBegin = true;
		} //真正进入游戏界面
		if (event.keyCode == 87 && gameBegin == true && checkBegin == true) {
			if (snake.direction != "DOWN") {
				snake.direction = "UP"; //w
			}

			// snake.body[snake.body.length-1].y--;
		}
		if (event.keyCode == 83 && gameBegin == true && checkBegin == true) {
			if (snake.direction != "UP") {
				snake.direction = "DOWN";
			}

			// snake.body[snake.body.length-1].y++;//s

		}
		if (event.keyCode == 65 && gameBegin == true && checkBegin == true) {
			if (snake.direction != "RIGHT") {
				snake.direction = "LEFT";
			}
			// snake.body[snake.body.length-1].x--;//a

		}
		if (event.keyCode == 68 && gameBegin == true && checkBegin == true) {
			if (snake.direction != "LEFT") {
				snake.direction = "RIGHT";
			}
			// snake.body[snake.body.length-1].x++;//d
		}
	}.bind(snake))

	console.dir(snake.body instanceof Array);
}