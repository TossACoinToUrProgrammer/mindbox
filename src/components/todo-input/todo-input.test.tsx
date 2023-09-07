import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { useTodos } from "../../hooks/useTodos"
import { TodoInput } from "."

test("TodoInput works correct", () => {
    const { result } = renderHook(() => useTodos([{ id: 1, text: "test", completed: false }]))
    const { addTodo, toggleAll } = result.current

    const { container } = render(<TodoInput onSubmit={addTodo} onToggle={toggleAll} placeholder="What needs to be done?" />)

    const inputElement = screen.getByPlaceholderText('What needs to be done?')
    const form = container.querySelector('form')

    expect(inputElement).toBeInTheDocument();
    
    // Add todo
    act(() => {
        userEvent.type(inputElement, 'test2')
        fireEvent.submit(form!)
    })
    expect(result.current.todos.some(todo => todo.text === 'test2')).toBe(true);

    // Toggle all
    act(() => {
        userEvent.click(container.querySelector('button')!)
    })

    expect(result.current.todosLeft).toBe(0);
})