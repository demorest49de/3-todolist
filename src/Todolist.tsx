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
    //data
    const fAll: FilterValuesType = "all";
    const fActive: FilterValuesType = "active";
    const fCompleted: FilterValuesType = "completed";

    const filters = {
        all: fAll,
        active: fActive,
        completed: fCompleted
    }

    //hook
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null)

    //function
    const addTask = () => {
        debugger

        const trimmed = title.trim();
        if (trimmed !== "") {
            props.addTask(trimmed)
            return setTitle('');
        }

        setError('Title is required')
    }


    //handler
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

        setError(null)
        console.log(' title.trim().length: ', title.trim().length);
        if (title.trim().length > 10) {
            debugger
            return setError('Total length should less 15 letters')
        }

        if (!error && event.key === 'Enter') {
            addTask()
        }
    }

    const onClickHandler = (status: FilterValuesType) => {
        props.changeFilter(status)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={() => {
                !error && addTask()
            }}>+
            </button>
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
            <button title={filters.all} onClick={() => onClickHandler(filters.all)}
                    className={props.filter === 'all' ? "active-filter" : ""}
            >
                All
            </button>
            <button title={filters.active} onClick={() => onClickHandler(filters.active)}

                    className={props.filter === 'active' ? "active-filter" : ""}
            >
                Active
            </button>
            <button title={filters.completed} onClick={() => onClickHandler(filters.completed)}

                    className={props.filter === 'completed' ? "active-filter" : ""}
            >
                Completed
            </button>
        </div>
    </div>
}