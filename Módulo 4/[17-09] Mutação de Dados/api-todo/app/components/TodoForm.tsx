'use client'

import { useState } from "react"

interface TodoFormProps {
    onSubmit: (title: string) => string;
    isLoading?: boolean
}

export default function TodoForm({ onSubmit, isLoading}: TodoFormProps) {
    const [title, setTitle] = useState("");

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault()

        onSubmit(title);
        setTitle("")
    }

    return (
        <form onSubmit={handleSumbit}>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <button type="submit" disabled={isLoading}>
                Adicionar
            </button>
        </form>
    )
}