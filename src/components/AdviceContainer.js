import React from 'react';
import Advice from "./Advice";
import { connect } from 'react-redux';
import { getAllAdvice } from "../redux/actions";

class AdviceContainer extends React.Component{

    componentDidMount() {
        this.props.getAllAdvice()
    }

    render() {
        console.log(this.props.advice)
            return (
                <div>
                    <div>
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