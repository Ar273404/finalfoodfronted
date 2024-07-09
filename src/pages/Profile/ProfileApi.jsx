// src/api/user.js
import axios from 'axios';
import api_base_url from '../../Api_Base_Url/api_base_url';
export const getUserProfile = async () => {
  const token =  localStorage.getItem('token');
  const response = await axios.get(`${api_base_url}/getUserProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const createUserProfile = async(FormData)=>{
    const token =  localStorage.getItem('token');
    const response = await axios.post(`${api_base_url}/createUserProfile`,FormData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};