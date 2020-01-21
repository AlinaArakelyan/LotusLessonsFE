import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

class QuizResults extends React.Component{

    // averageAnswer = () => {
    //     // const filteredQuestions = this.props.map(question => question.chakra.id)
    //     // console.log(filteredQuestions)
    //     // const answersByChakra = filteredQuestions.forEach(question => question.answer)
    //     // console.log(answersByChakra)
    //     // let sum = answersByChakra.reduce((previous, current) => current += previous)
    //     // console.log(sum)
    //     // let average = sum / answersByChakra.length
    //     // console.log(average)
    //     // return average 

    //     //lodash
    // }


    render() {
        console.log(this.props.data)
        return (
            <div className="Chart">
                <Bar
                    data={{
                        label: this.props.data.label,
                    dataset: this.props.data.dataset}}
                />
                <Line data={this.props.data} />
                <Doughnut data={this.props.data} />

                {/* <div>{this.props.question.chakra.name} : {this.props.question.answer}</div> */}
            </div>
            )
        }
}

export default QuizResults