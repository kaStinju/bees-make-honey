import './App.css';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import PomoTimer from './components/Pomotimer';


function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <h1>Pomo</h1>
      <PomoTimer />

      <h1>Tasks</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      {tasks.map(task => <p key={task.id}>{task.name}{task.estimatedPomos}</p>)}
    </div>
  );
}

export default App;