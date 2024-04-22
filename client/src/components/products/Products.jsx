import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductContextProvider';
import { OrderContext } from '../../context/OrderContextProvider';
import styles from '../../stylesheets/Products.module.css'

const Products = () => {

    const { productsData, fetchProducts } = useContext(ProductsContext);
    const { handleNewOrd } = useContext(OrderContext);
    const [feedback, setFeedback] = useState(false)

    // Fetch all products on first render
    useEffect(() => {
        fetchProducts()
    }, [])

    const btnHandler = (product) => {
        handleNewOrd(product)
        setFeedback(true)
        feedbackHandler()
    }

    const feedbackHandler = () => {
        setTimeout(() => {
            setFeedback(false)
          }, 3500);
    }

    return(
        <>
            <h1 className={styles.pageTitle}>Products</h1>
            
            {/* Feedback when youve added product to cart */}
            {feedback &&
                <div className={styles.feedbackWrapper}>
                    <p>Added to your cart</p>
                </div>
            }

            {/* Display products */}
            <div className={styles.productsWrapper}>
                {/* Map through to display every product */}
                {productsData && productsData.map((product, idx) => (
                    <div className={styles.container}>
                        <Link to={`/products/${product.productid}`}>
                            <div className={styles.individualPrWrapper} key={product.idx}>
                                <div className={styles.imgWrapper}>
                                    <img src="" alt="**Product image placeholder**" />
                                </div>
                                <h2>{product.title}</h2>
                                <h3>${product.cost}</h3>
                            </div>
                        </Link>
                        <button onClick={() => btnHandler(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products;