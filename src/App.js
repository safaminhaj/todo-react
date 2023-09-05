import React, { useEffect } from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';


function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  // const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
  const [task, setTask] = useState({
    id: "",
    name: "",
    time: ""
  })

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList]);

  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(taskList))
  // }, [taskList])


  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
