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
        chartData: {
            labels: [],
            datasets: [],
            backgroundColor: []
         }
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
                // let chakras = response.map(question => question.chakra.name)
                let ans = response.map(question => question.answer)
                let root = ans.slice(0, 3)
                let rootAvg = root.reduce((prev, curr) => prev + curr, 0) / root.length
                let sacral = ans.slice(3, 6)
                let sacralAvg = sacral.reduce((p, c) => p + c, 0) / sacral.length
                let solarP = ans.slice(6, 9)
                let solarAvg = solarP.reduce((p, c) => p + c, 0) / solarP.length
                let heart = ans.slice(9, 12)
                let heartAvg = heart.reduce((p, c) => p + c, 0) / heart.length
                let throat = ans.slice(12, 15)
                let throatAvg = throat.reduce((p, c) => p + c, 0) / throat.length
                let thirdEye = ans.slice(15, 18)
                let thirdEyeAvg = thirdEye.reduce((p, c) => p + c, 0) / thirdEye.length
                let crown = ans.slice(18, 21)
                let crownAvg = crown.reduce((p, c) => p + c, 0) / crown.length
                let allAns = [rootAvg, sacralAvg, solarAvg, heartAvg, throatAvg, thirdEyeAvg, crownAvg]

                // debugger
                this.setState({
                    done: true,     
                    chartData: {
                        // label: chakras,
                        labels: ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"],
                        datasets: [{
                            data: allAns,
                            barPercentage: 100,
                            barThickness: 60,
                            maxBarThickness: 100,
                            minBarLength: 2,
                            backgroundColor: [
                                'rgba(207, 0, 15, 0.6)',
                                'rgba(255, 165, 0, 0.6)',
                                'rgba(249, 105, 14, 0.6)',
                                'rgba(46, 204, 113, 0.6)',
                                'rgba(25, 181, 254, 0.6)',
                                'rgba(140, 20, 252, 0.6)',
                                'rgba(102, 51, 153, 0.6)'
                            ]
                        }]

                    }
                })
            });
        
        // const createChart = () => {
        //     this.setState({
        //         chartData: {
        //             chakras: [this.state.question.chakra.name],
        //                 dataset: [this.state.answer],
        //                     backgroundColor: [
        //                         'rgba(255, 99, 132, 0.6)',
        //                         'rgba(54, 162, 235, 0.6)',
        //                         'rgba(255, 206, 86, 0.6)',
        //                         'rgba(75, 192, 192, 0.6)',
        //                         'rgba(153, 102, 255, 0.6)',
        //                         'rgba(255, 159, 64, 0.6)',
        //                         'rgba(255, 99, 132, 0.6)'
        //                     ]
        //         }
        //     })
        // }

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
                        <div className="quiz">
                            {/* <div> {this.props.questions.questions.map(question => < QuizResults question={question.chakra} key={question.id} />)}
                            </div> */}
                            <div style={{ backgroundColor: "#ffffff" }} ><QuizResults data={this.state.chartData}/></div>
            
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
