import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import React from "react";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    passItThrough: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
