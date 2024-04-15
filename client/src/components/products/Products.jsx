import { ProductsContext } from '../../context/ProductContextProvider';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../stylesheets/Products.module.css'

const Products = () => {

    const {productsData, fetchProducts } = useContext(ProductsContext);

    // Fetch all products on first render
    useEffect(() => {
        fetchProducts()
    }, [])

    return(
        <>
            <h1 className={styles.pageTitle}>Products</h1>

            <div className={styles.productsWrapper}>
                {/* Map through to display every product */}
                {productsData && productsData.map((product, idx) => (
                    <Link to={`/products/${product.productid}`}>
                        <div className={styles.individualPrWrapper} key={product.idx}>
                            <div className={styles.imgWrapper}>
                                <img src="" alt="**Product image placeholder**" />
                            </div>
                            <h2>{product.title}</h2>
                            <h2>${product.cost}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Products;