import React from "react";
import NavigationContainer from "./navigation_bar/navigation_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import Splash from "../components/splash/splash"
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
      <header className="navBar">
        <NavigationContainer />
      </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={Splash} />
  </>
);

export default App;
