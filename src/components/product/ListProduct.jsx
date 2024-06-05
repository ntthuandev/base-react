import React, { useEffect, useState } from 'react'
import { useGetProducts } from './hooks/useGetProducts'
import { Link } from 'react-router-dom';

const ListProduct = () => {
  const {products, pagination, fetchProducts} = useGetProducts()
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchProducts(page)
  }, [page])
 

  const handlePre = () => {
    if(page < 1) return 
    setPage((prev) => prev -1)
  }
  const handleNext = () => {
    if(page >= pagination.totalPages) return 
    setPage((prev) => prev +1)
  }
  return (
    <div>
      <div>Current Page: {page} </div>

      {products.map((product) => (
        <div key={product?._id}>
          <Link to={`/products/${product._id}`}>
          <h2>{product.productName}</h2>
          </Link>
        </div>
      ))}

      <div>
        <button onClick={handlePre} disabled={page <= 1}>Truoc</button>
        <button onClick={handleNext} disabled={page >= pagination.totalPages}>Sau</button>
      </div>
    </div>
  )
}

export default ListProduct