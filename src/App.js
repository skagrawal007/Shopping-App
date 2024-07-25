import Header from './component/header/Header';
import Products from './component/product/Products';
import ProductDetail from './component/productDetail/ProductDetail';
import PageNotFound from './component/PageNotFound';
import Footer from './component/footer/Footer';
import Electronics from './component/sections/electronic/Electronics';
import Clothings from './component/sections/clothes/Clothings';
import Home from './component/sections/home/Home';
import Gemstones from './component/sections/gemstones/Gemstones';

import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path='/' element={<Products/>}/>
    <Route exact path='/product/:productId' element={<ProductDetail/>}/>
    <Route exact path='/electronics' element={<Electronics />} />
    <Route exact path='/clothings' element={<Clothings />} />
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/gemstones' element={<Gemstones/>}/>
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
