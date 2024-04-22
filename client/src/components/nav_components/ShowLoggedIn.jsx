import { useContext, useState } from 'react';
import { LogInContext } from '../../context/LogInContextProvider';
import styles from '../../stylesheets/ShowLoggedIn.module.css'
import { PersonFill } from 'react-bootstrap-icons'

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
                        <PersonFill size={24} />
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
