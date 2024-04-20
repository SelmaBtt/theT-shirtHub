import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/LogIn.module.css'

const LogIn = () => {

    const { logIn, setLogIn, 
        setEmail, setPassword, 
        errorMsg, logInHandler } = useContext(LogInContext);    

    return(
        <>
            <button className={styles.logInBtn} onClick={() => setLogIn(true)}>👤 Sign in</button>
            {logIn &&
                <div className={styles.logInWrapper}>
                    <div className={styles.modalBtn}>
                        <button onClick={() => setLogIn(false)}>❌</button>
                    </div>
                    <div className={styles.logInFields}>
                        <h1>Sign in:</h1>
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
                            <p>{errorMsg}</p>
                        }
                        <button onClick={logInHandler}>Sign in</button>
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