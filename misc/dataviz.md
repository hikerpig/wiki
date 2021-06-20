
# Data Visualization

## 一些参考网站

- [Data Viz Project \| Collection of data visualizations to get inspired and finding the right type.](https://datavizproject.com/)
- [The Data Visualisation Catalogue](https://datavizcatalogue.com/)
- [From data to Viz | Find the graphic you need](https://www.data-to-viz.com/)


## 论文

### _Protovis: A Graphical Toolkit for Visualization_

MICHAEL BOSTOCK. Protovis: A Graphical Toolkit for Visualization[J/OL]. 2009. [2020–05–10]. http://vis.stanford.edu/papers/protovis.

- Chart typology , 图表分类
- 提出了 declarative specification , 其中一些术语 (mark) ，之后的 Vega 有借鉴，此论文可作为其前置阅读。

### _D3 Data-Driven Documents_

M. Bostock, V. Ogievetsky, and J. Heer, “D3 Data-Driven Documents,” IEEE Transactions on Visualization and Computer Graphics 17, no. 12 (2011): 2301–2309, accessed May 16, 2020, http://ieeexplore.ieee.org/document/6064996/.

### _Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization_

SATYANARAYAN A, RUSSELL R, HOFFSWELL J, 等. Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization[J]. IEEE Transactions on Visualization and Computer Graphics, 2016, 22(1): 659–668. DOI:10.1109/TVCG.2015.2467091.

如标题所述，论述的主要是 reactive 和声明式的架构设计

- dataflow graph
- 操作符(Operator) 也是有声明式的表示的


## 一些观点

### Exploratory or Explanatory

mike 在[回顾 d3.js 的 10 年历程时](https://observablehq.com/@mbostock/10-years-of-open-source-visualization#l4)提到的，根据可视化的目标（探索性还是解释性）占比不同，一些设计决策会很不一样。