Vim
===

## Meta

Related: [[ultisnips]]

## 文章

- [Vim实用设置 :: HP goes FE](https://www.hikerpig.cn/2014-05-30-Vim%E5%AE%9E%E7%94%A8%E8%AE%BE%E7%BD%AE/) 一些 Vim 小技巧。
- [How I revamped my Vim setup There is no magic here](https://alex.dzyoba.com/blog/vim-revamp/)
- [Debugging Vim by example — David Winterbottom](https://codeinthehole.com/tips/debugging-vim-by-example/)
- [A Vim Guide For Experts](https://thevaluable.dev/vim-expert/) ，从浅到深的这个系列很不错。
- [Using buffers, windows, and tabs efficiently in Vim - DEV Community 👩‍💻👨‍💻](https://dev.to/iggredible/using-buffers-windows-and-tabs-efficiently-in-vim-56jc) 区分好这几个概念 （否则像我一样习惯了 tabs 再去使用 bufferline.nvim 困难重重）
- [记一次优化Vim启动速度](http://wzmmmmj.com/2020/03/28/vim-startuptime-optimize/)

## GUIs

- [Related projects · neovim/neovim Wiki](https://github.com/neovim/neovim/wiki/Related-projects)，neovim wiki 中整理出来的 vim GUI 列表，很全。 

- [qvacua/vimr: VimR — Neovim GUI for macOS in Swift](https://github.com/qvacua/vimr)，我自己在用的一个，使用 SwiftUI 书写，体验很流畅。

## 小 tip

- `40G` 跳到第 40 行，`20|`  (pipe 符号) 跳到第 20 列。
- [How to increase the vertical split window size in Vim - Stack Overflow](https://stackoverflow.com/questions/4368690/how-to-increase-the-vertical-split-window-size-in-vim)
- command line  mode 下使用 `:options` 可以调出完整的可设置参数列表
- `<c-x><c-f>` 可以补全文件名（File name completion），详情见 `:help compl-filename`。关于 `<c-x>` 的其他补全模式，可见 [VIM学习笔记 自动补全详解(Auto-Completion Detail) - 知乎](https://zhuanlan.zhihu.com/p/106309525)。
