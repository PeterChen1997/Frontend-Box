# SmartX

## 实现一个 timer，可暂停可继续

```tsx
function Timer() {
    const [count, setCount] = useState(0)
    const [timerId, setTimerId] = useState(null)

    const startTimer = () => setTimerId(setInterval(() => {
        setCount((prev) => prev + 1)
    }, 1000))


    const pause = () => {
        clearInterval(timerId)
    }

    const continue = () => {
        startTimer()
    }

    useEffect(() => {
        startTimer()
        return clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>Timer</h1>
            <p>Count: {count}</p>
            <div className="control">
                <button onClick={pause}>Pause</button>
                <button onClick={continue}>Continue</button>
            </div>
        </div>
    )
}
```
