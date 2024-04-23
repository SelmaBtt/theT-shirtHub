import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/LogIn.module.css'
import { PersonFill, XLg } from 'react-bootstrap-icons'

const LogIn = () => {

    const { logIn, setLogIn, 
        setEmail, setPassword, 
        errorMsg, logInHandler } = useContext(LogInContext);    

    return(
        <>
            <button className={styles.logInBtn} onClick={() => setLogIn(true)}>
                <PersonFill size={24} />Sign in
            </button>

            {logIn &&
                <>
                    <div className={styles.opacityDiv}></div>
                    <div className={styles.logInWrapper}>
                        <div className={styles.modalBtn}>
                            <button onClick={() => setLogIn(false)}>
                                <XLg size={24} />
                            </button>
                        </div>
                        <div className={styles.logInFields}>
                            <h2>Sign in:</h2>
                            <label htmlFor="emailField">Email:</label> <br />
                            <input 
                                className="form-control"
                                id='emailField' 
                                type="text"
                                onChange={(e) => { setEmail(e.target.value) }} 
                            /> <br />
                            <label htmlFor="passwordField">Password:</label> <br />
                            <input 
                                className="form-control"
                                id='passwordField' 
                                type="password" 
                                onChange={(e) => { setPassword(e.target.value) }}
                            /> <br />
                            {(errorMsg && errorMsg.length > 0) && 
                                <p className={styles.errMsg}>{errorMsg}</p>
                            }
                            <button className={styles.signInBtn} onClick={logInHandler}>Sign in</button>
                            <p>
                                Dont have an account? Click <NavLink to='/sign_up' onClick={() => setLogIn(false)}>here</NavLink>
                            </p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default LogIn;