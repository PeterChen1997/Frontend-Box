# grid

Grid 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列

擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系

![图 2](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/1e1da579fe8da83cc5898056fd7cd1147f58384bd7816347c91e3cfe4dbfc98e.png)  

这与之前讲到的flex一维布局不相同

设置display:grid/inline-grid的元素就是网格布局容器，这样就能出发浏览器渲染引擎的网格布局算法

## 属性说明

- display
  - grid
  - inline-grid
- grid-template-columns
  - 设置列宽
- grid-template-rows
  - 设置行高

```css
.wrapper {
  display: grid;
  /*  声明了三列，宽度分别为 200px 200px 200px */
  grid-template-columns: 200px 200px 200px;
  grid-gap: 5px;
  /*  声明了两行，行高分别为 50px 50px  */
  grid-template-rows: 50px 50px;
}

/* 可以优化成下面的代码 */
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,200px);
  grid-gap: 5px;
  grid-template-rows:repeat(2,50px);
}
```

除此之外 repeat 还支持：

- auto-fill：示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格
  - grid-template-columns: repeat(auto-fill, 200px) 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素
- fr：片段，为了方便表示比例关系
  - grid-template-columns: 200px 1fr 2fr 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3
- minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数就是最小值，第二个参数就是最大值
  - minmax(100px, 1fr)表示列宽不小于100px，不大于1fr
- auto：由浏览器自己决定长度
  - grid-template-columns: 100px auto 100px 表示第一第三列为 100px，中间由浏览器决定长度

- grid-row-gap
  - grid-row-gap: 10px 表示行间距是 10px
- grid-column-gap
  - grid-column-gap: 20px 表示列间距是 20px
- grid-gap
  - grid-gap: 10px 20px 等同上述两个属性

- grid-template-areas
  - 用于定义区域，一个区域由一个或者多个单元格组成

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

- grid-auto-flow
  - 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。
  - 默认为 row

- justify-items
  - justify-items 属性设置单元格内容的水平位置（左中右）
- align-items
  - align-items 属性设置单元格的垂直位置（上中下）
- place-items
  - place-items属性是align-items属性和justify-items属性的合并简写形式

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

- justify-content
- align-content
- place-content
