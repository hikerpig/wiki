Mermaid.js
===
#graph #FOSS

## 2020/9/15

我发布了一篇博客文章，把之前的阶段观察整理了一下：[Mermaid.js - 一个刚刚好的开源产品](http://hikerpig.github.io/2020/08/28/2020-08-28-Mermaid.js-as-a-nice-product/)

## 2020/8/22 观察

早期的 Mermaid 代码分层大概是这样的，然而图表实现层对布局和绘制层的调用比较直接和混乱，基本上一种图表一种特化（怎么画线、箭头等）实现方式。

![](https://images-hikerpig.oss-cn-beijing.aliyuncs.com/image/mermaidjs-old.svg)

### Generic rendering engine

最早有人提 issue 问是否可以有通用渲染引擎来满足非常规 uml 图表的绘制需求，作者也意识到了每个图表的 renderer 重复做一些事情且重复修类似 bug 的痛苦之处，开始思考合理划分通用渲染和单独图表逻辑。

2020/5/5 提出 isssue [Create generic rendering engine](https://github.com/mermaid-js/mermaid/issues/1295)，月底完成合入主分支。之后逐步给主要图表添加 v2 版本，如 stateDiagram-v2 与旧版共存。

当前阶段的渲染层并不着急对过去内部概念推倒重建，而是在逐步改写的第一阶段，先包装好对 dagre 调用和增强。

![](https://images-hikerpig.oss-cn-beijing.aliyuncs.com/image/mermaidjs-dagre-wrapper.svg)