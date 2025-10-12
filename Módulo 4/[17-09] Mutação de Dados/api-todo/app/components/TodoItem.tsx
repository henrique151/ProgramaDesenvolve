'use client'
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    isLoading: boolean;
}

export default function TodoItem({
    todo,
    onToggle,
    onDelete,
    isLoading
}: TodoItemProps) {
    return (
        <div>
            <button onClick={() => onToggle(todo.id)}>
                Completar
            </button>
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)} disabled={isLoading}>
                Excluir
            </button>
        </div>
    )
}