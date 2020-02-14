import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.passItThrough(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = {email: "splinter@email.com", password: "password"};
    this.props.passItThrough(user);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}> {error} </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="loginModule">
        {this.renderErrors()}
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <Link className="signUpLink" to="/signup">SIGN UP</Link>
          <input type="submit" onClick={this.handleDemoUser} value="LOG IN AS DEMO USER" />
          <div className="orBreak">
            <hr/>
            <p>OR</p>
            <hr/>
          </div>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="login-input"
            placeholder="Email"
          />
          <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
            placeholder="Password"
          />
          <br/>
          <input type="submit" value="LOG IN" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
