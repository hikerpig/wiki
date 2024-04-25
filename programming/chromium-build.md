chromium-build
===

记录一些 chromium 构建系统的学习，与 [[chromium]]  看代码不太一样，更多关注 build 相关内容。


- [Ninja, a small build system with a focus on speed](https://ninja-build.org/) ninja
- [Using GN build - Google 幻灯片](https://docs.google.com/presentation/d/15Zwb53JcncHfEwHpnG_PoIbbzQ3GQi_cpujYwbpcbZo) 一个关于 GN 使用的 slide 分享


从 gn 到 ninja 文件，关注的是不同的事情， ninja 为了极致的速度砍了便利性和很多高级功能（由更高级的上层提供）。


## 编译速度

[Chromium Docs - Checking out and Building Chromium for Windows](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md#why-is-my-build-slow) 里有一些编译慢的分析方案。