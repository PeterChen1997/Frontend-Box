# vue-router

## 前端路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

- hash模式 - hashchange
- history模式 - popstate

### Hash模式

触发方式：

- 点击跳转 / 浏览器历史跳转
  - 触发hashchange事件
  - 匹配路由规则进行跳转
- 手动刷新url
  - 发送服务器请求， 但是也不会触发hashchange事件，可通过load事件
  - 匹配路由规则进行跳转

### History模式

- 浏览器动作
  - 触发popstate
  - 包括调用history.back()
- 浏览器跳转
  - 调用pushState
- 手动刷新url
  - 需要后端配合重定向

## 路由注册

对于路由注册来说，核心就是调用 Vue.use(VueRouter)使得 VueRouter 可以使用 Vue。

然后通过 Vue 来调用 VueRouter 的 install 函数。

在该函数中，核心就是给组件 **混入钩子函数** 和 **全局注册两个路由组件**

## 实现嵌套路由

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

```js
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
```

```js

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

## 路由守卫

- 全局钩子
  - beforeEach
    - 在路由跳转前触发，参数包括to,from,next（参数会单独介绍）三个，这个钩子作用主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚
  - beforeResolve
    - 这个钩子和beforeEach类似，也是路由跳转前触发，参数也是to,from,next三个，和beforeEach区别官方解释为：区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
    - 即在 beforeEach 和 组件内beforeRouteEnter 之后，afterEach之前调用。
  - afterEach
    - 他是在路由跳转完成后触发，参数包括to,from没有了next（参数会单独介绍）
    - 他发生在beforeEach和beforeResolve之后，beforeRouteEnter（组件内守卫，后讲）之前
- 独享路有钩子（在配置中设置）
  - beforeEnter
    - 和beforeEach完全相同，如果都设置则在beforeEach之后紧随执行，参数to、from、next
- 组件内守卫
  - beforeRouteEnter (to, from, next)
  - beforeRouteUpdate (to, from, next)
  - beforeRouteLeave (to, from, next)

### 初始化调用顺序

当点击切换路由时：

- beforeRouterLeave
- -->beforeEach
- -->beforeEnter
- -->beforeRouteEnter
- -->beforeResolve
- -->afterEach
- -->beforeCreate-->created-->beforeMount-->mounted
- -->beforeRouteEnter的next的回调
