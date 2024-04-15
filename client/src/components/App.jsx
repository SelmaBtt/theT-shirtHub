import styles from '../stylesheets/App.module.css'
import Navigation from "./nav_components/Navigation"
import Switch from './nav_components/Switch'


function App() {

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <img className={styles.image} src="/logo-512vh.png" alt="the T-shirt store Logo" />
        </div>
        <Navigation />
      </nav>
      <Switch />
    </>
  )
}

export default App
