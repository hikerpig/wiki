Alacritty
===

最快的终端模拟器。

在作者的介绍文章[Announcing Alacritty, a GPU-accelerated terminal emulator](https://jwilm.io/blog/announcing-alacritty/)中，阐述了几个关于性能的点：

1. 使用 OpenGL 渲染满屏文字可以达到 500FPS 的速度，渲染的时间开销很低，因此 Alacritty 不需要费力维护和计算局部更新。
2. 使用 V-Sync 将渲染频率上限对齐屏幕的刷新率，可以节省无意义的过高密度渲染。
3. Table-driven parsing ，基于表查询能写出性能很高的 parser。
