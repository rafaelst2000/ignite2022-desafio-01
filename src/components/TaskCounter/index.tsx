import styles from './TaskCounter.module.css'

interface TaskCounterProps {
  type: 'created' | 'finished'
  count: number
  total?: number
}

export function TaskCounter({ type, count = 0, total = 0 }: TaskCounterProps) {
  const taskCounterLabel = type === 'created' ? 'Tarefas criadas' : 'Concluídas'
  const taskCounterLabelClassName = type === 'created' ? styles.taskCounterCreated : styles.taskCounterFinished
  const taskCounterChip = type === 'created' ? count : `${count} de ${total}`

  return (
    <div className={styles.taskCounter}>
      <strong className={taskCounterLabelClassName}>{taskCounterLabel}</strong>
      <span>{taskCounterChip}</span>
    </div>
  )
}