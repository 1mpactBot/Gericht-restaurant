import React, { useEffect, useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import Loader from './components/Loader/Loader';
import './App.css';

const App = () => {
  const [loading,setLoading] = useState(true);

  window.addEventListener("load", () => {
    setLoading(false);
  });
  
  if(loading){
    return <Loader />;
  }else{
    return (
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    );
  }
}
export default App;
