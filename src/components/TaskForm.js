import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const TaskForm = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState('')
  const [estimatedPomos, setEstimatedPomos] = useState(1)

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTasks(tasks.concat({
      name: taskName,
      estimatedPomos: estimatedPomos,
      id: uuidv4()
    }))
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(!visible)}>new task</button>
      </div>
      <div style={showWhenVisible}>
        <form onSubmit={handleSubmit}>
          <label>
            Name of task:
            <input
              name="task-name"
              type="text"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </label>
          <label>
            Estimated Pomodoros
            <input
              name="est-pomodoros"
              type="number"
              value={estimatedPomos}
              onChange={(event) => setEstimatedPomos(event.target.value)}
            />
          </label>
          <button type='button'
            onClick={() => { setEstimatedPomos(estimatedPomos + 1) }}>
            +1
          </button>
          <button type='button'
            onClick={() => { setEstimatedPomos(estimatedPomos - 1) }}>
            -1
          </button>
          <button type='submit'>submit</button>
        </form>
        <button onClick={() => setVisible(!visible)}>hide</button>
      </div>
    </div>
  )
}

export default TaskForm;