import { fetchApi } from "./fetchApi";

async function sendAuthCode(email: string) {
  try {
    const body = JSON.stringify({ email });
    const res = await fetchApi("/auth", {
      method: "POST",
      body,
      headers: {
      "Content-Type": "application/json",
    },
    });
    console.log(res)
    return true;
  } catch (error) {
    return false;
  }
}

export {sendAuthCode}