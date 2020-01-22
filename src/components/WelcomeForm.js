import React from 'react';
import { connect } from 'react-redux';
import { addUser, addUserBE } from '../redux/actions'


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
        this.props.addUserBE(this.state.user)
      }
    
    
    render() {
        return (
            <div>
                <h1>Enter Your Name Below to Begin</h1>
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

const mapDispatchToProps = (dispatch) => {
    return {
        users: () => { dispatch(addUserBE) }
    }
}



export default connect(null, { addUserBE, addUser, mapDispatchToProps })(WelcomeForm)