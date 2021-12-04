(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{444:function(t,r,e){"use strict";e.r(r);var a=e(29),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"状态管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86"}},[t._v("状态管理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98"}},[t._v("解决的问题")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%91%E5%B1%95%E8%BF%87%E7%A8%8B"}},[t._v("发展过程")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#flux"}},[t._v("Flux")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%BC%98%E7%82%B9"}},[t._v("优点")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%BC%BA%E7%82%B9"}},[t._v("缺点")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#redux"}},[t._v("Redux")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8E%A8%E8%8D%90%E6%96%87%E7%AB%A0"}},[t._v("推荐文章")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98"}},[t._v("相关问题")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%80%89%E7%94%A8%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%BA%93"}},[t._v("什么时候选用状态管理库")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#context"}},[t._v("context")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#api-%E7%9A%84%E5%BC%8A%E7%AB%AF"}},[t._v("api 的弊端")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B1%9E%E6%80%A7"}},[t._v("有哪些属性")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#consumer%E5%90%91%E4%B8%8A%E6%89%BE%E4%B8%8D%E5%88%B0provider%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E5%8A%9E"}},[t._v("Consumer向上找不到Provider的时候怎么办")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%BB%84%E6%88%90"}},[t._v("组成")])])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"解决的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题"}},[t._v("#")]),t._v(" 解决的问题")]),t._v(" "),e("p",[t._v("如何更好地管理整个应用共享的数据，解决了组件层级过深时层层传递数据的尴尬局面")]),t._v(" "),e("h2",{attrs:{id:"发展过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发展过程"}},[t._v("#")]),t._v(" 发展过程")]),t._v(" "),e("h3",{attrs:{id:"flux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flux"}},[t._v("#")]),t._v(" Flux")]),t._v(" "),e("h4",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),e("p",[t._v("解决了MVC模式带来的数据流混乱问题,使用单项数据流")]),t._v(" "),e("h4",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),e("ul",[e("li",[t._v("多个store之间的依赖问题")]),t._v(" "),e("li",[t._v("难以进行服务器渲染（多个store状态不唯一）")]),t._v(" "),e("li",[t._v("store混杂了逻辑和状态")])]),t._v(" "),e("h3",{attrs:{id:"redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),e("p",[t._v("Redux = Reducer + flux")]),t._v(" "),e("p",[t._v("在单项数据流的基础上强调三个原则")]),t._v(" "),e("ul",[e("li",[t._v("唯一数据源 （单一store）")]),t._v(" "),e("li",[t._v("保持状态只读 （通过返回新对象改变状态）")]),t._v(" "),e("li",[t._v("数据改变只能通过纯函数完成 （state, action）=> {...state, [prop]: [preValue] + 1}")])]),t._v(" "),e("h2",{attrs:{id:"推荐文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐文章"}},[t._v("#")]),t._v(" 推荐文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/sunyongjian/blog/issues/36",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sunyongjian/blog/issues/36"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactjs.org/docs/context.html#why-not-to-use-context",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://reactjs.org/docs/context.html#why-not-to-use-context"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关问题"}},[t._v("#")]),t._v(" 相关问题")]),t._v(" "),e("h3",{attrs:{id:"什么时候选用状态管理库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候选用状态管理库"}},[t._v("#")]),t._v(" 什么时候选用状态管理库")]),t._v(" "),e("ul",[e("li",[t._v("便捷实现跨组件通信")]),t._v(" "),e("li",[t._v("系统需要有一个中心可靠数据源")]),t._v(" "),e("li",[t._v("context 不满足的复杂场景")])]),t._v(" "),e("h3",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),e("h4",{attrs:{id:"api-的弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-的弊端"}},[t._v("#")]),t._v(" api 的弊端")]),t._v(" "),e("ul",[e("li",[t._v("仍处于试验阶段")]),t._v(" "),e("li",[t._v("context 定义值发生变更，会重新渲染内部组件")]),t._v(" "),e("li",[t._v("可以通过发布订阅的模式改造")]),t._v(" "),e("li",[t._v("需要谨慎使用，因为这样会让组件的复用性变差")])]),t._v(" "),e("h4",{attrs:{id:"有哪些属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有哪些属性"}},[t._v("#")]),t._v(" 有哪些属性")]),t._v(" "),e("ul",[e("li",[t._v("主要的形式\n"),e("ul",[e("li",[t._v("createContext(value)：创建一个context实例；其中的参数为当前数据的默认值，只有没在Provider中指定value时，才会生效")]),t._v(" "),e("li",[t._v("Context.Provider：生产者，数据提供方；通过value属性来定义需要被传递的数据")]),t._v(" "),e("li",[t._v("Context.Consumer：消费者，数据获取方；根据是函数组件还是class组件，有不同的使用形式；class组件可以指定contextType来确定要使用哪一个context对象的值，函数组件需要使用回调函数的形式来获取context的值；需要显示的指定context对象；")])])])]),t._v(" "),e("h4",{attrs:{id:"consumer向上找不到provider的时候怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consumer向上找不到provider的时候怎么办"}},[t._v("#")]),t._v(" Consumer向上找不到Provider的时候怎么办")]),t._v(" "),e("p",[t._v("找不到会取用默认值，注意provider的value设置为undefined不会覆盖默认值")]),t._v(" "),e("h4",{attrs:{id:"组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[t._v("#")]),t._v(" 组成")]),t._v(" "),e("ul",[e("li",[t._v("store")]),t._v(" "),e("li",[t._v("reducer")]),t._v(" "),e("li",[t._v("state")])])])}),[],!1,null,null,null);r.default=s.exports}}]);