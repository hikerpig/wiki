UltiSnips
===

## Meta

- site: https://github.com/SirVer/ultisnips/
- related: [[vim]]

## 2020/9/6

在半年前的博客 [Awesome UltiSnips](http://hikerpig.github.io/2020/02/05/2020-02-05-Awesome-UltiSnips/) 中我有写过 ：

> UltiSnips 项目已有十年的历史，功能为其模仿和致敬的 SnipMate 的超集，SnipMate 模仿了 TextMate 的语法。

作者近几年在忙别的事情，基本没时间更新，整个项目处于一个停滞的成熟期，在官方 github 仓库里有一些 - 像我一样打一枪就跑的 - 志愿者在回答问题和贡献小 PR。

当时为了实现 [Choices 功能](https://github.com/SirVer/ultisnips/issues/1166)，简单看了一遍源码并提交了 PR。插件的主体逻辑是在 python 里实现的，通过 vim 的 [python interface](https://vim-jp.org/vimdoc-en/if_pyth.html) 与 vim 结合工作。整个工程结构不是很复杂，但也许是默认使用 vim 且会开发插件的项目贡献者不缺水平和折腾能力，开发体验不是很好，包括但不限于：

1. 没有为贡献者单独提供傻瓜式完备的代码说明 （但用户帮助文档写得是非常的好）。
2. vim 的插件开发并没有公认的范式和统一的调试方法和界面支持，与给 VSCode 写插件体验对比尤其明显。UltiSnips 项目中，无法使用断点等方法，调试靠写文件 log 。
3. 有单元和集成测试，但，是在命令行里直接用 tmux 控制 vim 操作测试，略显魔幻。
4. 项目开始时并没有 python 3 和 type hints ，发展到现在应了那句老话“动态语言一时爽，调试重构火葬场”。

但 vim + UltiSnips 有好多让人无法割舍的特性：

1. 强大的代码插值系统，运行 shell/python/vim 代码片段，假定用户十分清楚知道自己在做什么，并充分赋权。例如下面这个在 git commit-message 里生成 Gerrit 的 Change-Id，直接拼出 python 代码并执行。

```vim-snippet
global !p
#! /usr/bin/env python
import hashlib
def make_change_id():
    fd = open("/dev/urandom", "rb")
    buf = fd.read(80)
    hash = hashlib.sha1()
    hash.update(buf)
    change_id = hash.hexdigest()
    return "Change-Id: I" + change_id
endglobal

snippet changeid "Generate Change-Id line"
`!p if not snip.c: snip.rv = make_change_id()`
endsnippet
```
