| Field  | value                                                                            |
| ------ | -------------------------------------------------------------------------------- |
| Author |                                                                                  |
| DOI    | 10.1145/3236774                                                                  |
| Link   | [dl.acm.org/doi/pdf/10.1145/3236774](https://dl.acm.org/doi/pdf/10.1145/3236774) |

对不太熟悉 Haskell 语法的有点懵，理解几个关键概念就好。

关键模块有以下2个正交的关键模块，使用不同的策略可以组合出不同构建系统


# 简介

粗暴翻译成《构建系统点菜谱》。

这是一篇 2018 年写就的对构建系统的关键能力进行拆解简述的论文。也将一些当时具有代表性的构建系统放入分析框架中阐述。提供各种原料，以期读者在将来使用另一种方式将现有各组件的优势结合从而创造出新的构建系统。

第一作者 Andrey Mokhov 在 Newcastle University 做研究，2019 年转去 Jane Street 从事构建系统开发的工作。

二作者 Neil Mitchell 自己用 Haskell 写了一个构建系统 Shake，2022 至今他也在 Meta 进行公司级的构建系统 Buck 和 Buck2 的开发。

论文的代码相关示意使用 Haskell 表示，不熟悉的看着细节有点费力，但总体的描述脉络清晰易懂。

# 能力描述维度

![[build-system-differences.png]]

1. **持久化储存信息**。在构建直接持久化保存的信息，相当于构建系统的“记忆”。
    
2. **静态/动态依赖。**有些任务的依赖项在执行的时候才能确定，这样的是动态依赖。
    1. 例如这个 Excel （伪装成表格程序的构建系统）的例子。B1 依赖 A1 还是 A2 取决于 C1 的结果。
3. （是否）**Minimal**。如果一个构建系统在每次构建中最多执行一次任务，并且仅当这些任务传递性地依赖于自上一次构建以来发生变化的输入时，那么这个构建系统就是**最小(Minimal)**的。
    
4. **Early Cutoff 。**如果一个任务构建后产物相比上次没有变化， 就没有必要执行依赖于该任务的任务。
    1. 一个例子，在完成一次完整的构建后，改变了 main.c 文件需要重编，当编译 main.c -> main.o 且发现 main.o 的产物相对于上一次没有变化时，不再需要重编生成 main.exe 。

5. （是否支持）**云构建****，**共享编译产物**。**以 Bazel 为例子做了一些简单分析。

# 关键组件

文中将构建系统核心设计抉择拆成 2个正交的关键模块，各自都有不同的实现策略，使用不同的策略可以组合出不同构建系统。

![[scheduler-and-rebuilder.png]]

## Scheduler 决定任务执行顺序

有如下几种策略:

1. **Topological** 。根据静态的依赖关系，提前用拓扑图排好执行的顺序。
    
2. **Restarting** 。随意顺序开始，开始执行任务的时候收集依赖，当发现依赖过期的时候终止任务转而先构建它的依赖之后再重新构建。
    
    1. 虽然这个策略实现上有一些浪费，但是能够处理动态依赖的场景。
        
    2. 其中一种实现的文字描述：
        

> The build starts with the queue containing all dirty keys. Similar to Excel, the rebuilding of a key extracted from the queue may fail because one of its dynamic dependencies is dirty. In this case the key is marked as blocked and its rebuilding is deferred. Whenever a key is successfully rebuilt, all keys that were previously blocked on it are added back to the queue, and their build is eventually restarted.

3. **Suspending**。 递归，挂起等待，执行完依赖的构建后恢复任务。


## Rebuilder 决定哪些需要重编

在调度器发出构建任务后，由 Rebuilder 来决定是否需要真的执行背后的构建程序，还是其实已经是最新了不需要构建，又或者在云构建系统中是否有缓存可以拉取。

有如下几种策略:

1. **A Dirty Bit**. 为每个键保留一条持久信息，表明该键是 “脏的” 还是 “干净的”。在一次构建之后，所有的位都被设置为 “干净”。当下一次构建开始时，两次构建之间发生变化的任何内容都被标记为 “脏的”。如果一个键及其所有的传递依赖都是干净的，那么这个键就不需要重新构建。
    
    1. 例如 Make 依赖了操作系统记录的文件 modified time 。
        
2. **Verifying Traces 。**持久化保存跟踪记录每个 key 上次构建时使用的依赖项的特征值（有可能是内容哈希或是mtime 之类），本次构建时检查如果依赖的特征值相对上次都没有变化，就可以跳过此 key 对应的任务的构建。
    
3. **Constructive Traces.** 相比于只存储特征值的 Verifying Traces ，还会额外存储生成的值（例如构建的结果产物）。记录了结果：
    
    1. 在云构建中能够实现多用户产物共享。
        
    2. 可以依托此存储实现 early cutoff
        
4. **Deep Constructive Traces.** 相比于 Constructive Traces 总是通过查看其直接依赖项来验证 key 是否需要重编，这些直接依赖项必须首先更新到最新状态，这意味着验证一个键的时间取决于传递依赖项的数量和等待它们更新。Deep Constructive Traces 通过只查看终端输入键（依赖图的叶节点）而忽略任何中间依赖项来优化加速这个过程。
    
    1. 这个方案的缺点是不支持 early cutoff （因为没有等待中间依赖项构建结束）。

# 延展阅读

1. [The Success and Failure of Ninja](https://neugierig.org/software/blog/2020/05/ninja.html) ， ninja 的作者在 2020 年写的一个回顾，其中简述了下 ninja 的发展历史和他觉得做的好与不好的地方。他也提到希望自己能早一点阅读到 _Build Systems à_ _la_ _Carte_ 这篇论文。而后 22 年他发布了 n2 , [n2: revisiting Ninja](https://neugierig.org/software/blog/2022/03/n2.html) ，使用 rust 重写并针对 ninja 的一些关键实现做了重新设计。使用保留更多信息的 manifest 而不仅仅是 mtime 来决定重编与否、支持 early cutoff 等等，对增量构建的优化更多。
