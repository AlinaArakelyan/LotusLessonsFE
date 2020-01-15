import React from 'react';


class QuizForm extends React.Component{


    state = {
        question: " ",
        answer: 0
    }

    // componentDidUpdate = () => {
      
    //         this.handleChange = (evt) => {
    //             console.log(this.state)
    //             this.setState({
    //                 question: evt.target.name,
    //                 answer: evt.target.value
    //             })
    //         }
    //     }
    

    handleChange = (evt) => {
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
        console.log(this.state)
        return (
            <div >
                <label htmlFor="question">{this.props.question.question}</label>
                <input onClick={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="0"
                    // checked={this.state.answer === 0 ? true : false}
                />
                    <input onChange={this.handleChange}
                        type="radio"
                        name={this.props.question.id}
                        value="25"
                        // checked={this.state.answer === 25}
                         />
                <input onChange={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="50"
                    // checked={this.state.answer === 50}
                         />
                    <input onChange={this.handleChange}
                        type="radio"
                        name={this.props.question.id}
                        value="75"
                        // checked={this.state.answer === 75}
                         />
                <input onChange={this.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value="100"
                    // checked={this.state.answer === 100}
                     />
                </div>
        )
    }
}


export default QuizForm