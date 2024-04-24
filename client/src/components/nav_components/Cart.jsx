import { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContextProvider';
import styles from '../../stylesheets/Cart.module.css'

const Cart = () => {
    const { ordArr, totalSum, addOrder } = useContext(OrderContext);
    const [loading, setLoading] = useState(false);
    const [complete, setComplete] = useState(false);

    const loadingSimulation = () => {
        setLoading(true);
        setComplete(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {ordArr && ordArr.length < 1 ? (
                        <>
                            <h1 className={styles.title}>No orders in your cart yet</h1>
                            {complete && 
                                <h2 className={styles.title}>Order was successfully made!</h2>
                            }
                        </>
                    ) : (
                        <>
                            <h1 className={styles.title}>Cart</h1>
                            <div className={styles.allOrders}>
                                {ordArr.map((order) => (
                                    <div key={order.productid} className={styles.order}>
                                        <h4>{order.title}</h4>
                                        <p>${order.cost}</p>
                                        {/* <button onClick={() => { }}>🗑️</button> */}
                                    </div>
                                ))}
                                <hr />
                                <h3>Total:</h3>
                                <h3 className={styles.sum}>${totalSum}</h3>
                                <button onClick={() => { addOrder(); loadingSimulation() }}>Check out</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Cart;
