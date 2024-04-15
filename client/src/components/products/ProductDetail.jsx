import { ProductsContext } from '../../context/ProductContextProvider';
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../stylesheets/ProductDetail.module.css'

const Products = () => {

    const {oneProductData, fetchOneProduct } = useContext(ProductsContext);
    
    // Fetch a specific product. Take the id of the page and sends it to context provider
    const location = useLocation();
    const id = location.pathname.split('/').pop();
    useEffect(() => {
        fetchOneProduct(id) 
    }, [])

    return(
        <>
            {oneProductData && oneProductData.map((product, idx) => (
                <div key={idx} className={styles.detailsWrapper}>
                    <div className={styles.imgWrapper}>
                        <img src="" alt="**Product image placeholder**" />
                    </div>
                    <div className={styles.infoWrapper}>
                        <h1>{product.title}</h1>
                        <h2>${product.cost}</h2>
                        <h2>Materials:</h2>
                        <p>{product.material}</p>
                        <h2>Color:</h2>
                        <p>{product.color}</p>
                        <h2>Category</h2>
                        <p>{product.category}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Products;