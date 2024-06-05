import { useEffect, useState } from "react"
import { getProducts } from "../../../services/product";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([]);


    // create function to get products list - use getProducts from product server folder
    const fetchProducts = async(page) => {
      try {
        const res = await getProducts(page);
        
        setProducts(res.data.data)
        setPagination(res.data.pagination)
      } catch (error) {
        
      }

    }
  return {products, pagination, fetchProducts}
}