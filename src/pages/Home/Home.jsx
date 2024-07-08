import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Navbar/>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Footer/>
    </div>
  )
}
export default Home