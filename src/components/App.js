import React from "react";
import Header from "./Header";
import UserFeed from "./UserFeed";
import Footer from "./Footer";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <UserFeed />
      <Footer />
    </React.Fragment>
  );
}


export default App;