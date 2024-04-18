import { Routes, Route } from 'react-router-dom';
import CreateAccount from '../post users/CreateAccount';
import Products from '../products/Products';
import ProductDetail from '../products/ProductDetail';
import Cart from './Cart';
import DisplaySearchResult from '../search/DisplaySearchResult';

const Switch = () => {
    return(
        <>
        
        <Routes>
            {/* Nav routes */}
            <Route path='/sign_up' element={<CreateAccount />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>

            {/* Other routes */}
            <Route path='/products/:id' element={<ProductDetail />}></Route>
            <Route path='/search' element={<DisplaySearchResult />}></Route>
        </Routes>
        
        </>
    )
}

export default Switch;