---
title: CSS 文本自适应隐藏
date: 2021-01-17
description: 使用CSS让右侧文本的宽度变化，左边的盒子宽度也随之变化。
tags: ['css', 'html']
layout: blog-post
---

css 文本设定宽度隐藏，做需求的时候，遇到两个的盒子宽度都不固定，右边的宽度根据内容来决定宽度。

### 效果图：

![Image text](../assets/0003.gif)

### HTML：

```html
<div class="box">
  <div class="col-right">我是右边的内容，我的变化决定了左边盒子的高度</div>
  <div class="col-left">我是左边的内容，右边的盒子决定了我的宽度</div>
</div>
```

<br />

### CSS：

```css
.box{
  width:900px;
  line-height:60px;
  height:60px;
  margin:20px auto;
}
.col-right{
  text-align:left;
  max-width:80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float:right;
  background-color:yellow;
}
.col-left{
  text-align:left;
  min-width:20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color:red;
}
```