import axios from 'axios';
import api_base_url from '../../Api_Base_Url/api_base_url';

export const UserRegister = async (formData) => {
  try {  console.log(formData)
    const response = await axios.post(`${api_base_url}/User_register`, formData);
    return response.data;
  } catch (error) {
    // Return a custom error message if the request fails
    return error.response.data;
  }
};

export const UserLogin = async (formData) => {
  try {
    const response = await axios.post(`${api_base_url}/User_login`, formData);
    return response.data;
  } catch (error) {
    // Return a custom error message if the request fails
    return error.response.data;
  }
};
