import React from 'react'

import { useTodos } from '../../hooks/useTodos'
import TodoItem from '../todo-item'
import { TodoInput } from '../todo-input'
import Toolbar from '../toolbar'
import styles from './styles.module.scss'

const TodoContainer = () => {
    const {
        todos,
        addTodo,
        removeTodo,
        clearCompleted,
        todosLeft,
        setFilter,
        toggleTodo,
        toggleAll,
        activeFilter
    } = useTodos()

    return (
        <section className={styles.container}>
            <TodoInput
                placeholder='What needs to be done?'
                onSubmit={addTodo}
                onToggle={toggleAll}
            />

            <div>
                {todos.map(item =>
                    <TodoItem
                        key={item.id}
                        todoItem={item}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                )}
            </div>

            <Toolbar
                activeFilter={activeFilter}
                todosLeft={todosLeft}
                clearCompleted={clearCompleted}
                setFilter={setFilter}
                showClearBtn={todos.length !== todosLeft}
            />
        </section>
    )
}

export default TodoContainer