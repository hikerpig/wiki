Workona
===
#extension 

# 2020/9/9

印象中很久前初见 [Workona](https://workona.com/) ，好像只有 Tab Management ，现在有一些炫酷的进阶功能。

1. 大搜，除了基础的浏览历史和 Tab 搜索，还与它自身的 Apps 系统结合。
![](https://i.loli.net/2020/09/09/ku3JYN5DBKTlsQW.png)

加上了类似 Slack 的 command `/github`， 不过这个搜索结果有点奇怪，Actions 的优先级居然比搜索低。

![](https://i.loli.net/2020/09/09/qJK5P3UtCijGZmO.png)

2. Apps

常用的 microsoft系/google系/office系 和一些明星初创产品(Notion) 都有痕迹，目前没看到 Developer program，猜测都是 Workona 自己写的插件。

3. Tab Suspension， 类似产品 [The Great Suspender - Chrome Web Store](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg) 做得很好，也证明了此需求之普遍。

### 一些技术细节

它的浏览器插件很小很轻(1.1M)，应该只主打浏览记录收集(history)的功能。集成了一些快捷键（例如 `⌥+F` 开启搜索弹窗），都是打开一个固定住的 workona 的网页，所有逻辑在网页中实现。如此一可以避免插件升级不及时的问题，二可以避免把所有的业务逻辑都塞在插件里。唯一一点不好的是，每个 workspace 窗口都要强制有一个常驻的 workona 网页，当初我就是被这个吓走了。