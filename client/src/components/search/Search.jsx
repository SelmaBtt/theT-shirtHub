import { useRef, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ProductsContext } from "../../context/ProductContextProvider";
import styles from '../../stylesheets/Search.module.css';

const Search = () => {

    const { setDisplayResult } = useContext(ProductsContext)
    const [displayVal, setDisplayVal] = useState("")
    const searchVal = useRef()

    return(
        <>  
            <input 
                type="text" 
                placeholder='Search...' 
                ref={searchVal}
                value={displayVal}
                onChange={(e) => setDisplayVal(e.target.value)}
            /> 
            <button onClick={() => setDisplayResult(searchVal.current.value)}><Link to={`/search`}>🔍</Link></button>
            {(displayVal && displayVal.length > 0) &&
                <div className={styles.displayWrapper}>
                    <p>"{displayVal}"</p>
                    <Link to={`/search`}><p>Show result</p></Link>
                </div>
            }
        </>
    )
}

export default Search;