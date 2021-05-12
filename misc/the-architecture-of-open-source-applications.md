The Architecture of Open Source Applications
===

[The Architecture of Open Source Applications](http://www.aosabook.org/en/index.html)，一系列关于开源项目的文章（通常由作者写著）集合成的书。

## matplotlib

相关: [[plot-libs]]

[The Architecture of Open Source Applications (Volume 2): matplotlib](http://www.aosabook.org/en/matplotlib.html)，原作者是一个研究癫痫的医学研究者，最早为了在 MATLAB 中实现 EEG/ECoG 数据可视化，替代他们当时使用的一个商业软件。

关于 Transforms 的部分可以参考，transform node 的依赖关系在一个 DAG (Transform Graph) 中维护，parent node 的 transform 变化后，依赖了它的所有节点计算缓存值全部失效（需要重新计算）。