# BOM (Browser Object Model)

- window
- location
- navigator
- screen
- history

和 DOM 的区别

![图 13](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/b349a6327a9610c9c9618e6ac61816d26694aa4253635581750beb9064c71e0a.png)  

## window对象

在浏览器中，window对象有双重角色，即是浏览器窗口的一个接口，又是全局对象

如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。

<http://www.w3school.com.cn/jsref/dom_obj_window.asp>

## navigator对象

Navigator 对象包含有关浏览器的信息。

![图 14](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/e4746b0b675c66e1eb17d05f1633650314879a99a044440f86b27641c63f4c85.png)  

## Screen 对象

Screen 对象包含有关客户端显示屏幕的信息。

![图 15](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/12b51c5c102eb4389291c6494404cb3c011ad865e967b0ed70af7e47e8dd734c.png)  

## History 对象

History 对象包含用户（在浏览器窗口中）访问过的 URL。

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

- history.go()
  - 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，
  - history.go('maixaofei.com')
  - 当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面
- history.go(3) //向前跳转三个记录
- history.go(-1) //向后跳转一个记录
- history.forward()：向前跳转一个页面
- history.back()：向后跳转一个页面
- history.length：获取历史记录数

## Location 对象

Location 对象包含有关当前 URL 的信息。

Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。

`location`属性描述如下：

| 属性名   | 例子                                                     | 说明                                |
| -------- | -------------------------------------------------------- | ----------------------------------- |
| hash     | "#contents"                                              | utl中#后面的字符，没有则返回空串    |
| host     | www.wrox.com:80                                          | 服务器名称和端口号                  |
| hostname | www.wrox.com                                             | 域名，不带端口号                    |
| href     | <http://www.wrox.com:80/WileyCDA/?q=javascript#contents> | 完整url                             |
| pathname | "/WileyCDA/"                                             | 服务器下面的文件路径                |
| port     | 80                                                       | url的端口号，没有则为空             |
| protocol | http:                                                    | 使用的协议                          |
| search   | ?q=javascript                                            | url的查询字符串，通常为？后面的内容 |
