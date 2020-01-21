import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

class QuizResults extends React.Component{


    render() {
        console.log(this.props.data)
        return (
            <div class="chart-container">
                <Bar
                    data={this.props.data}
                    options={{
                        title:{
                          display:true,
                          text:'Average Chakra Openess',
                          fontSize:20
                        },
                        legend:{
                          display:false,
                          position:'right'
                        }
                      }}
                />
                {/* <Line data={this.props.data} /> */}
                {/* <Doughnut data={this.props.data} /> */}

                {/* <div>{this.props.question.chakra.name} : {this.props.question.answer}</div> */}
            </div>
            )
        }
}

export default QuizResults