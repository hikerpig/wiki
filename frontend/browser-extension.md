Browser Extension
===
#extension

开发浏览器插件

### 基础学习

- [Chrome Extensions 开发者文档](https://developer.chrome.com/extensions), 维护人力有限，没有 web.dev 的华丽外表，但是内容详实
- [MDN 的 WebExtensions 文档](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions), api top namespace 是 `browser`，更加的标准化，不过其实也是基于 Chrome Extensions。

### 基础概念

不同类型脚本的运行环境以及通讯能力。

![extension messaging](https://i.loli.net/2020/08/12/Oc8pbMvsH1gl6BZ.png)

### 安全问题

- [PostMessage Security in Chrome Extensions](https://owasp.org/www-chapter-london/assets/slides/OWASPLondon_PostMessage_Security_in_Chrome_Extensions.pdf)


### 一些新闻

- [Abusive add-ons aren’t just a Chrome and Firefox problem. Now it’s Edge’s turn | Ars Technica](https://arstechnica.com/gadgets/2020/11/fraudulent-add-ons-infiltrate-the-official-microsoft-edge-store/#p3)