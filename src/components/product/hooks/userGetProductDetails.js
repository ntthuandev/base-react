import {  useState } from "react"
import { getProductDetail, getProducts } from "../../../services/product";

export const useGetProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
    // create function to get product detail- use getProducts from product server folder
    const fetchProduct = async(productId) => {
      setIsLoading(true)
      try {
        
        const res = await getProductDetail(productId);
        setProduct(res.data)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }

    }
  return {product , isLoading, isError, fetchProduct}
}