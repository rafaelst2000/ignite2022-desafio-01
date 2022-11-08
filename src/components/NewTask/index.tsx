import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

interface NewTaskProps {
  onCreateNewTask: (newTaskText: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setNewTask('')
    onCreateNewTask(newTask)
  }

  return (
    <form className={styles.newTask}>
      <input
        type="text"
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        required
      />
      <button onClick={handleCreateNewTask} type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}