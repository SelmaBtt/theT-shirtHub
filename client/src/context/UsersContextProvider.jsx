import React, { createContext } from 'react';
const UsersContext = createContext();

const UsersContextProvider = (props) => {



    return(
        <UsersContext.Provider value={{}}>
            {props.children}
        </UsersContext.Provider>
    )
}
export default UsersContextProvider;