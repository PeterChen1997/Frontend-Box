# Angular

## 脏检测

Angular 采用“脏值检测”的方式

- 数据发生变更后，对于所有的数据和视图的绑定关系进行一次检测，识别是否有数据发生了改变
- 有变化进行处理，可能进一步引发其他数据的改变，所以这个过程可能会循环几次
- 一直到不再有数据变化发生后，将变更的数据发送到视图，更新页面展现

可以试用 `runWithoutChangeDetection` 避开脏检测

这些操作会触发脏检测

- DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- XHR响应事件 ( $http )
- 浏览器Location变更事件 ( $location )
- Timer事件( interval )
- 执行 apply()

### 变更检测策略

- OnPush
  - 这种更改检测策略可以 **跳过对此组件及其所有子组件的不必要检查**
  - 使用此策略，Angular知道仅在以下情况下才需要更新组件：
    - 输入属性已更改, 标记为@Input() 的属性；
    - 该组件或其子组件之一触发事件处理程序
    - 手动触发变化检测
    - 通过异步管道链接到模板的可观察对象发出新值， 如 data | async
- Default
  - 每当事件触发更改检测（例如用户事件，计时器，XHR，promise等）时，此默认策略都会从上到下检查组件树中的每个组件。这种不对组件的依赖项做任何假设的保守检查方法称为脏检查。它可能会对包含许多组件的大型应用程序的性能产生负面影响。

### 脏检测原理

- $watch
  - 渲染初始化时，通过 $watch 绑定变量
- $digest
  - 用户执行操作后，NG 会调用 $digest 触发遍历递归
  - 判断 watchers 里面记录的那些 $scope属性是否有变化
  - 根据objectEquality进行新老值的对比
  - 当有变化的时候，dirty被设置为true，在 $digest执行结束的时候，它会再检查dirty，如果dirty为true，它会再调用自己，直到dirty为true
  - 但是为了防止死循环，angular规定，当递归发生了10次或以上时，直接抛出一个错误，并跳出循环
- $apply
  - 手动触发 digest

## 生命周期

![图 4](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/7996f71ac9561a8f960783cd2d47384d1da95f6a8ac09b6270470ddf0194646b.png)  

- ngOnChanges
- ngOnInit
- ngDoCheck
- Render
- ngAfterViewInit
- ngAfterViewChecked

## 常见问题

### key 在 ng 中较 trackBy

## 优缺点

### 优点

- 代码一致性较高
- 依赖注入很方便
- async pipe 很方便

### 缺点

- 版本迭代问题
- 上手成本问题
  - rxjs
    - subject
    - observable
    - subscribe
    - ...
  - typescript
  - 内部概念
    - module
    - DI
    - ...
- debug 成本高
- vscode ide 支持较差
