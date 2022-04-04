import './App.css';   
import TopSection from './component/topsection/TopSection';
import Sidebars from './component/sidebar/Sidebar';
// import Home from './pages/home/Home'; 


import React, { useState } from "react";

function App() {
  return (
    <>
    <TopSection/>
      <Sidebars/> 
    </>
  );
}
export default App;
