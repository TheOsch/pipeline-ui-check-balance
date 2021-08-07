import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Title from './components/Title';
import Login from './components/Login';
import Home from './pages/Home';
import Restricted from './pages/Restricted';
import Failure from './pages/Failure';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // The application's state will contain the user's
    // Algorand address if the user has successfully 
    // logged in.
    // It's stored in the session storage to preserve it
    // in the case the page is reloaded.
    // Initially it's null
    this.state = {
      userAddress: sessionStorage.getItem('userAddress'),
      success: sessionStorage.getItem('success')
    };
  }

  /**
   * This funcyion is used to render restricted pages.
   * 
   * It makes no sence in this example because there
   * is only one restricted page but it would be convenient
   * when there are many of them.
   * 
   * @return A page if the user logged in; otherwise a redirection to home
   */
  _r(page) {
    return this.state.success ? page: <Redirect to={'/'} />;
  }

  /**
   * Login event handler
   * 
   * @param {string|null} address Algorand address on success; null if not enough balance
   */
  _onLogin(address, success) {
    // Store the results
    sessionStorage.setItem('userAddress', address);
    sessionStorage.setItem('success', success);
    // Update the state
    this.setState({userAddress: address, success});
    // Redirect
    this.props.history.push(success ? '/restricted' : '/failure');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Login onLogin={this._onLogin.bind(this)} />
        </header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/restricted'>
            {this._r(<Restricted userAddress={this.state.userAddress} />)}
          </Route>
          <Route path='/failure'>
            <Failure userAddress={this.state.userAddress} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default () => <BrowserRouter>
  <AppWithRouter />
</BrowserRouter>;
