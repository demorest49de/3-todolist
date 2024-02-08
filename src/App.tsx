import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

// import "./native-js-learning/WhatPurposesObjectCanBeUsedFor"

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const data = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]

    let [tasks, setTasks] = useState(data);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    //functionality
    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function addTask(title: string) {
        const newTask = {id: v1(), title: title, isDone: false};
        const withNew = [newTask, ...tasks];
        setTasks(withNew);
    }

    function changeTaskStatus(id: string, isChecked: boolean) {
        const changedValues = tasks.map(task => task.id === id ? {...task, isDone: isChecked} : task)
        setTasks(changedValues)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeFilter={changeFilter}
                      changeCheckboxValue={changeTaskStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
