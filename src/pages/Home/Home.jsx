import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { FinalHeader } from '../../components/Navbar/FinalHeader'
import MainFooter from '../../components/Footer/MainFooter'
const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <FinalHeader/>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      {/* <Footer/> */}
      <MainFooter/>
    </div>
  )
}
export default Home