Chromium
===

### 阅读源码

一个 CPP 苦手前端工程师的挣扎。

一些准备:

- [Checking out and building Chromium for Mac](https://chromium.googlesource.com/chromium/src/+/master/docs/mac_build_instructions.md)
- 学习 google 的构建工具 GN 的用法 [GN Quick Start guide](https://gn.googlesource.com/gn/+/HEAD/docs/quick_start.md)
- 在 Clion 中查看和构建 Chromium 项目, https://chromium.googlesource.com/chromium/src/+/master/docs/clion.md


#### 参考文章

- 在线看代码推荐使用 [Chromium Code Search](https://source.chromium.org/chromium/chromium/src/+/master:)
- [怎么去阅读Chromium的源码？](https://www.zhihu.com/question/306408034)
- [Getting Around the Chromium Source Code Directory Structure - The Chromium Projects](https://sites.google.com/a/chromium.org/dev/developers/how-tos/getting-around-the-chrome-source-code) 。阅读代码库和开发的新手指南。

### 踩坑

#### 1. 运行 autoninja, 出现错误 no such package: infra/python/wheels/psutil/mac-amd64_cp32_abi3

见 [这个讨论](https://groups.google.com/a/chromium.org/g/chromium-discuss/c/ygXltbD3gLQ?pli=1) ，使用 pyenv 确保 shell 版本为 python2 即可。