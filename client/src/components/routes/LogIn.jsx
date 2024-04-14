import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../stylesheets/LogIn.module.css'

const LogIn = () => {

    const [logIn, setLogIn] = useState(false)

    return(
        <>
            <button onClick={() => setLogIn(true)}>👤 Sign in</button>
            {logIn &&
                <div className={styles.logInWrapper}>
                    <div className={styles.modalBtn}>
                        <button onClick={() => setLogIn(false)}>❌</button>
                    </div>
                    <div className={styles.logInFields}>
                        <h1>Sign in:</h1>
                        <label htmlFor="emailField">Email:</label> <br />
                        <input id='emailField' type="text" /> <br />
                        <label htmlFor="passwordField">Password:</label> <br />
                        <input id='passwordField' type="text" /> <br />
                        <p>
                            Dont have an account? Click <NavLink to='/sign_up' onClick={() => setLogIn(false)}>here</NavLink>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default LogIn;