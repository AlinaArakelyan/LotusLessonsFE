import React from 'react';


class QuizForm extends React.Component {
    
    render() {
        return (
            <form id="quiz-form" onSubmit={(evt) => this.props.handleSubmit(evt, this.state)}>
                <label htmlFor="question">{this.props.question.question}</label>
                <input onChange={this.props.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value={0}
                />
                <input onChange={this.props.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value={25}
                />
                <input onChange={this.props.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value={50}
                />
                <input onChange={this.props.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value={75}
                />
                <input onChange={this.props.handleChange}
                    type="radio"
                    name={this.props.question.id}
                    value={100}
                />
                </form>
        )
    }

}


export default QuizForm

        // let copyQuestions = []
        // let newCopy = copyQuestions.push(name)
        // let copyAnswers = []
        // copyAnswers.push(value)

        // if (copyQuestions.length === 21) {
        //     this.setState({
        //         questions: [...this.state, newCopy],
        //         answers: [...this.state, copyAnswers]
        //     })
        // }
        // console.log(newCopy)
        
        // this.setState({
        //     name: [...this.state.name, name]    
        // })