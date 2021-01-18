import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard/Dashboard';
import ShowColleges from './containers/ShowColleges/ShowColleges';
import ShowStudents from './containers/ShowStudents/ShowStudents';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/colleges" exact component={ShowColleges} />
          <Route path="/students" exact component={ShowStudents} />
          <Route path="/" exact component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default withRouter(connect(mapStateToProps)(App));
