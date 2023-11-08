import { getConfig, patchConfig, postConfig } from "./api";
import { getToken, setAuthToken, removeAuthToken } from '@/app/lib/token'

async function sendAuthCode(email: string) {
  const response = await postConfig("/auth",{ email });
  if (!response.error) {
    return { status: true };
  } else {
    return { status: false, error: response.error };
  }
}

async function signUp(email: string, code:string) {
  const response = await postConfig("/auth/token", {email, code});
  if (!response.error) {
    const {token} = response;
    setAuthToken(token)
    return { status: true, token };
  } else {
    return { status: false, error: response.error };
  }
}

async function products(){
  const response = await getConfig("/products/search?limit=15&offset=0")
  if(!response.error){
    return response.results.products
  } else {
    throw new Error(response.error)
  }
}

async function getProduct(id:string){
  const response = await getConfig(`/products/${id}`)
  if(!response.error){
    return response.product
  } else {
    throw new Error(response.error)
  }
}

export { sendAuthCode, signUp, products, getProduct }