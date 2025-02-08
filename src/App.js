import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Achievements from './components/Achievements';
import Motivation from './components/Motivation';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [motivationalMessage, setMotivationalMessage] = useState("");

  const motivationalQuotes = [
    "Believe in yourself and all that you are!",
    "Every day is a chance to get better!",
    "Your goals are closer than you think!",
  ];

  useEffect(() => {
    if (motivationalQuotes && motivationalQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      setMotivationalMessage(motivationalQuotes[randomIndex]);
    }
  }, [motivationalQuotes]);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="app-container">
      <Header />
      <Motivation message={motivationalMessage} />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
      <Achievements tasks={tasks} />
    </div>
  );
}


export default App;
