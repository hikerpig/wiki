parsing
===

关于程序 parser 的一些备忘

## Earley 算法

- [Earley Parsing Explained](https://loup-vaillant.fr/tutorials/earley-parsing/)，详细解释，说明和图解非常好。
- [A Pint-sized Earley Parser](https://joshuagrams.github.io/pep/)

### Earley parser generators

- [Parsing absolutely anything in JavaScript using Earley algorithm | by Gajus Kuizinas | Medium](https://gajus.medium.com/parsing-absolutely-anything-in-javascript-using-earley-algorithm-886edcc31e5e)。代码可见于 [gajus/scalpel: A CSS selector parser.](https://github.com/gajus/scalpel)

#### Nearley.js

- [Very slow performance for JSON grammar. · Issue #111 · kach/nearley](https://github.com/kach/nearley/issues/111) ，具有一定信息量的讨论

## PEG

- [解析表达文法 - Wikiwand](https://www.wikiwand.com/zh-hans/%E8%A7%A3%E6%9E%90%E8%A1%A8%E8%BE%BE%E6%96%87%E6%B3%95)
- [PEG.js – Parser Generator for JavaScript](https://pegjs.org/)， 生成 JS 程序
- [harc/ohm: A library and language for building parsers, interpreters, compilers, etc.](https://github.com/harc/ohm) 基于 PEG 

## JS 下的 parser 生态

- [Parsing in JavaScript: all the tools and libraries you can use](https://tomassetti.me/parsing-in-javascript/)。最后介绍了 [Chevrotain/chevrotain: Parser Building Toolkit for JavaScript](https://github.com/Chevrotain/chevrotain) 这个库，感觉挺有意思。
- [francisrstokes/arcsecond: ✨Zero Dependency Parser Combinator Library for JS Based on Haskell's Parsec](https://github.com/francisrstokes/arcsecond)   parser combinator

## AST and CST

- [[abstract-syntax-tree]]
- [compiler construction - What's the difference between parse trees and abstract syntax trees (ASTs)? - Stack Overflow](https://stackoverflow.com/questions/5026517/whats-the-difference-between-parse-trees-and-abstract-syntax-trees-asts)

## 其他 Parser Generator
- [lark-parser/lark: Lark is a parsing toolkit for Python, built with a focus on ergonomics, performance and modularity.](https://github.com/lark-parser/lark)  python 写的项目，有一个 Lark.js 可以生成 js 的代码。 支持  Earley 和 LALR(1) 算法

## 其他文章

- [LL and LR Parsing Demystified](https://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html)
- [编译原理：LL, LR 文法浅析 - 知乎](https://zhuanlan.zhihu.com/p/94424139)