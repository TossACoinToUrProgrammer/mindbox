import React from 'react'

import { FilterTypes } from '../../types'
import styles from './styles.module.scss'
import cn from 'classnames'

interface ToolbarProps {
    clearCompleted: () => void,
    setFilter: (filter: FilterTypes) => void,
    todosLeft: number,
    activeFilter: FilterTypes,
    showClearBtn: boolean
}

const Toolbar: React.FC<ToolbarProps> = ({ clearCompleted, setFilter, todosLeft, activeFilter, showClearBtn }) => {
    return (
        <div className={styles.toolbar}>
            <span>{todosLeft} items left</span>
            <div className={styles.filters}>
                {Object.values(FilterTypes).map(filter => (
                    <button
                        key={filter}
                        className={cn(activeFilter === filter && styles.activeFilter)}
                        onClick={() => setFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <button
                className={cn(styles.clearButton, showClearBtn && styles.visible)}
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </div>
    )
}

export default Toolbar