import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {

    const [productsData, setProductsData] = useState([])
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3001/products')
            if (!response.ok) {
                throw Error('Error fetching products');
            }
            let data = await response.json();
            setProductsData(data)
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <ProductsContext.Provider value={{ productsData, fetchProducts }}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductContextProvider;