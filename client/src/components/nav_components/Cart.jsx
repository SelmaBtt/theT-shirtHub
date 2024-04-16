// CartModal.jsx
import { useContext, useEffect } from 'react';
import { OrderContext } from '../../context/OrderContextProvider';
import styles from '../../stylesheets/Cart.module.css'

const Cart = () => {
    const { orders, showOrders, deleteOrder } = useContext(OrderContext);

    useEffect(() => {
        showOrders();
    }, []);

    return (
        <>
            {(orders && orders.length < 1) ? (
                <h1>No orders in your cart yet</h1>
            ) : (
                <>
                    <h1>Cart</h1>
                    <div>
                        {orders.map((order, idx) => (
                            <div key={idx}>
                                <h2>{order.orderTitle}</h2>
                                <h2>${order.price}</h2>
                                <button onClick={() => { deleteOrder(order.orderId); }}>🗑️</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
