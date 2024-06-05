import React, { useEffect } from 'react'
import { useGetProductDetails } from './hooks/userGetProductDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { formatPrice } from '../../utils/formatCurrent'
import { useDeleteProduct } from './hooks/useDeleteProduct'

const ProductDetailInfo = () => {
  const {product, isLoading, isError, fetchProduct} = useGetProductDetails()
  const {productId} = useParams()
 const {isSuccess, isLoading:isDeleteLoading, isError:isDeleteError, deleteProduct} = useDeleteProduct()
const navigate = useNavigate()
  useEffect(() => {
    fetchProduct(productId)
  }, [])

  const handleDeleteProduct = () => {
    deleteProduct(product._id);
   
    
  }

  if(isLoading) return <span>Loading....</span>
  if(isError) return <span>Something went wrong</span>
  return (
    <div>
      <div>
        <h2>name: {product.productName}</h2>
        <p>category: {product.productCategory}</p>
      </div>
      <div>
        <p>Desciptin</p>
        <span>{product.productDescription}</span>
      </div>
      <div>
        <p>Price</p>
        <span>{formatPrice(product.productPrice)}</span>
      </div>

      <div>
        <button onClick={handleDeleteProduct}>Delete</button>
      </div>
    </div>
  )
}

export default ProductDetailInfo