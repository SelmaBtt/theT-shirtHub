import styles from '../stylesheets/App.module.css'
import Navigation from "./Navigation"


function App() {

  return (
    <nav className={styles.navWrapper}>
      <div>
        <img className={styles.image} src="/logo-512vh.png" alt="the T-shirt store Logo" />
      </div>
      <Navigation />
    </nav>
  )
}

export default App
