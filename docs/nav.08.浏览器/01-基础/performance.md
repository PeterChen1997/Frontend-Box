# performance

## api

![图 6](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/b8c880b9dffa28d5cd5a345616bb985a311e74c5d56556f19427813bc5c608cb.png)  

```js
const timing = window.performance.timing
// DNS查询耗时
timing.domainLookupEnd - timing.domainLookupStart
  
// TCP连接耗时
timing.connectEnd - timing.connectStart
 
// 内容加载耗时
timing.responseEnd - timing.requestStart
// firstbyte：首包时间 
timing.responseStart – timing.domainLookupStart 

// fpt：First Paint Time, 首次渲染时间 / 白屏时间
timing.responseEnd – timing.fetchStart

// tti：Time to Interact，首次可交互时间 
timing.domInteractive – timing.fetchStart

// ready：HTML 加载完成时间，即 DOM 就位的时间
timing.domContentLoaded – timing.fetchStart

// load：页面完全加载时间
timing.loadEventStart – timing.fetchStart
```
