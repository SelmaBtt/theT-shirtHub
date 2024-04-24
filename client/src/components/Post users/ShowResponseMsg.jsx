import { useEffect } from "react";
import styles from '../../stylesheets/DisplayForm.module.css'

const ShowResponseMsg = ({ popupMessage, setPopupMessage }) => {
    useEffect(() => {
        const timerForPopup = setTimeout(() => {
            setPopupMessage(false)
        }, 2000);
        return () => clearTimeout(timerForPopup);
    }, [popupMessage])

    return(
        <>
            <div className={styles.successWrapper}>
                <div class="alert alert-success" role="alert">
                    Successfully created your account
                </div>
            </div>
        </>
    )
}

export default ShowResponseMsg;