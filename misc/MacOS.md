MacOS
===

## 性能 Tips

加速你的 OSX

- https://softwaretested.com/mac/how-to-fix-windowserver-high-cpu-and-memory-usage-on-mac/ 
3 和 4，尤其是前者，立竿见影, 马上 CPU usage 就下来了
- [macbook pro - mds and mds_stores constantly consuming cpu - Ask Different](https://apple.stackexchange.com/questions/144474/mds-and-mds-stores-constantly-consuming-cpu) ，列出 spotlight 索引的目录，禁掉一些。避免 mds_stores 索引占 CPU 。

- 强行重启 Dock 
```
defaults delete com.apple.dock; killall Dock
```

## Apps

- [serhii-londar/open-source-mac-os-apps: 🚀 Awesome list of open source applications for macOS. https://t.me/s/opensourcemacosapps](https://github.com/serhii-londar/open-source-mac-os-apps)
- [mangerlahn/Latest: A small utility app for macOS that makes sure you know about all the latest updates to the apps you use.](https://github.com/mangerlahn/latest)

## 教学文章

- [Top 8 Ways to Fix Mac Spotlight Not Working](https://www.anyrecover.com/mac-tips/mac-spotlight-not-working/)
- [macOS 长按连续输入的简单设置方法 - zihengCat](https://zihengcat.github.io/2018/08/02/simple-ways-to-set-macos-consecutive-input/)


## Mac 上的开发

- [mac - Import certificates into the System Keychain via the command line - Ask Different](https://apple.stackexchange.com/questions/80623/import-certificates-into-the-system-keychain-via-the-command-line)