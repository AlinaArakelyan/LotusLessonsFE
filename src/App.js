import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChakraContainer from './components/ChakraContainer.js';
import Welcome from './components/Welcome.js';
import { Route, Switch } from 'react-router'
import NavBar from './components/Nav.js'
import { removeUser } from './redux/actions'
import { connect } from 'react-redux'
import QuizContainer from './components/QuizContainer';
import Chakra from './components/Chakra'
import YogaContainer from './components/YogaContainer'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Welcome onClick={this.props.removeUser} />} />
          <Route exact path="/chakras" component={ChakraContainer} />
          <Route exact path="/quiz" component={QuizContainer} />
          <Route exact path='/chakras/:id' component={ChakraContainer} />
          <Route exact path='/yoga' component={YogaContainer} />
        </Switch>

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
