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
      country: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
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
      days.push(<option value={this.state.day} >{i}</option>);
    }
                  
    let monthsStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let months = []
    months.push(<option value="0">Month</option>);
    for (var i = 0; i < monthsStrings.length; i++) {
      months.push(<option value={this.state.day} onChange={this.update('month')}>{monthsStrings[i]}</option>);
    }
    let years = []
    for (var i = 2008; i >= 1900; i--) {
      years.push(
        <option  value={this.state.year} onChange={this.update('year')}>{i}</option>
      );
    }
    let countries = [
      <option  value={this.state.country} onChange={this.update('country')}>United States</option>,
      <option  value={this.state.country} onChange={this.update('country')}>Sweden</option>,
      <option  value={this.state.country} onChange={this.update('country')}>Ethiopia</option>
    ];

    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                <input
                  placeholder="First Name"
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="Last Name"
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  placeholder="Password"
                  type="text"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
            </li>
            <li>
              <select id="dayDropdown" onChange={this.update('day')}>{days}</select>
              <select id="monthDropdown">{months}</select>
              <select id="yearDropdown">{years}</select>
            </li>
            <li>
              <input type="radio" id="male" name="gender" value={this.state.gender} onChange={this.update("gender")} />
               <span>Male</span>
              <input type="radio" id="female" name="gender" value={this.state.gender} onChange={this.update("gender")}/>
                <span>Female</span>
              <input type="radio" id="other" name="gender" value={this.state.gender} onChange={this.update("gender")}/>
                <span>Other</span>
            </li>
            <li>
              <select id="countryDropdown">{countries}</select>
            </li>
            <li>
              

            </li>
            <input type="submit" value="SIGN UP" />

          </ul>
        </form>
      </div>
    );
  }
}

export default SignupForm;
