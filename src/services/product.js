import { axiosInstance } from "../api/api"

export const getProducts =async (page = 1) => {
  const url = `/products?page=${page}`
  const data = await axiosInstance.get(url)

  return data
}
export const getProductDetail =async (productId) => {
  const url = `/products/${productId}`
  const data = await axiosInstance.get(url)

  return data
}
export const postProduct =async (productData) => {
  const url = `/products`
  const data = await axiosInstance.post(url, productData)

  return data
}

export const deleteProductRequest =async (productId) => {
  const url = `/products/${productId}`
  const data = await axiosInstance.delete(url)

  return data
}