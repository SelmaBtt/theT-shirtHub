import React, { createContext, useState } from 'react';

export const LogInContext = createContext();

const LogInContextProvider = (props) => {

    // To open and close modal log in window useState
    const [logIn, setLogIn] = useState(false)

    // UseState for log in values
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // UseState for error message
    const [errorMsg, setErrorMsg] = useState("")

    // UseState for fetch data result
    const [accDetails, setAccDetails] = useState([])

    const logInHandler = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/logIn`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    mail: email,
                    password: password
                })
            });
            let data = await response.json();
            if (!response.ok) {
                throw new Error();
            }
            if (data.message) {
                setErrorMsg(data.message);
            } else {
                setLogIn(false)
                setErrorMsg("")
                setAccDetails(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <LogInContext.Provider value={{ 
            logIn, setLogIn,
            accDetails,
            setEmail, 
            setPassword, 
            errorMsg,
            logInHandler
        }}>
            {props.children}
        </LogInContext.Provider>
    )
}
export default LogInContextProvider;