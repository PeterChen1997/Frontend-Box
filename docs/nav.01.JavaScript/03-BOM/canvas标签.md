# canvas标签

## beginPath,closePath

### beginPath

```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="5";
ctx.strokeStyle="red"; // 红色路径
ctx.moveTo(0,75);
ctx.lineTo(250,75);
ctx.stroke(); // 进行绘制

ctx.beginPath();
ctx.strokeStyle="blue"; // 蓝色路径
ctx.moveTo(50,0);
ctx.lineTo(150,130);
ctx.stroke(); // 进行绘制
```

### closePath

- 有什么用：尝试从当前点返回到当前子路径起始点的方法，如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。（将没封闭的图形自动封上）
- 没有会：

下面的代码将会画一个三角形

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // draws last line of the triangle
ctx.stroke();
```
