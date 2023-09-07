import { act, render, renderHook, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { useTodos } from "../../hooks/useTodos"
import TodoItem from "."
import styles from './styles.module.scss'

test("TodoItem works correct", () => {
    const { result } = renderHook(() => useTodos([{ id: 1, text: "test", completed: true }]))
    const { removeTodo, toggleTodo, todos } = result.current

    const { container } = render(<TodoItem removeTodo={removeTodo} toggleTodo={toggleTodo} todoItem={todos[0]} />)

    expect(screen.getByText('test')).toBeInTheDocument();
    
    // Toggle todo
    act(() => userEvent.click(container.querySelector('.' + styles.checkBox)!))
    expect(result.current.todos.find(todo => todo.id === 1)?.completed).toBe(false);

    // Delete todo
    act(() => userEvent.click(container.querySelector('button')!))
    expect(result.current.todos.length).toBe(0);
})