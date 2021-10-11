# web 攻击

我们常见的Web攻击方式有

- XSS (Cross Site Scripting) 跨站脚本攻击
- CSRF（Cross-site request forgery）跨站请求伪造
- SQL注入攻击

- xss
  - XSS的攻击目标是为了盗取存储在客户端的cookie或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互
  - 分类
    - 存储型 - 存入 DB（影响其他用户，如私信）
    - 反射型 - 存在 URL 中
    - DOM 型 - 恶意代码由浏览器执行
  - 预防
    - 存储转义
    - 展示转义
- csrf
  - 伪造用户行为（表单伪造）
  - 预防
    - cookie 同源限制
    - 提交需要额外使用 token 或者双重 cookie
- sql 注入
  - 1 = 1
  - 预防
    - 检查变量类型和格式
    - 过滤和转义

    -
