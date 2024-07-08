import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/admin_assets/assets'
import { asset } from '../../assets/frontend_assets/asset'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setmenu] = useState("home");
  return (
    <div className='navbar'>
        {console.log(asset)}
      <img src={assets.logo} alt='' className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={()=>setmenu("home")} className={menu==="home" ? "active":" "}>Home</li>
        <li onClick={()=>setmenu("menu")} className={menu==="menu" ? "active":" "}>Menu</li>
        <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app" ? "active":" "}>Mobile-app</li>
        <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us" ? "active":" "}>Contact us</li>
      </ul>
      <div className='navbar-right'>
          <img src={asset.search_icon} alt=''/>
          <div className='navbar-search-icon'>
            <Link to='./cart'>
               <img src={asset.basket_icon} alt=''/>
            </Link>
            <div className='dot'>55</div>
          </div>
          <Link to='/login'>
             <button className='sign-in'>Sign in</button> 
          </Link>
          
      </div>
    </div>
  )
}

export default Navbar