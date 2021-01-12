import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions/auth';

const Home = (props) => {

  return (
    <div></div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, {logoutUser} )(Home);