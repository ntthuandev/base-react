import {  useState } from "react"
import { deleteProductRequest } from "../../../services/product";
import { useNavigate } from "react-router-dom";

export const useDeleteProduct = () => {
  const navigate  = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
    // create function to delete product detail- use deleteProduct from product server folder
    const deleteProduct = async(productId) => {
      setIsLoading(true)
      try {
        
        const res = await deleteProductRequest(productId);
        console.log(res)
        if(res.data) {
          setIsSuccess(true)
          alert("Da xoa thanh cong")
          navigate("/products")
        }
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }

    }
  return {isSuccess , isLoading, isError, deleteProduct}
}