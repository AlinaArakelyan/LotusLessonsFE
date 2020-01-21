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
        done: false,
        question: [],
        answer: [],
        chartData: {}
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
                this.setState({
                    done: true,
                    chartData: {
                        chakras: [this.state.question.chakra.name],
                        dataset: [this.state.answer],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
            })
            });

    }


    render() {
        return (
            <div style={{position: "relative"}}>
                <div>
                    <h5>For each of the following statements choose on a scale of 1 - 5, one strongly disagree and 5 being strongly agree, and 3 being neutral. </h5>
                    {!this.state.done? 
                     <div className="quiz">
                        <div > {this.props.questions.questions.map(question => <QuizForm question={question} key={question.id} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />)}
                        <input form="quiz-form" type="submit" value="Submit" />
                         </div>
                     </div> 
                : 
                <div className="chart">
                            {/* <div> {this.props.questions.questions.map(question => < QuizResults question={question.chakra} key={question.id} />)}
                            </div> */}
                            <div> <QuizResults data={this.state.chartData}/></div>
                            {/* < */}
                        </div>}
                    
                </div>
            </div>
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
