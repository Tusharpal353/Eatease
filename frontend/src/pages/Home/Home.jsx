import { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
function Home() {
  const[category,setCategory] =useState("All");
  return (
    <div>
        <Navbar/>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}

export default Home