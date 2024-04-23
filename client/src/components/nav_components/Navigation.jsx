import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LogInContext } from '../../context/LogInContextProvider';
import { OrderContext } from '../../context/OrderContextProvider';
import styles from '../../stylesheets/Navigation.module.css'
import LogIn from './LogIn';
import ShowLoggedIn from './ShowLoggedIn';
import SearchInput from '../search/SearchInput';
import { Cart, TelephoneFill, InfoCircleFill } from 'react-bootstrap-icons'

const Navigation = () => {

    // Account details if youre logged in
    const { accDetails } = useContext(LogInContext);
    const { ordArr } = useContext(OrderContext);

    return(
        <>
            <ul className={styles.ulForProducts}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
            </ul>

            <ul className={styles.ulForInfo}>
                <li><NavLink to='/'><TelephoneFill /> Contact</NavLink></li>
                <li><NavLink to='/'> <InfoCircleFill /> About</NavLink></li>
            </ul>

            <div className={styles.searchWrapper}>
                <SearchInput />
                {accDetails && accDetails.length > 0 ? (
                    <ShowLoggedIn />
                ) : (
                    <LogIn />
                )}
                <button className={styles.cartBtn}>
                    <NavLink to='/cart'>
                        <Cart color='white' size={24} />
                        {ordArr.length > 1 &&
                            <p className={styles.cartAmount}>{ordArr.length}</p>
                        }
                    </NavLink>
                </button>
            </div>
            
        </>
    )
}

export default Navigation;