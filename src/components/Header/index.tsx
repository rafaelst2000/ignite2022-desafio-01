import styles from './Header.module.css'
import logoImg from '../../assets/Logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Todo list logo" />
    </header>
  )
}