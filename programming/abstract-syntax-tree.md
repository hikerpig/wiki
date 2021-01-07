Abstract Syntax Tree
===

## 前端

[JavaScript中的AST -  李冬琳的博客](http://ldllidonglin.github.io/blog/2019/12/08/2019-12-08-JavaScript%E4%B8%AD%E7%9A%84AST/)，看起来 recast 是在不同 parser 之上的一个封装，使用标准的与 parser 无关的 ast-types （基于 Mozilla Parser API，且与 esprima ast 兼容，不过细节丰富程度似乎没有 babel 高），而且 print 不会像 @babel/generator 那样意外 reformatting ，更适合修改 ==源码== 。