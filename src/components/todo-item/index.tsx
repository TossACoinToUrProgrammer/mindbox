import React from 'react'

import { ITodoItem } from '../../types'
import styles from './styles.module.scss'

interface TodoItemProps {
    todoItem: ITodoItem,
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ todoItem, removeTodo, toggleTodo }) => {
    return (
        <div className={`${styles.todoItem} ${todoItem.completed ? styles.completed : ''}`}>
            <div className={styles.checkBox} onClick={() => toggleTodo(todoItem.id)}></div>
            <span>{todoItem.text}</span>
            <button className={styles.removeButton} onClick={() => removeTodo(todoItem.id)}></button>
        </div>
    )
}

export default TodoItem