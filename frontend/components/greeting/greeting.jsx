import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
  const userGreeting = () => (
    <div>
      <h4>Welcome {user.first_name}</h4>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const logoutLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  if (user) {
    return userGreeting();
  } else {
    return logoutLinks();
  }
};

export default Greeting;
