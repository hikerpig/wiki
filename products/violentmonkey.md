Violentmonkey
=============
#product #extension

应该是参考了好多 gm 的实现？

-   background 会做元信息的匹配，同时简单包装一层 error catcher
    和依赖加载
-   content~script~ 里的 injected web 部分会构建出一个简单的运行时，提供
    bridge。主要是基于字符串替换，经过 background 处理过的 code
    可以直接执行
-   gm-wrapper.js 里实现了 runtime 的包装
-   bridge 指的是 content script 与 web 间的 ??????
-   用一个 tricky 的方法运行 injected 代码... 写入一个 script 标签，插入
    document 中然后立刻移除
-   background/utils/preinject.js 以及 content inject 脚本时都提供了
    sourceURL ，让开发者可以在 sources 里对应原先的 user.js
