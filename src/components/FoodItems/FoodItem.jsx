import React,{ useState } from 'react'
import './FoodItem.css'
import { asset } from '../../assets/frontend_assets/asset'
import { useDispatch } from 'react-redux'
import { addItem } from '../../pages/Cart/cartSlice'
const FoodItem = ({id,name,price,description,image}) => {
   const [itemCount,setItemCount] = useState(0);

     const dispatch = useDispatch();
   const handleAddToCart = (FoodItem) => {
    dispatch(addItem({ ...FoodItem, quantity: 1 }));
  };
  return (
    <div className='food-item hover:border-4  hover:border-red-900 transition-all duration-300'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=''/>
        {!itemCount
          ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={asset.add_icon_white} alt=''/>
          :<div className='food-item-counter'>
            <img onClick={()=>setItemCount(prev=>prev-1)} src={asset.remove_icon_red} alt=''/>
            <p>{itemCount}</p>
            <img onClick={()=>handleAddToCart(FoodItem)} src={asset.add_icon_green} alt=''/>
            </div>}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={asset.rating_starts} alt=''/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'><span>&#8377;</span>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem;