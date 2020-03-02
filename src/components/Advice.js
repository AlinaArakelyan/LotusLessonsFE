import React from 'react';

class Advice extends React.Component {

    state = {
        checked: false
    }

    handleClick = (e) => {

        console.log(e.target.name)
    }


    render() {
        return (
            <ol>
                <div> <img alt="chakras" className="resize" src={this.props.advice.chakra.symbol}></img>  {this.props.advice.advice}
                    <input type="checkbox" name={this.props.advice.id} value={this.props.advice.done} onClick={(e) => this.handleClick(e)}></input>
                <br></br>
                </div>
            </ol>

        )
    }
}
export default Advice