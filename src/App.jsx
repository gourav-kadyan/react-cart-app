import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Detail from './pages/Detail'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'
function App(){
    const [cart, setCart ] = useState({})
    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
    },[])
    return <>
        <Router>
            {/* <CartContext.Provider value={{name : "Gourav Kadyan"}}> */}
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route exact path="/products" element={<Products/>}></Route>
                <Route path="/product/:_id" element={<Detail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
            {/* </CartContext.Provider> */}
        </Router>
    </>
}

export default App;