import { act, renderHook } from "@testing-library/react"
import { useTodos } from "./useTodos"

test("adds todo", () => {
  const { result } = renderHook(() => useTodos())

  act(() => result.current.addTodo("test"))

  expect(result.current.todos.length).toBe(1)
})

test("removes todo", () => {
  const { result } = renderHook(() =>
    useTodos([{ id: 1, text: "test", completed: false }])
  )

  act(() => result.current.removeTodo(1))

  expect(result.current.todos.length).toBe(0)
})

test("toggles all todos", () => {
  const { result } = renderHook(() =>
    useTodos([
      { id: 1, text: "test", completed: true },
      { id: 2, text: "test2", completed: true },
      { id: 3, text: "test3", completed: false },
    ])
  )

  act(() => result.current.toggleAll())

  expect(result.current.todos.some((todo) => !todo.completed)).toBe(false)
})

test("toggles todo", () => {
  const { result } = renderHook(() =>
    useTodos([{ id: 1, text: "test", completed: true }])
  )

  act(() => result.current.toggleTodo(1))

  expect(result.current.todos.find((todo) => todo.id === 1)?.completed).toBe(false)
})
