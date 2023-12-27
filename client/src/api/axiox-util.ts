import axios from "axios"
import { toast } from "react-toastify"
const baseURL = import.meta.env.VITE_BASE_URL

export const request = axios.create({
  baseURL,
})

request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`error:`, error)
    toast("Something went wrong", {
      type: "error",
    })
    throw error
  }
)
