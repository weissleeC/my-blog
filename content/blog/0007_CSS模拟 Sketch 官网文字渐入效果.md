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

我们可以看到 Sketch 官网有个经典的文字淡入的效果，通过对 `animation` 学习，让我们来实现它吧。

![预览图](../assets/0007-1.gif)

