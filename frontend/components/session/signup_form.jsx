import React from "react";
import Dropdown from "react-dropdown";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      day: "",
      month: "",
      year: "",
      country: "United States"
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
    const user = { email: "splinter@email.com", password: "password" };
    this.props.loginDemo(user);
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
    let days = [];
    days.push(<option key="default1" value="0">Day</option>);
    for (var i = 1; i <= 31; i++) {
      days.push(<option key={i.toString() + "day"} value={i} >{i}</option>);
    }
                  
    let monthsStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let months = []
    months.push(<option key="default3" value="0">Month</option>);
    for (var i = 0; i < monthsStrings.length; i++) {
      months.push(<option key={monthsStrings[i]} value={i+1}>{monthsStrings[i]}</option>);
    }
    let years = []
    years.push(<option key="default2" value="0">Year</option>);
    for (var i = 2008; i >= 1900; i--) {
      years.push(
        <option key={i.toString() + "year"} value={i}>{i}</option>
      );
    }
    let countries = [
      <option key="US" value="United States">United States</option>,
      <option key="SW" value="Sweden">Sweden</option>,
      <option key="ET" value="Ethiopia">Ethiopia</option>
    ];

    return (
      <div className="signupModule">
        <p className="error">{this.renderErrors()}</p>
        <form onSubmit={this.handleSubmit}>
          <ul className="signupForm">
            <li>
              <input id="signupDemo" type="submit" onClick={this.handleDemoUser} value="SIGN UP AS DEMO USER" />
            </li>

            <li>
              <Link className="loginLink" to="/login">LOG IN</Link>
            </li>
            <li>
              <div id="orBreakSignup">
                <hr />
                <p>OR</p>
                <hr />
              </div>
            </li>

            <li key="firstname1">
              <label>
                <input
                  className="whiteInput"
                  placeholder="First name"
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </label>
            </li>
            <li key="lastname2">
              <label>
                <input
                  className="whiteInput"
                  placeholder="Last name"
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                />
              </label>
            </li>
            <li key="email3">
              <label>
                <input
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
            </li>
            <li key="password4">
              <label>
                <input
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
            </li>
            <li key="date5" className="birthdaySelect">
              <select
                id="dayDropdown"
                value={this.state.day}
                onChange={this.update("day")}
              >
                {days}
              </select>
              <span className="selectArrow" id="arrowDay">^</span>
              <select
                id="monthDropdown"
                value={this.state.month}
                onChange={this.update("month")}
              >
                {months}
              </select>
              <span className="selectArrow" id="arrowMonth">^</span>
              <select
                id="yearDropdown"
                value={this.state.year}
                onChange={this.update("year")}
              >
                {years}
              </select>
              <span className="selectArrow" id="arrowYear">^</span>
            </li>
            <li className="genderContainer" key="gender6">
              <div className="genderRadio">
                  <input
                    id="optionM"
                    type="radio"
                    value="M"
                    checked={this.state.gender === "M"}
                    onChange={this.update("gender")}
                  />
                <label htmlFor="optionM"><span className="radioSpan"></span></label>
                <label>Male<div id="oDiv">✓</div></label>
              </div>
              
              <div className="genderRadio">
                  <input
                  id="optionF"
                    type="radio"
                    value="F"
                    checked={this.state.gender === "F"}
                    onChange={this.update("gender")}
                  />
                <label htmlFor="optionF"><span className="radioSpan"></span></label>
                <label>Female<div id="oDiv">✓</div></label>
              </div>

              <div className="genderRadio">
                
                  <input
                  id="optionO"
                    type="radio"
                    value="O"
                    checked={this.state.gender === "O"}
                    onChange={this.update("gender")}
                  />
                <label htmlFor="optionO"><span className="radioSpan"></span></label>
                <label>Other<div id="oDiv">✓</div></label>
              </div>
            </li>
            <li key="country7">
              <select
                id="countryDropdown"
                value={this.state.country}
                onChange={this.update("country")}
              >{countries}
              </select>
              <span className="selectArrow" id="arrowCountry">^</span>
            </li>
            <li>
              <p>By signing up with MapMyRat, you agree to nothing important & rats are not that bad.</p>
            </li>
            <input id="signupButton" type="submit" value="SIGN UP" />
          </ul>
        </form>
      </div>
      
    );
  }
}

export default SignupForm;
