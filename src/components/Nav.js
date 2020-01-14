import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
          <div className="">
            <Link to="/">Start Quiz</Link>
              |
            <Link to="/Chakras">Chakra Info</Link>
          </div>
        );
      }
}

export default Nav