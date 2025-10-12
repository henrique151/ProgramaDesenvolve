import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    ));
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskInput 
        taskText={newTaskText} 
        onInputChange={handleInputChange} 
        onAddTask={handleAddTask} 
      />
      <TaskList 
        tasks={tasks} 
        onToggleComplete={handleToggleComplete} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
