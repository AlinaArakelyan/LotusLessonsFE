import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { withRouter } from "react-router";

class QuizResults extends React.Component{


  handleClick = (e, chart) => {
      let selected = chart["0"]._index
      let id = parseInt(selected + 1)
      this.props.history.push(`/chakras/${id}`)
    }

    render() {
        return (
            <div style={{height: 400, width: 500}} >
            <Bar
              data={this.props.data}
              options={{
                title: {
                  display: true,
                  text: 'Average Chakra Openness',
                  fontSize: 20,
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
                </div>
            )
        }
}

export default withRouter(QuizResults)