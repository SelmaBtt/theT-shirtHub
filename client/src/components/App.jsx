import 'vite/modulepreload-polyfill'
import { Link } from 'react-router-dom';
import styles from '../stylesheets/App.module.css'
import Navigation from "./nav_components/Navigation"
import Switch from './nav_components/Switch'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.imgWrapper}>
          <Link to="/">
            <img className={styles.image} src="/logo-512vh.png" alt="the T-shirt store Logo" />
          </Link>
        </div>
        <Navigation />
      </nav>
      <Switch />
    </>
  )
}

export default App
