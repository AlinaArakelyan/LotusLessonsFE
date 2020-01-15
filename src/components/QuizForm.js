import React from 'react';


class QuizForm extends React.Component{


    state = {
        question: " ",
        answer: 0
    }

    handleChange = (evt) => {
        console.log(this.state)
        this.setState({
            question: evt.target.name,
            answer: evt.target.value
        })
      }
    
    handleSubmit = (evt) => {
        // evt.preventDefault()
        this.props.updateQuestions(this.state)
        evt.reset()
    }
    
    render() {
        return (
            <div >
                <label htmlFor="question">{this.props.question.question}</label>
                <input onChange={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="0"
                    // checked={0}
                />
                    <input onChange={this.handleChange}
                        type="radio"
                        name={this.props.question.id}
                        value="25"
                        // checked={25}
                         />
                <input onChange={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="50"
                    // checked={50}
                         />
                    <input onChange={this.handleChange}
                        type="radio"
                        name={this.props.question.id}
                        value="75"
                        // checked={75}
                         />
                <input onChange={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="100"
                    // checked={100}
                     />
                </div>
        )
    }
}


export default QuizForm