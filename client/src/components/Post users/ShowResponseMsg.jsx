import { useEffect } from "react";

const ShowResponseMsg = ({ popupMessage, setPopupMessage }) => {
    useEffect(() => {
        const timerForPopup = setTimeout(() => {
            setPopupMessage(false)
        }, 2000);
        return () => clearTimeout(timerForPopup);
    }, [popupMessage])

    return(
        <>
            <p>Successfully created your account!</p>
        </>
    )
}

export default ShowResponseMsg;