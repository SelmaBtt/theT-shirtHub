import { NavLink } from 'react-router-dom';
import styles from '../../stylesheets/Navigation.module.css'
import LogIn from './LogIn';

const Navigation = () => {
    return(
        <>
            <ul className={styles.ulForProducts}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/'>Products</NavLink></li>
            </ul>
            <ul className={styles.ulForInfo}>
                <li><NavLink to='/'>📞 Contact</NavLink></li>
                <li><NavLink to='/'>ℹ️ About</NavLink></li>
            </ul>
            <div className={styles.searchWrapper}>
                <input type="text" /> {/* PLACEHOLDER */}
                <button>🔍</button>
                <LogIn />
            </div>

        </>
    )
}

export default Navigation;