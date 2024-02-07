import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeCheckboxValue: (id: string, isChecked: boolean) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        const trimmed = title.trim();
        if (trimmed !== '') {
            props.addTask(trimmed)
            setTitle('');
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addTask()
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompleteClickHandler = () => {
        props.changeFilter("completed")
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className='error-message'>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onCheckboxClickHandler = () => {
                        props.changeCheckboxValue(t.id, !t.isDone)
                    }

                    const onRemoveTaskClickHandler = () => {
                        props.removeTask(t.id)
                    }

                    return (<li key={t.id}>
                        <input
                            type="checkbox"
                            id={`checkbox${t.id}`}
                            checked={t.isDone}
                            onClick={onCheckboxClickHandler}
                        />
                        <label htmlFor={`checkbox${t.id}`}>{t.title}</label>
                        <button onClick={onRemoveTaskClickHandler}>x
                        </button>
                    </li>)
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>
                All
            </button>
            <button onClick={onActiveClickHandler}>
                Active
            </button>
            <button onClick={onCompleteClickHandler}>
                Completed
            </button>
        </div>
    </div>
}