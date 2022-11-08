import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskCounter } from './components/TaskCounter'
import { EmptyState } from './components/EmptyState'
import { Task, ITask } from './components/Task'

import styles from './App.module.css'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const finishedTasksCount = tasks.filter(task => task.isFinished).length

  function handleCreateNewTask(newTaskText: string) {
    const id = ''+(new Date()).getTime()
    const newTask = {
      id,
      isFinished: false,
      description: newTaskText,
    }
    setTasks([...tasks, newTask])
    saveTasksAtLocalStorage([...tasks, newTask])
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutTheDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutTheDeletedOne)
    saveTasksAtLocalStorage(tasksWithoutTheDeletedOne)
  }

  function handleToggleTaskFinished(taskId: string) {
    const tasksWithToggledOne = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isFinished:!task.isFinished
        }
      }
      return task
    })
    setTasks(tasksWithToggledOne)
    saveTasksAtLocalStorage(tasksWithToggledOne)
  }

  function saveTasksAtLocalStorage(newTasksToSave: ITask[]) {
    const tasksToSave = JSON.stringify(newTasksToSave)
    window.localStorage.setItem('my-tasks', tasksToSave)
  }

  useEffect(() => {
    const myTasks = window.localStorage.getItem('my-tasks');
    if (myTasks) {
      const savedTasks = JSON.parse(myTasks)
      if(savedTasks && savedTasks.length > 0) setTasks(savedTasks)
    }
  }, [])

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onCreateNewTask={handleCreateNewTask}/>
        <div className={styles.tasksCounterContainer}>
          <TaskCounter
            type="created" 
            count={tasks.length} 
          />
          <TaskCounter
            type="finished"
            count={finishedTasksCount}
            total={tasks.length}
          />
        </div>

        <div className={styles.content}>
          {
          tasks.length >= 1 ?
            tasks.map(task => (
              <Task 
                key={task.id}
                id={task.id} 
                description={task.description} 
                isFinished={task.isFinished}
                onDeleteTask={handleDeleteTask} 
                onToggleTaskFinished={handleToggleTaskFinished}
              />
            ))
          : <EmptyState />      
          } 
        </div>
      </main>
    </div>
  )
}
