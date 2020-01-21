import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class QuizResults extends React.Component{


    render() {
        console.log(this.props.data)
        return (
            <div style={{height: 400, width: 500}} >
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

                <Pie
                                        data={this.props.data}
                                        options={{
                                        title:{
                                          display:true,
                                          text:'Average Chakra Openess',
                                          fontSize:20
                                        },
                                        legend:{
                                          display:true,
                                          position:'right'
                                        }
                    }} />
                {/* <Doughnut                         data={this.props.data}
                        options={{
                        title:{
                          display:true,
                          text:'Average Chakra Openess',
                          fontSize:20
                        },
                        legend:{
                          display:true,
                          position:'right'
                        }
                      }}/> */}
                </div>
            )
        }
}

export default QuizResults