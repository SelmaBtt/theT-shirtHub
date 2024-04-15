import { useContext, useState } from 'react';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/ShowLoggedIn.module.css'

const ShowLoggedIn = () => {
    const { accDetails } = useContext(LogInContext);
    const [hidden, setHidden] = useState(false);

    return (
        <>
            {accDetails.map((acc, idx) => (
                <div key={idx}>
                    <button
                        onMouseEnter={() => setHidden(true)}
                        onMouseLeave={() => setHidden(false)}
                    >
                        <p>{acc.fname}</p>
                    </button>
                    {hidden && 
                        <div className={styles.popUpWindow}>
                            <p>Hello {acc.fname} {acc.lname}</p>
                        </div>
                    }
                </div>
            ))}
        </>
    );
};

export default ShowLoggedIn;
