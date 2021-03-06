import React from 'react';
import './App.css';
import ChakraContainer from './components/ChakraContainer.js';
import Welcome from './components/Welcome.js';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Nav.js'
import { removeUser } from './redux/actions'
import { connect } from 'react-redux'
import QuizContainer from './components/QuizContainer';
import YogaContainer from './components/YogaContainer'
import AdviceContainer from './components/AdviceContainer'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        {/* <Router> */}
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Welcome onClick={this.props.removeUser} />} />
          <Route exact path="/chakras" component={ChakraContainer} />
          <Route exact path="/quiz" component={QuizContainer} />
          <Route exact path='/chakras/:id' component={ChakraContainer} />
          <Route exact path='/yoga' component={YogaContainer} />
          <Route exact path='/advice' component={AdviceContainer} />
        </Switch>
        {/* </Router> */}

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
