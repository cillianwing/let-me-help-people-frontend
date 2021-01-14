import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Topnav from '../components/nav/Topnav';

const Dashboard = (props) => {

  return (
    <Topnav />
  )

}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, null)(Dashboard);