import  axios from 'axios';
import api_base_url from '../../Api_Base_Url/api_base_url';

 export const AddToCart = async(formData)=>{
try {
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await axios.post(`${api_base_url}/addtocart`,formData,{
            
        headers: {
              Authorization: `Bearer ${token}`,
            },
    });
    return response.data;
} catch (error) {
    console.log("error while add to cart",error);
   return error.response.data;
}

};