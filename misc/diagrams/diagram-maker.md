diagram-maker
===

对于架构图来说，总体有 Diagrams as Text 和 Diagrams as Code 两大阵营。

## 一些产品

- [Online text to diagram tools](https://xosh.org/text-to-diagram/), A comprehensive list of various text to diagram tools.
- [Kroki!](https://kroki.io/)，集合了多种常用 text to diagram 工具语法的 API service

**Text Based**:

- [Gleek](https://app.gleek.io/)，基于 [[mermaidjs]] 做的一个 studio，默认样式还不错。不过现在(2021/3/5)还比较新，功能不太完善。
- [plantuml-stdlib/C4-PlantUML: C4-PlantUML combines the benefits of PlantUML and the C4 model for providing a simple way of describing and communicate software architectures](https://github.com/plantuml-stdlib/C4-PlantUML)

**Code Based**:

- [Diagrams · Diagram as Code](https://diagrams.mingrammer.com/)
- [Structurizr](https://structurizr.com/)，一个商业产品，有自己的建模 DSL，可以自己渲染，也可以转换为 plantuml/mermaid 语句自动画图。
- [nomnoml](https://nomnoml.com/)，text -> UML 的工具和在线编辑器，基于 canvas 绘制


**GUI Based**:

- [ProcessOn - 免费在线作图，思维导图，流程图，实时协作](https://www.processon.com/)
- [DrawIO](https://app.diagrams.net/)

- [WebSequenceDiagrams](https://www.websequencediagrams.com/) 这个看起来是基于 plantuml ，不过时序图的辅助 UI 可以参考一下。
- [PlantUML Editor](https://plantuml-editor.kkeisuke.com/) 在线的 PlantUML 编辑器，体验比官网的好很多。
- [PlantText UML Editor](https://www.planttext.com) 类似上一个，但是略丑
- [Pintora Live Editor](https://pintorajs.vercel.app/demo/live-editor/)，pintora.js 项目的在线编辑器，参考了 mermaid.js 的 live editor。
- [OneModel - A Diagramming Tool for Software Engineers](https://www.onemodel.app/) ，面向软件工程师的工具，画架构和部署图很方便，有很多好用的图标


### Graphviz

- [DOT Language | Graphviz](http://www.graphviz.org/doc/info/lang.html)  给出了 DOT 语言的 BNF 描述
- [siefkenj/dotgraph: javascript parser for Graphviz dot/xdot format](https://github.com/siefkenj/dotgraph) 一个 dot parser 的 pegjs 实现
- [anvaka/dotparser: Parser of GraphViz dot file format](https://github.com/anvaka/dotparser) 另一个 pegjs 实现
- https://gitlab.com/graphviz/graphviz/-/tree/main/rtest/graphs   graphviz 项目的测试集
- [Theory/Publications | Graphviz](https://graphviz.org/theory/) Graphviz 项目涉及的算法论文集合