import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Login from './auth/Login';
import { logoutUser } from '../actions/auth';

const Home = (props) => {

  const handleLogout = (event) => {
    event.preventDefault();
    props.logoutUser()
  }

  if (props.currentUser.isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, {props.currentUser.user.email}!</h1>
        <Dashboard />
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(Home);