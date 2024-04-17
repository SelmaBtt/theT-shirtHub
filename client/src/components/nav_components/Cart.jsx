import { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContextProvider';
import styles from '../../stylesheets/Cart.module.css'

const Cart = () => {
    const { ordArr, addOrder } = useContext(OrderContext);
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
                            <h1>No orders in your cart yet</h1>
                            {complete && 
                                <h2>Order was successfully made!</h2>
                            }
                        </>
                    ) : (
                        <>
                            <h1>Cart</h1>
                            <div>
                                {ordArr.map((order) => (
                                    <div key={order.productid}>
                                        <h2>{order.title}</h2>
                                        <h2>${order.cost}</h2>
                                        {/* <button onClick={() => { }}>🗑️</button> */}
                                    </div>
                                ))}
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
