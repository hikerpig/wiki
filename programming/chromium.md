Chromium
===

### 阅读源码

一个 CPP 苦手前端工程师的挣扎。

一些准备:

- 在 Clion 中查看和构建 Chromium 项目, https://chromium.googlesource.com/chromium/src/+/master/docs/clion.md

### 踩坑

#### 1. 运行 autoninja, 出现错误 no such package: infra/python/wheels/psutil/mac-amd64_cp32_abi3

见 [这个讨论](https://groups.google.com/a/chromium.org/g/chromium-discuss/c/ygXltbD3gLQ?pli=1) ，使用 pyenv 确保 shell 版本为 python2 即可。