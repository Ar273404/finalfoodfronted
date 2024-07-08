import React from 'react'
import  './Menu.css'
import {menu_list} from '../../assets/frontend_assets/asset';
const Menu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu Item</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae suscipit vel. Aspernatur, doloribus rem.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category === item.menu_name?"active":" "} src={item.menu_image} alt=''/>
                    {/* {console.log(category)} */}
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Menu