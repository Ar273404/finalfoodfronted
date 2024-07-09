import React, {useState,useEffect } from 'react'
import './Cart.css'
import axios from 'axios';
import api_base_url from '../../Api_Base_Url/api_base_url';
import { Link } from 'react-router-dom';
const Cart = () => {
  const [cartlist,setCartList] = useState([])
    const fetchCartList = async ()=>{
       const token = localStorage.getItem('token')
        const response = await axios.get(api_base_url+"/cartitem",{
        headers: {
              Authorization: `Bearer ${token}`,
            },
    });
        console.log(response.data);
        setCartList(response.data);
    }
    useEffect(()=>{
         async function loadData(){
            await fetchCartList();
         }
        
         loadData();
    },[]);
      const object = {};
      cartlist.forEach(item => {
      object[item.id] = item.value;
  });

   
    //pay
     var tax = 1;
     var totaltax = tax*cartlist.length;
     var savings = 5;
     var totalsaving = savings*cartlist.length;
     var storepickup = 8;
     var subtotal = cartlist.reduce((acc,item)=>acc+item.price,0);
     var total = totaltax+storepickup+subtotal-totalsaving;

     console.log(subtotal);

     //remove 
     const handleRemoveItem = async(id)=>{
  const token = localStorage.getItem('token');
    const response = await axios.delete(`${api_base_url }/cartItemDelete/${id}`, {
      headers: {
              Authorization: `Bearer ${token}`,
            }},);

        setCartList(response.data.UserCartItem);
           
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
          <a href="/" onclick="window.close()" class="text-blue-500 text-lg font-semibold hover:underline">Go Back to Home Page 🔙🔙🔙 </a>
        </body>
      </html>
    `);
  };
  return (
    <div>
<section class="bg-white py-2 antialiased dark:bg-gray-900 md:py-16">
  <div className="flex flex-col items-center border-b bg-white mb-2 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <Link to='/' className="text-2xl font-bold text-gray-800">
      Back to Cart Page 🔙 🔙
    </Link>
    <div className="mt-1 mb-2 py-2 text-xs sm:mt-2 sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <Link to='#' className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">1</Link>
            <span className="font-semibold text-gray-900"> Cart Page</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <Link to='#' className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">2</Link>
            <span className="font-semibold text-gray-500">Checkout</span>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <Link to='#' className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</Link>
            <span className="font-semibold text-gray-500">Order Summary</span>
          </li>
        </ul>
      </div>
    </div>
   </div>
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
 
    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);">
        <div class="space-y-6">
          {cartlist.map((item) =>  (
             <div key={item._id} class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img onClick={()=>openImage(api_base_url+"/images/"+item.image)} class=" rounded-lg shadow-lg h-50 w-40 bor dark:hidden" src={api_base_url+"/images/"+item.image} alt="imac image" />
                <img  onClick={()=>openImage(api_base_url+"/images/"+item.image)} class=" rounded-lg shadow-lg hidden h-50 w-40 dark:block" src={api_base_url+"/images/"+item.image} alt="imac image" />
              </a>      
              <label for="counter-input" class="sr-only">Choose quantity:</label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                  <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">&#8377;{item.price}</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <p href="#" class="text-base mb-2 font-bold text-gray-900  dark:text-white">{item.name}</p>
                <p href="#" class="text-base font-medium text-gray-900  dark:text-white">{item.description}</p>

                <div class="flex items-center gap-4">
                  {/* `/pay?q=${JSON.stringify(item)}` */}
                  {console.log((item))}
                  <Link to={`/pay?q=${JSON.stringify(item)}`}>
                   <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                   <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                   </svg>
                       Buy now
                </button>
                  </Link>
                          {/* <Link to={`/pay?q=${JSON.stringify(cartlist)}&m="arun" ` */}

                  <button onClick = {()=>handleRemoveItem (item._id)} type="button" class="cursor-pointer inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-900">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        
      </div>

      <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div class="space-y-4">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400"> Total Original price</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">&#8377;{subtotal}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd class="text-base font-medium text-green-600">-&#8377;{totalsaving}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">&#8377;{storepickup}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">&#8377;{totaltax}</dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">&#8377;{total}</dd>
            </dl>
          </div>
            
           <Link to={`/pay?q=${JSON.stringify(cartlist)}&m="arun" `} class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
               Proceed to Checkout 👉👉👉
           </Link>
          <div class="flex items-center justify-center gap-2">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link to='/' class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
               Continue Shopping 🛍️🛍️
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </Link>
           
          </div>
        </div>

        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form class="space-y-4">
            <div>
              <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
            </div>
            <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>                            
    </div>
  
  )
}

export default Cart