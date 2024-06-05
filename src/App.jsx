import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// export default
import Products from './pages/Products'
import MainLayout from './components/layouts/MainLayout'
import SecondLayout from './components/layouts/SecondLayout'
import ProductDetail from './pages/ProductDetail'
import ProductForm from './components/product/ProductForm'
// export many item
//import {Products} from "./pages/Products"
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path="/" element={<div>Trang chu</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
     
     <Route path='/products' element={<SecondLayout />}>
      <Route path="/products" element={<Products />}/>
     
      <Route path="/products/:productId" element={<ProductDetail />}/>
     </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App