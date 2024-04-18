import { useEffect, useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContextProvider"

const DisplaySearchResult = () => {

    const { displayResult, productsData, fetchProducts } = useContext(ProductsContext);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (productsData && productsData.length > 0) {
            const prods = productsData.filter(prod =>
                prod.title.toLowerCase().includes(displayResult.toLowerCase())
            );
            setFilteredProducts(prods);
        }
    }, [productsData, displayResult]);


    return(
        <>
            <h1>Products: {displayResult}</h1>

            <div>
                {/* Map through to display every products*/}
                {filteredProducts && filteredProducts.map((product, idx) => (
                    <>
                        <div>
                            <div>
                                <img src="" alt="**Product image placeholder**" />
                            </div>
                            <h2>{product.title}</h2>
                            <h2>${product.cost}</h2>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default DisplaySearchResult