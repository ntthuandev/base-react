import React, { useState } from 'react'
import { useAddProduct } from './hooks/useAddProduct'
import { useNavigate } from 'react-router-dom'

const ProductForm = () => {
  const {isLoading, isError, isSuccess, addProduct} = useAddProduct()
  const [productData, setProductData] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    setProductData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit =async  (e) => {
    e.preventDefault()
      
     const resData = await addProduct(productData)
    
     if(resData) {
      alert("Da them thanh cong")
      navigate(0)
     }
    
  }
  return (
    <form >
      <div>
        <label>Name</label>
        <input type="text" name="productName" onChange={handleChange}/>
      </div>
      <div>
        <label>Category</label>
        <input type="text" name="productCategory" onChange={handleChange}/>
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="productDescription" onChange={handleChange}/>
      </div>
      <div>
        <label>Price</label>
        <input type="text" name="productPrice" onChange={handleChange}/>
      </div>
      <button>Cancel</button>
      <button type='submit' onClick={handleSubmit}>{isLoading ? "Loading" : "Add"}</button>
      {isError && (<span>NO ADD Product</span>)}
    </form>
  )
}

export default ProductForm