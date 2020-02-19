import React from "react";
import NavigationContainer from "./navigation_bar/navigation_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
import Splash from "../components/splash/splash"
import RodentIndexContainer from "../components/rodents/rodent_index_container"
import TourContainer from "../components/tour/tour_container"
import TourIndexContainer from "../components/tour_index/tour_index_container"

import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <header className="navBar">
      <NavigationContainer />
    </header>
    <div className="shadowLine"></div>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/tours/create" component={TourContainer} />
    <Route exact path="/tours" component={TourIndexContainer} />
    <Route exact path="/rodents" component={RodentIndexContainer} />
    <Route exact path="/" component={Splash} />
  </>
);

export default App;
