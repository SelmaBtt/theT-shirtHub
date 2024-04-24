import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider"
import styles from '../../stylesheets/DisplaySearchResult.module.css'

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
            <h1 className={styles.title}>
                {(filteredProducts && filteredProducts.length > 0) ? (
                    <span>Products for "{displayResult}"</span>
                ) : (
                    <span>No result matched your search "{displayResult}"</span>
                )}
            </h1>

            <div className={styles.resultWrapper}>
                {/* Map through to display every products*/}
                {filteredProducts && filteredProducts.map((product, idx) => (
                    <>
                        <Link to={`/products/${product.productid}`}>
                            <div className={styles.productWrapper}>
                                <h3>{product.title}</h3>
                                <h3>${product.cost}</h3>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </>
    )
}

export default DisplaySearchResult