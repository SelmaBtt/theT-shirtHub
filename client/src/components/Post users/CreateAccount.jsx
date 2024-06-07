import { useState, useRef, useEffect } from 'react';
import validator from "validator";
import DisplayForm from './DisplayForm';

const CreateAccount = () => {

    // useStates for form field
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    // Hooks for invalid email
    const emailInput = useRef()
    const [emailErrMsg, setEmailErrMsg] = useState("")

    // useState for success or error creating acc
    const [popupMessage, setPopupMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const createAccBtn = async(e) => {
        e.preventDefault();
        try {
            setErrorMessage(false)
            const response = await fetch('https://the-tshirt-hub.up.railway.app/users', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    fname: fname,
                    lname: lname,
                    mail: mail,
                    password: password,
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

    // Check if Email is valid
    useEffect(() => {
        if (!validator.isEmail(emailInput.current.value)) {
            setEmailErrMsg("Please enter a valid Email");
        } else(
            setEmailErrMsg("")
        )
    }, [mail])

    return(
        <>
            <DisplayForm
                fname={fname} setFname={setFname}
                lname={lname} setLname={setLname}
                mail={mail} setMail={setMail}
                password={password} setPassword={setPassword}
                emailInput={emailInput} emailErrMsg={emailErrMsg}
                popupMessage={popupMessage} setPopupMessage={setPopupMessage}
                errorMessage={errorMessage} createAccBtn={createAccBtn}
            />
        </>
    )
}

export default CreateAccount;