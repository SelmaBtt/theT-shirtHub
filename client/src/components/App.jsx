import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/App.module.css'


function App() {

  return (
    <nav className={styles.navWrapper}>
      <div>
        <img className={styles.image} src="/logo-512vh.png" alt="the T-shirt store Logo" />
      </div>
      <ul className={styles.ulWrapper}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Products</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default App
