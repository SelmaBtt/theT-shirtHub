import { useContext } from 'react';
import { LogInContext } from '../context/LogInContextProvider';
import SearchInput from './search/SearchInput';
import { Link } from 'react-router-dom';
import {ArrowRightShort} from 'react-bootstrap-icons'
import styles from '../stylesheets/Home.module.css'

const Home = () => {
    const { accDetails } = useContext(LogInContext)

    return(
        <>
            <div className={styles.welcomeWrapper}>
                {(accDetails && accDetails.length > 0) ? (
                        accDetails.map((item, idx) => (
                            <h1 key={idx} className={styles.title}>
                                Hello {item.fname} {item.lname}
                            </h1>
                        ))
                ) : (
                    <h1 className={styles.title}>
                        Welcome to <span className={styles.mainFont}>the T-shirt hub</span>
                    </h1>
                )}
                <div className={styles.bgIcon}>
                    <img src="/favicon-512x512.png" alt="" />
                </div>
                <div className={styles.searchContainer}>
                    <SearchInput />
                </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.checkoutWrapper}>
                <h2>
                    <Link to={`/products`}>
                        Check out our products <ArrowRightShort />
                    </Link>
                </h2>
            </div>
        </>
    )
}

export default Home;