import { Routes, Route } from 'react-router-dom';
import CreateAccount from '../Post users/CreateAccount';
import Products from '../Products';
import ProductDetail from '../ProductDetail';

const Switch = () => {
    return(
        <>
        
        <Routes>
            {/* Nav routes */}
            <Route path='/sign_up' element={<CreateAccount />}></Route>
            <Route path='/products' element={<Products />}></Route>

            {/* Other routes */}
            <Route path='/products/:id' element={<ProductDetail />}></Route>
        </Routes>
        
        </>
    )
}

export default Switch;