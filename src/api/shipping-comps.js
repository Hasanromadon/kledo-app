import instance from "./axiosInstance";

const handleRequest = async (method, url, payload = null) => {
  try {
    const response = await instance.request({
      method,
      url,
      data: payload
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getShippingComps = async () => {
  return handleRequest("GET", "/finance/shippingComps");
};

export const addShippingComps = async (payload) => {
  return handleRequest("POST", "/finance/shippingComps", payload);
};

export const editShippingComps = async (compId, payload) => {
  return handleRequest("PUT", `/finance/shippingComps/${compId}`, payload);
};

export const deleteShippingComps = async (compId) => {
  return handleRequest("DELETE", `/finance/shippingComps/${compId}`);
};
