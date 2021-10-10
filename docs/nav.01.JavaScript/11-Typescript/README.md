# TS

> <https://jkchao.github.io/typescript-book-chinese>

TS 是 JS 的超集，在 JS 的基础上提供了类型体系，是大型项目必须的项目配置

## 编译原理

由下面几个关键部分组成

- Scanner
- Parser
- Binder
- Check - 检查类型
- Emitter

主流程：

- source code
- scanner
- token stream
- Parser
- AST
- Binder
- Symbols

### scanner

`code/compiler/scanner/runScanner.ts`

```js
var foo = 123;


// to

VarKeyword
Identifier
FirstAssignment
FirstLiteralToken
SemicolonToken
```

### parser

`code/compiler/parser/runParser.ts`

```js

var foo = 123;

// to

SourceFile 0 14
---- SyntaxList 0 14
-------- VariableStatement 0 14
------------ VariableDeclarationList 0 13
---------------- VarKeyword 0 3
---------------- SyntaxList 3 13
-------------------- VariableDeclaration 3 13
------------------------ Identifier 3 7
------------------------ FirstAssignment 7 9
------------------------ FirstLiteralToken 9 13
------------ SemicolonToken 13 14
---- EndOfFileToken 14 14
```

### binder

为了协助（检查器执行）类型检查，绑定器将源码的各部分连接成一个相关的类型系统，供检查器使用。绑定器的主要职责是创建符号（Symbols）

### checker

如前所述，检查器使得 TypeScript 更独特，比其它 JavaScript 转译器更强大。检查器位于 checker.ts 中，当前有 23k 行以上的代码（编译器中最大的部分）

### emitter

ts 编译器提供了两个发射器：

- emitter.ts：可能是你最感兴趣的发射器，它是 TS -> JavaScript 的发射器
- declarationEmitter.ts：这个发射器用于为 TypeScript 源文件（.ts） 创建声明文件（.d.ts）

## why

TypeScript 的特点：

- 提供部分文档功能，便于维护
- 可以在编译期间发现并纠正错误
- 支持强类型、接口、模块、范型

## how
