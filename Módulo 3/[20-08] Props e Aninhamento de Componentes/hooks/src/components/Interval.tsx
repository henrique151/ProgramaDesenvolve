import { useEffect, useState } from "react";

export default function Interval() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Iniciando o timer...')
        
        const interval = setInterval(() => {
            console.log('Aqui')
            setCount((prev) => prev + 1)
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return <h1>Contagem: {count}</h1>
}