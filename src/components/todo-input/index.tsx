import React, { FormEvent, useRef } from 'react'
import styles from './styles.module.scss'

interface TodoInputProps {
    onSubmit: (text: string) => void,
    onToggle: () => void,
    placeholder: string
}

export const TodoInput: React.FC<TodoInputProps> = ({ placeholder, onSubmit, onToggle }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (inputRef.current) {
            onSubmit(inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    return (
        <div className={styles.inputContainer}>
            <button className={styles.toggleButton} onClick={onToggle}></button>
            <form onSubmit={submitHandler}>
                <input ref={inputRef} type="text" placeholder={placeholder} />
            </form>
        </div>
    )
}
