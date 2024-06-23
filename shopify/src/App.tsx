import React, { useState,useEffect } from 'react';

import './App.css';

function App() {
  const {isTop,setIsTop}= useState(false);

  useEffect(()=>{
    function moveTop(){
      if(window.scrollY>0){
        setIsTop(false);
    }
  }
});

  
  return (
    <div className="app">
    <header className='app-header'>
    <h2 className= {`title ${isTop ? "top" : ""}`}>Shopify</h2>
    </header>
    </div>
  );
}

export default App;