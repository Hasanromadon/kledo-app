
import instance from "./axiosInstance";
import Cookies from "js-cookie";

export const login = async (credentials) => {
  try {
    const response = await instance.post(`/authentication/login`, credentials);

    if(response.status === 200) {
      const accessToken = response.data.data.data.access_token;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      Cookies.set("authToken", accessToken, { expires: expirationDate, secure: true });
    } 
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response;
  }
};

