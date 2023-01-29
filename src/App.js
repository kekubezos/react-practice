import React from "react";
import './App.css';
import SignUp from "./forms/sign-up/sign-up.component";
import SignIn from "./forms/sign-in/sign-in.component"
import forgotPassword from "./forms/forgotPassword/forgotPassword.component";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
          <div className="App">
             <Switch>
                  <Route exact path='/' component={SignIn} />
                  <Route exact path='/sign-in' component={SignIn} />
                  <Route exact path='/sign-up' component={SignUp} />
                 <Route exact path='/forgotPassword' component={forgotPassword} />
             </Switch>
        </div>
  );
}

export default App;
