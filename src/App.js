import React from "react";
import './App.css';
import SignUp from "./forms/sign-up/sign-up.component";
import SignIn from "./forms/sign-in/sign-in.component";

function App() {
  return (
    <div className="App">
      <SignUp />
      {/*  <SignIn />*/}
    </div>
  );
}

export default App;
