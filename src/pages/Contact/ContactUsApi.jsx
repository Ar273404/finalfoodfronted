
import axios from "axios";
import api_base_url from "../../Api_Base_Url/api_base_url";


 export const contactUser = async(FormData)=>{
    const token =  localStorage.getItem('token');
    const response = await axios.post(`${api_base_url}/contactUser`,FormData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
};
