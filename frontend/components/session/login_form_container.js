import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    passItThrough: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
