import React, { useState, createContext } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {


    // Post order (add in cart)--------------------------------------------------

    const addOrder = async(id, ptitle, pcost) => {
        try {
            const response = await fetch('http://localhost:3001/orders', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    orderId: id,
                    orderTitle: ptitle,
                    price: parseInt(pcost)
                })
            });
            let data = await response.json();
            console.log(data)
            if (!response.ok) {
                throw new Error();
            } else {
                console.log("Successfully added a product to the order API")
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Get orders (show cart orders)----------------------------------------------

    const [orders, setOrders] = useState([])

    const showOrders = async() => {
        try {
            const response = await fetch('http://localhost:3001/orders')
            if (!response.ok) {
                throw Error('Error fetching orders');
            }
            let data = await response.json();
            setOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Delete orders -------------------------------------------------------------

    const deleteOrder = async(id) => {
        try {
            const response = await fetch(`http://localhost:3001/orders/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error();
            } else {
                window.location.reload();
                console.log("Delete complete")
            }
        } catch (error) {
            console.log(error)
        }
    }

    // ---------------------------------------------------------------------------

    return (
        <OrderContext.Provider value={{ 
            addOrder,
            orders, setOrders,
            showOrders,
            deleteOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    );
    
}

export default OrderContextProvider;