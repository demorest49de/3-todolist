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
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    //hook
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null)

    //function
    const addTask = () => {
        const trimmed = title.trim();
        if (trimmed !== "") {
            props.addTask(trimmed)
            setTitle('');
        } else {
            setError('Title is required')
        }
    }


    //handler
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(' event: ', event);
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

                    const onCheckboxClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
                        props.changeCheckboxValue(t.id, e.currentTarget.checked)
                    }

                    const onRemoveTaskClickHandler = () => {
                        props.removeTask(t.id)
                    }

                    return (
                        <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input
                            type="checkbox"
                            id={`checkbox${t.id}`}
                            defaultChecked={t.isDone}
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
            <button onClick={onAllClickHandler}
                    className={props.filter === 'all' ? "active-filter" : ""}
            >
                All
            </button>
            <button onClick={onActiveClickHandler}

                    className={props.filter === 'active' ? "active-filter" : ""}
            >
                Active
            </button>
            <button onClick={onCompleteClickHandler}

                    className={props.filter === 'completed' ? "active-filter" : ""}
            >
                Completed
            </button>
        </div>
    </div>
}