import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import './global.css'
import { TaskCounter } from './components/TaskCounter'
import { EmptyState } from './components/EmptyState'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <div className={styles.tasksCounterContainer}>
          <TaskCounter type="created" count={0} />
          <TaskCounter type="finished" count={0} />
        </div>

        <div className={styles.content}>
          {/* <EmptyState /> */}
          <Task />
          <Task />
        </div>
      </main>
    </div>
  )
}
