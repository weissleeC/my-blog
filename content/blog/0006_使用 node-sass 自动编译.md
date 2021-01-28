---
title: 使用 node-sass 自动编译
date: 2021-01-28
description: 在不使用 webpack 下，自动编译 scss 样式。
tags: ['css']
layout: blog-post
---

在不使用 webpack 的情况下，实现自动编译、加前缀、压缩、转换 css 方法。

`package.json`

```json
{
  "name": "main",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "clean": "rimraf scss",
    "compile": "node-sass --output-style=expanded --source-map=true css/main.scss css/main.css",
    "prefix": "postcss css/main.css --use=autoprefixer --map=false --output=css/main.css",
    "minify": "cleancss --level=1 --source-map --source-map-inline-sources --output css/main.css css/main.css",
    "dev": "npm run compile -- --watch",
    "build": "npm run clean && npm run compile && npm run prefix && npm run minify",
    "start": "node-sass -w css/ -o css/"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^9.5.1",
    "browserslist": "^4.5.4",
    "clean-css-cli": "^4.3.0",
    "node-sass": "^4.11.0",
    "postcss": "^7.0.14",
    "postcss-cli": "^6.1.2"
  },
  "browserslist": [
    "last 4 version"
  ]
}
```

- 开发模式：`npm run start`

- 生产模式：`npm run build`
