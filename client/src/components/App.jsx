import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/App.module.css'
import Navigation from "./routes/Navigation"
import Switch from './routes/Switch'


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
