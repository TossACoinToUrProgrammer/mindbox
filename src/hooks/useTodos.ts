import { useEffect, useMemo, useState } from "react"
import { FilterTypes, ITodoItem } from "../types"

export const useTodos = (initialTodos: ITodoItem[] = []) => {
  const [todos, setTodos] = useState<ITodoItem[]>(initialTodos)
  const [filteredTodos, setFilteredTodos] = useState<ITodoItem[]>(initialTodos)

  const [activeFilter, setActiveFilter] = useState<FilterTypes>(FilterTypes.ALL)

  const [todosLeft, setTodosLeft] = useState(0)

  useEffect(() => {
    setFilteredTodos(
      todos?.filter((todo) => {
        switch (activeFilter) {
          case FilterTypes.ALL:
            return true

          case FilterTypes.ACTIVE:
            return !todo.completed

          case FilterTypes.COMPLETED:
            return todo.completed
        }
      })
    )
  }, [activeFilter, todos])

  useEffect(() => {
    setTodosLeft(
      todos.reduce((acc, curr) => {
        return curr.completed ? acc : acc + 1
      }, 0)
    )
  }, [todos])

  const addTodo = (text: string) => {
    const todo: ITodoItem = { id: Date.now(), text, completed: false }
    setTodos((prev) => [...prev, todo])
  }

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const setFilter = (filter: FilterTypes) => {
    setActiveFilter(filter)
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const toggleAll = () => {
    console.log('heeeeeeeeeeeereeeee2', todos);
    
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, completed: todosLeft !== 0 }))
    )
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return {
    todos: filteredTodos,
    activeFilter,
    todosLeft,
    addTodo,
    removeTodo,
    setFilter,
    clearCompleted,
    toggleAll,
    toggleTodo,
  }
}
