import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChakraContainer from './components/ChakraContainer.js';
import Welcome from './components/Welcome.js';
import { Route, Switch } from 'react-router'
import NavBar from './components/Nav.js'
import { removeUser } from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
        <ChakraContainer />
        {/* <Switch>
          <Route path="/" render={() => <Welcome onClick={this.props.removeUser} />} />
          <Route path="/Chakras" render={() => <ChakraContainer />} />
        </Switch> */}
      </div>
    )
  }; 
}


const getInfo = (state) => {
  return {
    state
  }
}

export default connect(getInfo, {removeUser})(App)
