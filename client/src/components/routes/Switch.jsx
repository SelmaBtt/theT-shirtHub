import { Routes, Route } from 'react-router-dom';
import CreateAccount from '../Post users/CreateAccount';

const Switch = () => {
    return(
        <>
            <Routes>
                <Route path='/sign_up' element={<CreateAccount />}></Route>
            </Routes>
        </>
    )
}

export default Switch;