import React from "react";
import {Header} from "./Header";
import UserFeed from "./UserFeed";
import Footer from "./Footer";


function App(){
  return ( 
    <div className="app">
      <Header />
      <UserFeed />
      <Footer />
    </div>
  )
}


export default App;