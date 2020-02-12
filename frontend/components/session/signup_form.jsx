import React from "react";
import Dropdown from "react-dropdown";

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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
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
    let days = [];
    days.push(<option value="0">Day</option>);
    for (var i = 1; i <= 31; i++) {
      days.push(<option key={i.toString() + "day"} value={i} >{i}</option>);
    }
                  
    let monthsStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let months = []
    months.push(<option value="0">Month</option>);
    for (var i = 0; i < monthsStrings.length; i++) {
      months.push(<option key={monthsStrings[i]} value={i+1}>{monthsStrings[i]}</option>);
    }
    let years = []
    years.push(<option value="0">Year</option>);
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
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li key="firstname1">
              <label>
                <input
                  placeholder="First Name"
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </label>
            </li>
            <li key="lastname2">
              <label>
                <input
                  placeholder="Last Name"
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
            <li key="date5">
              <select
                id="dayDropdown"
                value={this.state.day}
                onChange={this.update("day")}
              >
                {days}
              </select>
              <select
                id="monthDropdown"
                value={this.state.month}
                onChange={this.update("month")}
              >
                {months}
              </select>
              <select
                id="yearDropdown"
                value={this.state.year}
                onChange={this.update("year")}
              >
                {years}
              </select>
            </li>
            <li key="gender6">
              <div className="genderRadio">
                <label>
                  <input
                    type="radio"
                    value="M"
                    checked={this.state.gender === "M"}
                    onChange={this.update("gender")}
                  />
                  Male
                </label>
              </div>

              <div className="genderRadio">
                <label>
                  <input
                    type="radio"
                    value="F"
                    checked={this.state.gender === "F"}
                    onChange={this.update("gender")}
                  />
                  Female
                </label>
              </div>

              <div className="genderRadio">
                <label>
                  <input
                    type="radio"
                    value="O"
                    checked={this.state.gender === "O"}
                    onChange={this.update("gender")}
                  />
                  Other
                </label>
              </div>
            </li>
            <li key="country7">
              <select
                id="countryDropdown"
                value={this.state.country}
                onChange={this.update("country")}
              >{countries}
              </select>
            </li>
            <input type="submit" value="SIGN UP" />
          </ul>
        </form>
      </div>
    );
  }
}

export default SignupForm;
