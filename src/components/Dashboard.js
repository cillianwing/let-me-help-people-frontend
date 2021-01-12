import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Home from './Home';

const Dashboard = (props) => {

  return (
    <div></div>
  )

}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, null)(Dashboard);