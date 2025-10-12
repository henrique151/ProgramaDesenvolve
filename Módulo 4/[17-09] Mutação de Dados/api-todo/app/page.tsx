'use client'

import { useState } from "react";
import { Todo } from "./types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null)

  const fetchTodos = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/todos")
      const result = await response.json()

      if (result.success) {
        setTodos(result.data)
      } else {
        setError(result.error)
      }
    } catch(error) {
      setError("Error do servidor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchTodos}>Teste</button>
    </div>
  );
}
