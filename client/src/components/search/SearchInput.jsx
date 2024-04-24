import { useRef, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ProductsContext } from "../../context/ProductContextProvider";
import styles from '../../stylesheets/SearchInput.module.css';
import { Search } from 'react-bootstrap-icons'

const SearchInput = () => {

    const { setDisplayResult } = useContext(ProductsContext)
    const [displayVal, setDisplayVal] = useState("")
    const searchVal = useRef()

    return(
        <>  
            <div className={styles.searchWrapper}>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder='Search...' 
                    ref={searchVal}
                    value={displayVal}
                    onChange={(e) => setDisplayVal(e.target.value)}
                /> 
                <button onClick={() => setDisplayResult(searchVal.current.value)}>
                    <Link to={`/search`}><Search color="white" size={24} /></Link>
                </button>
            </div>
        </>
    )
}

export default SearchInput;