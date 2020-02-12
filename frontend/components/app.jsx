import React from "react";
import NavigationContainer from "./navigation_bar/navigation_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import axios from "axios";

const csrfToken = document.querySelector("[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

const App = () => (
  <>
    <div>
      <header className="navBar">
        <NavigationContainer />
      </header>
    </div>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </>
);

export default App;
