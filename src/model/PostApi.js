import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const addPostApi = async (post) => {
    await axios.post(`${BASE_URL}/posts`, post);
  };

  export const getPostApi = async () => {
    const response = await axios.get(`${BASE_URL}/posts`);  
    return response.data;
  };

  export const getPostIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/posts?id=${id}`);  
    return response.data[0];
  };

  export const delPostApi = async (id) => {
    await axios.delete(`${BASE_URL}/posts/${id}`);
  };