Write Visual Studio Code Extension
===

开发文档写得很详实， 先 [通读一遍 Overview](https://code.visualstudio.com/api)，甚至完整看过教程，即可对基础概念有一些理解。剩下的事情，就是看一些优秀的或是自己感兴趣的开源插件代码。

这里还有一个 readthedocs 的文档， 似乎是从 docs 目录里抽取出来的，[Api debugging - vscode-docs](https://vscode-docs.readthedocs.io/en/stable/extensionAPI/api-debugging/)


## 调试与测试

### [Disabling other extensions while debugging](https://code.visualstudio.com/api/working-with-extensions/testing-extension#disabling-other-extensions-while-debugging)

使用 `--disable-extensions` 命令行参数，可避免其他插件干扰，同时也加快启动速度。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
  ]
}
```

## 语言插件

官方的文档简单介绍了重要概念

- [Syntax Highlight Guide | Visual Studio Code Extension API](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)。有通用的 token type。

语法高亮规则看 TextMate 的手册
- [Language Grammars — TextMate 1.x Manual](https://macromates.com/manual/en/language_grammars)。
- [Regular Expressions — TextMate 1.x Manual](https://macromates.com/manual/en/regular_expressions)


## 插件管理
- [Publishing Extensions | Visual Studio Code Extension API](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Web Extensions | Visual Studio Code Extension API](https://code.visualstudio.com/api/extension-guides/web-extensions) ，发布在 Web 版 VSCode 里也能用的扩展。

## 写 webview
- [Webview API | Visual Studio Code Extension API](https://code.visualstudio.com/api/extension-guides/webview)


居然还有个扩展 markdown preview 的方式 [Markdown Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/extension-guides/markdown-extension)