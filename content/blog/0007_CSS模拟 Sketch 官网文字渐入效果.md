---
title: CSS 模拟 Sketch 官网文字渐入效果
date: 2021-01-29
description: 使用 animation 制作文字渐入效果。
tags: ['css']
layout: blog-post
---

今天来学习一下 CSS3 `animation` 这个属性。

## 一、认识 animation

什么是 Animation，它是由 CSS3 推出的新特性，翻译过来就是**动画**的意思，Animation 需要指定动画一个周期持续的时间。

## 二、基本语法

**animation** 属性是 `animation-name`，`animation-duration`, `animation-timing-function`，`animation-delay`，`animation-iteration-count`，`animation-direction`，`animation-fill-mode` 和 `animation-play-state` 属性的一个简写属性形式。

- 简写方式：`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

- 查看更多详细介绍可以参考 MDN Web Docs [文档手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

## 三、案例实践

可以看到 Sketch 官网有个经典的文字淡入的效果，通过 `animation` 的学习，来对这段动效进行实践。

![预览图](../assets/0007-1.gif)

- 通过上图看到，分析出每段字体都是单独渐变上移，那么我们可以对每一段文字进行单独控制上移

- 简介部分是由透明渐变进入

```html
<div class="container">
    <h2>
        <span><i>The</i></span> 
        <span><i>best</i></span>
        <span><i>products</i></span>
        <span><i>start</i></span>
        <span><i>with</i></span>
        <span><i>Sketch</i></span>
    </h2>
    <p>Create, prototype, collaborate, and bring your ideas to life with the design platform used by over one million people — from freelancers, to the world’s largest teams.</p>
</div>

<style>
  :root {
    font-size: 32px;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    font-family: Helvetica;
}

.container {
    width: 600px;
}

h1 {
    margin: 0;
    letter-spacing: -2px;
}

p {
    font-size: .9rem;
    color: #666;
    line-height: 1.3rem;
    position: relative;
    top: .8rem;
    opacity: 0;
    animation: .5s swift-up ease-out forwards, .52 fade-in ease-out forwards;
    animation-delay: .8s;
}

@keyframes fade-in {
    to {
        opacity: 1;
    }
}

span {
    display: inline-block;
    overflow: hidden;
    position: relative;
    top: .8rem;
    animation: .3s swift-up ease-in-out forwards;
}

i {
    font-style: normal;
    position: relative;
    top: 2rem;
    animation: .5s swift-up ease-in-out forwards;
}

@keyframes swift-up {
    to {
        top: 0rem
    }
}

span:nth-of-type(1) i {
    animation-delay: .1s;
}

span:nth-of-type(2) i {
    animation-delay: .2s;
}

span:nth-of-type(3) i {
    animation-delay: .3s;
}
span:nth-of-type(4) i {
    animation-delay: .4s;
}

span:nth-of-type(5) i {
    animation-delay: .5s;
}

span:nth-of-type(6) i {
    animation-delay: .6s;
}

span:nth-of-type(1) {
    animation-delay: .1s;
}

span:nth-of-type(2) {
    animation-delay: .2s;
}

span:nth-of-type(3) {
    animation-delay: .3s;
}
span:nth-of-type(4) {
    animation-delay: .4s;
}

span:nth-of-type(5) {
    animation-delay: .5s;
}

span:nth-of-type(6) {
    animation-delay: .6s;
}
</style>
```

### 参考资料

- [体验地址](https://codepen.io/leeweiss/pen/ExNYQor?editors=1100)
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
- [W3C](https://www.w3schools.com/css/css3_animations.asp)