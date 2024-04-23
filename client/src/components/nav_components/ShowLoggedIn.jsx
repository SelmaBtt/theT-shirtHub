import { useContext, useState } from 'react';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/ShowLoggedIn.module.css'
import { PersonFill } from 'react-bootstrap-icons'

const ShowLoggedIn = () => {
    const { accDetails } = useContext(LogInContext);

    return (
        <>
            {accDetails.map((acc, idx) => (
                <div key={idx}>
                    <button
                        className={styles.displayNameBtn}
                        onMouseEnter={() => setHidden(true)}
                        onMouseLeave={() => setHidden(false)}
                    >
                        <PersonFill size={24} />
                        {acc.fname}
                    </button>
                </div>
            ))}
        </>
    );
};

export default ShowLoggedIn;
