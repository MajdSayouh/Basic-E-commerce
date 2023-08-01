import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';
import Slider from './components/Slider';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <>
              <Slider/> 
              <ProductList/>
            </>
          }/>
          <Route path='about' element={<About/>}/>
          <Route path='product/:productId' element={<ProductDetails/>}/>

        </Routes>
      
        
    </div>
  );
}

export default App;
