import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

class QuizResults extends React.Component{


    render() {
        console.log(this.props.data)
        return (
            <div style={{height: 300, width: 500}} >
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
                </div>
            )
        }
}

export default QuizResults