import React, { useState } from 'react';
import './FoodItem.css';
import { Link } from 'react-router-dom';
import { asset } from '../../assets/frontend_assets/asset';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, incrementQuantity, decrementQuantity } from '../../Redux/Slice';
import { useNavigate } from 'react-router-dom';
import { AddToCart } from './AddToCartApi';
import api_base_url from '../../Api_Base_Url/api_base_url';

const FoodItem = ({ id, name, price, description, image }) => {
  const navigate = useNavigate(); // Renamed useNavigate to navigate for better readability
  const FormData = { id, name, price, description, image };
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const addtocart =  async()=>
    {
      const response = await AddToCart(FormData);
      alert(response.message);
    }
  const handleItemCountIncrement = () => {
    const c = parseInt(localStorage.getItem("cartCount"),10)+1;
    localStorage.removeItem("cartCount");
    alert(c);
    localStorage.setItem("cartCount",c);
    addtocart();
  };

  const handleItemCountDecrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      dispatch(decrementQuantity());
      dispatch(removeItem(FoodItem))
    }
  };
  
  const handleBuyClick = () => {
    navigate('/pay', { state: { foodItem: { id, name, price, description, image, quantity: itemCount } } });
  };
      //image open in new tab
    const openImage = (url) => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Image Viewer</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
        </head>
        <body class="flex flex-col items-center justify-center h-screen bg-gray-100">
          <img src="${url}" alt="Opened Image" class="max-w-3/4 max-h-3/4 mb-8">
          <a href="/" onclick="window.close()" class="text-blue-500 text-lg font-semibold hover:underline">Go Back to Home Page</a>
        </body>
      </html>
    `);
  };

  return (
    <div className='food-item hover:border-4  hover:border-yellow-600 transition-all duration-300'>
      <div className='food-item-img-container'>
        <img onClick={()=>openImage(api_base_url+"/images/"+image)} className=' cursor-pointer food-item-image' src={api_base_url+"/images/"+image} alt='' />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={asset.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <div className='flex flex-row justify-between h-10 items-center'>
          <div>
            <p className='food-item-price'>
              <span className='pr-1'>&#8377;</span>
              {price}
            </p>
          </div>
           <div className='flex  justify-end gap-2 w-24'>
           
              <button
                className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105'
                onClick={handleItemCountIncrement}  
              >  
              Add 
               </button>
               <Link>
                 <button
                className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105'
                onClick={handleBuyClick}
                >
                Buy
              </button>
               </Link>
              
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;