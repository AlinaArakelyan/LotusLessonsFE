import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class QuizResults extends React.Component{

    state = {
        selected: ''
    }

    handleClick = () => {
        console.log("hi")
        // const activeChakra = Bar.getElementAtEvent()
        //instead of set state redirect to the URL of the chakra, by passing dynamically index plus one to get chakra ID 
        //look up props.history.push(**pass the path)
        // step 1. import withrouter from react router
        // step 2. console log props make sure you have access to correct props
        // step 3. then see how to structure the stuff 
    }

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
                            onClick: this.handleClick,
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
                    fontSize:20
                    },
                    onClick: this.handleClick,
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