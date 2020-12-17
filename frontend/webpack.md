Webpack
===

# 技巧

## 打包产物分析

### 分析 stats.json

1. 使用 [whybundled](https://www.npmjs.com/package/whybundled)  查询模块被引入原因

![](https://raw.githubusercontent.com/d4rkr00t/whybundled/HEAD/assets/screenshot.png)

2. 使用网页版的 [📦 Statoscope](https://statoscope.tech/) 分析

有点像之前 webpack 某维护者的 - 现在基本上已经废弃不维护的 - [analyze](http://webpack.github.io/analyse/)。很好用。

### Tree Shaking

- [webpack 之 tree shaking · Issue #66 · huruji/blog](https://github.com/huruji/blog/issues/66)
- [Webpack 中的 sideEffects 到底该怎么用？](https://juejin.cn/post/6844903640533041159)