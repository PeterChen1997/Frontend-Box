# 实现题

## CSS实现宽度自适应100%，宽高16:9的比例的矩形？

```
<div class="container"> 
    <iframe class="embed"></iframe> 
</div>

/*CSS*/
.container { 
    position: relative; 
    width: 100%; 
    height: 0; 
    padding-top: 56.25% // 9 / 16 * 100% 
} 
.embed { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
}
```

## 如何实现左边两栏一定比例，左栏高度随右栏高度自适应

flex 布局即可

## 滑块从左到右移动

```html
<html>
  <head>
    <style>
      .test {
        width: 100%;
        height: 300px;
        background-color: gray;
      }

      @keyframes test {
        0% {
          margin-left: 0;
        }

        100% {
          margin-left: calc(100% - 100px);
        }
      }

      .test > div {
        width: 100px;
        height: 100px;
        background-color: red;
        animation: test 1s;
        animation-fill-mode: forwards;
      }
    </style>
  </head>
  <body>
    <div class="test"><div></div></div>
  </body>
</html>

```
