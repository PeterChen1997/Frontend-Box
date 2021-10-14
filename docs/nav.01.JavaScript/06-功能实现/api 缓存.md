# 实现 api 缓存

```js
/**
 * 缓存一个异步接口对象，里面的每一个异步接口都会被包装为缓存接口
 * - 第一次请求的时候，和调用原异步接口效果一样
 * - 缓存接口根据入参缓存原异步接口返回值
 * - 有缓存值的时候，马上返回缓存值，并发起请求更新缓存值
 * - 对于同样的入参，缓存接口同一时刻，最多只会发起一个请求
 * @param apis 接口对象
 */

type FuncObj = Record<string, (...args: any[]) => Promise<unknown>>;
export function cacheApis<T extends FuncObj>(apis: T): T {
    function wrap(key) {
        // 包装并返回函数

        // cache 通过数组实现，需要保存请求状态和请求结果

        return null;
    }

    // 创建包装对象
    const wrappedFuncObj = Object.assign({}, apis) as T;

    // 遍历传入的函数
    for (let key of Object.keys(wrappedFuncObj) as Array<keyof T>) {
        wrappedFuncObj[key] = wrap(key) as T[keyof T];
    }

    return wrappedFuncObj;
}

/**
 * mock api
 */
const mockApi = (() => {
    let id = 0;
    return async (req: any) => {
        await new Promise((r) => setTimeout(r, 1000));
        return {
            req,
            id: id++,
        };
    };
})();

/**
 * 缓存的接口
 */
const cachedApis = cacheApis({ mockApi });

(async () => {
    console.log(
        await Promise.all([
            cachedApis.mockApi("a"),
            cachedApis.mockApi("b"),
            cachedApis.mockApi("a"),
        ])
    );
    // 一秒钟后输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

    console.log(
        await Promise.all([
            cachedApis.mockApi("a"),
            cachedApis.mockApi("b"),
            cachedApis.mockApi("a"),
        ])
    );
    // 马上输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

    // await new Promise((r) => setTimeout(r, 1000));
    // console.log(
    //     await Promise.all([
    //         cachedApis.mockApi("a"),
    //         cachedApis.mockApi("b"),
    //         cachedApis.mockApi("a"),
    //     ])
    // );
    // 马上输出 [ { req: "a", id: 2 }, { req: "b", id: 3 }, { req: "a", id: 2 } ]
})();

```
