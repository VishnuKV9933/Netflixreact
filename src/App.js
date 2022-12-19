import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/NavBar/NavBar.css";
import "./App.css"
import {action,original} from "./urls"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <Banner/>
       <RowPost url={original} title="Netflix Original"/>
       <RowPost url={action} title="Action" isSmall/>

      </header>
    </div>
  );
}

export default App;
