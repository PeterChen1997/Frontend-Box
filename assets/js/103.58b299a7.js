(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{482:function(s,a,t){"use strict";t.r(a);var r=t(29),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts"}},[s._v("#")]),s._v(" TS")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://jkchao.github.io/typescript-book-chinese",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://jkchao.github.io/typescript-book-chinese"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("TS 是 JS 的超集，在 JS 的基础上提供了类型体系，是大型项目必须的项目配置")]),s._v(" "),t("h2",{attrs:{id:"编译原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[s._v("#")]),s._v(" 编译原理")]),s._v(" "),t("p",[s._v("由下面几个关键部分组成")]),s._v(" "),t("ul",[t("li",[s._v("Scanner")]),s._v(" "),t("li",[s._v("Parser")]),s._v(" "),t("li",[s._v("Binder")]),s._v(" "),t("li",[s._v("Check - 检查类型")]),s._v(" "),t("li",[s._v("Emitter")])]),s._v(" "),t("p",[s._v("主流程：")]),s._v(" "),t("ul",[t("li",[s._v("source code")]),s._v(" "),t("li",[s._v("scanner")]),s._v(" "),t("li",[s._v("token stream")]),s._v(" "),t("li",[s._v("Parser")]),s._v(" "),t("li",[s._v("AST")]),s._v(" "),t("li",[s._v("Binder")]),s._v(" "),t("li",[s._v("Symbols")])]),s._v(" "),t("h3",{attrs:{id:"scanner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scanner"}},[s._v("#")]),s._v(" scanner")]),s._v(" "),t("p",[t("code",[s._v("code/compiler/scanner/runScanner.ts")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// to")]),s._v("\n\nVarKeyword\nIdentifier\nFirstAssignment\nFirstLiteralToken\nSemicolonToken\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"parser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[s._v("#")]),s._v(" parser")]),s._v(" "),t("p",[t("code",[s._v("code/compiler/parser/runParser.ts")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// to")]),s._v("\n\nSourceFile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" SyntaxList "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" VariableStatement "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" VariableDeclarationList "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" VarKeyword "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" SyntaxList "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" VariableDeclaration "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" Identifier "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" FirstAssignment "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" FirstLiteralToken "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" SemicolonToken "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" EndOfFileToken "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"binder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binder"}},[s._v("#")]),s._v(" binder")]),s._v(" "),t("p",[s._v("为了协助（检查器执行）类型检查，绑定器将源码的各部分连接成一个相关的类型系统，供检查器使用。绑定器的主要职责是创建符号（Symbols）")]),s._v(" "),t("h3",{attrs:{id:"checker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checker"}},[s._v("#")]),s._v(" checker")]),s._v(" "),t("p",[s._v("如前所述，检查器使得 TypeScript 更独特，比其它 JavaScript 转译器更强大。检查器位于 checker.ts 中，当前有 23k 行以上的代码（编译器中最大的部分）")]),s._v(" "),t("h3",{attrs:{id:"emitter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emitter"}},[s._v("#")]),s._v(" emitter")]),s._v(" "),t("p",[s._v("ts 编译器提供了两个发射器：")]),s._v(" "),t("ul",[t("li",[s._v("emitter.ts：可能是你最感兴趣的发射器，它是 TS -> JavaScript 的发射器")]),s._v(" "),t("li",[s._v("declarationEmitter.ts：这个发射器用于为 TypeScript 源文件（.ts） 创建声明文件（.d.ts）")])]),s._v(" "),t("h2",{attrs:{id:"why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[s._v("#")]),s._v(" why")]),s._v(" "),t("p",[s._v("TypeScript 的特点：")]),s._v(" "),t("ul",[t("li",[s._v("提供部分文档功能，便于维护")]),s._v(" "),t("li",[s._v("可以在编译期间发现并纠正错误")]),s._v(" "),t("li",[s._v("支持强类型、接口、模块、范型")])]),s._v(" "),t("h2",{attrs:{id:"how"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[s._v("#")]),s._v(" how")])])}),[],!1,null,null,null);a.default=e.exports}}]);