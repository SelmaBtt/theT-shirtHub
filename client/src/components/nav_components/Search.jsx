import { useRef } from "react";

const Search = () => {
    const inputVal = useRef()

    const searchHandler = () => {
        
    }

    return(
        <>  
            <input type="text" ref={inputVal} placeholder='Search...' /> {/* PLACEHOLDER */}
            <button>🔍</button>
        </>
    )
}

export default Search;