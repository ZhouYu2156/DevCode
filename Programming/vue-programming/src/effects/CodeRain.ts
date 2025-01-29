export default function CodeRain(cvs: HTMLCanvasElement) {
  //获取图形对象
  //   var canvas = document.getElementById(cvs);
  //获取图形的上下文
  var context = <CanvasRenderingContext2D>cvs.getContext('2d')
  //获取浏览器屏幕的宽度和高度
  var W = window.innerWidth
  var H = window.innerHeight
  //设置canvas的宽度和高度
  cvs.width = W
  cvs.height = H
  //每个文字的字体大小
  var fontSize = 18
  //计算列
  var colunms = Math.floor(W / fontSize)
  //记录每列文字的y轴坐标
  var drops: number[] = []
  //给每一个文字初始化一个起始点的位置
  for (var i = 0; i < colunms; i++) {
    drops.push(0)
  }
  //运动的文字
  var str = '01'
  //4:fillText(str,x,y);原理就是去更改y的坐标位置
  //绘画的函数
  function draw() {
    //让背景逐渐由透明到不透明
    context.fillStyle = 'rgba(0,0,0,0.05)'
    context.fillRect(0, 0, W, H)
    //给字体设置样式
    context.font = '700 ' + fontSize + 'px 微软雅黑'
    // context.font = fontSize + 'px 正楷';
    //给字体添加颜色
    context.fillStyle = 'green' //随意更改字体颜色
    // context.fillStyle = randColor(); //随意更改字体颜色
    //写入图形中
    for (var i = 0; i < colunms; i++) {
      var index = Math.floor(Math.random() * str.length)
      var x = i * fontSize
      var y = drops[i] * fontSize
      context.fillText(str[index], x, y)
      //如果要改变时间，肯定就是改变每次他的起点
      if (y >= cvs.height && Math.random() > 0.98) {
        drops[i] = 0
      }
      drops[i]++
    }
  }

  /* function randColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    } */

  draw()
  setInterval(draw, 1000 / 30)
}
