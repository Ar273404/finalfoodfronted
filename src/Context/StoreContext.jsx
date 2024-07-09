import { createContext,useEffect,useState } from "react";
import axios from 'axios';
import api_base_url from "../Api_Base_Url/api_base_url";
export const StoreContext = createContext(null);
 
 const StoreContextProvider = (props)=>{
    const [food_list,setFoodList] = useState([]);
    const [cartItems,setCartItems] = useState({});
    
    const fetchFoodList = async ()=>{
        const response = await axios.get(api_base_url+"/api/food/list");
        console.log(response.data.data);
        setFoodList(response.data.data);
    }
    useEffect(()=>{
         async function loadData(){
            await fetchFoodList();
         }
         loadData();
    },[])

    const addToCart = (itemId) =>{
        if(!cartItems[itemId])
            {
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else
            {
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider