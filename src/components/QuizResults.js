import React from 'react'
import { Bar } from 'react-chartjs-2'

class QuizResults extends React.Component{

    averageAnswer = () => {
        // const filteredQuestions = this.props.map(question => question.chakra.id)
        // console.log(filteredQuestions)
        // const answersByChakra = filteredQuestions.forEach(question => question.answer)
        // console.log(answersByChakra)
        // let sum = answersByChakra.reduce((previous, current) => current += previous)
        // console.log(sum)
        // let average = sum / answersByChakra.length
        // console.log(average)
        // return average 

        //lodash
    }


    render() {
        // debugger 
        return (
            <div className="Chart">
                <Bar
                    data={this.props.data}
                />

                {/* <div>{this.props.question.chakra.name} : {this.props.question.answer}</div> */}
            </div>
            )
        }
}

export default QuizResults