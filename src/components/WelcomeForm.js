import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions'


class WelcomeForm extends React.Component{

    state = {
        user: ""
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }
    
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addUser(this.state)
      }
    
    
    render() {
        return (
            <div>
                <h1>Enter Name here to begin</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">Your Name</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="user"
                        value={this.state.user}
                        autoComplete="off"
                        id="user"
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}


// const addUser = (dispatch) => {
//     return {
//         addUser: (newUser) => {dispatch({type: "ADD_USER", payload: newUser})}
//     }
// }

export default connect(null, { addUser })(WelcomeForm)