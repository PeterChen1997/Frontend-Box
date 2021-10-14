export function cacheApis<
    T extends Record<string, (...args: any[]) => Promise<unknown>>
>(apis: T): T {
    // 补充函数实现
    interface Cache {
        req: string;
        res?: { data: any };
        getting: boolean;
        first: any;
    }
    const memoizedMap: {
        [key: string]: {
            caches: Cache[];
        };
    } = {};
    const createCacheApi = (name: string) => {
        return async (...args) => {
            const api = apis[name];
            const map = memoizedMap[name];
            const memoized = map.caches.find(
                ({ req }) => req === JSON.stringify(args)
            );
            if (!memoized) {
                // 第一次请求
                const newMemoized: Cache = {
                    req: JSON.stringify(args),
                    getting: true,
                    first: api(...args),
                };
                map.caches.push(newMemoized);
                const res = await newMemoized.first;
                newMemoized.res = { data: res };
                newMemoized.getting = false;
                return res;
            } else if (!memoized.res) {
                //   第一次请求中，重复请求
                return await memoized.first;
            }
            if (!memoized.getting) {
                //   缓存请求
                memoized.getting = true;
                api(...args)
                    .then((res) => {
                        memoized.res = { data: res };
                    })
                    .finally(() => {
                        memoized.getting = false;
                    });
            }
            return memoized.res.data;
        };
    };
    const cacheObj = Reflect.ownKeys(apis).reduce((result, key) => {
        const name = key as string;
        memoizedMap[name] = { caches: [] };
        result[name] = createCacheApi(name);
        return result;
    }, {} as any);
    return cacheObj;
}
