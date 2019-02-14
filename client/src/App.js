import React, { Component } from "react";
import Home from "./pages/HomePage"



class App extends Component {
  render() {
    // console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">

        
        {/* NEW HOME COMPONENT */}
        <Home />

      </div>
    );
  }
}

export default App;