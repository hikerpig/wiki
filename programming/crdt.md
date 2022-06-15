CRDT Conflict-free replicated data type
===

相关:

- [[协同文档]]

## 文章

### 1. [Are CRDTs suitable for shared editing?](https://blog.kevinjahns.de/are-crdts-suitable-for-shared-editing/)

xi-editor 和 [CodeMirror6](https://marijnhaverbeke.nl/blog/collaborative-editing-cm.html) 都在尝试 CRDT 后放弃了。不过该文作者（同时也是 [Yjs](https://docs.yjs.dev/) 的作者）意在为 CRDT 辩护，通过一些启发式的适合于文档编辑的优化表示方法，能减少需要保有的 object 数量，实际占用资源（内存等）可以在可接受范围内。文章里列出的一些论文以及作者自建的 crdt-benchmark 项目也可帮助有意于了解文档协同编辑技术的人学习。

### 2. [Building real-time collaboration applications: OT vs CRDT](https://www.tiny.cloud/blog/real-time-collaboration-ot-vs-crdt/)

TinyMCE 的作者比较，2020 年 1 月的文章。对 CRDT 一顿吹(the holy grail of collaboration)，但由于 CRDT 以数据为本体和基石，在文字编辑领域无法合理地展现操作目的（intent），所以他们依旧选择了 OT。

文中列出的论文比较经典。

[协同文档]: 协同文档 "协同文档"