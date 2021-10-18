# CSS

Hello CSS

## 常见问题

### css 实现溢出

- 单行文本溢出
  - text-overflow：规定当文本溢出时，显示省略符号来代表被修剪的文本
    - ellipsis
    - clip
  - white-space：设置文字在一行显示，不能换行
  - overflow：文字长度超出限定宽度，则隐藏超出的内容
- 多行文本溢出
  - 基于高度截断
  - 基于行数截断
    - line-clamp: 2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）
    - text-overflow: ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本

### 画三角形

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
}
```

### 让 Chrome 支持小于 12px 的文字方式有哪些

常见的解决方案有：

- zoom
- -webkit-transform:scale()
- -webkit-text-size-adjust:none
