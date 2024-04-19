import ShowResponseMsg from './ShowResponseMsg';
import styles from '../../stylesheets/DisplayForm.module.css';


const DisplayForm = ({ 
    fname, setFname, lname, setLname, mail, setMail, password, setPassword,
    emailInput, emailErrMsg, popupMessage, setPopupMessage, errorMessage, createAccBtn 
}) => {
    return(
        <>
            <h1 className={styles.title}>Create your t-shirt hub account</h1>

            <form onSubmit={createAccBtn} className="mb-3">
                <label>First name</label>
                <input 
                    className="form-control"
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
                <label>Last name</label>
                <input 
                    className="form-control"
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                />
                <label>Email address</label> 
                <input 
                    className="form-control"
                    type="email"
                    value={mail}
                    ref={emailInput}
                    onChange={(e) => setMail(e.target.value)}
                    required
                />
                <label>Create password</label> 
                <input 
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button>Create account</button> {/* CHANGE BUTTON STYLING TO A STYLING */}
            </form>

            {/* Success or error response creating account */}
            {popupMessage && <ShowResponseMsg popupMessage={popupMessage} setPopupMessage={setPopupMessage} />}

            {/* Email error */}
            {(errorMessage && emailErrMsg.length > 0) && 
                <p>{emailErrMsg}</p>
            }

            {/* Password errors */}
            {(errorMessage && password.length < 4) &&
                <p>Password needs to be a minimum 4 characters</p>
            }
            {(errorMessage && password.length > 20) &&
                <p>Password can only be a maximum 20 characters</p>
            }
        </>
    )
}

export default DisplayForm;