---
title: 使用 input[checkbox] 双击下拉菜单
date: 2021-01-14
description: 使用 checkbox 配合 CSS 做出一个简单的点击显示隐藏。
tags: ['css', 'html']
layout: blog-post
---

在看到一个点击显示/隐藏的小功能的时候，首先会想到的是用 JQuery 或者 JS 去实现。

不使用脚本的情况下，同样也可以实现。就是使用 `input checkbox` 配合 `label for` 属性。

### HTML：

```html
<input type="checkbox" id="checkbox" class="checkbox">

<div class="menu">
  <div class="switch">
    <label for="checkbox"></label>
  </div>
  <ul class="list">
    <li>苹果</li>
    <li>香蕉</li>
    <li>雪梨</li>
  </ul>
</div>
```

<br/>

### CSS：

```css
/*隐藏下拉框和列表内容*/
.checkbox,
.list{
  display:none;
}

/*操作按钮标题*/
.switch:before{
  content:"展开";
  display:inline-block;
  vertical-align: middle;
}

/*操作按钮icon*/
.switch label{
  cursor:pointer;
  display:inline-block;
  vertical-align: middle;
  margin-left:3px;
  width:0;
  height:0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #000;
}

/*
*当点击 for 标签时候，复选框已选中状态，改变标题、改变icon、显示菜单列表。
*反之 checkbox=false 时则为隐藏
*/
.checkbox:checked + .menu .switch:before{
  content:"收起";
}
.checkbox:checked + .menu .list{
  display:block;
}
.checkbox:checked + .menu .switch label{
  border-top:none;
  border-bottom: 10px solid #000;
} 
```

Code [演示地址](https://codepen.io/leeweiss/pen/ZVvWeZ?editors=1100)
