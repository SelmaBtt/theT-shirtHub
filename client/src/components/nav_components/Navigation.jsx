import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/Navigation.module.css'
import LogIn from './LogIn';
import CartModal from './CartModal';
import ShowLoggedIn from './ShowLoggedIn';

const Navigation = () => {

    // Account details if youre logged in
    const { accDetails } = useContext(LogInContext);

    return(
        <>
            <ul className={styles.ulForProducts}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
            </ul>

            <ul className={styles.ulForInfo}>
                <li><NavLink to='/'>📞 Contact</NavLink></li>
                <li><NavLink to='/'>ℹ️ About</NavLink></li>
            </ul>

            <div className={styles.searchWrapper}>
                <input type="text" placeholder='Search...' /> {/* PLACEHOLDER */}
                <button>🔍</button>
                {accDetails && accDetails.length > 0 ? (
                    <ShowLoggedIn />
                ) : (
                    <LogIn />
                )}
                <CartModal />
            </div>

        </>
    )
}

export default Navigation;