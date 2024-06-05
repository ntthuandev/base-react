import { useState } from "react"
import { postProduct } from "../../../services/product"


export const useAddProduct =  ( ) => {
  const [isLoading, setIsLoaing] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const addProduct = async (productData) => {
   
    try {
      setIsLoaing(true)
      
      const res = await postProduct(productData)
      console.log(res)
      if(res.data) {
        setIsSuccess(true)
       
      }
      return res
    } catch (error) {
      setIsError(true)
    }finally {
      setIsLoaing(false)
    }

    
  }

  return {isLoading, isError, isSuccess, addProduct}
}