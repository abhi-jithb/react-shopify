import React, { useState,useEffect } from 'react';

import './App.css';
import { getProducts } from './services/api';

function App() {
  const [isTop,setIsTop]= useState(false);

  useEffect(()=>{
    // getProducts();
    moveToTop();
  });

  function moveToTop(){
    setTimeout(() =>{
      setIsTop(true);
    }, 1000);
  }

  
  return (
    <div className="app">
    <header className='app-header'>
    <h2 className= {`title ${isTop ? "top" : ""}`}>Shopify</h2>
    </header>
    </div>
  );
}

export default App;