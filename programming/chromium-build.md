chromium-build
===

记录一些 chromium 构建系统的学习，与 [[chromium]]  看代码不太一样，更多关注 build 相关内容。

- [Using GN build - Google 幻灯片](https://docs.google.com/presentation/d/15Zwb53JcncHfEwHpnG_PoIbbzQ3GQi_cpujYwbpcbZo) 一个关于 GN 使用的 slide 分享


从 gn 到 ninja 文件，关注的是不同的事情， ninja 为了极致的速度砍了便利性和很多高级功能（由更高级的上层提供）。


## 编译速度

[Chromium Docs - Checking out and Building Chromium for Windows](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md#why-is-my-build-slow) 里有一些编译慢的分析方案。


## Ninja

[Ninja, a small build system with a focus on speed](https://ninja-build.org/) 

从 gn 到 ninja 文件，关注的是不同的事情， ninja 为了极致的速度砍了便利性和很多高级功能（由更高级的上层提供），仅关注组织构建这件事。因此其实也不建议手写 ninja 文件。



[ninja  |  Fuchsia](https://fuchsia.dev/fuchsia-src/development/build/ninja_how) fuchsia 里介绍的 ninja
[Ninja Build System - How Does it Work? | Incredibuild](https://www.incredibuild.com/integrations/ninja)  incredibuild 里介绍的 ninja
[Using Ninja Build to Build Projects Faster - Earthly Blog](https://earthly.dev/blog/ninjabuild-for-faster-build/)

[Tech Notes: The Success and Failure of Ninja](https://neugierig.org/software/blog/2020/05/ninja.html) 
[Spectra - A Complete Guide To The Ninja Build System](https://spectra.mathpix.com/article/2024.01.00364/a-complete-guide-to-the-ninja-build-system)


[hash based input checking by metti · Pull Request #929 · ninja-build/ninja · GitHub](https://github.com/ninja-build/ninja/pull/929)  一个添加 `hash_log` 使用文件内容哈希来做判定的 PR ，没合入且好几年没更新。

## Goma

一些非官方文档
- [Unofficial Goma Setup Guide](https://kubala.github.io/) 