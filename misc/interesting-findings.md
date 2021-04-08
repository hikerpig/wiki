Interesting findings
===

记录一些偶然听说的暂时不好分类的片段。

### 慕尼黑计程车实验

> Let’s take a look at yet another research - the classical Munich Taxi-cab Experiment conducted in the early 1980s. Although the research is not related to IT but road safety, the researchers encountered similar unintuitive results. In the 1980s German car manufacturers began to install the first ABS (anti-lock braking system) in cars. As ABS makes the car more stable during braking, it is a natural expectation that it improves safety on the road. The researchers wanted to find out how much. They cooperated with a taxi company that planned to install ABS in part of their fleet. 3000 taxi cars were selected and in half of randomly selected cars ABS was installed. The researchers had been observing the cars for 3 years. Afterward, they compared accident rates in the group with ABS and without ABS. The result was at least surprising, there was practically no difference, even the cars with the ABS were slightly more likely to be involved in an accident.
> As in the case of the research on bugs rate and concurrency bugs in Go, in theory, there should be a difference, but data shows otherwise. In the ABS experiment, the investigators had collected additional data. Firstly, the cars were equipped in kind of black boxes collecting information like speed and acceleration. Secondly, observers were assigned to the drivers to take notes of their behavior on the road. The picture from the data was clear. With ABS installed in the cars the drivers changed their behavior on the road. Noticing that now they have better control of the car and stopping distance is shorter the drivers started to drive faster and more dangerously, taking sharper turns, tailgating.
> <cite>https://www.infoq.com/articles/search-code-quality/</cite>

相关理论词条
- [Risk homeostasis](https://psychology.wikia.org/wiki/Risk_homeostasis)，风险自平衡。
- [Risk compensation - Wikipedia](https://en.wikipedia.org/wiki/Risk_compensation)


### 盟军统计学家使用概率论估计德军坦克产量

> 当年，德国佬正在大规模地生产坦克，盟军想要知道他们每个月的坦克产量数。为了了解这个信息，盟军采取了两种方法：一是根据情报人员刺探的消息而得到，另一种是根据盟军发现和截获的德国坦克数据，用统计分析办法得到。根据第一种方法得到的情报，德军坦克每个月的产量大约有1400辆，但根据概率统计推断的方法，预计的数量只有数百辆。二战之后，盟军对德国的坦克生产记录进行了检查，发现统计方法预测的答案（见表1）令人惊讶地与事实符合