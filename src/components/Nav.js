import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
          <div className="">
            <Link to="/">Home</Link>
              |
            <Link to="/chakras">Chakra Info</Link>
              |
            <Link to="/Quiz">Quiz</Link>
          </div>
        );
      }
}

export default Nav