Foam
===

## Meta

Related: [[obsidian]]

[Foam](https://foambubble.github.io/foam/) 从名字上就有向 Roam Research 致敬的意思。

几乎所有设计都紧跟约定俗成和最佳实践，包括
1. 复用 markdown/wikilinks/graph-view 等大家已广为接受的概念
2. 依托于 VS Code 这样的编辑器生态
3. 初期基本只实现了依托 github pages 的部署流程

等等，好处是不需要重新实现一整套解决方案，而是提出一套推荐的实践流程，用最少的人力补齐流程中缺失的部分。
最大的基于 markdown 文件的好处是能从许多已存 markdown 项目快速转换过来，个人可以根据自身情况编写合适的分析、迁移、发布脚本，对于程序员和极客来说有一种摩拳擦掌大显身手的快乐。


## Update 2020/10/16

一个基于 [gatsby-theme-garden](https://www.gatsbyjs.com/plugins/gatsby-theme-garden/) 的发布方案: [mathieudutour/foam-gatsby-template: Foam workpace template](https://github.com/mathieudutour/foam-gatsby-template)。

[作者的 Demo](https://mathieudutour.github.io/gatsby-digital-garden/)，兼容 roam 语法，具有 graph-view/reference-view/鼠标悬停预览 等功能，界面简洁美观。

## Update 2020/9/14
一个可以借鉴的发布方案:  https://wiki.spencerwoo.com/ 使用 vuepress 以及自定义的 foam 插件生成的网站，观感以及功能都很棒。底部插入了 backlink section 。

## 早期阶段存在诸多问题

直到今日 （2020/8/16）还处于快速开发的早期状态，尤其是发布功能很孱弱，需要借助 github pages 这一整套生态，甚至还需要 hack（目前阶段 jekyll 好像还没有对 wikilink 格式的支持，需要 hack）。之后希望有更多选择，有人已经开放出了基于 Gatsby 生成的模板项目 [foam-gatsby-template](https://github.com/mathieudutour/foam-gatsby-template/)，不过完成度比较一般，期待官方跟进。