import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/Navigation.module.css'

const Navigation = () => {
    return(
        <ul className={styles.ulWrapper}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Products</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
      </ul>
    )
}

export default Navigation;