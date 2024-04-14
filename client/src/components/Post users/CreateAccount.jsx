import { useState } from 'react';
import styles from '../../stylesheets/CreateAccount.module.css';
import ShowResponseMsg from './ShowResponseMsg';

const CreateAccount = () => {

    // useStates for form
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState(0)
    const [mail, setMail] = useState("")

    // useState for popup window
    const [popupMessage, setPopupMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const createAccBtn = async(e) => {
        e.preventDefault();
        try {
            setErrorMessage(false)
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    fname: fname,
                    lname: lname,
                    age: age,
                    mail: mail,
                })
            })
            if (response.ok) {
                setPopupMessage(true)
            } else {
                throw new Error('Error creating account');
            }
        } catch (error) {
            setErrorMessage(true)
            console.log(error);
        }
    }

    return(
        <>
            <h1 className={styles.title}>Create your t-shirt hub account</h1>

            <form onSubmit={createAccBtn} className={styles.formWrapper}>
                <label>First name</label>
                <input 
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
                <label>Last name</label>
                <input 
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                />
                <label>Age</label>
                <input 
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <label>Email address</label> 
                <input 
                    type="text"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                />
                <button>Create account</button> {/* CHANGE BUTTON STYLING TO A STYLING */}
            </form>

            {/* Success or error response creating account */}
            {popupMessage && <ShowResponseMsg popupMessage={popupMessage} setPopupMessage={setPopupMessage} />}
            {errorMessage && 
                <p>Problem creating account. Try again</p>
            }
        </>
    )
}

export default CreateAccount;