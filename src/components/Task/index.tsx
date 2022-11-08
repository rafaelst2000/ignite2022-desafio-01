import styles from './Task.module.css'
import { Check, Trash } from 'phosphor-react'

interface TaskProps extends ITask{
  onDeleteTask: (taskId: string) => void
  onToggleTaskFinished: (taskId: string) => void
}

export interface ITask {
  id: string
  description: string
  isFinished: boolean
}

export function Task({ id, description, onDeleteTask, isFinished, onToggleTaskFinished }: TaskProps) {
  return (
    <div className={styles.task}>
      <button onClick={() => onToggleTaskFinished(id)} className={styles.checkContainer}>
        {
          isFinished 
          ? 
            <div className={styles.isFinished }>
              <Check size={14} />
            </div>
          :
            <div className={styles.notFinished} />
        }
        
      </button>

      <p className={isFinished ? styles.finishedTask : ''}>{description}</p>

      <button onClick={() => onDeleteTask(id)} className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}