import { Link } from 'react-router-dom';
import { useState } from 'react';

const CartModal = () => {

    const [cartWindow, setCartWindow] = useState(false)

    return(
        <>
            <button onClick={() => setCartWindow(true)}>🛒</button>

            {cartWindow && 
                <div>
                    <div>
                        <button onClick={() => setCartWindow(false)}>❌</button>

                        {/* Put in the orders here */}
                    </div>
                </div>
            }
        </>
    )
}

export default CartModal;