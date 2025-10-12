import { Todo } from '@/app/types/todo';

const todos: Todo[] = [
  {
    id: 1,
    title: "Aprender API",
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Aprender BD",
    completed: false,
    createdAt: new Date().toISOString()
  }
]

function generateId() {
  return Date.now()
}

export const todosData = {
  getAll: (): Todo[] => {
    return todos;
  },

  getById: (id: number): Todo | undefined => {
    return todos.find(todo => todo.id === id)
  },

  create: (title: string) : Todo => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      completed: false,
      createdAt: new Date().toISOString()
    }

    todos.push(newTodo)

    return newTodo;
  },

  update: (id: number, updates: Partial<Todo>): Todo | null => {
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (todoIndex === -1) {
      return null;
    }

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...updates
    }

    return todos[todoIndex]
  },

  delete: (id: number): boolean => {
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);

    return true;
  }
}