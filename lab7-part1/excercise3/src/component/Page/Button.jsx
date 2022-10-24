import React, { Component } from "react";
import { connect } from "react-redux";
import {clearDisplay,subtraction,updateDisplay,multiplication,division,equal,addition} from './action';

 class Button extends Component{
    constructor(props) {
        super(props);
        this.handleClicks = this.handleClicks.bind(this);
      }
      handleClicks(e) {
        if (this.props.id === "clear") {
          this.props.clear();
        } else if (this.props.id === "subtract") {
          this.props.subtract(this.props.display);
        } else if (this.props.id === "multiply") {
          this.props.multiply(this.props.display);
        } else if (this.props.id === "divide") {
          this.props.divide(this.props.display);
        }else if (this.props.id === "add") {
            this.props.add(this.props.button)
        } else if (this.props.id === "equals") {
            this.props.equal(this.props.display);
        }
         else {
          this.props.updateDisplay(this.props.button);
        }
      }
      render(){
        return(
            <span id={this.props.id} value={this.props.value} onClick={this.handleClicks} className='btn'><i>{this.props.button}</i></span>
        )
      }
}

const mapDispatchToProps = dispatch => ({
    updateDisplay: display => dispatch(updateDisplay(display)),
    subtract: display => dispatch(subtraction(display)),
    multiply: display => dispatch(multiplication(display)),
    divide: display => dispatch(division(display)),
    clear: display => dispatch(clearDisplay(display)),
    add: display => dispatch(addition(display)),
  equal: display => dispatch(equal(display)),
  });

 export default connect(
    null,
    mapDispatchToProps
  )(Button);