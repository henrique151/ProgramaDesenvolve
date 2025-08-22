import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `${count}`
    }, [count])

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    function handleRest() {
        setCount(0);
    }

    return (
        <>
        <span>Timer: {count}</span>
        <button onClick={handleIncrement}>
            +
        </button>
        <button onClick={handleDecrement}>
            -
        </button>
        <button onClick={handleRest}>
            Reset
        </button>
        </>
    )

}