import React from 'react';
import {v1} from 'uuid';
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
    addTask: () => void
    changeCheckboxValue: (id: string, isChecked: boolean) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input type="text" name="" />
            <button onClick={props.addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (<li key={t.id}>
                        <input
                            type="checkbox"
                            id={`checkbox${t.id}`}
                            defaultChecked={t.isDone}
                            onClick={() => {
                                props.changeCheckboxValue(t.id, !t.isDone)
                            }}
                        />
                        <label htmlFor={`checkbox${t.id}`}>{t.title}</label>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>)
                })
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}
