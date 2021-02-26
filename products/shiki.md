shiki
===

[Shiki](https://shiki.matsu.io/) 是一个 TS 写就的代码高亮包，似乎是由 octref （同时也是 vetur 的作者）在 vscode 工作的时候写的。

目前用于 vscode 和 typescript 的官网代码高亮。

![](https://shiki.matsu.io/assets/vscode-ts.png)

依赖了  vscode-textmate npm pacage，使用了 Textmate 兼容的规则和解析方式（例如这个[TypeScriptReact.tmLanguage](https://github.com/Microsoft/TypeScript-TmLanguage/blob/master/TypeScriptReact.tmLanguage)），一个很大的亮点似乎是可以直接方便地移植 vscode 的 syntax 和主题插件。

不过与竞品 prismjs 比起来，包体积有点大([27.6 kB MINIFIED + GZIPPED](https://bundlephobia.com/result?p=shiki@0.9.2))。