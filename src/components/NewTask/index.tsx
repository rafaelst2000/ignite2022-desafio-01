import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <form className={styles.newTask}>
      <input
        type="text"
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}