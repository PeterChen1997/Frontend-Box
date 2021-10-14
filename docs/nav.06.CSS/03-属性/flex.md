# flex

- flex
  - container
  - item
- axis
  - main axis
  - cross axis
- 常见属性
  - flex-direction
    - row - default
    - row-reverse、column、column-reverse
  - flex-wrap
    - 决定主轴是否换行
    - nowrap - default
    - wrap、wrap-reverse(往上换行)
  - flex-flow
    - 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
    - row nowrap - default
  - justify-content
    - 主轴对齐方式
    - flex-start(默认值)
    - flex-end\center\space-between\space-around

![图 1](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/7eb10f0a2754e34eb3ccd9d4cdac9629a1e985148d0b6de5de19f3b4c19d1706.png)  

- align-items
  - 交叉轴上的对齐模式
  - stretch - default （占满整个容器）
  - flex-start：交叉轴的起点对齐
  - flex-end：交叉轴的终点对齐
  - center：交叉轴的中点对齐
  - baseline: 项目的第一行文字的基线对齐
- align-content
  - align-content 的设置对象是所有行，且只有在多行弹性盒子容器中才生效
- order
  - 定义顺序
- flex-grow
  - 设置划分剩余空间的权重
- flex-shrink
  - 设置缩小比例的权重
- flex-basis
  - 设置初始尺寸
- flex
  - flex-grow + flex-shrink + flex-basis
- align-self
  - auto - default
  - 允许单个 item 的对齐属性不一样
