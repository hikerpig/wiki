# Webpack

## 打包产物分析

### 分析 stats.json

1. 使用 [whybundled](https://www.npmjs.com/package/whybundled)  查询模块被引入原因
	
![](https://raw.githubusercontent.com/d4rkr00t/whybundled/HEAD/assets/screenshot.png)

2. 使用网页版的 [📦 Statoscope](https://statoscope.tech/) 分析

有点像之前 webpack 作者之一的 - 现在基本上已经废弃不维护的 - [analyze](http://webpack.github.io/analyse/)。很好用。

### Tree Shaking

- [webpack 之 tree shaking · Issue #66 · huruji/blog](https://github.com/huruji/blog/issues/66)
- [Webpack 中的 sideEffects 到底该怎么用？](https://juejin.cn/post/6844903640533041159)
- [你的Tree-Shaking并没什么卵用 - 知乎](https://zhuanlan.zhihu.com/p/32831172)
- [javascript - What Does Webpack 4 Expect From A Package With sideEffects: false - Stack Overflow](https://stackoverflow.com/questions/49160752/what-does-webpack-4-expect-from-a-package-with-sideeffects-false)
- [聊聊 Webpack4 的 Tree Shaking - 知乎](https://zhuanlan.zhihu.com/p/260724544)
- [webpack 5 , deep scope analysis](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#inner-module-tree-shaking)，Webpack 4 对导出和依赖之间的关系分析不够细致，无法满足工程需求。
- [深入 Webpack 的 Tree Shaking - 掘金](https://juejin.cn/post/6866747701908733966)
- [The unexpected impact of dynamic imports on tree shaking | by Christian Gonzalez | Medium](https://medium.com/@christiango/the-unexpected-impact-of-dynamic-imports-on-tree-shaking-ddadeb135dd7)



### Splitchunks

- [Webpack: What is the difference between "all" and "initial" options in optimization.splitChunks.chunks - Stack Overflow](https://stackoverflow.com/questions/50127185/webpack-what-is-the-difference-between-all-and-initial-options-in-optimizat)

## 源码解析文章

- [An in-depth perspective on webpack's bundling process - JavaScript inDepth](https://indepth.dev/posts/1482/an-in-depth-perspective-on-webpacks-bundling-process)
- [Demistifying webpack's 'import' function: using dynamic arguments](https://indepth.dev/posts/1483/demistifying-webpacks-import-function-using-dynamic-arguments)