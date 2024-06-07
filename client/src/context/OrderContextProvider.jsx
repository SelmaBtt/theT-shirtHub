import React, { useState, createContext, useEffect } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {

    const [ordArr, setOrdArr] = useState([]);

    const[totalSum, setTotalSum] = useState(null)

    useEffect(() => {
        const sum = ordArr.reduce((acc, item) => acc + item.cost, 0);
        setTotalSum(sum);
    }, [ordArr]); 

    const handleNewOrd = (order) => {
        setOrdArr(ordArr => [...ordArr, order]); 
    }
    

    // Post order (add in cart)--------------------------------------------------

    const addOrder = async () => {
        try {
            for (const order of ordArr) {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        orderId: order.productid,
                        orderTitle: order.title,
                        price: parseInt(order.cost)
                    })
                });
                let data = await response.json();
                console.log(data)
                if (!response.ok) {
                    throw new Error();
                } else {
                    console.log("Successfully added a product to the order API")
                    setOrdArr([])
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    // Get orders (show cart orders) (not used any longer --------------------------

    // const [orders, setOrders] = useState([])

    // const showOrders = async() => {
    //     try {
    //         const response = await fetch('http://localhost:3001/orders')
    //         if (!response.ok) {
    //             throw Error('Error fetching orders');
    //         }
    //         let data = await response.json();
    //         setOrders(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // Delete orders (not used any longer) -----------------------------------------

    // const deleteOrder = async(id) => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/orders/${id}`, {
    //             method: 'DELETE'
    //         });
    //         if (!response.ok) {
    //             throw new Error();
    //         } else {
    //             window.location.reload();
    //             console.log("Delete complete")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // ---------------------------------------------------------------------------

    return (
        <OrderContext.Provider value={{ 
            ordArr,
            totalSum,
            handleNewOrd,
            addOrder,
            // orders, setOrders,
            // showOrders,
        }}>
            {props.children}
        </OrderContext.Provider>
    );
    
}

export default OrderContextProvider;