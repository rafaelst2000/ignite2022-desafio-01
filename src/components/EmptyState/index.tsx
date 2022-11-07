import styles from './EmptyState.module.css'
import clipboardImg from '../../assets/Clipboard.png'
export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <img src={clipboardImg} alt="Clipboard icon" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}