import React from 'react';
import { connect } from 'react-redux';
import { getAllQuestions } from '../redux/actions';
import QuizResults from "./QuizResults";
import QuizForm from "./QuizForm";


class QuizContainer extends React.Component{

    componentDidMount() {
        this.props.getAllQuestions()
    }

    state = {
        question: [],
        answer: []
    }

    handleChange = (evt) => {
        let name = evt.target.name
        let value = evt.target.value

        if (!this.state.question.some(question => question === name)) {
            this.setState({
                question: [...this.state.question, name],
                answer: [...this.state.answer, value]
            })
        }
            
    }
    

    handleSubmit = (evt, state) => {
        evt.preventDefault()
        const questions = this.state.question
        const answers = this.state.answer
        debugger
        fetch(`http://localhost:3000/questions/answers`, {
            method: "PATCH",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answers: answers,
                questions: questions
            })
          })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            });

    }





    render() {
        return (
            <container className="quiz">
            <h5>For each of the following statements choose on a scale of 1 - 5, one strongly disagree and 5 being strongly agree, and 3 being neutral. </h5>
                <div> {this.props.questions.questions.map(question => <QuizForm question={question} key={question.id} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>)}
                    <input form="quiz-form" type="submit" value="Submit" />
                </div> 
            </container>
        )
    }
}

const getInfo = (state) => {
    return {
        user: state.currentUser.user,
        questions: state.allQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        questions: () => { dispatch(getAllQuestions) }
    }
}

export default connect(getInfo, {getAllQuestions, mapDispatchToProps})(QuizContainer)
