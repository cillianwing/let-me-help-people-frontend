import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import { checkLoginStatus } from './actions/auth';
import MedSchoolPlanner from './components/medSchool/MedSchoolPlanner';

function App(props) {

  useEffect(() => {
    if (!props.currentUser.isLoggedIn) {
      props.checkLoginStatus()
    }
  })

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/medical-school-planner' component={MedSchoolPlanner} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, { checkLoginStatus })(App);
