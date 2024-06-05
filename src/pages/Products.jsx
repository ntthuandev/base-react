import React from 'react'
import ListProduct from '../components/product/ListProduct'
import ProductForm from '../components/product/ProductForm'

const Products = () => {
  return (
    <div>
      <h2>Danh sach san pham</h2>
     <ProductForm />
      <ListProduct></ListProduct>
    </div>
  )
}
// const Item = () => {
//   return (
//     <div>Products</div>
//   )
// }

//export  {Products, Item}

export default Products