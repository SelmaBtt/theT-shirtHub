import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {

    const [productsData, setProductsData] = useState([])
    const [oneProductData, setOneProductData] = useState([])
    const [displayResult, setDisplayResult] = useState("")
    
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products`)
            if (!response.ok) {
                throw Error('Error fetching products');
            }
            let data = await response.json();
            setProductsData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchOneProduct = async (pID) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${pID}`)
            if (!response.ok) {
                throw Error('Error fetching products');
            }
            let data = await response.json();
            setOneProductData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ProductsContext.Provider value={{ 
            productsData, 
            fetchProducts, 
            oneProductData, 
            displayResult, setDisplayResult,
            fetchOneProduct,
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductContextProvider;