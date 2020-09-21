# Rsshub

RSSHub Radar
------------
#product #extension

-   使用 route-recognizer 做路由规则匹配
-   rule 的实际代码 并不是 在本地执行的，有一个 rsshub
    域名的相对地址，请求过去以后有 RSSHub 的 node.js
    后端服务会去在几百个 routes 里寻找合适的 handler。

