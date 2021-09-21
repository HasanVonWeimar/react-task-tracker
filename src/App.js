import React from 'react'
import reactDom from 'react-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)  //hide the add task form by default

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Read a book',
      day: 'Monday',
      reminder: false
    },
    {
      id: 2,
      text: 'Plant trees',
      day: 'Thursday',
      reminder: true
    },
    {
      id: 3,
      text: 'Take a rest',
      day: 'Friday',
      reminder: false
    }
  ])

  // the states are stored above

  // add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task

  const deleteTask = (id) => {
    
    setTasks(tasks.filter((task) => task.id !== id))

  }

  //Toogle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => 
        setShowAddTask(!showAddTask)} /* prop onAdd is sent to header to be used in the button, to set the state of adding a task */
        showAdd = {showAddTask}/>     {/* prop showAdd sets the style and text of the button */}

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}/>)
        : ('no tasks')}
    </div>
  );
}

/* class App extends React.Component {

  render(){
    return <h1>Hello from (class)</h1>
  }
} */

export default App;
