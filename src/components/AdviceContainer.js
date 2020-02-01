import React from 'react';
import Advice from "./Advice";
import { connect } from 'react-redux';
import { getAllAdvice } from "../redux/actions";

class AdviceContainer extends React.Component{

    componentDidMount() {
        this.props.getAllAdvice()
    }

    //create a function to filter by chakra name and then pass that down as props to advice and call it in advice

    render() {
        console.log(this.props)
            return (
                <div>
                    <div className="advice">
                        {this.props.advice.map(advice => <Advice advice={advice} key={advice.id} />)}
                    </div>
                </div>
            )
        }
    
}

const getInfo = (state) => {
    return {
        advice: state.allAdvice.advice
    }
}

export default connect(getInfo, { getAllAdvice})(AdviceContainer)