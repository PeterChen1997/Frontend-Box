(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{508:function(t,v,_){"use strict";_.r(v);var r=_(29),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"线程-进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程-进程"}},[t._v("#")]),t._v(" 线程 / 进程")]),t._v(" "),_("ul",[_("li",[t._v("操作系统中最核心的概念就是进程，进程是对正在运行中的程序的一个抽象，是系统进行资源分配和调度的基本单位")]),t._v(" "),_("li",[t._v("线程（thread）是操作系统能够进行运算调度的最小单位，其是进程中的一个执行任务（控制单元），负责当前进程中程序的执行")])]),t._v(" "),_("h2",{attrs:{id:"区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),_("ul",[_("li",[t._v("本质区别：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位")]),t._v(" "),_("li",[t._v("在开销方面：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小")]),t._v(" "),_("li",[t._v("所处环境：在操作系统中能同时运行多个进程（程序）；而在同一个进程（程序）中有多个线程同时执行（通过CPU调度，在每个时间片中只有一个线程执行）")]),t._v(" "),_("li",[t._v("内存分配方面：系统在运行的时候会为每个进程分配不同的内存空间；而对线程而言，除了CPU外，系统不会为线程分配内存（线程所使用的资源来自其所属进程的资源），线程组之间只能共享资源")]),t._v(" "),_("li",[t._v("包含关系：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程")])]),t._v(" "),_("h2",{attrs:{id:"资源占用情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资源占用情况"}},[t._v("#")]),t._v(" 资源占用情况")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("进程占有的资源")]),t._v(" "),_("th",[t._v("线程占有的资源")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("地址空间")]),t._v(" "),_("td",[t._v("栈")])]),t._v(" "),_("tr",[_("td",[t._v("全局变量")]),t._v(" "),_("td",[t._v("寄存器")])]),t._v(" "),_("tr",[_("td",[t._v("打开的文件")]),t._v(" "),_("td",[t._v("状态")])]),t._v(" "),_("tr",[_("td",[t._v("子进程")]),t._v(" "),_("td",[t._v("程序计数器")])]),t._v(" "),_("tr",[_("td",[t._v("信号量")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("账户信息")]),t._v(" "),_("td")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);