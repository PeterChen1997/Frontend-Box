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
